import { advertisements, dotsHorizontal, instagram, web } from "../assets"

export function renderImg(came_from: string) {
  switch (came_from) {
    case "Instagram":
      return <img src={instagram} alt="instagram icon" />
    case "Announcement":
      return <img src={advertisements} alt="advertisements icon" />
    case "Via website":
      return <img src={web} alt="web icon" />
    case "Other":
      return <img src={dotsHorizontal} alt="dotsHorizontal icon" />

    default:
      ""
  }
}
