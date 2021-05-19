import { css } from '@emotion/css'
import useDarkMode from 'use-dark-mode'

const style = css`
  color: var(--on-background__high-emphasis);
  background: transparent;
  border: none;
  font-size: 20px; /* TODO: Remove */
`

const DarkModeToggle = () => {
  const {value: isDarkmode, toggle: toggleDarkmode} = useDarkMode()

  return (<>
    <button type='button' onClick={toggleDarkmode} className={style}>
      {isDarkmode ? '☀' : '☾'}
    </button>
  </>)
}

export default DarkModeToggle
