import http from 'http'

let app = require('server/server').default

const server = http.createServer(app)

let currentApp = app

server
  .listen(process.env.PORT || 3000, () => {
    console.log('🚀 started on http://localhost:3000')
  })
  .on('error', error => {
    console.log(error)
  })

if (module.hot) {
  console.log('✅  Server-side HMR Enabled!')

  module.hot.accept('./server/server', () => {
    console.log('🔁  HMR Reloading `./server`...')

    try {
      app = require('./server/server').default
      server.removeListener('request', currentApp)
      server.on('request', app)
      currentApp = app
    } catch (error) {
      console.error(error)
    }
  })
}
