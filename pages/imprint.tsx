import { GetStaticProps } from 'next'
import readMarkdownFile from '@lib/readMarkdownFile'
import { css } from '@emotion/css'
import SVGImprint from 'svgs/imprint.svg'

const style = css`
  padding-top: 120px;
  color: var(--on-background__high-emphasis);
  .svg-title {
    grid-column: columns / span 12;
    padding-bottom: 96px;
    path {
      fill: var(--on-background__high-emphasis);
    }
  }
  .content {
    grid-column: full-bleed;
    margin-bottom: 80px;
    h1, h2, h3, h4, p, ul, ol {
      grid-column: columns / span 6;
    }
    h1, h2 {
      margin-top: 32px;
      margin-bottom: 24px;
    }
    h3, h4 {
      margin-top: 24px;
      margin-bottom: 16px;
    }
    p, ul, ol {
      color: var(--on-background__medium-emphasis);
      margin-bottom: 16px;
    }
  }
`

export default function imprint ({ content }) {
  return (
      <main className={`${style} Grid`}>
        <SVGImprint className="svg-title" />
        <div className="content Grid" dangerouslySetInnerHTML={{ __html: content }} />
      </main>
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
