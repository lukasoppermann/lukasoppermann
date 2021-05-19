import { css } from '@emotion/css'
import styles from '@styles/components/Separator.module.scss'

type SeparatorProps = {
  type?: 'horizontal' | 'inline'
}

const lineStyle = css`
  border: none;
  height: 1px;
  background-color: var(--ui--fair-contrast);
  margin: 0;
`
const inlineStyle = css`
  color: var(--on-background__low-emphasis);
  padding: 0 4px;
` 

const Separator = ({type = 'horizontal'}: SeparatorProps) => {
  // inline
  if (type === 'inline') {
    return (
      <span className={inlineStyle}>•</span>
    )
  }
  // not inline
  return (
    <hr className={lineStyle} />
  )
}

export { Separator }
