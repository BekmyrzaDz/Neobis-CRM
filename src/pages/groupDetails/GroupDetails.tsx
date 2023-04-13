import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Modal from '../../components/Modal/Modal'
import { useNavigate } from 'react-router-dom'
import GroupDetailsForm from '../../modules/students/forms/groupDetailsForm/GroupDetailsForm'
type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]

const GroupDetails = () => {
  const navigate = useNavigate()
  const [modalActive, setModalActive]: ModalState = useState(true)

  useEffect(() => {
    if (!modalActive) {
      navigate('/students')
    }
  }, [modalActive, navigate])

  return (
    <div>
      <Modal active={modalActive} setActive={setModalActive}>
        <GroupDetailsForm setModalActive={setModalActive} />
      </Modal>
    </div>
  )
}

export default GroupDetails
