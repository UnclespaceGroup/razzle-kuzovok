import { PAGE_ABOUT, PAGE_ABOUT_MAP, PAGE_ABOUT_PHOTOS } from 'constants/routes'
import { useRemoteData } from '@aic/react-remote-data-provider'
import FETCH_ABOUT from 'api/fetch/FETCH_ABOUT'

const useAbout = () => {
  const {
    response: {
      ...banner
    } = {}
  } = useRemoteData(FETCH_ABOUT, [])

  const items = [
    {
      to: PAGE_ABOUT,
      title: 'Контакты'
    },
    {
      to: PAGE_ABOUT_PHOTOS,
      title: 'Фото станции'
    },
    {
      to: PAGE_ABOUT_MAP,
      title: 'Как добраться'
    }
  ]

  const helmetData = {
    title: 'О сервисе кузовного ремонта Кузовок',
    description: `
    Контактные данные и описание сервиса кузовного ремонта кузовок.
     Фотографии и видео станции`
  }

  return {
    helmetData,
    items,
    banner
  }
}

export default useAbout
