import { css } from '@emotion/css'

type HeadlineProps = {
  children: any
  level?: '1' | '2' | '3' | '4' | '5' | '6',
  style?: '1' | '2' | '3' | '4' | '5' | '6' | 'none',
  center?: boolean,
  margin?: 'none',
  className?: string
}

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span'

const headlineStyle = css`
  display: block;
  position: relative;
  color: var(--on-background__high-emphasis);
  &.h1 {
    margin-bottom: 40px;
  }
  &.h2 {
    margin-bottom: 32px;
  }
  &.h3 {
    font-size: var(--font-size--headline);
    font-weight: var(--font-weight--bold);
    margin-bottom: 24px;
  }
  &.h4 {
    margin-bottom: 16px;
  }
  &.h5 {
    margin-bottom: 8px;
    /* @include font(mono, bold); */
  }
  &.h6 {
    font: var(--typestyle__h6);
    text-transform: uppercase;
    color: var(--on-background__medium-emphasis);
    margin-bottom: 8px;
  }
  &.center {
    text-align: center;
  }
  &.margin-none {
    margin-bottom: 0;
  }
`

const Headline = ({children, level, style, center, margin, className}: HeadlineProps) => {
  const Headline: HeadlineType = level ? `h${level}` : 'span' as HeadlineType

  return (
    <Headline className={`Headline ${headlineStyle} ${!style ? `h${level}` : `h${style}`} ${center ? 'center' : ''} ${margin === 'none' ? 'margin-none' : ''} ${className ? `${className}` : ''}`}>
      {children}
    </Headline>
  )
}

export {Headline}