import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { PostPreviewType } from 'types/PostPreviewType'

export const getMarkdownBySlug = (slug, directory) => {
  const filename = slug.replace('.mdx', '')
  // get full path to file
  const fullPath = join(process.cwd(), directory, `${filename}.mdx`)
  // read file content
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // parse with gray matter to get meta data
  const { data, content } = matter(fileContents)

  return { filename: filename, meta: data, content: content }
}

export const getAllMarkdown = (directory): PostPreviewType[] => {
  // get oath to directory
  const itemDirectory = join(process.cwd(), directory)
  // get slugs & metadata for all files
  return fs.readdirSync(itemDirectory).map((itemSlug): PostPreviewType => {
    const { filename, meta } = getMarkdownBySlug(itemSlug, directory)
    return {
      filename: filename,
      url: meta.url,
      title: meta.title,
      published: meta.published,
      excerpt: meta.excerpt,
      category: meta.category
    }
  })
}
