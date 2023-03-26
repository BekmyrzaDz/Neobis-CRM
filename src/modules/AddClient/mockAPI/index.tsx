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
  { id: 8, name: "Olympiad programming" },
]

export const paymentOptions: IOptions[] = [
  { icon: cash, name: "Наличные" },
  { icon: wallet, name: "Электронный кошелек" },
  { icon: creditCard, name: "Карта" },
]

export const sourceOptions: IOptions[] = [
  { icon: instagram, name: "Instagram" },
  { icon: advertisements, name: "Announcement" },
  { icon: web, name: "Via website" },
  { icon: dotsHorizontal, name: "Other" },
]
