import { Icon } from '@components/Icon'
import { css } from '@emotion/css'
import React, { useEffect, useState } from 'react'
import useDarkMode from 'use-dark-mode'

const style = css`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  path {
    fill: var(--on-background__high-emphasis);
  }
`

const DarkModeToggle = () => {
  
  const {value: isDarkmode, toggle: toggleDarkmode} = useDarkMode()
  if (typeof window === 'undefined') return null;
  return (<>
    <button type='button' onClick={toggleDarkmode} className={`dark-mode-toggle ${style}`}>
      <Icon type={isDarkmode ? 'darkMode' : 'lightMode'} />
    </button>
  </>)
}

export default DarkModeToggle
