export const switchDepartmentName = (name: string) => {
  switch (name) {
    case "UX-UI".toLowerCase():
      return "UX/UI"
    case "Front-End".toLowerCase():
      return "Front-End"
    case "Back-End".toLowerCase():
      return "Back-End"
    case "PM".toLowerCase():
      return "PM"
    case "Android".toLowerCase():
      return "Android"
    case "IOS".toLowerCase():
      return "IOS"
    case "Flutter".toLowerCase():
      return "Flutter"
    case "Olimped_programming".toLowerCase():
      return "Olimped programming"

    default:
      break
  }
}