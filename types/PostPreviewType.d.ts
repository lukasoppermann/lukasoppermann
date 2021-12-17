import { DateString } from './Date';


type PostPreviewType = {
  filename: string,
  url: string,
  title: string,
  published: DateString,
  category: Category,
  excerpt: string
}