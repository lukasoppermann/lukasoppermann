export type ProjectDetails = {
  client: string,
  title: string,
  class?: string,
  url?: string,
  responsibilities?: string[],
  approach?: {[key: string]: string}[],
  startDate: string,
  endDate: string,
  picture: {
    url: string,
    alt: string,
    width: number,
    height: number
  },
  content: any
}