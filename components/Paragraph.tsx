import { css } from '@emotion/css'

type ParagraphStyles = 'default' | 'small'

type ParagraphProps = {
  children: any,
  type?: ParagraphStyles
}

const style = css`
  color: var(--on-background__low-emphasis);
`

const Paragraph = ({children, type = 'default'}: ParagraphProps) => {
  return (<p className={`Paragraph ${style} ${type}`}>
    {children}
  </p>)
}

export { Paragraph }