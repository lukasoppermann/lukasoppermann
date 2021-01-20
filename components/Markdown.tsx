import Image from 'next/image'
import { Remark } from 'react-remark'
import gfm from 'remark-gfm'
import highlight from 'remark-highlight.js'
import behead from 'remark-behead'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import unwrapImages from 'remark-unwrap-images'
import toc from 'remark-toc'
import externalLinks from 'remark-external-links'
import footnotes from 'remark-footnotes'
import smartypants from '@silvenon/remark-smartypants'
import a11yEmoji from '@fec/remark-a11y-emoji'
import raw from 'rehype-raw'
import directive from 'remark-directive'

const visit = require('unist-util-visit')
const h = require('hastscript')

const htmlDirectives = () => {
  const tags = {
    image: 'img'
  }

  return transform

  function transform (tree) {
    visit(tree, ['textDirective', 'leafDirective', 'containerDirective'], ondirective)
  }

  function ondirective (node) {
    const data = node.data || (node.data = {})
    const hast = h(node.name, node.attributes)

    console.debug(node)

    data.hName = tags[hast.tagName] || hast.tagName
    data.hProperties = hast.properties
  }
}

const Markdown = props => {
  return (
    <Remark
      remarkPlugins={[
        [gfm],
        [behead, { depth: 1 }],
        [slug],
        [headings],
        [highlight],
        [unwrapImages],
        [toc],
        [a11yEmoji],
        [directive],
        [htmlDirectives],
        [externalLinks, { target: '_blank', rel: ['noreferrer', 'noopener'] }],
        [smartypants, { backticks: false }],
        [footnotes, { inlineNotes: true }]
      ]}
      remarkToRehypeOptions={{ allowDangerousHtml: true }}
      rehypePlugins={[raw]}
      rehypeReactOptions={{
        components: {
          // img: props => <Image {...props} />,
          p: props => <p className='custom-paragraph' {...props} />
        }
      }}
    >{props.children}
    </Remark>
  )
}

export default Markdown
