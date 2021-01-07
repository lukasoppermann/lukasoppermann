import React, { Children } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const ActivatableLink = ({ children, href, ...props }) => {
  const { asPath } = useRouter()

  return (
    <Link href={href} {...props}>
      {React.cloneElement(Children.only(children), {
        className: (asPath === href || asPath === props.as) ? 'is-active' : null
      })}
    </Link>
  )
}

export default ActivatableLink
