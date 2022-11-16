export const throttle = (func: Function, wait: number) => {
  let waiting = false;
  return () => {
    if (waiting) {
      return;
    }

    waiting = true;
    setTimeout(() => {
      func.apply(this);
      waiting = false;
    }, wait);
  };
}
