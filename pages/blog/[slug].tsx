import { DIR_BLOG } from 'config/directories'
import { getAllMarkdown, getMarkdownBySlug } from '@lib/getMarkdown'
import { parseMarkdown } from '@lib/parseMarkdown'


const Post = ({ content, meta }) => {
  // console.log(parseMarkdown(content));
  
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
  const results = await getMarkdownBySlug(slug, DIR_BLOG)
  // Pass data to the component props
  return { props: {...results}}
}

export default Post