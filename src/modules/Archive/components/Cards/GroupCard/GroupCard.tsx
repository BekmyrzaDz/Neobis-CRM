import styles from './GroupCard.module.scss'
import timer from '../../../assets/timer.svg'
import door from '../../../assets/door.svg'
import student from '../../../assets/student.svg'
import avatar from '../../../assets/avatar.svg'
import archive from '../../../assets/archive.png';
import trash from '../../../assets/redTrash.svg';
import { Menu, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { RootState } from '../../../../../store/store';
import { MoreVert } from '@material-ui/icons';
import { deleteGroupById, archiveGroupById } from '../../../redux/groupArchive/groupArchiveSlice'
import { useState } from 'react'


interface IMentors {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  image: string;
  token: void;
  patent_number: number;
  patent_start: string;
  patent_end: string;
}

interface MyComponentProps {
  info: IMentors;
}


const GroupCard = (props: MyComponentProps) => {

  const { info } = props;

  const [selectedItemId, setSelectedItemId] = useState<string | boolean | number | null | object>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const dispatch = useDispatch<AppDispatch>()

  const handleClick = (event: React.MouseEvent<HTMLElement>, itemId: string | number | true | object) => {
    setSelectedItemId(itemId);
    setAnchorEl(event.currentTarget);

  };



  const handleClose = () => {
    setSelectedItemId(null);
    setAnchorEl(null);
  };


  const handleDelete = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(deleteGroupById(id)).then(() => {
      window.location.reload();
    });
  };

  const handleArchive = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(archiveGroupById(id)).then(() => {
      window.location.reload();
    });
  };

  const isItemSelected = selectedItemId === info.id;

  const handleArchiveClick = () => handleArchive(info.id);
  const handleDeleteClick = () => handleDelete(info.id);

  return (
    <div className={styles.card}>
      <div className={styles.room}>
        <div className={styles.aboutRoom}>
          <img src={door} alt='door' />
          <span>{info.classroom.name}</span>
        </div>
        <div className={styles.countRoom}>
          <span>{info.students_max}</span>
          <img src={student} alt='student' />
        </div>
      </div>

      <div className={styles.group}>
        <h1>{info.name}</h1>
        <div>
          <img src={timer} alt='timer' />
          <span>{info.start_at_time} - {info.end_at_time}</span>
        </div>
      </div>

      <div className={styles.lang}>
        <h3>{info.department.name}</h3>
      </div>

      <ul className={styles.days}>
        <li>Пн</li>
        <li>Ср</li>
        <li>Пт</li>
      </ul>

      <div className={styles.user}>
        <img src={avatar} alt='avatar' />
        <h3>{`${info.mentor.first_name} ${info.mentor.last_name}`}</h3>
      </div>

      <>
        <MoreVert className={styles.btn} onClick={(event) => handleClick(event, info.id)} />
        <Menu styles={{ borderRadius: '16px' }} className={styles.menu}
          id="three-dots-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl && isItemSelected)}
          onClose={handleClose}>
          <MenuItem className={styles.menuItem} onClick={handleArchiveClick}>
            <img src={archive} alt='archive' />
            Разархивировать
          </MenuItem>
          <MenuItem className={styles.menuItem} onClick={handleDeleteClick}>
            <img src={trash} alt='trash' />
            Удалить
          </MenuItem>
        </Menu>
      </>
    </div>
  )
}

export default GroupCard
