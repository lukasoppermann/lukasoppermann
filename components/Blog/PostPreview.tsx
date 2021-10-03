import { css } from '@emotion/css'
import { DateTime } from '@components/DateTime'
import { Headline } from '@components/Headline'
import { Icon } from '@components/Icon'
import { Paragraph } from '@components/Paragraph'
import { Separator } from '@components/Separator'
import { Category } from '@components/Blog/Category'
import { PostPreviewType } from 'types/PostPreviewType'

type PostPreviewProps = {
  post: PostPreviewType
}

const style = css`
  color: var(--on-background__high-emphasis);
  display: block;
  h3 {
    margin-bottom: 8px;
  }
  .svg-icon {
    position: absolute;
    margin-top: 2px;
    margin-left: 8px;
    path {
      fill: var(--on-background__high-emphasis);
    }
  }
  .post-details {
    margin-bottom: 16px;
    color: var(--on-background__low-emphasis);
    font-size: var(--font-size--caption);
    font-weight: var(--font-weight--bold);
  }
`

const PostPreview = ( {post}: PostPreviewProps ) => {
  return (
        <a target="_blank" rel="noreferrer" className={style} href={`${post.slug}`}>
          <Headline level="3">{post.title}<Icon type="arrowRight" /></Headline>
          <div className="post-details">
            <DateTime from={post.published} />
            <Separator type="inline"/>
            <Category type={post.category}/>
          </div>
          <Paragraph>{post.excerpt}</Paragraph>
        </a>
  )
}

export { PostPreview }
