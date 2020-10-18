import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from 'reducers'
import App from 'App/App'
import ScrollToTop from 'utils/ScrollToTop'

const store = configureStore(window.__PRELOADED_STATE__)

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
