// packages
import React from 'react'
import _ from 'lodash'
import Banner from 'components/Banner/Banner'
import usePageCarDetail from 'containers/PageCarDetail/usePageCarDetail'
import { PAGE_CARS } from 'constants/routes'
import Tabs from 'components/Tabs/Tabs'
import ContentConstructor from 'components/ContentConstructor/ContentConstructor'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import Layout from 'components/Layout/Layout'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'

const PageCarDetail = () => {
  const { banner, content, works, meta } = usePageCarDetail()

  return (
    <div>
      <HelmetComponent {...meta} />
      <Banner backLink={PAGE_CARS} {...banner} />
      <Tabs />
      <Layout withAside>
        <div>
          {content && <ContentConstructor content={content} />}
          {
            _.map(works, ({ title, content: workContent }, key) => (
              <div key={key}>
                <SectionTitle title={title} />
                <ContentConstructor content={workContent} />
              </div>
            ))
          }
        </div>
      </Layout>
    </div>
  )
}
export default React.memo(PageCarDetail)
