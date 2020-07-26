import React from 'react'
import PropTypes from 'prop-types'
import css from './IconWrapper.module.scss'
import Icon from 'components/Icon/Icon'

const IconWrapper = ({ children, icon, visible = true }) => {
  if (!visible) return <span />
  return (
    <div className={css.container}>
      <Icon name={icon} />
      {children}
    </div>
  )
}
IconWrapper.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.any,
  visible: PropTypes.any
}

export default React.memo(IconWrapper)
