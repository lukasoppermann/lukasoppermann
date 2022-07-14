import { css } from '@emotion/css'
import { DateTime } from '@components/DateTime'
import { Headline } from '@components/Headline'
import { Icon } from '@components/Icon'
import { Paragraph } from '@components/Paragraph'

export type PostPreviewType = {
  url: string,
  title: string,
  published: string,
  excerpt: string
}

type PostPreviewProps = {
  post: PostPreviewType
}

const style = css`
  color: var(--on-background__high-emphasis);
  display: block;
  h3 {
    margin-bottom: 0 !important;
  }
  .svg-icon {
    position: absolute;
    margin-top: 2px;
    margin-left: 8px;
    path {
      fill: var(--on-background__high-emphasis);
    }
  }
  .dateTime {
    margin-bottom: 0;
    color: var(--on-background__low-emphasis);
    font-size: var(--font-size--caption);
    font-weight: var(--font-weight--bold);
  }
`

const PostPreview = ( {post}: PostPreviewProps ) => {
  return (
        <a target="_blank" rel="noreferrer" className={style} href={`${post.url}`} data-splitbee-event="Blog Post" data-splitbee-event-article={`${post.title}`}>
          <DateTime from={post.published} />
          <Headline level="3">{post.title}<Icon type="arrowRight" /></Headline>
          <Paragraph>{post.excerpt}</Paragraph>
        </a>
  )
}

export { PostPreview }
