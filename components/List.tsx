import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'

type Props = {
  items: string[],
  size?: 'default' | 'small'
}

const style = css`
  &.List--small{
    --list-font-style: var(--typestyle__body--small);
  }
  margin-top: 0;
  margin-bottom: 0;
  li {
    counter-increment: listCounter;
    position: relative;
    display: list-item;
    list-style: none; // decimal-leading-zero
    font: var(--list-font-style, var(--typestyle__body));
    color: inherit;
    margin: 8px 0;
    padding-left: 1.6em;
    &::before {
      position: absolute;
      content: "";
      color: currentColor;
      color: var(--list-indicator-color, var(--on-surface__low-emphasis));
      left: 0;
      top: 0;
      margin-top: -.05em;
      // for unordered lists
      padding-left: .2em;
      content: "— ";
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const List = ({ items, size = "default" }: Props) => {
  return (<ul className={`${style} List List--${size}`}>
    {items.map(item => <li key={item}>{item}</li>)}
  </ul>
  )
}