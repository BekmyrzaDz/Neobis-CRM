export interface ICardProps {
  payStatus: "оплачено" | "скоро" | "должен"
  id: number
  name: string
  number: string
  position: string
}