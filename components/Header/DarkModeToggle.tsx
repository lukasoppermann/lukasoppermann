import { Icon } from '@components/Icon'
import { css } from '@emotion/css'
import React from 'react'
import useDarkMode from 'use-dark-mode'

const style = css`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  path {
    fill: var(--on-background__high-emphasis);
  }
`

const DarkModeToggle = () => {
  const {value: isDarkmode, toggle: toggleDarkmode} = useDarkMode()
  return (<>
    <button type='button' onClick={toggleDarkmode} className={`dark-mode-toggle ${style}`} suppressHydrationWarning={true}>
    { process.browser && <Icon type={isDarkmode ? 'darkMode' : 'lightMode'} /> }
    </button>
  </>)
}

export default DarkModeToggle
