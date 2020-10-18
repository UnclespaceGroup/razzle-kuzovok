import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from './BgImage.module.scss'

const BgImage = ({ img, children, className, withLoader, Tag }) => (
  <Tag
    className={cn(css.container, className)}
    style={{ backgroundImage: `url("${img}")` }}
  >
    {children}
    {
      withLoader && !img &&
        <div className={css.loader} />
    }
  </Tag>
)
BgImage.defaultProps = {
  Tag: 'div'
}
BgImage.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  img: PropTypes.node,
  withLoader: PropTypes.any,
  Tag: PropTypes.string
}

export default React.memo(BgImage)
