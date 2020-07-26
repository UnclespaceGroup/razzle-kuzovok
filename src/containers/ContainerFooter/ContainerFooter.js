import React from 'react'
import Footer from 'components/Footer/Footer'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'

const ContainerFooter = () => {
  const {
    response
  } = useRemoteData(FETCH_CONTACTS)

  return (
    <Footer {...response} />
  )
}
export default ContainerFooter
