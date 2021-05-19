import { GetStaticProps } from 'next'
import SVGThoughtsAndIdeas from '@svgs/thoughts-&-opinions.svg'
import { css } from '@emotion/css'
import { DIR_BLOG } from 'config/directories'
import { getAllMarkdown } from '@lib/getMarkdown'
import { PostList } from 'components/Blog/PostList'

const style = css`
  padding-top: 120px;
  & .PostList {
    grid-column: columns / span 6;
  }
  & .svg-title {
    grid-column: columns / span 12;
    padding-bottom: 96px;
    path {
      fill: var(--on-background__high-emphasis);
    }
  }
`

export default function Blog ({ posts }) {
  return (
    <main className={`${style} Grid`}>
      <SVGThoughtsAndIdeas className="svg-title" />
      <PostList posts={posts} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllMarkdown(DIR_BLOG)

  return {
    props: {
      posts: posts
    }
  }
}
