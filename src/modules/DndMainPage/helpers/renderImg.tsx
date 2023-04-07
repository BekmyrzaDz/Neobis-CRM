import { advertisements, dotsHorizontal, instagram, web } from "../assets"

export function renderImg(came_from: string) {
  switch (came_from) {
    case "from_instagram":
      return <img src={instagram} alt="instagram icon" />
    case "Announcement":
      return <img src={advertisements} alt="advertisements icon" />
    case "from_website":
      return <img src={web} alt="web icon" />
    case "other":
      return <img src={dotsHorizontal} alt="dotsHorizontal icon" />

    default:
      ""
  }
}
