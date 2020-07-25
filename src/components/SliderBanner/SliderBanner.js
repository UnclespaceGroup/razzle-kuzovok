import React, { useRef } from 'react'
import cn from 'classnames'
import css from 'components/SliderBanner/SliderBanner.module.scss'
import Slider from 'components/Slider/Slider'
import BgImage from 'components/BgImage/BgImage'
import Button from 'components/Button/Button'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'
import Layout from 'components/Layout/Layout'
import IconPopapDesktop from 'components/IconPopap/desktop/IconPopapDesktop'
import useDevice from 'hooks/useDevice'

const SliderBanner = ({ items, className }) => {
  const swiperRef = useRef(null)
  const { currentDevice, isLarge } = useDevice()

  return (
    <div className={cn(css[currentDevice], className)}>
      <Slider
        getSwiper={ref => { swiperRef.current = ref }}
        effect={'fade'}
        items={items}
        loop
        autoplayDelay={10000}
      >
        <Slide />
      </Slider>
      {
        (items?.length > 1) && isLarge &&
        <div className={css.btns}>
          <Layout className={css.wrapper}>
            <div className={css.prev}><FaArrowLeft size={'3rem'}
              onClick={() => swiperRef.current?.slidePrev()}
            /></div>
            <div className={css.next}><FaArrowRight size={'3rem'}
              onClick={() => swiperRef.current?.slideNext()}
            /></div>
          </Layout>
        </div>
      }
      {isLarge &&
      <Layout className={css.popapWrapper}>
        <IconPopapDesktop className={css.popap}/>
      </Layout>}
    </div>
  )
}

const Slide = ({ img = '', title, text, url, onClick }) => (
  <BgImage img={img} withLoader className={css.back}>
    <div className={css.slide}>
      <Layout className={css.slideWrapper}>
        <div className={css.title}>{title}</div>
        <div className={css.text}>{text}</div>
        {(url || onClick) && <div>
          <Button
            to={url}
            onClick={onClick}
          >Перейти</Button>
        </div>}
      </Layout>
    </div>
    <div id={'toThis'} />
  </BgImage>
)

export default React.memo(SliderBanner)
