import getPost from '@lib/getPosts'

export default function Blog ({ post }) {
  return (
    <>
      <div>Blog overview</div>
      {post.content}
    </>
  )
}

export async function getStaticProps ({ params }) {
  const content = await getPost()

  return {
    props: {
      post: {
        content
      }
    }
  }
}
