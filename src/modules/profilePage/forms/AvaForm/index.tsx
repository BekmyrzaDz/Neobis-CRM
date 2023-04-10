import { Dispatch, SetStateAction, useState } from 'react'
import FormData from 'form-data'
import editAva from '../../../../assets/icons/editAva.svg'
import Modal from '../../../../components/Modal/Modal'
import Avatar from '../../assets/ava.png'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { updateAvatar } from '../../redux/asyncActions'

import styles from './index.module.scss'

type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]

const AvaForm = () => {
  const dispatch = useAppDispatch()
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [modalActive, setModalActive]: ModalState = useState(false)
  const image = useAppSelector((state) => state.profile.profile?.image)
  const id = useAppSelector((state) => state.auth.user?.id) as number

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0])
    }
  }

  const onUpdateAvatar = () => {
    const formData = new FormData()
    formData.append('file', selectedImage)

    dispatch(updateAvatar({ id, formData }))
  }

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive} className={styles.content}>
        <div className={styles.upload}>
          {selectedImage ? (
            <img
              alt='404'
              width={'400px'}
              height={'320px'}
              src={URL.createObjectURL(selectedImage)}
            />
          ) : (
            <img
              alt='404'
              width={'400px'}
              height={'320px'}
              src={image ? image : Avatar}
            />
          )}

          <hr className={styles.hr} />

          <input type='file' name='myImage' onChange={handleImageChange} />
          {selectedImage && (
            <>
              <button
                className={styles.btns}
                onClick={onUpdateAvatar}
                disabled={!selectedImage}
              >
                Готово
              </button>
              <button
                className={styles.btns}
                onClick={() => setSelectedImage(null)}
              >
                Удалить
              </button>
            </>
          )}
        </div>
      </Modal>
      <img src={image ? image : Avatar} alt='avatar' className={styles.ava} />
      <div className={styles.action}>
        <img src={editAva} alt='edit' />
        <span className={styles.editAva} onClick={() => setModalActive(true)}>
          Изменить фото
        </span>
      </div>
    </>
  )
}

export default AvaForm
