import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import ContentText from 'components/ContentConstructor/ContentText/ContentText'
import ContentImage from 'components/ContentConstructor/ContentImage/ContentImage'

const contentTypes = {
  textBlock: 'text-block.text-block',
  imgBlock: 'img-block.img-block'
}

const getContentByType = ({ __component, ...item }, key) => {
  switch (__component) {
    case contentTypes.textBlock:
      return <ContentText {...item} key={key} />
    case contentTypes.imgBlock:
      return <ContentImage {...item} key={key} />
    default:
      return <div />
  }
}

const ContentConstructor = ({ content }) => {
  return (
    <div>
      {_.map(content, getContentByType)}
    </div>)
}
ContentConstructor.propTypes = {
  content: PropTypes.array
}
export default React.memo(ContentConstructor)
