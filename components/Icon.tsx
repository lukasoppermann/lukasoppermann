import ArrowRight from '@svgs/icon-arrow-right.svg'
import Close from '@svgs/icon-close.svg'
import Menu from '@svgs/icon-menu.svg'
import { css } from '@emotion/css'

const iconTypes = {
  arrowRight: ArrowRight,
  close: Close,
  menu: Menu
};

type IconType = 
  'arrowRight' |
  'close' |
  'menu'

const style = css`
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
  return <Icon className={`svg-icon`} />
}

export { Icon }