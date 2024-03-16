'use client'

import React, { type FC } from 'react'
import classes from '@/components/Nav/nav.module.scss'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { type IconDefinition } from '@fortawesome/free-brands-svg-icons'
import { usePathname } from 'next/navigation'

type NavBarLinkProps = {
  icon: IconDefinition
  text?: string
  href: string
}

const NavBarLink: FC<NavBarLinkProps> = ({ icon, text, href }) => {
  const pathname = usePathname()

  return (
    <Link href={pathname == href ? '#' : href}>
      <Button
        type={pathname == href ? 'primary' : 'text'}
        size="large"
        icon={<FontAwesomeIcon icon={icon} />}
        className={classes.navButton}
      >
        {text && <span className={classes.navButtonText}>{text}</span>}
      </Button>
    </Link>
  )
}

export default NavBarLink
