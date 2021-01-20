import { GetStaticProps } from 'next'

import { DIR_BLOG } from 'config/directories'
import { getAllMarkdown } from '@lib/getMarkdown'
import PostPreview from '@components/PostPreview'

export default function Blog ({ posts }) {
  return (
    <>
      <div>Blog overview</div>
      {posts.map(post => PostPreview(post))}
    </>
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
