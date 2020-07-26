import { PAGE_ABOUT, PAGE_PAPER, PAGE_REVIEWS, PAGE_SERVICES, PAGE_WORKS } from 'constants/routes'

export const menuItems = [
  {
    title: 'Услуги станции', href: PAGE_SERVICES
  },
  {
    title: 'Лента работ', href: PAGE_REVIEWS
  },
  {
    title: 'Автомобили в ремонте', href: PAGE_WORKS
  },
  {
    title: 'Статьи', href: PAGE_PAPER
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
      to: PAGE_WORKS,
      title: 'Работы'
    },
    {
      to: PAGE_ABOUT,
      title: 'О нас'
    },
    {
      to: PAGE_PAPER,
      title: 'Полезные статьи'
    }
  ]
}
