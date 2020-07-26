import React from 'react'
import css from 'components/ContentConstructor/ContentText/contentText.module.scss'
import useDevice from 'hooks/useDevice'
import Wysiwyg from 'components/Wysiwyg/Wysiwyg'

const ContentText = ({ text }) => {
  const { currentDevice } = useDevice()
  return (
    <div className={css[currentDevice]}>
      <Wysiwyg>{text}</Wysiwyg>
    </div>
  )
}
export default React.memo(ContentText)
