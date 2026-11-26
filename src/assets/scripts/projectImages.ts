export function initProjectImages() {
  const images = [...document.querySelectorAll<HTMLImageElement>("img[data-project-image]")];
  if (!images.length) return;

  const visible = new Set<HTMLImageElement>();
  const loaded = new Set<HTMLImageElement>();
  const requests = new Map<HTMLImageElement, Promise<void>>();
  const revealThreshold = 0.35;
  for (const artwork of document.querySelectorAll<HTMLElement>("[data-project-artwork]")) {
    artwork.dataset.state = "pending";
  }

  const reveal = (image: HTMLImageElement) => {
    const layers = images.filter(layer => layer.parentElement === image.parentElement);
    if (layers.every(layer => visible.has(layer) && (loaded.has(layer) || layer.dataset.state === "error"))) {
      for (const layer of layers) {
        if (loaded.has(layer)) layer.dataset.state = "ready";
      }
      for (const artwork of image.parentElement!.querySelectorAll<HTMLElement>("[data-project-artwork]")) {
        artwork.dataset.state = "ready";
      }
      observer?.unobserve(image.parentElement!);
    }
  };

  const load = (image: HTMLImageElement, priority: "high" | "low") => {
    const existing = requests.get(image);
    if (existing) {
      if (priority === "high") image.fetchPriority = "high";
      return existing;
    }

    const request = new Promise<void>(resolve => {
      const finish = () => {
        image.removeEventListener("load", finish);
        image.removeEventListener("error", finish);
        if (image.naturalWidth > 0) {
          loaded.add(image);
          reveal(image);
        } else {
          image.dataset.state = "error";
          console.warn("Could not load project image:", image.dataset.src);
          reveal(image);
        }
        resolve();
      };
      image.addEventListener("load", finish);
      image.addEventListener("error", finish);
      image.fetchPriority = priority;
      image.loading = "eager";
      if (image.dataset.srcset) image.srcset = image.dataset.srcset;
      image.src = image.dataset.src!;
    });
    requests.set(image, request);
    return request;
  };

  const observer = "IntersectionObserver" in window
    ? new IntersectionObserver(entries => {
      for (const entry of entries) {
        const layers = images.filter(image => image.parentElement === entry.target);
        for (const image of layers) {
          if (entry.isIntersecting) {
            void load(image, "high");
            if (entry.intersectionRatio >= revealThreshold) {
              visible.add(image);
            } else {
              visible.delete(image);
            }
          } else {
            visible.delete(image);
          }
        }
        for (const image of layers) reveal(image);
      }
    }, { threshold: revealThreshold })
    : undefined;

  for (const image of images) {
    image.dataset.state = "pending";
    image.hidden = false;
    const bounds = image.parentElement!.getBoundingClientRect();
    if (bounds.bottom > 0 && bounds.top < window.innerHeight) {
      const visibleHeight = Math.min(bounds.bottom, window.innerHeight) - Math.max(bounds.top, 0);
      if (visibleHeight >= bounds.height * revealThreshold) visible.add(image);
      void load(image, "high");
    }
    if (observer) observer.observe(image.parentElement!);
    else {
      visible.add(image);
      void load(image, "high");
    }
  }

  const idle = () => new Promise<void>(resolve => {
    if ("requestIdleCallback" in window) window.requestIdleCallback(() => resolve());
    else setTimeout(resolve, 200);
  });

  const preload = async () => {
    for (const image of images) {
      await idle();
      await load(image, "low");
    }
  };

  if (document.readyState === "complete") void preload();
  else window.addEventListener("load", () => void preload(), { once: true });
}
