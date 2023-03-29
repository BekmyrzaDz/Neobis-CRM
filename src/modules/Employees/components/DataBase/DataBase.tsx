import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { GridCellParams, DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { RootState } from '../../../../store/store';
import { toast } from 'react-toastify';
import { IconButton } from '@material-ui/core';
import { deleteEmployee } from '../../redux/allEmployees/allEmployeesSlice';
import Spinner from '../../../../components/spinner/spinner';
import Buttons from '../../components/Buttons/Buttons'
import { makeStyles } from '@material-ui/styles';

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
  employees: IAllEmployees;
}

const DataBase: React.FC = (props: MyComponentProps): JSX.Element => {

  const { employees } = props;

  const dispatch = useDispatch()
  const classes = useStyles();


  const renderAvatarCell = (params: GridCellParams) => <Avatar src={params.row.image as string} />;
  const pageSizeOptions = [10, 15, 25];

  const { status } = useSelector((state: RootState) => state.allEmployees);
  const [pageSize, setPageSize] = useState(10);
  const [value, setValue] = useState('')



  if (status === 'loading') {
    return <Spinner />;
  }
  if (status === 'failed') {
    return toast.error('Ошибка сервера');
  }


  const handleDelete = (id) => {
    dispatch(deleteEmployee(id));
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
            renderCell: (params) => (
              <Buttons onClick={() => {
                if (window.confirm('Вы уверены что хотите удалить даноого сотрудника?')) {
                  dispatch(handleDelete(params.id));
                }
              }} />
            ),
          },
        ]}
        rows={employees}
        pagination
        className={classes.dataGrid}
        rowsPerPageOptions={pageSizeOptions}
        pageSize={pageSize}
        rowHeight={60}
      />
    </div>
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
});