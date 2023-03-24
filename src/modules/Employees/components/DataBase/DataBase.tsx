import React, { useState, useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import { GridCellParams, DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getAllEmployees } from '../../redux/allEmployees/allEmployeesSlice';
import { RootState } from '../../../../store/store';
import { toast } from 'react-toastify';
import { trash } from '../../assets';
import Spinner from '../../../../components/spinner/spinner';
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
  const dispatch = useDispatch()
  const classes = useStyles();

  const { employees } = props;
  console.log(employees)

  const renderAvatarCell = (params: GridCellParams) => <Avatar src={params.row.image as string} />;
  const pageSizeOptions = [10, 15, 25];

  const { allEmployees, status, error } = useSelector((state: RootState) => state.allEmployees);
  const [pageSize, setPageSize] = useState(10);


  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  if (status === 'loading') {
    return <Spinner />
  }

  if (status === 'failed') {
    return toast.error('Ошибка сервера')
  }



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
            field: 'first_name',
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
            field: 'actions',
            headerName: 'Actions',
            width: 160,
            type: 'actions',
            renderCell: () => <img src={trash} alt="trash" />,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
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