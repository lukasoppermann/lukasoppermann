
import { unified } from 'unified'
import remarkParse from 'remark-parse'
// import gfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import remarkRehype from 'remark-rehype'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import rehype2react from 'rehype-react'
import React from 'react'
import { Paragraph } from '@components/Paragraph'
import { Headline } from '@components/Headline'
import { Link } from '@components/Link'

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

export function markdownToReact(markdown, options?) {
  return unified()
    .use(remarkParse)
    // .use(gfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeFormat)
    // @ts-ignore
    .use(rehype2react, {
      createElement: React.createElement,
      Fragment: React.Fragment,
      components: {
        ...{
          p: Paragraph,
          'h5': ({children}) => <Headline level="5">{ children }</Headline>,
          'h6': ({ children }) => <Headline level="6">{children}</Headline>,
          'a': ({ href, children }) => <Link href={href} type="inline" target="_blank">{children[0]}</Link>,
        },
        ...options.components
      }
    })
    .processSync(markdown)
    .result
}
