import readMarkdownFile from '@lib/readMarkdownFile'

export default ({ content }) => {
  return (
    <>
      <div>Imprint</div>
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
