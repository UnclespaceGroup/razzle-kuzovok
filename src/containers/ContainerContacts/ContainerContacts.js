import React from 'react'
import _ from 'lodash'
import css from 'containers/ContainerContacts/ContainerContacts.module.scss'
import { MdMail } from 'react-icons/md'
import { FaVk, FaInstagram } from 'react-icons/fa'
import useDevice from 'hooks/useDevice'
import Layout from 'components/Layout/Layout'
import MapYandex from 'components/MapYandex/MapYandex'
import useContainerContacts from 'containers/ContainerContacts/useContainerContacts'

const ContainerContacts = () => {
  const { currentDevice } = useDevice()
  const { items, vk, email } = useContainerContacts()

  return (
    <div className={css[currentDevice]}>
      <Layout className={css.wrapper}>
        <div className={css.map}>
          <MapYandex />
        </div>
        <div className={css.content}>
          <div className={css.title}>Сервисный центр КУЗОВОК</div>
          <ul>
            {
              _.map(items, ({ icon, title }, key) => (
                <li className={css.address} key={key}>
                  {icon}
                  <div>{title}</div>
                </li>
              )
              )
            }
            <li className={css.social}>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a target='_blank' href={vk}><FaVk size='3rem' /></a>
              {/* eslint-disable-next-line react/jsx-no-target-blank */}
              <a target='_blank' href={`mailto:${email}`}><MdMail size='3rem' /></a>
              <a><FaInstagram size='3rem' /></a>
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  )
}

export default React.memo(ContainerContacts)
