// Login

interface IFornikState {
  email: string
  password: string
}

export let initialState: IFornikState = {
  email: '',
  password: '',
}