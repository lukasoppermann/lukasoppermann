import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { parseMarkdown } from '@lib/parseMarkdown'

export const getMarkdownBySlug = (slug, directory) => {
  const realSlug = slug.replace('.mdx', '')
  // get full path to file
  const fullPath = join(process.cwd(), directory, `${realSlug}.mdx`)
  // read file content
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // parse with gray matter to get meta data
  const { data, content } = matter(fileContents)
  // parse markdown
  // const parsedFile = parseMarkdown(content)
  // return
  return { slug: realSlug, meta: data, content: content }
}

export const getAllMarkdown = (directory) => {
  // get oath to directory
  const itemDirectory = join(process.cwd(), directory)
  // get slugs & metadata for all files
  const items = fs.readdirSync(itemDirectory).map(itemSlug => {
    const { slug, meta } = getMarkdownBySlug(itemSlug, directory)
    return {
      slug: slug,
      meta: meta
    }
  })
  // return items
  return items
}
