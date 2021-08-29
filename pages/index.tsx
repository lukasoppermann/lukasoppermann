import { css } from '@emotion/css'
import { Project } from '@components/Home/Project'
import Resume from '@components/Home/Resume'
import Clients from '@components/Home/Clients'
import Intro from '@components/Home/Intro'
import Head from 'next/head'

const style = css`
  
`

const demoProject = {
  client: 'LAB1886',
  title: 'Design lead at Daimler Incubator'
}

export default function Home () {
  return (
    <main className={`${style}`}>
      <Head>
        <title>Home | Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist</title>
        <meta property="og:title" content="Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist — vea.re" key="title" />
      </Head>
      <Intro />
      <Resume />
      <Project project={demoProject} />
      <Clients />
    </main>
  )
}
