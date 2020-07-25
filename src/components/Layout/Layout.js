import React from 'react'
import PropTypes from 'prop-types'
import css from './Layout.module.scss'
import cn from 'classnames'
import useDevice from 'hooks/useDevice'

const Layout = ({ children, className, width, withAside }) => {
  const { currentDevice } = useDevice()

  return (
    <div className={cn(css[currentDevice], className, {[css.withAside]: withAside})}
         style={width && {width: `${width / 10}rem`}}>
      {children}
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node,
  width: PropTypes.number,
  className: PropTypes.string,
  withAside: PropTypes.bool
}

export default React.memo(Layout)
