import { css } from '@emotion/css'
import Resume from '@components/Home/Resume'
import Intro from '@components/Home/Intro'
import Head from 'next/head'
import { DIR_PROJECTS } from 'config/directories'
import { GetStaticProps } from 'next'
import { getMarkdownFile, markdownFileType } from '@utils/getMarkdownFile'
import markdownToReact from '@utils/markdownToReact'
import { Headline } from '@components/Headline'
import dynamic from 'next/dynamic'
import homepageLinks from '@data/homepageLinks'
import { HomepageLinkType } from '@components/Home/HomepageLink'
import articles from '@data/articles'
import { PostPreviewType } from '@components/PostPreview'

const Project = dynamic(
  () => import('@components/Home/Project'),
)

const HomepageLink = dynamic(
  () => import('@components/Home/HomepageLink')
)

const Clients = dynamic(
  () => import('@components/Home/Clients')
)

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

const markdownOptions = {
  components: {
    'h6': ({ children }) => <Headline style="6">{children}</Headline>,
  }
}

export default function Home({ projects, links, posts }: {projects: markdownFileType[], links: HomepageLinkType[], posts: PostPreviewType[]}) {
  return (
    <main className={`${style}`}>
      <Head>
        <title>Home | Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist</title>
        <meta property="og:title" content="Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist" key="title" />
        <meta name="description" content="Lukas Oppermann is a design lead and creative director from berlin, germany. He loves creating experiences with a focus on usability."></meta>
        <link rel="icon" href="/favicon-veare.svg" />
        <link rel="mask-icon" href="/safari-mask-icon.svg" color="#f0aa1e" />
        <link rel="apple-touch-icon" href="/veare-apple-touch-icon-180.png" />
      </Head>
      <Intro />
      <Resume />
      {projects.map(project => <Project key={project.meta.title} project={{ ...project.meta, ...{ content: markdownToReact(project.content, markdownOptions)}}} />)}
      {links.map(homepageLink => <HomepageLink key={homepageLink.url} item={homepageLink}/>)}
      <Clients />
    </main>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const projects: markdownFileType[] = await getMarkdownFile(DIR_PROJECTS)
  
  return {
    props: {
      projects: projects,
      links: homepageLinks as HomepageLinkType[],
      posts: articles
    }
  }
}
