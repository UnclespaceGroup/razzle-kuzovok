import React from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
// import css from './List.module.scss'

const List = ({ items, children, marginBetween, className }) => (
  <div className={className}>
    {
      _.map(items, (item, key) => (
        React.cloneElement(children, { key, ...item, style: { marginBottom: `${marginBetween / 10}rem` } })
      ))
    }
  </div>
)
List.propTypes = {
  children: PropTypes.node,
  marginBetween: PropTypes.number,
  items: PropTypes.array,
  className: PropTypes.string
}

export default React.memo(List)
