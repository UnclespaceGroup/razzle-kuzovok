import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from 'components/Slider/Slider.module.scss'
import Swiper from 'react-id-swiper'
import cn from 'classnames'
import 'swiper/swiper.scss'

const Slider = ({ items, children, loop, autoplayDelay, getSwiper, className, slideClassName, ...params }) => {
  if (items?.length < 2) {
    return (
      <div className={css.slide}>{React.cloneElement(children, { ...items?.[0] })}</div>
    )
  }
  return (
    <div className={className} >
      <Swiper
        getSwiper={ref => getSwiper(ref)}
        observer
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true
        }}
        rebuildOnUpdate
        loop={loop || true}
        autoplay={autoplayDelay && {
          delay: autoplayDelay
        }}
        containerClass={`${css.container}`}
        {...params}
      >
        {items ? _.map(items, (item, key) => (
          <div key={key} className={cn(css.slide, slideClassName)}>
            {
              React.cloneElement(children, { ...item })
            }
          </div>
        ))
          : children}
      </Swiper>
    </div>
  )
}
Slider.propTypes = {
  getSwiper: PropTypes.func,
  items: PropTypes.array,
  children: PropTypes.node,
  loop: PropTypes.bool,
  autoplayDelay: PropTypes.number,
  slideClassName: PropTypes.any,
  className: PropTypes.string
}
Slider.defaultProps = {
  getSwiper: () => {}
}

export default React.memo(Slider)
