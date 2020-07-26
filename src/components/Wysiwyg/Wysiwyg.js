import React from 'react'
import PropTypes from 'prop-types'
import css from './wysiwigCommon.module.scss'
import useDevice from 'hooks/useDevice'
import Markdown from 'react-markdown'

const Wysiwyg = ({ children }) => {
  const { currentDevice } = useDevice()

  return (
    <Markdown className={css[currentDevice]}>
      {children}
    </Markdown>
  )
}
Wysiwyg.propTypes = {
  children: PropTypes.node
}

export default React.memo(Wysiwyg)
