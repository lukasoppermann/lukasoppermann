import ArrowRight from '@svgs/icon-arrow-right.svg'
import Close from '@svgs/icon-close.svg'
import Menu from '@svgs/icon-menu.svg'
import lightMode from '@svgs/icon-light-mode.svg'
import darkMode from '@svgs/icon-dark-mode.svg'
import { css } from '@emotion/css'

const iconTypes = {
  arrowRight: ArrowRight,
  close: Close,
  menu: Menu,
  darkMode: darkMode,
  lightMode: lightMode
};

type IconType = 
  'arrowRight' |
  'close' |
  'menu' |
  'darkMode'|
  'lightMode'

const style = css`
  fill: currentColor;
  path {
    fill: inherit;
  }
`

type IconProps = {
  type: IconType
}

const Icon = ({type}: IconProps) => {
  // with props
  let Icon = iconTypes[type]
  // return icon
  return <Icon className={`${style} svg-icon`} />
}

export { Icon }