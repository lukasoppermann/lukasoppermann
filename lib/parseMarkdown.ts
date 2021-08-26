import {unified} from 'unified'
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
import mdx from 'remark-mdx'
// import remarkAbbr from 'remark-abbr'

export const parseMarkdown = (markdown: string) => {
  const result = unified()
    .use(remark)
    .use(gfm)
    .use(mdx)
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
    .processSync(markdown).toString()
  // return results in object
  return result
}
