// import { DIR_BLOG } from 'config/directories'
// import { getAllMarkdown, getMarkdownBySlug } from '@lib/getMarkdown'
// import { GetStaticPaths, GetStaticProps } from 'next'
// import Markdown from 'components/Markdown'

const Post = ({ content, meta }) => {
  
  return (
    <b>POST</b>
    // <Markdown>{content}</Markdown>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const mdFiles = await getAllMarkdown(DIR_BLOG)
  
//   if (!mdFiles) return { paths: [], fallback: true }

//   const paths = mdFiles.map(({ slug }) => ({
//     params: { slug },
//   }))
  
//   return { paths, fallback: true }
// }

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//   // get slug from url
//   const { slug } = params
  
//   // get mardown file
//   const results = await getMarkdownBySlug(slug, DIR_BLOG)
//   // Pass data to the component props
//   return { props: {...results}}
// }

export default Post