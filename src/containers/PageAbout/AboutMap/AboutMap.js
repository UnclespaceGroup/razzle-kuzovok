// packages
import React from 'react'
import MapYandex from 'components/MapYandex/MapYandex'
import css from './aboutMap.module.scss'
import useDevice from 'hooks/useDevice'

const AboutMap = () => {
  const { currentDevice } = useDevice()
  return (
    <div className={css[currentDevice]}>
      <MapYandex />
    </div>
  )
}
export default React.memo(AboutMap)
