import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import PropTypes from 'prop-types'
import css from 'components/RowCards/RowCards.module.scss'
import useDevice from 'hooks/useDevice'

const RowCards = ({ children, items, className }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(css[currentDevice], className)}>
      {
        _.map(items, (item, key) => (
          React.cloneElement(children, { key: key, className: css.item, ...item })
        ))
      }
    </div>
  )
}
RowCards.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  items: PropTypes.array
}

export default React.memo(RowCards)
