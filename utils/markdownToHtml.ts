
import { unified } from 'unified'
import remarkParse from 'remark-parse'
// import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'

export default function markdownToHtml (markdown) {
  return unified()
    .use(remarkParse)
    // .use(gfm)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString()
}