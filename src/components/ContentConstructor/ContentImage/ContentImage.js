import React from 'react'
import css from './contentImage.module.scss'
import useDevice from 'hooks/useDevice'
import _ from 'lodash'
import { getImgName } from 'utils/getImgName'

const ContentImage = ({ img: images, title }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={css[currentDevice]}>
      {
        _.map(images, (img, key) => (
          <img key={key} src={getImgName(img)} alt='' />
        ))
      }
      <div className={css.title}>{title}</div>
    </div>
  )
}
export default React.memo(ContentImage)
