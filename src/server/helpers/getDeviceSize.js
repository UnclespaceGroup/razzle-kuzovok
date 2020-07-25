// packages
import UAParser from 'ua-parser-js'

const getDeviceSize = (req) => {
  // определяем размер страницы по заголовку 'user-agent'
  const uaParser = new UAParser(req.headers['user-agent'])

  // определяем тип устройства
  const isSmall = uaParser.getDevice()?.type === 'mobile'

  return {
    currentDevice: isSmall ? 'isSmall' : 'isLarge',
    isLarge: !isSmall,
    isSmall
  }
}

export default getDeviceSize
