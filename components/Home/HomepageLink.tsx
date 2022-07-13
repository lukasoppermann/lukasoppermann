import { Headline } from '@components/Headline'
import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'
import Image from 'next/image'

export type HomepageLink = {
  url: string,
  target?: string,
  rel?: string,
  title: string,
  subtitle: string,
  picture: {
    url: string,
    alt?: string,
    width: number,
    height: number
  }
}

type HomepageLinkProps = {
  item: HomepageLink
}

const style = css`
  grid-column: full-bleed;
  margin-top: 40px;
  ${mq.atLeast.tablet} {
    margin-top: 96px;
  }
  .link {
    grid-column: full-bleed;
    ${mq.atLeast.tablet} {
      grid-column: columns;
      grid-row: 1;
    }
    ${mq.atLeast.desktop} {
      grid-column: column 4 / column -1;
      grid-row: 1 / 3;
    }
  }
  .picture {
    grid-row: 1;
    grid-column: full-bleed;
    z-index: 0;
    background-color: var(--project-color-tint, var(--project-default-tint)); // for testing only
    overflow: visible;
    padding-top: var(--image-offset, 0);
    ${mq.atLeast.tablet} {
      grid-column: columns;
      grid-row: 1;
    }
    ${mq.atLeast.desktop} {
      grid-column: column 5 / column -1;
      grid-row: 1 / 3;
    }
    ${mq.atLeast.large} {
      grid-column: column 4 / column -1;
      grid-row: 1 / 3;
    }
    & > span {
      width: 100%;
      overflow: visible !important;
    }
  }
  .details {
    z-index: 100;
    margin-top: 32px;
    grid-row: 3;
    grid-column: columns;
    color: var(--on-background__highest-emphasis);
    ${mq.atLeast.desktop} {
      grid-row: 1;
      grid-column: column / span 3;
      margin-top: 30%;
    }
    .title {
      margin-top: 0;
    }
    .subtitle {
      text-transform: uppercase;
      letter-spacing: 0.2px;
      &::before {
        content: "";
        display: inline-block;
        position: relative;
        flex: 0 0 auto;
        align-self: center;
        height: 2px;
        width: 40px;
        transform: translateY(-5px);
        background: currentColor;
        margin-right: 8px;
      }
    }
  }
  &:nth-child(odd) {
    .picture {
      ${mq.atLeast.desktop} {
        grid-column: column 1 / span 8;
        grid-row: 1 / 3;
      }
      ${mq.atLeast.large} {
        grid-column: column 1 / span 9;
        grid-row: 1 / 3;
      }
    }
    .details {
      ${mq.atLeast.desktop} {
        grid-column: column 10 / span 3;
      }
    }
  }
`

const HomepageLink = ({ item }: HomepageLinkProps ) => {
  return (
    <section className={`${style} HomepageLink`}>
      <a className="link Grid" href={item.url} target={item.target} rel={item.rel}>
        <div className="picture">
          <Image
            alt={item.picture.alt}
            src={item.picture.url}
            layout="responsive"
            width={item.picture.width}
            height={item.picture.height}
          />
        </div>
        <div className="details">
          <Headline level="3" style="5" className="subtitle">{item.subtitle}</Headline>
          <Headline level="2" style="2" className="title">{item.title}</Headline>
        </div>
      </a>
    </section>
  )
}

export default HomepageLink