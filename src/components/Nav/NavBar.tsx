import React from 'react'
import classes from '@/components/Nav/nav.module.scss'
import Icon from '@/shared/assets/icon.svg'
import Image from 'next/image'
import { decode } from '@/shared/utils/tokens/JWT'
import { cookies } from 'next/headers'
import { decompressToken } from '@/shared/utils/tokens/tokenCompressor'
import { type Userinfo } from '@/shared/types'
import { getAdditionalUserInfo } from '@/features/viewer/getAdditionalUserInfo'
import MobileNavLink from '@/components/MobileNavLink/MobileNavLink'
import {
  faGear,
  faGraduationCap,
  faList,
  faSchool,
} from '@fortawesome/free-solid-svg-icons'
import NavBarLink from '@/components/Nav/NavBarLink'

const Page = async () => {
  const localAccessToken = cookies().get('Access')?.value!

  const accessToken = await decompressToken(localAccessToken.split('::')[0]!)

  const { UserInfo } = await decode<{ UserInfo: string }>(accessToken)

  const userinfo = JSON.parse(UserInfo) as unknown as Userinfo

  const {
    klass,
    school: {
      name: { ru: schoolName },
    },
  } = await getAdditionalUserInfo(accessToken)

  return (
    <>
      <div className={classes.padding}></div>
      <div className={classes.wrapper}>
        <div className={classes.header}>
          <Image
            src={Icon}
            alt="logo"
            width={60}
            height={60}
            priority
            className={classes.logo}
          />
          <div className={classes.meta}>
            <p className={classes.name}>
              {`${userinfo.SecondName} ${userinfo.FirstName}`}
            </p>
            <p className={classes.description}>{`${klass} - ${schoolName}`}</p>
          </div>
        </div>
        <div className={classes.nav}>
          <NavBarLink icon={faSchool} text={'Дневник'} href={'/dash'} />
          <NavBarLink
            icon={faGraduationCap}
            text={'Табель'}
            href={'/dash/reports'}
          />
          <NavBarLink icon={faGear} href={'/dash/settings'} />
        </div>
        <div className={classes.navMobile}>
          <MobileNavLink icon={faSchool} text={'Дневник'} href={'/dash'} />
          <MobileNavLink
            icon={faGraduationCap}
            text={'Табель'}
            href={'/dash/reports'}
          />
          <MobileNavLink
            icon={faGear}
            text={'Настройки'}
            href={'/dash/settings'}
          />
        </div>
      </div>
    </>
  )
}

export default Page
