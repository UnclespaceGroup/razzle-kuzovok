import React from 'react'
import cn from 'classnames'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Layout from 'components/Layout/Layout'
import css from 'components/AdvantagesRow/AdvantagesRow.module.scss'
import useDevice from 'hooks/useDevice'

const AdvantagesRow = ({ items, className }) => {
  const { currentDevice } = useDevice()
  return (
    <Layout className={cn(css[currentDevice], className)}>
      {
        _.map(items, ({img, title, text}, key) => (
          <div key={key} className={css.item}>
            <div className={css.icon} style={{backgroundImage: `url("${img}")`}}/>
            <div className={css.title}>{title}</div>
            <div className={css.text}>{text}</div>
          </div>
        ))
      }
    </Layout>
  )
}
AdvantagesRow.propTypes = {
  items: PropTypes.array
}
export default React.memo(AdvantagesRow)
