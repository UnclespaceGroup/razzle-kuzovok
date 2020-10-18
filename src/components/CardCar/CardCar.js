import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import css from 'components/CardCar/CardCar.module.scss'
import { Link } from 'react-router-dom'
import { getDate, getStatusByCode } from 'utils/getNameByValue'
import useDevice from 'hooks/useDevice'

const CardCar = ({ to = '/', img, title, text, className, ready, date }) => {
  const { currentDevice } = useDevice()
  const status = ready ? 1 : 0

  return (
    <Link to={to} className={cn(css[currentDevice], className)}>
      <div>
        <div className={css.img} style={{ backgroundImage: `url("${img}")` }} />
        <div className={cn(css.subtitle, css[`status-${status}`])} dangerouslySetInnerHTML={{ __html: getStatusByCode(status) }} />
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>

      </div>
      <div className={css.footer}>
        <div className={css.date}>{getDate(date)}</div>
        <div className={css.link}>Подробнее</div>
      </div>
    </Link>
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
