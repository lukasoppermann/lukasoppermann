import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'
import NextLink from 'next/link'
import { Icon, IconType } from './Icon'

const style = css`
  &.type--inline {
    text-decoration: underline;
    color: var(--on-background__high-emphasis);
    &:hover {
      cursor: pointer;
      color: var(--link-color, var(--interaction));
      text-decoration: none;
    }
  }
  &.type--link {
    font: var(--typestyle__link);
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
  }
  &.type--button {
    font: var(--typestyle__button);
    z-index: 100;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    margin: 8px 0;
    border: 2px solid transparent;
    color: var(--on-surface-alternative__high-emphasis);
    background: var(--surface-alternative);
    box-shadow: 0 1px 0 rgba(var(--black-rgb), .05), 0 8px 8px 4px rgba(var(--black-rgb), .05);
    transform: translateY(-2px);
    transition: box-shadow .35s ease, transform .35s ease;
    box-sizing: border-box;
    text-align: right;
    ${mq.atLeast.tablet} {
      width: -moz-fit-content;
      width: fit-content;
    }
    ${mq.atLeast.desktop} {
      &:hover {
        box-shadow: 0 1px 0 rgba(var(--black-rgb), .1), 0 4px 4px 0 rgba(var(--black-rgb), .075);
        transform: translateY(0);
      }
    }
  }
`

type LinkProps = {
  children: any,
  href: string,
  type?: 'link' | 'inline' | 'button',
  icon?: false | true | string,
  rel?: string,
  target?: string,
  className?: string
}

const Link = ({ children, href, type = 'link', icon = false, rel = undefined, className, ...props }: LinkProps) => {
  // set rel
  const regex = /^(www\.|https?:|\/\/)/g;
  if (!rel && href.match(regex) !== null) {
    rel = 'noopener'
  }
  // return link
  return (
    <NextLink href={href}>
      <a className={`${style} link type--${type} ${className}`} rel={rel} {...props}>
        {children}
        {icon && <Icon type={icon !== true ? icon as IconType : "arrowRight"} />}
      </a>
    </NextLink>
  )
}

export { Link }
