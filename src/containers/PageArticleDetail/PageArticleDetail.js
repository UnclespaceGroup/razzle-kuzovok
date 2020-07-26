// packages
import React from 'react'
import Banner from 'components/Banner/Banner'
import ContentConstructor from 'components/ContentConstructor/ContentConstructor'
import usePageArticleDetail from 'containers/PageArticleDetail/usePageArticleDetail'
import Tabs from 'components/Tabs/Tabs'
import Layout from 'components/Layout/Layout'

const PageArticleDetail = () => {
  const { banner, content } = usePageArticleDetail()
  return (
    <>
      <Banner {...banner} />
      <Tabs />
      <Layout withAside>
        <ContentConstructor content={content} />
      </Layout>
    </>
  )
}
export default React.memo(PageArticleDetail)
