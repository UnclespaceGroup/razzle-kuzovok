import React from 'react'
import { Link } from 'react-router-dom'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from './headerOpen.module.scss'
import Layout from 'components/Layout/Layout'
import logo from 'static/logo/colored-logo-inverse-resized.png'
import useDevice from 'hooks/useDevice'

const HeaderOpen = ({ openMenu, phone, services, menu }) => {
  const { currentDevice } = useDevice()
  return (
    <>
      <div className={css.back} onClick={() => { openMenu(false) }} />
      <div className={css[currentDevice]}>
        <Layout>
          <div className={css.row}>
            <div className={css.logo}>
              <div className={css.logoIcon} style={{ backgroundImage: `url("${logo}")` }} />
            </div>
            <div className={css.column}>
              <Link to='/' className={css.mainLink}>
                Главная
              </Link>
              {
                _.map(menu?.mainItems, (item, key) => (
                  <Link to={item.to} className={css.mainLink} key={key}>
                    {item.title}
                  </Link>
                ))
              }
            </div>
            <div className={css.column}>
              {
                _.map(services, (item, key) => (
                  <Link to={item.to} className={css.link} key={key}>
                    {item.title}
                  </Link>
                ))
              }
            </div>
          </div>
          <div className={cn(css.row, css.borderTop)}>
            <div className={css.phoneBlock}>
              <div>
                Свяжитесь с нами по номеру
              </div>
              <div className={css.phone}>
                <a href={`tel:${phone}`}>
                  {phone}
                </a>
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}
HeaderOpen.propTypes = {
  openMenu: PropTypes.func,
  phone: PropTypes.string,
  services: PropTypes.array
}

export default React.memo(HeaderOpen)
