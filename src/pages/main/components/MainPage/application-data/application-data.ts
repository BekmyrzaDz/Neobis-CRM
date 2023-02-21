export interface Aplication {
  time: string
  id: string
  name: string
  phone: string
  direction: string
  way: string
}

const  today = new Date()
 
const now = today.toLocaleTimeString('ru-RU')
const sliceNow = now.slice(0, 2)

const waitingForACallData: Aplication[] = [
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Даниил Алешин",
    phone: "+996551552770",
    direction: "UX/UI",
    way: "Через Инстаграм",
  },
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Даниил Алешин",
    phone: "+996551552770",
    direction: "UX/UI",
    way: "Через Инстаграм",
  },
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Руслан Сабитов",
    phone: "+996555755755",
    direction: "Front-End",
    way: "Через Инстаграм",
  },
]

const callCompletedData: Aplication[] = [
  {
  time: `${24} ч.`,
    id: "ID654789",
    name: "Даниил Алешин",
    phone: "+996551552770",
    direction: "UX/UI",
    way: "Через Инстаграм",
  },
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Руслан Сабитов",
    phone: "+996555755755",
    direction: "Front-End",
    way: "Через Инстаграм",
  },
]

const signedUpTrialLessonData: Aplication[] = [
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Даниил Алешин",
    phone: "+996551552770",
    direction: "UX/UI",
    way: "Через Инстаграм",
  },
]

const attendedATrialLessonData: Aplication[] =[
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Даниил Алешин",
    phone: "+996551552770",
    direction: "UX/UI",
    way: "Через Инстаграм",
  },
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Даниил Алешин",
    phone: "+996551552770",
    direction: "UX/UI",
    way: "Через Инстаграм",
  },
  {
    time: `${sliceNow} ч.`,
    id: "ID654789",
    name: "Даниил Алешин",
    phone: "+996551552770",
    direction: "UX/UI",
    way: "Через Инстаграм",
  },
]

export {waitingForACallData, callCompletedData, signedUpTrialLessonData, attendedATrialLessonData} 