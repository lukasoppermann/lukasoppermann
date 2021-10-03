import { Headline } from '@components/Headline'
import { css } from '@emotion/css'
import { ProjectDetails } from 'types/Project'
import { Link } from '@components/Link';
import Image from 'next/image'
import { mq } from 'config/mediaQueries';
import { DateTime } from '@components/DateTime';
import { List } from '@components/List';

const style = css`
  --image-offset: -20px;
  padding-top: var(--image-offset, 0);
  grid-column: full-bleed;
  :not(:first-child) {
    margin-top: 96px;
  }
  .Project-excerpt__info {
    grid-column: full-bleed;
    grid-row: 1;
  }
  .Picture {
    z-index: 0;
    background-color: var(--project-color-tint, var(--project-default-tint)); // for testing only
    overflow: visible;
    grid-row: 1;
    grid-column: columns;
    ${mq.atLeast.desktop} {
      grid-column: column 3 / column -1;
      grid-row: 1 / 3;
    }
    padding-top: var(--image-offset, 0);
    img {
      margin-top: var(--image-offset, 0);
    }
  }
  .Project-excerpt__title {
    z-index: 100;
    margin-top: 32px;
    grid-row: 2;
    grid-column: columns;
    color: var(--on-background__highest-emphasis);
    ${mq.atLeast.desktop} {
      grid-row: 1;
      grid-column: column / span 4;
      width: calc(100% + var(--column-gap));
    }
    .Project-card__client {
      margin-top: 0;
    }
    .Project-card__title {
      margin-top: 8px;
      font-size: var(--ts-size-xxl);
      line-height: var(--ts-line-height-xxl);
      ${mq.atLeast.large} {
        font-size: var(--ts-size-hg);
        line-height: var(--ts-line-height-hg);
      }
    }
  }
    // ====================================
    // Responsibilities
      .Project-excerpt__responsibilities {
      --list-indicator-color: var(--project-card--list-indicator-color, var(--on-surface-alternative__low-emphasis));
      z-index: 50;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      background: var(--project-card--background, var(--surface-alternative));
      color: var(--project-card--text-high-emphasis, var(--on-surface-alternative__high-emphasis));
      padding: var(--column-gap);
      grid-row: 3;
      grid-column: columns;
      margin: 24px 0 32px calc(-0.5 * var(--column-gap));
      width: calc(100% + var(--column-gap));
      ${mq.atLeast.tablet} {
        margin: 24px 0 32px calc(-1 * var(--column-gap));
        width: calc(100% + var(--column-gap) * 2);
      }
      ${mq.atLeast.desktop} {
        align-self: start;
        flex-direction: column;
        justify-content: stretch;
        margin-left: 0;
        grid-row: 2;
        grid-column: column 1 / span 4;
      }
      ${mq.atLeast.large} {
        margin-left: calc(-1 * var(--column-gap));
        grid-column: column 2 / span 3;
      }
      .h6 {
        width: 100%;
        margin: 0;
        margin-bottom: 8px;
        color: var(--project-card--text-low-emphasis, --on-surface-alternative__low-emphasis);
        &:not(:first-child) {
          margin-top: 24px;
        }
      }
      .List {
        width: 100%;
        ${mq.atLeast.tablet} {
          width: calc((100% - var(--column-gap)) / 2);
        }
        ${mq.atLeast.desktop} {
          width: 100%;
        }
      }
    }
  // ====================================
    // Details
    .Project-excerpt__details {
      grid-row: 2;
      grid-column: full-bleed;
      // challenge & solution
      .Project-excerpt__approach {
        grid-row: 1;
        grid-column: columns;
        ${mq.atLeast.desktop} {
          grid-column: column 6 / span 7;
          p {
            padding-left: 8px;
          }
        }
        ${mq.atLeast.large} {
          grid-column: column 7 / span 6;
        }
      }
    }
        // ====================================
    .Project-excerpt__approach,
    .Project-excerpt__time {
      .h5,
      .h6 {
        margin: 0;
        margin-top: 24px;
      }
      :not(li) > p {
        margin-top: 8px;
      }
    }
    // ====================================
    // Data
    .Project-excerpt__data {
      border-bottom: 1px solid var(--ui--fair-contrast);
      margin: size(5) 0;
      display: flex;
      flex-direction: column;
      grid-column: columns;
      ${mq.atLeast.tablet} {
        justify-content: space-between;
        flex-direction: row;
      }
      ${mq.atLeast.desktop} {
        border-bottom: 0;
        margin-top: size(2);
        grid-row: 2;
        grid-column: column 3 / span 3;
        flex-direction: column;
        justify-content: stretch;
      }
      ${mq.atLeast.large} {
        grid-column: column 3 / span 4;
      }
      .Project-excerpt__time {
        display: flex;
        align-items: stretch;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 0;
        margin-bottom: 32px;
        ${mq.atLeast.desktop} {
          flex-direction: column;
          justify-content: stretch;
        }
        dd,
        dt {
          display: block;
          order: 2;
          width: calc(((100% - var(--column-gap)) / 2));
          &:first-of-type {
            padding-left: 8px;
          }
          ${mq.atLeast.tablet} {
            &:first-of-type {
              padding-left: 0;
            }
          }
          ${mq.atLeast.desktop} {
            width: 100%;
            &:first-of-type {
              order: 1;
            }
          }
          ${mq.atLeast.large} {
            width: calc(((100% - var(--column-gap)) / 2));
            order: 2;
          }
        }
        dt {
          order: 1;
          h6 {
            color: var(--on-background__medium-emphasis);
          }
        }
        dd {
          margin-left: 0;
          font: var(--typestyle__body--bold);
          color: var(--on-background__high-emphasis);
        }
      }
      .link {
        align-self: center;
        ${mq.atLeast.desktop} {
          align-self: flex-start;
        }
      }
    }
`

