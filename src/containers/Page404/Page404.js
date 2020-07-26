import React from 'react'
import css from 'containers/Page404/Page404.module.scss'
import Layout from 'components/Layout/Layout'
import Button from 'components/Button/Button'
import useDevice from 'hooks/useDevice'

const Page404 = () => {
  const { currentDevice } = useDevice()
  return (
    <div className={css[currentDevice]}>
      <div className={css.header}>
        <Layout>
        404
        </Layout>
      </div>
      <Layout>
        <h1>Страница не найдена</h1>
        <div className={css.text}>
        Возможно, ссылка, по которой вы перешли, устарела
        </div>
        <Button to='/'>На главную</Button>
      </Layout>
    </div>
  )
}
export default React.memo(Page404)
