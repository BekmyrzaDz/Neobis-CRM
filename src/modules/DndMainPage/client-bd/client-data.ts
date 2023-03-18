import { IData } from './../types/index';

const  today = new Date()
 
const now = today.toLocaleTimeString('ru-RU')
const sliceNow = now.slice(0, 2)

const initialData: IData = {
  students: [
    {
      time: `${sliceNow} ч.`,
      id: 1,
      first_name: "Даниил",
      last_name: 'Алешин',
      surname: "Сергеевич",
      notes: 'Родной, вообще не переживай на счет этого',
      phone: "+996551552770",
      laptop: true,
      department: {
        id: 1,
        name: 'UX/UI',
      },
      came_from	: "Через Инстаграм",
      payment_method: {
        id: 1,
        name: 'Наличными'
      },
      status: 'Ждёт звонка'
    },
    {
      time: `${sliceNow} ч.`,
      id: 2,
      first_name: "Руслан",
      last_name: 'Сабитов',
      surname: "Сабитович",
      notes: 'Родной, вообще не переживай на счет этого',
      phone: "+996551552770",
      laptop: true,
      department: {
        id: 2,
        name: 'Front-End',
      },
      came_from	: "Через Инстаграм",
      payment_method: {
        id: 1,
        name: 'Наличными'
      },
      status: 'Ждёт звонка'
    },
    {
      time: `${sliceNow} ч.`,
      id: 3,
      first_name: "Хамза",
      last_name: 'Авазбеков',
      surname: "Авазбекович",
      notes: 'Родной, вообще не переживай на счет этого',
      phone: "+996551552770",
      laptop: true,
      department: {
        id: 2,
        name: 'Front-End',
      },
      came_from	: "Через Инстаграм",
      payment_method: {
        id: 1,
        name: 'Наличными'
      },
      status: 'Звонок совершён'
    },
    {
      time: `${sliceNow} ч.`,
      id: 4,
      first_name: "Бекмырза",
      last_name: 'Джумакадыров',
      surname: "Самаганович",
      notes: 'Родной, вообще не переживай на счет этого',
      phone: "+996551552770",
      laptop: true,
      department: {
        id: 2,
        name: 'Front-End',
      },
      came_from	: "Через Инстаграм",
      payment_method: {
        id: 1,
        name: 'Наличными'
      },
      status: 'Записан на пробный урок'
    },
    {
      time: `${sliceNow} ч.`,
      id: 5,
      first_name: "Михаил",
      last_name: 'Кокорин',
      surname: "Михаилович",
      notes: 'Родной, вообще не переживай на счет этого',
      phone: "+996551552770",
      laptop: true,
      department: {
        id: 2,
        name: 'Back-End',
      },
      came_from	: "Через Инстаграм",
      payment_method: {
        id: 1,
        name: 'Наличными'
      },
      status: 'Посетил пробный урок'
    },
    {
      time: `${sliceNow} ч.`,
      id: 6,
      first_name: "Маматазим",
      last_name: 'Козубаев',
      surname: "Козубаевич",
      notes: 'Родной, вообще не переживай на счет этого',
      phone: "+996551552770",
      laptop: true,
      department: {
        id: 2,
        name: 'Back-End',
      },
      came_from	: "Через Инстаграм",
      payment_method: {
        id: 1,
        name: 'Наличными'
      },
      status: 'Посетил пробный урок'
    },
  ],
  columns: {
    "column-1": {
      id: "column-1",
      title: "Ждёт звонка",
      studentIds: [1, 2, 3, 4, 5, 6],
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

// var ids: number[] = Array.from(initialData.students, (item) => item.id)

export {initialData} 