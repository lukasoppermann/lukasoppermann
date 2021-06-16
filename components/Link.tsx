import { css } from '@emotion/css'
import NextLink from 'next/link'
import { Icon } from './Icon'

const style = css`
  display: inline-flex;
  text-decoration: none;
  position: relative;
  color: var(--on-background__high-emphasis);
  &::before {
    content: "";
    position: absolute;
    bottom: -2px; 
    left: 0;
    height: 2px;
    width: 0;
    background: var(--on-background__high-emphasis);
    transition: width 1.25s var(--easeOutQuint);
  }
  &:hover::before {
    width: 100%;
  }
`

const Link = ({ children, href, ...props }) => {

  return (
    <NextLink href={href}>
      <a className={style} {...props}>{children}<Icon type="arrowRight" /></a>
    </NextLink>
  )
}

export { Link }
