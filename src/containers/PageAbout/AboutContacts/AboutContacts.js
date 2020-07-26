import React from 'react'
import css from 'containers/PageAbout/AboutContacts/aboutContacts.module.scss'
import IconWrapper from 'components/IconWrapper/IconWrapper'
import Layout from 'components/Layout/Layout'
import SectionTitle from 'components/SectionTitle/SectionTitle'
import useDevice from 'hooks/useDevice'
import useAboutContacts from 'containers/PageAbout/AboutContacts/useAboutContacts'

const AboutContacts = () => {
  const { currentDevice } = useDevice()
  const { phone, mail, vk, address } = useAboutContacts()

  return (
    <Layout className={css[currentDevice]}>
      <div>
        <SectionTitle title='Основные контакты' />
        {phone && <IconWrapper icon='phone'><a href={`tel:${phone}`}>{phone}</a></IconWrapper>}
        {address && <IconWrapper icon='address'>{address}</IconWrapper>}
        {mail && <IconWrapper icon='mail'>{mail}</IconWrapper>}
        {vk && <IconWrapper icon='vk'>{vk}</IconWrapper>}
      </div>
    </Layout>
  )
}

export default React.memo(AboutContacts)