type ComponentProps = {
  project: ProjectDetails
}

const Project = ({ project }: ComponentProps) => {
  return (
    <section className={`Project-excerpt Project-card Project-card__link Grid ${project.class} ${style}`}>
      <div className="Project-excerpt__info Grid">
        <div className="Picture">
          <Image
            alt={project.picture.alt}
            src={project.picture.url}
            layout="responsive"
            width={project.picture.width}
            height={project.picture.height}
          />
        </div>
        <div className="Project-excerpt__title">
          <h4 className="Project-card__client">{project.client}</h4>
          <h2 className="Project-card__title">{project.title}</h2>
        </div>
        <div className="Project-excerpt__responsibilities">
          <Headline style="6">Responsibilities</Headline>
          <List items={project.responsibilities.slice(0, Math.ceil(project.responsibilities.length / 2))}></List>
          <List items={project.responsibilities.slice(Math.ceil(project.responsibilities.length / 2))}></List>
        </div>
      </div>
      <div className="Project-excerpt__details Grid">
        <div className="Project-excerpt__approach">
          {/* {console.log('markdownToReact result:', project.content.props.children)} */}
          {/* {markdownToReact(project.content)} */}
          {project.content}
          {/* {project.approach.map(item => Object.entries(item)[0]).map(([title, body]) => <Fragment key={title}>
              <Headline level="6">{title}</Headline>
              <Paragraph>{body}</Paragraph>
            </Fragment>
          )} */}
        </div>
      </div>
      <aside className="Project-excerpt__data">
        <dl className="Project-excerpt__time">
          <dt><Headline style="6">Year</Headline></dt>
          <dd>
            <DateTime format="YYYY" from={project.startDate} to={project.endDate} />
          </dd>
          <dt><Headline style="6">Duration</Headline></dt>
          <dd>
            <DateTime duration from={project.startDate} to={project.endDate} />
          </dd>
        </dl>
        {project.url && <Link href={project.url} type="button" icon={true}>Open</Link>}
      </aside>
    </section>
  )
}

export { Project }
