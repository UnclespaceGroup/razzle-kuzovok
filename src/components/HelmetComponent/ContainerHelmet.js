import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const HelmetComponent = ({ title, description }) => (
  <div>
    <Helmet>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
    </Helmet>
  </div>
)
HelmetComponent.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
export default React.memo(HelmetComponent)
