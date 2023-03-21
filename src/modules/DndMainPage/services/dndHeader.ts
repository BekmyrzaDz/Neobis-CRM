import { string } from "yup";
import { useAppSelector } from "../../../hooks/redux";

// const token = useAppSelector(state => state.auth.user?.access)
// console.log(token)

const user = JSON.parse(localStorage.getItem("user") as string);
// console.log(user);


export default function dndHeader() {
  if (user && user.access) {
    return { Authorization: "Bearer " + user.access };
  } else {
    return {};
  }
}