import React, { useState } from 'react'
import style from './StudentCard.module.scss'
import payd from '../../../assets/payd.svg'
import instagram from '../../../assets/instagram.svg';
import { MoreVert } from '@material-ui/icons';
import archive from '../../../assets/archive.png';
import trash from '../../../assets/redTrash.svg';
import { Menu, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../../../../store/store';
import { RootState } from '../../../../../store/store';
import { archiveStudentById, deleteStudentById } from '../../../redux/studentArchive/studdentArchiveSlice';



interface IStudents {
  id: number;
  first_name: string;
  last_name: string;
  group: string;
  phone: string;
  came_from: {
    id: number;
    name: string;
  };
  department: {
    name: string;
  };
  on_request: boolean;
  is_archive: boolean;
  blacklist: boolean;
  laptop: boolean;
  payment_status: number;
  notes: string;
}

interface MyComponentProps {
  info: IStudents;
}

const StudentCard = (props: MyComponentProps) => {

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
    const shouldExecute = window.confirm('Вы уверены, что хотите данного сотрудика?');
    if (shouldExecute) {
      dispatch(deleteStudentById(id)).then(() => {
        window.location.reload();
      });
    }
  };

  const handleArchive = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    const shouldExecute = window.confirm('Вы уверены, что хотите данного сотрудика?');
    if (shouldExecute) {
      dispatch(archiveStudentById(id)).then(() => {
        window.location.reload();
      });
    }
  };


  const isItemSelected = selectedItemId === info.id;

  const handleArchiveClick = () => handleArchive(info.id);
  const handleDeleteClick = () => handleDelete(info.id);

  return (
    <div className={style.card}>
      <div className={style.paid}>
        <img src={payd} alt='payd' />
        <span>Оплачено</span>
      </div>

      <div className={style.id}>{info.id}</div>

      <div className={style.about}>
        <h3 className={style.name}>{`${info.first_name} ${info.last_name}`}</h3>
        <h5 className={style.number}>{info.phone}</h5>
        <h3 className={style.position}>{info.department?.name}</h3>
      </div>
      <>
        <MoreVert className={style.btn} onClick={(event) => handleClick(event, info.id)} />
        <Menu style={{ borderRadius: '16px' }} className={style.menu}
          id="three-dots-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl && isItemSelected)}
          onClose={handleClose}>
          <MenuItem className={style.menuItem} onClick={handleArchiveClick}>
            <img src={archive} alt='archive' />
            Разархивировать
          </MenuItem>
          <MenuItem className={style.menuItem} onClick={handleDeleteClick}>
            <img src={trash} alt='trash' />
            Удалить
          </MenuItem>
        </Menu>
      </>
    </div>
  )
}

export default StudentCard
