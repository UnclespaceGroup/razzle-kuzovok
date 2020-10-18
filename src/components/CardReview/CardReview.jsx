// packages
import React from 'react'
import cn from 'classnames'
import css from './cardReview.module.scss'
import ContentConstructor from 'components/ContentConstructor/ContentConstructor'
import Layout from 'components/Layout/Layout'
import { useToggle } from 'react-use'
import Button from 'components/Button/Button'
import useDevice from 'hooks/useDevice'

const CardReview = ({ date, title, content }) => {
  const { currentDevice } = useDevice()
  const [isOpen, setOpen] = useToggle(false)

  return (
    <div className={cn(css.container, isOpen ? css.open : css.closed, css[currentDevice])}>
      <Layout withAside>
        <div>
          <h3 className={css.title}>{title}</h3>
          <div className={css.date}>{date}</div>
          <ContentConstructor content={content} />
        </div>
      </Layout>
      <footer
        className={isOpen ? css.footer : css.footerFixed}
      >
        {!isOpen && <div className={css.grad} />}
        <div className={css.white}>
          <Button
            onClick={setOpen}
            type='button'
            className={css.button}
            classname='black'
          >
            {isOpen ? 'Скрыть' : 'Открыть полностью'}
          </Button>
        </div>
      </footer>
    </div>
  )
}
export default React.memo(CardReview)
