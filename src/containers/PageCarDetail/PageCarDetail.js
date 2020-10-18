// packages
import React from 'react'
import _ from 'lodash'
import Banner from 'components/Banner/Banner'
import usePageCarDetail from 'containers/PageCarDetail/usePageCarDetail'
import { PAGE_CARS } from 'constants/routes'
import Tabs from 'components/Tabs/Tabs'
import ContentConstructor from 'components/ContentConstructor/ContentConstructor'
import Layout from 'components/Layout/Layout'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'
import css from './pageCarDetail.module.scss'
import useDevice from 'hooks/useDevice'

const PageCarDetail = () => {
  const { banner, content, works, meta } = usePageCarDetail()
  const { currentDevice } = useDevice()
  return (
    <div className={css[currentDevice]}>
      <HelmetComponent {...meta} />
      <Banner backLink={PAGE_CARS} {...banner} />
      <Tabs />
      <Layout withAside>
        <div>
          {content && <ContentConstructor content={content} />}
          {
            _.map(works, ({ title, content: workContent, date }, key) => (
              <div key={key}>
                <h2 className={css.title}>{title}</h2>
                <div className={css.date}>{date}</div>
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
