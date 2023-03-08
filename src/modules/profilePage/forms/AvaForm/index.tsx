import { Dispatch, SetStateAction, useState } from 'react'
import profile from '../../../../assets/images/profile.svg'
import editAva from '../../../../assets/icons/editAva.svg'
import Modal from '../../../../components/Modal/Modal'
import Avatar from '../../assets/ava.png'

import styles from './index.module.scss'

type ModalState = [boolean, Dispatch<SetStateAction<boolean>>]

const AvaForm = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [modalActive, setModalActive]: ModalState = useState(false)

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedImage(event.target.files[0])
    }
  }

  return (
    <>
      <Modal active={modalActive} setActive={setModalActive}>
        <div className={styles.upload}>
          {selectedImage ? (
            <img
              alt='404'
              width={'400px'}
              height={'320px'}
              src={URL.createObjectURL(selectedImage)}
            />
          ) : (
            <img alt='404' width={'400px'} height={'320px'} src={Avatar} />
          )}

          <hr className={styles.hr} />

          <input type='file' name='myImage' onChange={handleImageChange} />
          {selectedImage && (
            <>
              <button
                className={styles.btns}
                onClick={() => {}}
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
      <img src={profile} alt='avatar' className={styles.ava} />
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
