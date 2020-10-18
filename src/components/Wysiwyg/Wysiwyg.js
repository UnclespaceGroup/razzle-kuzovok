import React from 'react'
import PropTypes from 'prop-types'
import css from './wysiwigCommon.module.scss'
import cn from 'classnames'
import useDevice from 'hooks/useDevice'
import Markdown from 'react-markdown'
import gfm from 'remark-gfm'

const Wysiwyg = ({ children }) => {
  const { currentDevice } = useDevice()

  return (
    <Markdown
      className={cn(css[currentDevice], css.container)}
      plugins={[gfm]}
    >
      {children}
    </Markdown>
  )
}
Wysiwyg.propTypes = {
  children: PropTypes.node
}

export default React.memo(Wysiwyg)
