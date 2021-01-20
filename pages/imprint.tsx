import { GetStaticProps } from 'next'
import readMarkdownFile from '@lib/readMarkdownFile'

export default ({ content }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await readMarkdownFile('pages/imprint.md')

  return {
    props: {
      content
    }
  }
}
