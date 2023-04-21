import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

// Define the table data interface
// interface TableData {
//   account: string
//   time: string
//   date: string
//   whoAccepted: string
//   whoPaid: string
//   amount: string
//   paymentStatus: string
// }

// Define the table column header names
// const columns: string[] = [
//   "Счёт",
//   "Время",
//   "Дата",
//   "Кто принял",
//   "Кто оплатил",
//   "Сумма",
//   "Статус оплаты",
// ]

// {
//   "id": 1,
//   "client_card": {
//     "fio": "Danilaa Alyoshin",
//     "payment_status": 2
//   },
//   "course": {
//     "name": "ux-ui"
//   },
//   "payment_type": {
//     "id": 1,
//     "name": "card"
//   },
//   "last_payment_date": "2023-04-14",
//   "payment_time": "17:34",
//   "amount": "8000.00",
//   "acceptBy": "Sasuke Uchiha"
// },

const rows = [
  {
    id: 1,
    payment_type: "Эл. кошелек",
    payment_time: "15:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Оплачено",
  },
  {
    id: 2,
    payment_type: "Наличными",
    payment_time: "13:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Оплачено",
  },
  {
    id: 3,
    payment_type: "Картой",
    payment_time: "17:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Оплатил полностью",
  },
  {
    id: 4,
    payment_type: "Эл. кошелек",
    payment_time: "16:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Оплатил полностью",
  },
  {
    id: 5,
    payment_type: "Наличными",
    payment_time: "17:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Оплатил полностью",
  },
  {
    id: 6,
    payment_type: "Картой",
    payment_time: "20:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Должен оплатить",
  },
  {
    id: 7,
    payment_type: "Картой",
    payment_time: "17:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Должен оплатить",
  },
  {
    id: 8,
    payment_type: "Наличными",
    payment_time: "18:34",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Скоро оплата",
  },
  {
    id: 9,
    payment_type: "Наличными",
    payment_time: "17:50",
    last_payment_date: "2023-04-14",
    acceptBy: "Бексултан Маратов",
    fio: "Danilaa Alyoshin",
    amount: "8000.00",
    payment_status: "Скоро оплата",
  },
]

export { rows }
