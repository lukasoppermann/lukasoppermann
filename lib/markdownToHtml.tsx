
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehype2react from 'rehype-react'
import React from 'react'
import { Paragraph } from '@components/Paragraph'
import { Headline } from '@components/Headline'

export default function markdownToHtml (markdown) {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(rehypeRaw)
    .use(rehypeFormat)
    .use(rehypeStringify)
    .processSync(markdown)
    .toString()
}

export function markdownToReact(markdown) {
  return unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    // @ts-ignore
    .use(rehype2react, {
      createElement: React.createElement,
      components: {
        p: Paragraph,
        'h5': ({children}) => <Headline level="5"> { children } </Headline>,
        'h6': ({ children }) => <Headline level="6"> {children} </Headline>,
      }
    })
    .processSync(markdown)
    .result
}
