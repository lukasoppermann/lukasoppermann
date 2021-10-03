import { css } from '@emotion/css'
import { PostPreviewType } from 'types/PostPreviewType'
import { PostPreview } from './PostPreview'

type PostListProps = {
  posts: PostPreviewType[]
}

const style = css`
  list-style: none;
  & li {
    margin-bottom: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid var(--ui--fair-contrast);
  }
`

const PostList = ({ posts }: PostListProps) => {
  return (
    <ol className={`${style} PostList`}>
      {posts.map((post: PostPreviewType) => <li key={post.url}><PostPreview post={post} /></li>)}
    </ol>
  )
}

export { PostList }