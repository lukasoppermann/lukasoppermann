export type ProjectFrontmatter = {
  client: string,
  title: string,
  class?: string,
  buttonLabel?: string
  buttonTarget?: string
  url?: string,
  responsibilities?: string[],
  approach?: { [key: string]: string }[],
  startDate: string,
  endDate: string,
  image: ImageMetadata,
  imageAlt: string,
}