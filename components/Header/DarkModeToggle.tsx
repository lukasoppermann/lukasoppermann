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
  const [mounted, setMounted] = useState(false);
  let {value: isDarkmode, toggle: toggleDarkmode} = useDarkMode(false, {
    storageKey: null
  })
  // When mounted on client, now we can show the UI
  useEffect(() => { 
    setMounted(true)
  }, []);

  if (!mounted) return null;

  return (<>
    <button type='button' onClick={toggleDarkmode} className={`dark-mode-toggle ${style}`} aria-label={isDarkmode ? 'toggle light mode' : 'toggle dark mode'}>
      <Icon type={isDarkmode ? 'darkMode' : 'lightMode'} />
    </button>
  </>)
}

export default DarkModeToggle
