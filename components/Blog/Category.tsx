import { css } from '@emotion/css'

type Category =
  'design' |
  'technology'

type CategoryProps = {
  type: Category
}

const categories = {
  'design': 'Design',
  'technology': 'Technology'
}

const style = css`
  text-transform: uppercase;
`

const Category = ({type}: CategoryProps) => {
  return (<span className={style}>
    {categories[type] || type}
  </span>)
}

export { Category }