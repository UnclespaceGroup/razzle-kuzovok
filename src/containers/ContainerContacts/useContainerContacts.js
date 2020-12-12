import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'
import { MdPlace, MdPhone } from 'react-icons/md'
import { FaClock } from 'react-icons/fa'
import React from 'react'

const useContainerContacts = () => {
  const {
    response: {
      phone,
      address,
      Vk: vk,
      Email: email,
      time
    } = {}
  } = useRemoteData(FETCH_CONTACTS, [])

  const items = [
    {
      icon: <MdPhone />,
      title: phone
    },
    {
      icon: <MdPlace />,
      title: address
    },
    {
      icon: <FaClock />,
      title: time
    }
  ]

  return {
    items,
    vk,
    email
  }
}
export default useContainerContacts
