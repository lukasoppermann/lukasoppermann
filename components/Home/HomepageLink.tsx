import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'
import Image from 'next/image'

type HomepageLink = {
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
  padding-top: var(--image-offset, 0);
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
`

const HomepageLink = ({ item }: HomepageLinkProps ) => {
  return (
    <section className={`${style} HomepageLink Grid`}>
      <a className="link" href={item.url} target={item.target} rel={item.rel}>
        <Image
          alt={item.picture.alt}
          src={item.picture.url}
          layout="responsive"
          width={item.picture.width}
          height={item.picture.height}
        />
        <div className="details">
          <h4 className="client">{item.subtitle}</h4>
          <h2 className="title">{item.title}</h2>
        </div>
      </a>
    </section>
  )
}

export { HomepageLink }