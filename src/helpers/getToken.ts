const user = JSON.parse(localStorage.getItem("user") as string)

export default function getToken() {
  if (user && user.access) {
    return { Authorization: "Bearer " + user.access }
  } else {
    return {}
  }
}