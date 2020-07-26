import React from 'react'
import useServiceDetail from 'containers/PageServiceDetail/useServiceDetail'
import { PAGE_SERVICES } from 'constants/routes'
import ContainerHelmet from 'components/HelmetComponent/ContainerHelmet'
import Banner from 'components/Banner/Banner'
import ContainerContacts from 'containers/ContainerContacts/ContainerContacts'
import ContentConstructor from 'components/ContentConstructor/ContentConstructor'
import Layout from 'components/Layout/Layout'

const PageServiceDetail = () => {
  const { banner, helmetData, content } = useServiceDetail()

  return (
    <>
      <ContainerHelmet {...helmetData} />
      <Banner
        backLink={PAGE_SERVICES}
        {...banner}
      />
      <Layout withAside>
        <ContentConstructor content={content} />
      </Layout>
      <ContainerContacts />
    </>
  )
}

export default React.memo(PageServiceDetail)
