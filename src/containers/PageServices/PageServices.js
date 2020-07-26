import React from 'react'
import useServices from 'containers/PageServices/useServices'
import Banner from 'components/Banner/Banner'
import Tabs from 'components/Tabs/Tabs'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'
import css from './pageServices.module.scss'
import Layout from 'components/Layout/Layout'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import RowCards from 'components/RowCards/RowCards'
import CardCatalogImage from 'components/CardCatalogImage/CardCatalogImage'
import ContainerContacts from 'containers/ContainerContacts/ContainerContacts'

const PageServices = () => {
  const { mainCards, helmetData, cards, bannerData } = useServices()
  return (
    <>
      <HelmetComponent {...helmetData} />
      <Banner
        {...bannerData}
      />
      <Tabs />
      <Layout>
        <SectionTitle title='Основные услуги' count={mainCards?.length} />
        <div className={css.main}>
          <RowCards items={mainCards}>
            <CardCatalogImage />
          </RowCards>
        </div>
        {
          !!cards?.length &&
          <div className={css.cards}>
            <SectionTitle title='Все услуги' count={cards?.length} />
            <RowCards items={cards}>
              <CardCatalogImage />
            </RowCards>
          </div>
        }
      </Layout>
      <div className={css.bottom}>
        <ContainerContacts />
      </div>
    </>
  )
}

export default React.memo(PageServices)