import React from 'react'
import List from 'components/List/List'
import CardPaperItem from 'components/CardPaperItem/CardPaperItem'
import Layout from 'components/Layout/Layout'
import usePageArticle from 'containers/PageArticle/usePageArticle'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'
import Banner from 'components/Banner/Banner'
import Tabs from 'components/Tabs/Tabs'

const PageArticle = () => {
  const { banner, helmetData, items } = usePageArticle()
  return (
    <>
      <HelmetComponent {...helmetData} />
      <Banner {...banner} />
      <Tabs />
      <Layout>
        <List
          marginBetween={80}
          items={items}
        >
          <CardPaperItem />
        </List>
      </Layout>
    </>
  )
}

export default React.memo(PageArticle)
