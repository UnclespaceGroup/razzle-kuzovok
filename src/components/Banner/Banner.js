import React from 'react'
import PropTypes from 'prop-types'
import css from 'components/Banner/Banner.module.scss'
import BgImage from 'components/BgImage/BgImage'
import Layout from 'components/Layout/Layout'
import cn from 'classnames'
import _ from 'lodash'
import { MdArrowBack } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Button from 'components/Button/Button'
import { scrollWindowTo } from 'utils/scrollWindowTo'
import useDevice from 'hooks/useDevice'
import ContactsPopap from 'components/ContactsPopap/ContactsPopap'

const Banner = ({ title, text, img, icon, backLink, beforeTitleBlock }) => {
  const { currentDevice, isLarge } = useDevice()
  return (
    <BgImage img={img} withLoader>
      <div className={cn(css[currentDevice])}>
        <Layout className={css.layout}>
          {backLink && <Link className={css.back} to={backLink}><MdArrowBack /></Link>}
          <div>
            <div className={css.row}>
              {icon && <div className={css.icon} style={{ backgroundImage: `url("${icon}")` }} />}
              <div>
                <h1 className={css.title}>{title}</h1>
                <div className={css.text}>{
                  Array.isArray(text)
                    ? <ul>
                      {_.map(text, (item, key) => <li key={key}>{item}</li>)}
                    </ul>
                    : text
                }</div>
                {
                  beforeTitleBlock
                }
                <Button className={css.btn} onClick={() => scrollWindowTo('toThis')}>Подробнее</Button>
              </div>
            </div>
          </div>
          {isLarge && <ContactsPopap className={css.popap} />}
        </Layout>
      </div>
      <div id='toThis' />
    </BgImage>
  )
}
Banner.propTypes = {
  title: PropTypes.node,
  backLink: PropTypes.string,
  text: PropTypes.node,
  img: PropTypes.string,
  icon: PropTypes.string,
  beforeTitleBlock: PropTypes.node
}

export default React.memo(Banner)
