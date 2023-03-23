import { IStudentState } from '../types';
import { useState } from 'react';
import { useAppSelector } from './../../../hooks/redux';
import { fetchAllStudents } from './../redux/asyncActions';
import { useEffect } from 'react';
import { useAppDispatch } from '../../../hooks/redux';
import { IData } from './../types/index';

const  today = new Date()
 
const now = today.toLocaleTimeString('ru-RU')
const sliceNow = now.slice(0, 2)

// const ids: number[] = generateIds()

// interface IDepartment {
//   id: number
//   name: string
// }
// interface IPaymentMethod {
//   id: number
//   name: string
// }

// interface IStatus {
//   id: number
//   name: string
// }

// interface ISource {
//   id: number
//   name: string
// }

// interface IReason {
//   id: number
//   name: string
// }

// interface IStudent {
//   time?: string
//   id: number
//   first_name: string
//   last_name: string
//   surname?: string
//   notes: string
//   phone: string
//   laptop: boolean
//   department: IDepartment
//   came_from: ISource
//   payment_method?: IPaymentMethod
//   status?: IStatus
//   paid: boolean
//   reason: IReason
//   on_request: boolean
// }

// const dispatch = useAppDispatch()

// useEffect(() => {
//   dispatch(fetchAllStudents())
// }, [dispatch])

// const students = useAppSelector((state) => state.client.student)
// const [state, newState] = useState(students)
// console.log(students)

const initialData: IData = {
  students: [],
  // students: [
  //   {
  //     time: `${sliceNow} ч.`,
  //     id: 1,
  //     first_name: "Даниил",
  //     last_name: 'Алешин',
  //     surname: "Сергеевич",
  //     notes: 'Родной, вообще не переживай на счет этого',
  //     phone: "+996551552770",
  //     laptop: true,
  //     department: {
  //       id: 1,
  //       name: 'UX/UI',
  //     },
  //     came_from	: "Через Инстаграм",
  //     payment_method: {
  //       id: 1,
  //       name: 'Наличными'
  //     },
  //     status: 'Ждёт звонка'
  //   },
  //   {
  //     time: `${sliceNow} ч.`,
  //     id: 2,
  //     first_name: "Руслан",
  //     last_name: 'Сабитов',
  //     surname: "Сабитович",
  //     notes: 'Родной, вообще не переживай на счет этого',
  //     phone: "+996551552770",
  //     laptop: true,
  //     department: {
  //       id: 2,
  //       name: 'Front-End',
  //     },
  //     came_from	: "Через Инстаграм",
  //     payment_method: {
  //       id: 1,
  //       name: 'Наличными'
  //     },
  //     status: 'Ждёт звонка'
  //   },
  //   {
  //     time: `${sliceNow} ч.`,
  //     id: 3,
  //     first_name: "Хамза",
  //     last_name: 'Авазбеков',
  //     surname: "Авазбекович",
  //     notes: 'Родной, вообще не переживай на счет этого',
  //     phone: "+996551552770",
  //     laptop: true,
  //     department: {
  //       id: 2,
  //       name: 'Front-End',
  //     },
  //     came_from	: "Через Инстаграм",
  //     payment_method: {
  //       id: 1,
  //       name: 'Наличными'
  //     },
  //     status: 'Звонок совершён'
  //   },
  //   {
  //     time: `${sliceNow} ч.`,
  //     id: 4,
  //     first_name: "Бекмырза",
  //     last_name: 'Джумакадыров',
  //     surname: "Самаганович",
  //     notes: 'Родной, вообще не переживай на счет этого',
  //     phone: "+996551552770",
  //     laptop: true,
  //     department: {
  //       id: 2,
  //       name: 'Front-End',
  //     },
  //     came_from	: "Через Инстаграм",
  //     payment_method: {
  //       id: 1,
  //       name: 'Наличными'
  //     },
  //     status: 'Записан на пробный урок'
  //   },
  //   {
  //     time: `${sliceNow} ч.`,
  //     id: 5,
  //     first_name: "Михаил",
  //     last_name: 'Кокорин',
  //     surname: "Михаилович",
  //     notes: 'Родной, вообще не переживай на счет этого',
  //     phone: "+996551552770",
  //     laptop: true,
  //     department: {
  //       id: 2,
  //       name: 'Back-End',
  //     },
  //     came_from	: "Через Инстаграм",
  //     payment_method: {
  //       id: 1,
  //       name: 'Наличными'
  //     },
  //     status: 'Посетил пробный урок'
  //   },
  //   {
  //     time: `${sliceNow} ч.`,
  //     id: 6,
  //     first_name: "Маматазим",
  //     last_name: 'Козубаев',
  //     surname: "Козубаевич",
  //     notes: 'Родной, вообще не переживай на счет этого',
  //     phone: "+996551552770",
  //     laptop: true,
  //     department: {
  //       id: 2,
  //       name: 'Back-End',
  //     },
  //     came_from	: "Через Инстаграм",
  //     payment_method: {
  //       id: 1,
  //       name: 'Наличными'
  //     },
  //     status: 'Посетил пробный урок'
  //   },
  //   {
  //     time: `${sliceNow} ч.`,
  //     id: 7,
  //     first_name: "Бермет",
  //     last_name: 'Миталипова',
  //     surname: "Миталиповна",
  //     notes: 'Родной, вообще не переживай на счет этого',
  //     phone: "+996551552770",
  //     laptop: true,
  //     department: {
  //       id: 2,
  //       name: 'PM',
  //     },
  //     came_from	: "Через сайт",
  //     payment_method: {
  //       id: 1,
  //       name: 'Наличными'
  //     },
  //     status: 'Посетил пробный урок'
  //   },
  // ],
  columns: {
    "column-1": {
      id: "column-1",
      title: "Ждёт звонка",
      studentIds: [],
    },
    "column-2": {
      id: "column-2",
      title: "Звонок совершён",
      studentIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Записан на пробный урок",
      studentIds: [],
    },
    "column-4": {
      id: "column-4",
      title: "Посетил пробный урок",
      studentIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ["column-1", "column-2", "column-3", "column-4"],
}

// function generateIds(): number[] {
//   const ids: number[] = Array.from(initialData.students, (item) => item.id)
//   return ids
// }


export {initialData} 