import readMarkdownFile from '@lib/readMarkdownFile'

export default ({ content }) => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}

export async function getStaticProps ({ params }) {
  const content = await readMarkdownFile('pages/imprint.md')

  return {
    props: {
      content
    }
  }
}
