import React, { useState } from 'react'
import PropTypes from 'prop-types'
import css from 'components/IconPopap/IconPopap.module.scss'
import cn from 'classnames'
import { MdMessage, MdPhone, MdClose } from 'react-icons/md'
import { FaVk } from 'react-icons/fa'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_CONTACTS from 'api/fetch/FETCH_CONTACTS'

const IconPopap = ({ className }) => {
  const [isOpen, setIsOpen] = useState()
  const {
    response: {
      phone,
      email,
      vk
    } = {}
  } = useRemoteData(FETCH_CONTACTS)

  return (
    <div className={cn(className)}>
      <div className={css.wrapper}>
        {
          isOpen && <div className={css.modal}>
            <div className={css.item}><h3>Свяжитесь с нами</h3></div>
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
IconPopap.propTypes = {
  className: PropTypes.string
}
export default React.memo(IconPopap)
