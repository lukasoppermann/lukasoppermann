import fs from 'fs'
import { join } from 'path'
import markdownToHtml from '@lib/markdownToHtml'

const postsDirectory = join(process.cwd(), 'data/blog')

export function getPostSlugs () {
  return fs.readdirSync(postsDirectory)
}

// export function getPostBySlug (slug, fields = []) {
//   const realSlug = slug.replace(/\.md$/, '')
//   const fullPath = join(postsDirectory, `${realSlug}.md`)
//   const fileContents = fs.readFileSync(fullPath, 'utf8')
//   const { data, content } = matter(fileContents)

//   const items = {}

//   // Ensure only the minimal needed data is exposed
//   fields.forEach((field) => {
//     if (field === 'slug') {
//       items[field] = realSlug
//     }
//     if (field === 'content') {
//       items[field] = content
//     }

//     if (data[field]) {
//       items[field] = data[field]
//     }
//   })

//   return items
// }

// export function getAllPosts (fields = []) {
//   const slugs = getPostSlugs()
//   const posts = slugs
//     .map((slug) => getPostBySlug(slug, fields))
//     // sort posts by date in descending order
//     .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'))
//   return posts
// }
export default function getPost () {
  const fullPath = join(postsDirectory, `${getPostSlugs()[0]}`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  return markdownToHtml(fileContents)
}
