import { css } from '@emotion/css'
import { Project } from '@components/Home/Project'
import Resume from '@components/Home/Resume'
import Clients from '@components/Home/Clients'
import Intro from '@components/Home/Intro'
import Head from 'next/head'
import { DIR_PROJECTS } from 'config/directories'
import { GetStaticProps } from 'next'
import { getMarkdownFile, markdownFile } from '@lib/getMarkdownFile'
import { markdownToReact } from '@lib/markdownToHtml'

const style = css`
  .lab1886 {
    --project-color-tint: var(--lab1886-project-color);
    --image-offset: -20px;
  }
  .copra {
    --project-color-tint: var(--copra-project-color);
  }
  .bosch {
    --project-color-tint: var(--bosch-project-color);
  }
  .figma {
    --project-color-tint: var(--design-tokens-project-color);
  }
`

export default function Home({ projects }) {
  return (
    <main className={`${style}`}>
      <Head>
        <title>Home | Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist</title>
        <meta property="og:title" content="Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist — vea.re" key="title" />
        <meta name="description" content="Lukas Oppermann is a design lead and creative director from berlin, germany. He loves creating experiences with a focus on usability."></meta>
      </Head>
      <Intro />
      <Resume />
      {projects.map(project => <Project key={project.meta.title} project={{ ...project.meta, ...{ content: markdownToReact(project.content)}}} />)}
      <Clients />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: markdownFile[] = await getMarkdownFile(DIR_PROJECTS)
  
  return {
    props: {
      projects: projects
    }
  }
}
