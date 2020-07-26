import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from 'components/CardCar/CardCar.module.scss'
import { Link } from 'react-router-dom'
import { getDate, getStatusByCode } from 'utils/getNameByValue'
import useDevice from 'hooks/useDevice'

const CardCar = ({ to = '/', img, title, text, className, status = 0, date }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={cn(css[currentDevice], className)}>
      <div>
        <div className={css.img} style={{ backgroundImage: `url("${img}")` }} />
        <div className={cn(css.subtitle, css[`status-${status}`])} dangerouslySetInnerHTML={{ __html: getStatusByCode(status) }} />
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>

      </div>
      <div className={css.footer}>
        <div className={css.date}>{getDate(date)}</div>
        <Link className={css.link} to={to} >Подробнее</Link>
      </div>
    </div>
  )
}
CardCar.propTypes = {
  img: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  className: PropTypes.string,
  date: PropTypes.node,
  to: PropTypes.string,
  status: PropTypes.any
}

export default React.memo(CardCar)
