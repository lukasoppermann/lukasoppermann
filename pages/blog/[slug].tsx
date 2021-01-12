import { DIR_BLOG } from 'config/directories'
import { getAllMarkdown, getMarkdownBySlug } from '@lib/getMarkdown'

const Post = ({ content, meta }) => {
  return (
    <article dangerouslySetInnerHTML={{__html: content}}>
    </article>
  )
}

export async function getStaticPaths() {
  const mdFiles = await getAllMarkdown(DIR_BLOG)
  
  if (!mdFiles) return { paths: [], fallback: true }

  const paths = mdFiles.map(({ slug }) => ({
    params: { slug },
  }))

  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  // get slug from url
  const { slug } = params
  
  // get mardown file
  const content = await getMarkdownBySlug(slug, DIR_BLOG)
  console.log(content);
  
  // Pass data to the component props
  return { props: {...content} }
}

export default Post