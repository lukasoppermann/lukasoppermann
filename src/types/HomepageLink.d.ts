export type HomepageLink = {
  url: string,
  target?: string,
  rel?: string,
  title: string,
  subtitle: string,
  picture: {
    url: string,
    alt?: string,
    width: number,
    height: number
  }
}