import Link from 'next/link'

const PostPreview = (post) => {
  return (
    <>
      <Link href={`/blog/${post.slug}`} key={post.slug}>
        <a>{post.slug}</a>
      </Link>
    </>
  )
}

export default PostPreview
