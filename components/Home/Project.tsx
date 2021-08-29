import { Headline } from '@components/Headline'
import { css } from '@emotion/css'
import { ProjectDetails } from 'types/Project'


const style = css``

type ComponentProps = {
  project: ProjectDetails
}

const Project = ({project}: ComponentProps) => {
  return (
    <section className="Project-excerpt Project-card Project-card__link ${project.classes}"> {/* projectSlug="${project.slug}" */}
      <div className="Project-excerpt__info">
        {/* ${picture(project.previewImage.fields,
          {
            loading: 'lazy',
            sourcesFunction: (picture) => [
            {
              fileType: 'image/webp',
              srcset: [500, 1000, 1400, 2000].map(size => `${picture.image.fields.url}?fm=webp&w=${size} ${size}w`).join(', '),
              sizes: '(min-width: 1200px) 1000px, (min-width: 577px) 700px, 500px'
            }
            ]
          }
        )} */}
        <div className="Project-excerpt__title">
          <h4 className="Project-card__client">{project.client}</h4>
          <h2 className="Project-card__title">{project.title}</h2>
        </div>
        <div className="Project-excerpt__responsibilities">
          <Headline style="6">Responsibilities</Headline>
          <ul>
            {/* ${repeat(project.responsibilities.slice(0, Math.ceil(project.responsibilities.length / 2)), item => html`<li>${item}</li>`)} */}
          </ul>
          <ul>
            {/* ${repeat(project.responsibilities.slice(Math.ceil(project.responsibilities.length / 2)), item => html`<li>${item}</li>`)} */}
          </ul>
        </div>
      </div>
      <div className="Project-excerpt__details">
        <div className="Project-excerpt__approach">
          {/* ${unsafeHTML(project.approach)} */}
        </div>
      </div>
      <aside className="Project-excerpt__data">
        <dl className="Project-excerpt__time">
          <dt><Headline style="6">Year</Headline></dt>
          <dd>
            {/* <time datetime="${project.years.start}">${project.years.start}</time>${ */}
              {/* (project.years.start !== project.years.end) ? html` – <time datetime="${project.years.end}">${project.years.end}</time>` : ''} */}
          </dd>
          <dt><Headline style="6">Duration</Headline></dt>
          <dd><time dateTime="${project.duration.totalWeeks * 4}W">
            {/* ${(project.duration.years > 0) ? html`${project.duration.years} yrs` : ''} */}
            {/* ${(project.duration.month > 0) ? html`${project.duration.month} mos` : ''} */}
          </time></dd>
        </dl>
        {/* ${parseProjectLink(project.slug)} */}
      </aside>
    </section>
  )
}

export { Project }
