import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from 'components/Footer/Footer.module.scss'
import Layout from 'components/Layout/Layout'
import logo from 'static/logo/colored-logo-inverse-resized.png'
import _ from 'lodash'
import { menu } from 'constants/links'
import { Link } from 'react-router-dom'
import { MdLocationOn } from 'react-icons/md'
import useDevice from 'hooks/useDevice'

const Footer = ({ phone, address }) => {
  const { currentDevice } = useDevice()

  return (
    <>
      <div className={cn(css.container, css[currentDevice])}>
        <Layout className={css.wrapper}>
          <div className={css.logo} style={{ backgroundImage: `url("${logo}")` }} />
          <div className={css.row}>
            {
              _.map(menu.mainItems, (item, key) => (
                <Link to={item.to} className={css.mainLink} key={key}>{item.title}</Link>
              ))
            }
          </div>
          <hr />
          <div className={css.contacts}>
            <div className={css.phone}><a href={`tel:${phone}`}>{phone}</a></div>
            <div className={css.addr}><MdLocationOn size='2rem' />{address}</div>
          </div>
        </Layout>
      </div>
      <div className={cn(css[currentDevice], css.unclespace)}>
        <Layout>
          <div>Разработано Unclespace group</div>
        </Layout>
      </div>
    </>
  )
}
Footer.propTypes = {
  phone: PropTypes.node,
  address: PropTypes.node
}

export default React.memo(Footer)
