import React, { useState } from 'react'
import PropTypes from 'prop-types'
import css from './ContactsPopap.module.scss'
import cn from 'classnames'
import { MdMessage, MdPhone, MdClose } from 'react-icons/md'
import { FaVk } from 'react-icons/fa'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'

const ContactsPopap = ({ className }) => {
  const [isOpen, setIsOpen] = useState()
  const {
    response: {
      phone,
      Email: email,
      Vk: vk
    } = {}
  } = useRemoteData(FETCH_CONTACTS, [])

  return (
    <div className={cn(className)}>
      <div className={css.wrapper}>
        {
          isOpen && <div className={css.modal}>
            <h3 className={css.title}>Свяжитесь с нами</h3>
            <div className={css.item}><MdPhone /><div>{phone}</div></div>
            {vk && <div className={css.item}><FaVk />{vk}</div>}
            {email && <div className={css.item}><MdMessage />{email}</div>}
            <div className={css.close} onClick={() => setIsOpen(false)}><MdClose /></div>
          </div>
        }
        <div className={css.icon} onClick={() => setIsOpen(!isOpen)}>
          <MdMessage />
        </div>
      </div>
    </div>
  )
}
ContactsPopap.propTypes = {
  className: PropTypes.string
}
export default React.memo(ContactsPopap)
