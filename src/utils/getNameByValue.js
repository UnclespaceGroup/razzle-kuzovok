import moment from 'moment'
import 'moment/locale/ru'
moment.locale('ru')

export const STATUSES = ['В работе', 'Выполнено', 'Архив']

export const getStatusByCode = (code = 0) => {
  return STATUSES[code]
}

export const getDate = (date) => {
  return moment(date).format('LL')
}
