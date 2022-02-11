import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'
import { HTMLAttributes } from 'react'

type HeadlineProps = HTMLAttributes<HTMLDivElement> & {
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
    font: var(--typestyle__h2);
    margin-bottom: 24px;
    ${mq.atLeast.desktop} {
      margin-bottom: 32px;
    }
  }
  &.h3 {
    font: var(--typestyle__h4);
    margin-bottom: 24px;
  }
  &.h4 {
    font: var(--typestyle__h4);
    margin-bottom: 16px;
  }
  &.h5 {
    font: var(--typestyle__h5);
    margin-bottom: 8px;
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

const Headline = ({children, level, style, center, margin, className, ...rest}: HeadlineProps) => {
  const Headline: HeadlineType = level ? `h${level}` : 'span' as HeadlineType

  return (
    <Headline className={`Headline ${headlineStyle} ${!style ? `h${level}` : `h${style}`} ${center ? 'center' : ''} ${margin === 'none' ? 'margin-none' : ''} ${className ? `${className}` : ''}`} {...rest}>
      {children}
    </Headline>
  )
}

export {Headline}