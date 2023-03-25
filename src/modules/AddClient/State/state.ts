import { ICreateBaseStudent, ICreateStudent } from './../types/index';

export let addClientState: ICreateStudent = {
  first_name: '',
  last_name: '',
  surname: '',
  notes: '',
  phone: '',
  laptop: true,
  department: {
    name: ''
  },
  came_from: {
    name: ''
  },
  payment_method: {
    name: ''
  },
  paid: false,
  on_request: true
}