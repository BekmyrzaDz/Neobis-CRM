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
            width: 170,
            renderCell: renderAvatarCell,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'id',
            headerName: 'ID',
            width: 110,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'first_name',
            headerName: 'ФИО',
            width: 270,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'email',
            headerName: 'Почта',
            width: 370,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'user_type',
            headerName: 'Должность ',
            width: 300,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'phone',
            headerName: 'Конакты',
            width: 300,
            headerAlign: 'center',
            align: 'center',
            headerClassName: classes.headerName,
          },
          {
            field: 'actions',
            headerName: 'Actions',
            width: 53,
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
        rowHeight={70}
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
    fontSize: '18px',
  },

  box: {
    color: '#000',
    height: '800px',
    width: '98%',
    backgroundColor: '#FFFFFF',
    borderRadius: '16px',
    padding: '30px',
  },
  dataGrid: {
    border: 'none',
    '& .MuiDataGrid-cell': {
      fontSize: 16,
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
  },
});