import { IClient } from './../types/index';

const  today = new Date()
 
const now = today.toLocaleTimeString('ru-RU')
const sliceNow = now.slice(0, 2)

const clientData: IClient[] = [
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
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
    id: "ID64322423",
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
    id: "ID54353535",
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
    id: "ID4324324",
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
    id: "ID6546",
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
]

export {clientData} 