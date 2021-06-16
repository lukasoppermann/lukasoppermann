import { DateString } from './Date';


type PostPreviewType = {
  filename: string,
  slug: string,
  title: string,
  published: DateString,
  category: Category,
  excerpt: string
}