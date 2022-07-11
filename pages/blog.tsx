import { GetStaticProps } from 'next'
import SVGThoughtsAndIdeas from '@svgs/thoughts-&-opinions.svg'
import SVGThoughtsAndIdeasStacked from '@svgs/thoughts-&-opinions-stacked.svg'
import { css } from '@emotion/css'
import { PostList } from '@components/Blog/PostList'
import { mq } from 'config/mediaQueries'
import { Link } from '@components/Link'
import { articles } from '@data/articles'

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
  .more-link-container {
    grid-column: columns;
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
      <div className="more-link-container">
        <Link type="link" icon={true} href="https://medium.com/@lukasoppermann" target='_blank' data-splitbee-event="Social Profile" data-splitbee-event-destination="Medium.com" data-splitbee-event-location="Blog pages">More articles on medium</Link>
      </div>
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = articles.sort((itemA, itemB) => {
    const dateArrayA = itemA.published.split('.').map(item => parseInt(item))
    const dateArrayB = itemB.published.split('.').map(item => parseInt(item))
    const dateA = new Date(dateArrayA[2], dateArrayA[1], dateArrayA[0])
    const dateB = new Date(dateArrayB[2], dateArrayB[1], dateArrayB[0])
    // compare
    if (dateA > dateB) {
      return 1
    }
    if (dateA < dateB) {
      return -1
    }
    return 0
  }).reverse()

  return {
    props: {
      posts: posts
    }
  }
}
