import React from 'react'
import useServiceDetail from 'containers/PageServiceDetail/useServiceDetail'
import { PAGE_SERVICES } from 'constants/routes'
import ContainerHelmet from 'components/HelmetComponent/ContainerHelmet'
import Banner from 'components/Banner/Banner'
import ContainerContacts from 'containers/ContainerContacts/ContainerContacts'

const PageServiceDetail = () => {
  const { banner, helmetData } = useServiceDetail()

  return (
    <>
      <ContainerHelmet {...helmetData} />
      <Banner
        backLink={PAGE_SERVICES}
        {...banner}
      />
      <ContainerContacts />
    </>
  )
}

export default React.memo(PageServiceDetail)
