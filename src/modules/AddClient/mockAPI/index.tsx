import {
  advertisements,
  cash,
  creditCard,
  dotsHorizontal,
  instagram,
  wallet,
  web,
} from "../assets"
import { IDepartmentOptions, IOptions } from "../types"

export const departmentOptions: IDepartmentOptions[] = [
  { id: 1, name: "UX/UI" },
  { id: 2, name: "Front-End" },
  { id: 3, name: "Back-End" },
  { id: 4, name: "PM" },
  { id: 5, name: "Android" },
  { id: 6, name: "iOS" },
  { id: 7, name: "Flutter" },
  { id: 8, name: "Олимпиадное программирование" },
]

export const paymentOptions: IOptions[] = [
  { icon: cash, name: "Наличными" },
  { icon: wallet, name: "Электронный кошелек" },
  { icon: creditCard, name: "Картой" },
]

export const sourceOptions: IOptions[] = [
  { icon: instagram, name: "Через Instagram" },
  { icon: advertisements, name: "Через объявление" },
  { icon: web, name: "Через сайт" },
  { icon: dotsHorizontal, name: "Другое(через друга и т.п.)" },
]
