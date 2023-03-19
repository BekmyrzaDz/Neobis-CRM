import { advertisements, dotsHorizontal, instagram, web } from "../assets"

export function renderImg(came_from: string) {
  switch (came_from) {
    case "Через Инстаграм":
      return <img src={instagram} alt="instagram icon" />
    case "Через объявление":
      return <img src={advertisements} alt="advertisements icon" />
    case "Через сайт":
      return <img src={web} alt="web icon" />
    case "Другое(через друга и т.п.)":
      return <img src={dotsHorizontal} alt="dotsHorizontal icon" />

    default:
      ""
  }
}
