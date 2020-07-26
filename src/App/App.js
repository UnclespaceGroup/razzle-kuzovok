import React from 'react'
import 'styles/index.scss'
import Routes from 'containers/Routes'
import ContainerHeader from 'containers/ContainerHeader/ContainerHeader'
import ContainerFooter from 'containers/ContainerFooter/ContainerFooter'

const App = () => (
  <>
    <ContainerHeader />
    <Routes />
    <ContainerFooter />
  </>
)

export default App
