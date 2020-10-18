import React from 'react'
import 'styles/index.scss'
import Routes from 'containers/Routes'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'
import ContainerFooter from 'containers/ContainerFooter/ContainerFooter'
import 'static/roboto/stylesheet.css'
import HelmetComponent from 'components/HelmetComponent/ContainerHelmet'

const App = () => (
  <>
    <HelmetComponent
      title='Кузовок - станция кузовного ремонта'
    />
    <ContainerHeader />
    <Routes />
    <ContainerFooter />
  </>
)

export default App
