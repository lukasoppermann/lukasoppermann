import { GetStaticProps } from 'next'
import SVGThoughtsAndIdeas from '@svgs/thoughts-&-opinions.svg'
import SVGThoughtsAndIdeasStacked from '@svgs/thoughts-&-opinions-stacked.svg'
import { css } from '@emotion/css'
import { DIR_BLOG } from 'config/directories'
import { getAllMarkdown } from '@lib/getMarkdown'
import { PostList } from '@components/Blog/PostList'
import { mq } from 'config/mediaQueries'

const style = css`
  padding-top: 120px;
  .PostList {
    grid-column: columns;
  }
  .svg-title {
    max-width: 100%;
    path {
      fill: var(--on-background__high-emphasis);
    }
    &.svg-title--default {
      grid-column: columns / span 12;
      padding-bottom: 96px;
    }
    &.svg-title--stacked {
      display: none;
      grid-column: columns;
      padding-bottom: 56px;
    }
  }
  ${mq.is.mobile} {
    padding-top: 80px;
    .svg-title {
      &.svg-title--default {
        display: none;
      }
      &.svg-title--stacked {
        display: block;
      }
    }
  }
  ${mq.atLeast.desktop} {
    .PostList {
      grid-column: columns / span 6;
    }
  }
`

export default function Blog ({ posts }) {
  return (
    <main className={`${style} Grid`}>
      <SVGThoughtsAndIdeas className="svg-title svg-title--default" />
      <SVGThoughtsAndIdeasStacked className="svg-title svg-title--stacked" />
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
