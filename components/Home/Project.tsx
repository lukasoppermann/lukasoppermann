import { Headline } from '@components/Headline'
import { css } from '@emotion/css'
import { ProjectDetails } from 'types/Project'
import { Link } from '@components/Link';
import Image from 'next/image'
import { mq } from 'config/mediaQueries';
import { DateTime } from '@components/DateTime';
import { List } from '@components/List';

const style = css`
  padding-top: var(--image-offset, 0);
  grid-column: full-bleed;
  &:not(:first-child) {
    margin-top: 40px;
    ${mq.atLeast.tablet} {
      margin-top: 64px;
    }
  }
  .Project-excerpt__info {
    grid-column: full-bleed;
    grid-row: 1;
  }
  .Picture {
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
      grid-column: column 4 / column -1;
      grid-row: 1 / 3;
      & > span {
        width: calc(100% - var(--column-gap)) !important;
        margin-left: var(--column-gap) !important;
      }
    }
    ${mq.atLeast.large} {
      grid-column: column 3 / column -1;
      grid-row: 1 / 3;
    }
    & > span {
      overflow: visible !important;
    }
    img {
      margin-top: var(--image-offset, 0) !important;
    }
  }
  .Project-excerpt__title {
    z-index: 100;
    margin-top: 32px;
    grid-row: 3;
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
    .h5 {
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
  // ====================================
  // Responsibilities
  .Project-excerpt__responsibilities {
    --list-indicator-color: var(--project-card--list-indicator-color, var(--on-surface-alternative__low-emphasis));
    grid-row: 2;
    grid-column: columns;
    z-index: 50;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    background: var(--project-card--background, var(--surface-alternative));
    color: var(--project-card--text-high-emphasis, var(--on-surface-alternative__high-emphasis));
    padding: var(--column-gap);
    margin: 0 0 32px calc(-0.5 * var(--column-gap));
    width: calc(100% + var(--column-gap));
    ${mq.atLeast.tablet} {
      margin: 24px 0 32px;
      width: 100%;
    }
    ${mq.atLeast.desktop} {
      --list-font-style: var(--typestyle__body--small);
      align-self: start;
      flex-direction: column;
      justify-content: stretch;
      margin-left: 0;
      grid-row: 2;
      grid-column: column 1 / span 4;
      padding: 32px;
    }
    ${mq.atLeast.large} {
      --list-font-style: var(--typestyle__body);
      padding: var(--column-gap);
      margin-left: calc(-1 * var(--column-gap));
      grid-column: column 1 / span 3;
      width: calc(100% + var(--column-gap));
    }
    .h6 {
      width: 100%;
      margin: 0;
      margin-bottom: 8px;
      color: var(--project-card--text-low-emphasis, --on-surface-alternative__low-emphasis);
      &:not(::first-child) {
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
  // challenge & solution
  .Project-excerpt__approach {
    grid-row: 4;
    grid-column: columns;
    ${mq.atLeast.desktop} {
      margin-top: 32px;
      grid-row: 3;
      grid-column: column 7 / span 6;
      p {
        padding-left: 8px;
      }
    }
    ${mq.atLeast.large} {
      grid-column: column 7 / span 6;
    }
  }
  // ====================================
  .Project-excerpt__approach,
  .Project-excerpt__time {
    .h5,
    .h6 {
      margin: 0;
      &:not(:first-child) {
        margin-top: 24px;
      }
    }
    :not(li) > p {
      margin-top: 8px;
    }
  }
  // ====================================
  // Data
  .Project-excerpt__data {
    grid-row: 5;
    border-bottom: 1px solid var(--ui--fair-contrast);
    margin: 0;
    margin-top: 40px;
    padding-bottom: 32px;
    display: flex;
    flex-direction: column;
    grid-column: columns;
    ${mq.atLeast.tablet} {
      justify-content: space-between;
      flex-direction: row;
    }
    ${mq.atLeast.desktop} {
      border-bottom: 0;
      margin-top: 32px;
      grid-row: 3;
      grid-column: column 4 / span 3;
      flex-direction: column;
      justify-content: stretch;
    }
    ${mq.atLeast.large} {
      padding-left: 8px;
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
        justify-content: stretch;
      }
      dd,
      dt {
        display: block;
        width: calc(((100% - var(--column-gap)) / 2));
        &:nth-child(1n) {
          order: 1;
        }
        &:nth-child(2n) {
          order: 3;
        }
        &:nth-child(3n) {
          order: 2;
        }
        &:nth-child(4n) {
          order: 4;
        }
        ${mq.is.desktop} {
          width: 100%;
          &:nth-child(1n) {
            order: 1;
          }
          &:nth-child(2n) {
            order: 1;
          }
          &:nth-child(3n) {
            margin-top: 16px;
          }
        }
        ${mq.atLeast.large} {
          width: calc(((100% - var(--column-gap)) / 2));
        }
      }
      dt {
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
      align-self: flex-start;
      justify-content: space-between;
      min-width: 120px;
    }
  }
`

type ComponentProps = {
  project: ProjectDetails
}

const Project = ({ project }: ComponentProps) => {
  return (
    <section className={`Project-excerpt Project-card Project-card__link Grid ${project.class} ${style}`} aria-label={`${project.client} — ${project.title}`}>
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
          <Headline level="2" style="5" className="Project-card__client">{project.client}</Headline>
          <Headline level="3" style="2" className="Project-card__title">{project.title}</Headline>
        </div>
        <div className="Project-excerpt__responsibilities">
          <Headline style="6">Responsibilities</Headline>
          <List items={project.responsibilities.slice(0, Math.ceil(project.responsibilities.length / 2))}></List>
          <List items={project.responsibilities.slice(Math.ceil(project.responsibilities.length / 2))}></List>
        </div>
        <div className="Project-excerpt__approach">
          {project.content}
        </div>
      <div className="Project-excerpt__data">
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
        {project.url && <Link href={project.url} target={project.buttonTarget} type="button" icon={true}>{project.buttonLabel || "Open"}</Link>}
      </div>
    </section>
  )
}

export default Project