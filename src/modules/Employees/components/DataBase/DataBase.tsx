import React, { useState, useMemo, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { GridCellParams, DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { toast } from 'react-toastify';
import { AppDispatch } from '../../../../store/store';
import { IconButton } from '@material-ui/core';
import { deleteEmployee, archiveEmployee } from '../../redux/allEmployees/allEmployeesSlice';
import Spinner from '../../../../components/spinner/spinner';
import { makeStyles } from '@material-ui/styles';
import { Menu, MenuItem, Box } from '@material-ui/core';
import archive from '../../assets/archive.png';
import trash from '../../assets/redTrash.svg';

interface IAllEmployees {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string | number;
  user_type: string;
  image: string;
  token: void;
}

interface MyComponentProps {
  employees: IAllEmployees[];
}

const DataBase: React.FC<MyComponentProps> = (props: MyComponentProps): JSX.Element => {

  const { employees } = props;

  const dispatch = useDispatch<AppDispatch>()
  const classes = useStyles();


  const renderAvatarCell = (params: GridCellParams) => <Avatar src={params.row.image as string} />;
  const pageSizeOptions = useMemo(() => [10, 15, 25], []);

  const { status } = useSelector((state: RootState) => state.allEmployees);
  const [pageSize, setPageSize] = useState(10);
  const [value, setValue] = useState('')
  const [selectedItemId, setSelectedItemId] = useState<string | boolean | number | null | object>(null);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);



  const handleClick = (event: React.MouseEvent<HTMLElement>, itemId: string | number | true | object) => {
    setSelectedItemId(itemId);
    setAnchorEl(event.currentTarget);
  };


  const handleClose = () => {
    setSelectedItemId(null);
    setAnchorEl(null);
  };



  switch (status) {
    case 'loading':
      return <Spinner />;
      break;
    case 'failed':
      toast.error('Ошибка сервера');
      break;
    default:
      break;
  }


  const handleDelete = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(deleteEmployee(id)).then(() => {
      window.location.reload();
    });
  };

  const handleArchive = (itemId: string | number | true | object) => {
    const id = Number(itemId);
    dispatch(archiveEmployee(id)).then(() => {
      window.location.reload();
    });
  };

  return (
    <div className={classes.box}>
      <DataGrid
        columns={[
          {
            field: 'image',
            headerName: 'Аватар',
            width: 160,
            renderCell: renderAvatarCell,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'id',
            headerName: 'ID',
            width: 90,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'fio',
            headerName: 'ФИО',
            width: 160,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'email',
            headerName: 'Почта',
            width: 290,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'user_type',
            headerName: 'Должность ',
            width: 160,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'phone',
            headerName: 'Конакты',
            width: 160,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'delete',
            headerName: 'Actions',
            width: 130,
            renderCell: (params) => {
              const itemId = params.getValue(params.id, 'id') || '';
              const isItemSelected = selectedItemId === itemId;
              const handleArchiveClick = () => handleArchive(itemId);
              const handleDeleteClick = () => handleDelete(itemId);

              return (
                <>
                  <IconButton onClick={(event) => handleClick(event, itemId)}>
                    <Box className={classes.button}>...</Box>
                  </IconButton>
                  <Menu
                    classes={{ paper: classes.menu }}
                    id="three-dots-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl && isItemSelected)}
                    onClose={handleClose}
                  >
                    <MenuItem className={classes.menuItem} onClick={handleArchiveClick}>
                      <img src={archive} alt='archive' />
                      Архивировать
                    </MenuItem>
                    <MenuItem className={classes.menuItem} onClick={handleDeleteClick}>
                      <img src={trash} alt='trash' />
                      Удалить
                    </MenuItem>
                  </Menu>
                </>
              );
            }
          },
        ]}
        rows={employees}
        pagination
        className={classes.dataGrid}
        rowsPerPageOptions={pageSizeOptions}
        pageSize={pageSize}
        rowHeight={60}
      />
    </div >
  );
};

export default DataBase;


const useStyles = makeStyles({
  headerName: {
    position: 'relative',
    left: ' 20px',
    color: '#aaaaaa',
  },

  box: {
    color: '#000',
    height: '555px',
    width: '98%',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '20px',

  },

  dataGrid: {
    border: 'none',
    '& .MuiDataGrid-cell': {
      fontSize: 14,
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
  },
  iconButton: {
    padding: '5px 0 20px 0',
  },
  button: {
    color: '#756FB3',
    fontWeight: 'bold',
    paddingBottom: 25
  },
  menu: {
    marginTop: '60px',
    borderRadius: '18px',
  },
  menuItem: {
    display: 'flex',
    gap: '10px',
    fontSize: 14
  },
});