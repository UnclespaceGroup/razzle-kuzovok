import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Layout from 'components/Layout/Layout'
import css from 'components/AdvantagesRow/AdvantagesRow.module.scss'
import useDevice from 'hooks/useDevice'

const AdvantagesRow = ({ items, className }) => {
  const { currentDevice } = useDevice()
  return (
    <Layout className={className}>
      <ul className={css[currentDevice]}>
        {
          _.map(items, ({ img, title, text }, key) => (
            <li key={key} className={css.item}>
              <div className={css.icon} style={{ backgroundImage: `url("${img}")` }} />
              <div className={css.title}>{title}</div>
              <div className={css.text}>{text}</div>
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}
AdvantagesRow.propTypes = {
  items: PropTypes.array
}
export default React.memo(AdvantagesRow)
