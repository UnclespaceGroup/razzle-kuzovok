import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/Tabs/Tabs.module.scss'
import cn from 'classnames'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
import Layout from 'components/Layout/Layout'
import useDevice from 'hooks/useDevice'

const Tabs = ({ items = [], pending }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(css[currentDevice], { [css.pending]: pending })}>
      <Layout className={css.wrapper}>
        {
          _.map(items, (item, key) => (
            <NavLink
              key={key}
              className={css.item}
              activeClassName={css.item__active}
              exact
              to={{
                pathname: item.to,
                state: { noScroll: true }
              }}
            >{item.title}</NavLink>
          ))
        }
      </Layout>
    </div>
  )
}
Tabs.propTypes = {
  items: PropTypes.array,
  pending: PropTypes.bool
}

export default React.memo(Tabs)
