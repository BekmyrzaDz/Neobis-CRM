import { Dispatch, SetStateAction, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import StudentDetailsForm from '../../modules/students/forms/studentDetailsForm/StudentDetailsForm'
type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]

const StudentDetails = () => {
  const navigate = useNavigate()
  const [modalActive, setModalActive]: ModalState = useState(true)

  if (!modalActive) {
    navigate('/students')
  }

  return (
    <div>
      <Modal active={modalActive} setActive={setModalActive}>
        <StudentDetailsForm setModalActive={setModalActive} />
      </Modal>
    </div>
  )
}

export default StudentDetails
