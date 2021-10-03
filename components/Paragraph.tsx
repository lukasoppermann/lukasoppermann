import { css } from '@emotion/css'

type ParagraphStyles = 'default' | 'small'

type ParagraphProps = {
  children: any,
  type?: ParagraphStyles
}

const style = css`
  font: var(--typestyle__body);
  color: var(--on-background__medium-emphasis);
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`

const Paragraph = ({children, type = 'default'}: ParagraphProps) => {
  return (<p className={`Paragraph ${style} ${type}`}>
    {children}
  </p>)
}

export { Paragraph }