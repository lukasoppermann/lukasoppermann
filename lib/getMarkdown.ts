import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import unified from 'unified'
import remark from 'remark-parse'
import html from 'remark-html'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import a11yEmoji from '@fec/remark-a11y-emoji'
import highlight from 'remark-highlight.js'
import gfm from 'remark-gfm'
import behead from 'remark-behead'
import externalLinks from 'remark-external-links'
import footnotes from 'remark-footnotes'
import smartypants from '@silvenon/remark-smartypants'
import toc from 'remark-toc'
import unwrapImages from 'remark-unwrap-images'
// import remark2react from 'remark-react'
// import remark2rehype from 'remark-rehype'
// import remarkAbbr from 'remark-abbr'

const parseMarkdown = async (markdown: string) => {
  const result = unified()
    .use(remark)
    .use(gfm)
    .use(externalLinks, { target: '_blank', rel: ['noreferrer', 'noopener'] })
    .use(behead, { depth: 1 })
    .use(toc)
    .use(unwrapImages)
    // .use(remarkAbbr, { expandFirst: true })
    .use(slug)
    .use(headings)
    .use(highlight)
    .use(smartypants, { backticks: false })
    .use(a11yEmoji)
    .use(footnotes, { inlineNotes: true })
    .use(html)
    .process(markdown)
    .then(result => result.toString())
  // return results in object
  return result
}

export const getMarkdownBySlug = async (slug, directory) => {
  const realSlug = slug.replace('.mdx', '')
  // get full path to file
  const fullPath = join(process.cwd(), directory, `${realSlug}.mdx`)
  // read file content
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  // parse with gray matter to get meta data
  const { data, content } = matter(fileContents)
  // parse markdown
  const parsedFile = await parseMarkdown(content)
  // return
  return { slug: realSlug, meta: data, content: parsedFile }
}

export const getAllMarkdown = async (directory) => {
  // get oath to directory
  const itemDirectory = join(process.cwd(), directory)
  // get slugs & metadata for all files
  const items = fs.readdirSync(itemDirectory).map(async itemSlug => {
    const { slug, meta } = await getMarkdownBySlug(itemSlug, directory)
    return {
      slug,
      meta
    }
  })
  // return items
  return Promise.all(items)
}
