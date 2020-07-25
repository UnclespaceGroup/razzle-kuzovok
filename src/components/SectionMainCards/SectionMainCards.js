import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import css from 'components/SectionMainCards/SectionMainCards.module.scss'
import Layout from 'components/Layout/Layout'
import BgImage from 'components/BgImage/BgImage'
import useDevice from 'hooks/useDevice'

const SectionMainCards = ({ cards }) => {
  const { currentDevice } = useDevice()
  return (
    <Layout className={css[currentDevice]}>
      {
        _.map(cards, (card, key) => (
          <BgImage key={key} img={card.img} className={css.card}>
            <div className={css.wrapper}>
              <div className={css.title}>{card.title}</div>
              <div className={css.text}>{card.text}</div>
            </div>
          </BgImage>
        ))
      }
    </Layout>
  )
}
SectionMainCards.propTypes = {
  cards: PropTypes.array
}
export default SectionMainCards
