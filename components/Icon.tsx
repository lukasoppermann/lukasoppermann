import ArrowRight from '@svgs/icon-arrow-right.svg'
import Close from '@svgs/icon-close.svg'
import Menu from '@svgs/icon-menu.svg'
import lightMode from '@svgs/icon-light-mode.svg'
import darkMode from '@svgs/icon-dark-mode.svg'
import Mail from '@svgs/icon-mail.svg'
import { css } from '@emotion/css'

const iconTypes = {
  arrowRight: ArrowRight,
  close: Close,
  menu: Menu,
  darkMode: darkMode,
  lightMode: lightMode,
  mail: Mail
};

export type IconType = 
  'arrowRight' |
  'close' |
  'menu' |
  'darkMode'|
  'lightMode' |
  'mail'

const style = css`
  fill: currentColor;
  path {
    fill: inherit;
  }
`

type IconProps = {
  type: IconType,
  ariaHidden?: boolean
}

const Icon = ({ type, ariaHidden }: IconProps) => {
  // with props
  let Icon = iconTypes[type]
  // return icon
  return <Icon className={`${style} svg-icon`} aria-hidden={ariaHidden}/>
}

export { Icon }