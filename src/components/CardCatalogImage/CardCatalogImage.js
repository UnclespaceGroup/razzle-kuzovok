import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from 'components/CardCatalogImage/CardCatalogImage.module.scss'
import { Link } from 'react-router-dom'
import BgImage from 'components/BgImage/BgImage'
import { FaArrowRight } from 'react-icons/fa'
import useDevice from 'hooks/useDevice'

const CardCatalogImage = ({ img, title, text, to, className }) => {
  const { currentDevice, isLarge } = useDevice()
  return (
    <Link to={to} className={cn(css[currentDevice], className)}>
      <BgImage img={img} className={css.img} />
      <div className={css.content}>
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>
      </div>
      {isLarge &&
      <div className={css.icon}>
        <FaArrowRight />
      </div>}
    </Link>
  )
}
CardCatalogImage.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.node,
  to: PropTypes.string
}

export default React.memo(CardCatalogImage)
