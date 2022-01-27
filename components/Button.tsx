import { css } from '@emotion/css'
import { Icon, IconType } from './Icon'

const cssStyle = css`
  position: relative;
  display: inline-flex;
  align-items: center;
  border-radius: 0px;
  border: 0;
  padding: 8px 16px;
  font: var(--typestyle__button);
  background: var(surface-alternative);
  color: var(--on-surface-alternative__high-emphasis);
  &.ghost {
    background: transparent;
    color: var(--on-background__high-emphasis);
    &::before {
      content: "";
      position: absolute;
      bottom: 0px; 
      left: 0;
      height: 2px;
      width: 0;
      background: var(--accent);
      transition: width 1.25s var(--easeOutQuint);
    }
    &:hover {
      cursor: pointer;
      &::before {
        width: 100%;
      }
    }
  }
`

type ButtonProps = {
  children: any,
  type: "button" | "submit",
  style?: "button" | "ghost",
  icon?: false | true | string,
  id?: string,
  name?: string,
  className?: string
}

const Button = ({ children, className, icon, type, style = "button", ...props }: ButtonProps) => {
  // return link
  return (
    <button className={`${cssStyle} ${style} ${className}`} {...props} type={type}>
      {children}
      {icon && <Icon type={icon !== true ? icon as IconType : "arrowRight"} />}
    </button>
  )
}

export { Button }
