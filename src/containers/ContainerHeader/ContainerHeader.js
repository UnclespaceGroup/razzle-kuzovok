import React, { useState, useEffect, useMemo } from 'react'
import cn from 'classnames'
import css from 'containers/ContainerHeader/ContainerHeader.module.scss'
import Header from 'components/Header/Header'
import HeaderOpen from 'components/SectionOpenMainMenu/HeaderOpen'
import Collapse from 'react-collapse'
import { useLocation, withRouter } from 'react-router'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'
import { menu, menuItems } from 'constants/links'

const ContainerHeader = () => {
  const [open, setOpen] = useState(false)
  const [blackHeader, setBlackHeader] = useState()
  const location = useLocation()

  const {
    response: {
      phone
    } = {}
  } = useRemoteData(FETCH_CONTACTS)

  // Подписываемся на скрол
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.getElementsByTagName('body')[0].style.overflow = 'auto'
      document.addEventListener('scroll', handleScroll)
    }
    return () => {
      if (typeof document !== 'undefined') {
        document.getElementsByTagName('body')[0].style.overflow = 'auto'
        document.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  // Убираем скрол, когда меню открыто
  const openMenu = (_open, first) => {
    if (open || first) {
      if (typeof document !== 'undefined') document.getElementsByTagName('body')[0].style.overflow = 'auto'
    } else {
      if (typeof document !== 'undefined') document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    }
    setOpen(_open)
  }

  const handleScroll = () => {
    const OFFSET = 100
    if (!window) return
    if (window.pageYOffset > OFFSET) {
      // Сделать черным
      setBlackHeader(true)
    } else if (window.pageYOffset < OFFSET) {
      // сделать белым
      setBlackHeader(false)
    }
  }

  useMemo(() => {
    openMenu(false, true)
  }, [location])

  return (
    <div className={css.wrapper}>
      <div className={cn(css.menu)}>
        <Header
          black={blackHeader}
          menuItems={menuItems}
          open={open}
          phone={phone}
          setOpen={openMenu}
        />
      </div>
      <div className={css.container}>
        <Collapse isOpened={open}>
          <HeaderOpen
            menu={menu}
            openMenu={openMenu}
            phone={phone}
          />
        </Collapse>
      </div>
    </div>
  )
}

export default withRouter(ContainerHeader)
