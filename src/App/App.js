import React from 'react'
import 'styles/index.scss'
import Routes from 'containers/Routes'
import ContainerMainMenuDesktop from 'containers/ContainerHeader/ContainerHeader'

const App = () => (
  <>
    <ContainerMainMenuDesktop />
    <Routes />
  </>
)

export default App
