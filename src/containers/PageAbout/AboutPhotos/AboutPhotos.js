// packages
import React from 'react'
import ContentConstructor from 'components/ContentConstructor/ContentConstructor'
import useAboutPhotos from 'containers/PageAbout/AboutPhotos/useAboutPhotos'
import Layout from 'components/Layout/Layout'

const AboutPhotos = () => {
  const { content } = useAboutPhotos()

  return (
    <Layout>
      <ContentConstructor content={content} />
    </Layout>
  )
}
export default React.memo(AboutPhotos)
