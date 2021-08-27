import { css } from '@emotion/css'
import { Project } from '@components/Home/Project'
import Resume from '@components/Home/Resume'
import Clients from '@components/Home/Clients'
import Intro from '@components/Home/Intro'

const style = css`
  
`

const demoProject = {
  client: 'LAB1886',
  title: 'Design lead at Daimler Incubator'
}

export default function Home () {
  return (
    <main className={`${style}`}>
      <Intro />
      <Resume />
      <Project project={demoProject} />
      <Clients />
    </main>
  )
}
