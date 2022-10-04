import { GetStaticProps } from 'next'
import readMarkdownFile from '@utils/readMarkdownFile'
import { css } from '@emotion/css'
import SVGImprint from '@svgs/imprint.svg'
import SVGImprintStacked from '@svgs/imprint-stacked.svg'
import { mq } from 'config/mediaQueries'

const style = css`
  padding-top: 120px;
  color: var(--on-background__high-emphasis);
  .svg-title {
    grid-column: columns;
    padding-bottom: 64px;
    max-width: 100%;
    path {
      fill: var(--on-background__high-emphasis);
    }
  }
  .svg-imprint--stacked {
    display: none;
  }
  .content {
    grid-column: full-bleed;
    margin-bottom: 80px;
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
    .imprint__contact-details {
      grid-column: columns;
      grid-row: 1;
      h2:first-child {
        margin-top: 0;
      }
    }
    .imprint__main-content {
      grid-column: columns;
        grid-row: 2;
      & :first-child {
        margin-top: 0;
      }
    }
  }
  ${mq.atLeast.tablet} {
    .svg-title {
      grid-column: columns / span 12;
    }
    .content {
      .imprint__contact-details {
        grid-column: column 8 / span 6;
        grid-row: 1;
      }
      .imprint__main-content {
        grid-column: columns / span 6;
        grid-row: 1;
      }
    }
    .svg-imprint--default {
      display: none;
    }
    .svg-imprint--stacked {
      grid-column: columns;
      display: block;
    }
  }
`

export default function imprint({ content }) {
  return (
    <main className={`${style} Grid`}>
      <SVGImprint className="svg-title svg-imprint--default" />
      <SVGImprintStacked className="svg-title svg-imprint--stacked" />
      <div className="content Grid" dangerouslySetInnerHTML={{ __html: content }} />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const content = await readMarkdownFile('pages/imprint.mdx')

  return {
    props: {
      content
    }
  }
}
