import { css } from '@emotion/css'

type HeadlineProps = {
  children: any
  level?: '1' | '2' | '3' | '4' | '5' | '6',
  style?: '1' | '2' | '3' | '4' | '5' | '6' | 'none'
}

type Headline = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

const headlineStyle = css`
  &.h1 {

  }
  &.h2 {

  }
  &.h3 {
    font-size: var(--font-size--headline);
    font-weight: var(--font-weight--bold);
  }
  &.h4 {
    
  }
  &.h5 {
    
  }
  &.h6 {
    
  }
`

const Headline = ({children, level, style}: HeadlineProps) => {
  const Headline: Headline  = `h${level}` as Headline

  return (
    <Headline className={`${headlineStyle} ${!style ? `h${level}` : style}`}>
      {children}
    </Headline>
  )
}

export {Headline}