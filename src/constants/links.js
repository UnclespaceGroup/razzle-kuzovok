import { PAGE_ABOUT, PAGE_ARTICLE, PAGE_REVIEWS, PAGE_SERVICES, PAGE_CARS } from 'constants/routes'

export const menuItems = [
  {
    title: 'Услуги станции', href: PAGE_SERVICES
  },
  {
    title: 'Последние работы', href: PAGE_REVIEWS
  },
  {
    title: 'Автомобили в ремонте', href: PAGE_CARS
  },
  {
    title: 'Статьи', href: PAGE_ARTICLE
  },
  {
    title: 'О нас', href: PAGE_ABOUT
  }
]

export const menu = {
  mainItems: [
    {
      to: PAGE_SERVICES,
      title: 'Услуги'
    },
    {
      to: PAGE_CARS,
      title: 'Работы'
    },
    {
      title: 'Последнее',
      to: PAGE_REVIEWS
    },
    {
      to: PAGE_ABOUT,
      title: 'О нас'
    },
    {
      to: PAGE_ARTICLE,
      title: 'Полезные статьи'
    }
  ]
}
