import { css } from '@emotion/css'

type ParagraphStyles = 'default' | 'small'

type ParagraphProps = {
  children: any,
  className?: string,
  type?: ParagraphStyles
}

const style = css`
  font: var(--typestyle__body);
  color: var(--on-background__medium-emphasis);
  margin-bottom: 8px;
  &.small {
    font: var(--typestyle__body--small);
  }
  &:last-child {
    margin-bottom: 0;
  }
`

const Paragraph = ({ children, type = 'default', className }: ParagraphProps) => {
  return (<p className={`Paragraph ${style} ${type} ${className}`}>
    {children}
  </p>)
}

export { Paragraph }