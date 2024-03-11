'use client'

import React, { type FC } from 'react'
import { type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import classes from '@/components/MobileNavLink/navlink.module.scss'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
  icon: IconDefinition
  text: React.ReactNode
  href: string
  active?: boolean
}

const MobileNavLink: FC<NavLinkProps> = (props) => {
  const pathname = usePathname()

  return <MobileNavLinkTemplate {...props} active={pathname == props.href} />
}

const MobileNavLinkTemplate: FC<NavLinkProps> = ({
  icon,
  active,
  text,
  href,
}) => {
  return (
    <Link
      href={active ? '#' : href}
      className={`${classes.link} ${active ? classes.active : ''}`}
    >
      <FontAwesomeIcon icon={icon} className={classes.icon} />
      <p className={classes.text}>{text}</p>
    </Link>
  )
}

export default MobileNavLink
