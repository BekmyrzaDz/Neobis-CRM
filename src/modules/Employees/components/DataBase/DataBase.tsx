import React, { useState, useMemo } from 'react';
import { Avatar } from '@material-ui/core';
import { DataGrid, GridCellParams, GridColDef } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import trash from '../../assets/trash.png';
import styles from './DataBase.module.scss';

const useStyles = makeStyles({
  box: {
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

const columns: GridColDef[] = [
  {
    field: 'photoURL',
    headerName: 'Аватар',
    width: 170,
    renderCell: (params: GridCellParams) => <Avatar src={params.row.photoURL as string} />,
    headerAlign: 'center',
    align: 'center',
    headerClassName: styles.headerName,
  },
  {
    field: 'id',
    headerName: 'ID',
    width: 110,
    headerAlign: 'center',
    align: 'center',
    headerClassName: styles.headerName,
  },
  {
    field: 'name',
    headerName: 'ФИО',
    width: 270,
    headerAlign: 'center',
    align: 'center',
    headerClassName: styles.headerName,
  },
  {
    field: 'email',
    headerName: 'Почта',
    width: 370,
    headerAlign: 'center',
    align: 'center',
    headerClassName: styles.headerName,
  },
  {
    field: 'position',
    headerName: 'Должность ',
    width: 300,
    headerAlign: 'center',
    align: 'center',
    headerClassName: styles.headerName,
  },
  {
    field: 'contacts',
    headerName: 'Конакты',
    width: 300,
    headerAlign: 'center',
    align: 'center',
    headerClassName: styles.headerName,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 53,
    type: 'actions',
    renderCell: () => <img src={trash} alt="trash" />,
    headerAlign: 'center',
    align: 'center',
    headerClassName: styles.headerName,
  },
];

const rows = [
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',
    id: 1,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',
    id: 2,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',

    id: 3,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',

    id: 4,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',
    id: 5,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',

    id: 6,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',

    id: 7,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',

    id: 8,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',

    id: 9,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
  {
    photoURL: 'https://stuki-druki.com/biofoto4/hasbik-01.jpg',

    id: 10,
    name: 'Бексултан Маратов',
    email: 'myemailaddress@gmail.com',
    position: 'Менеджер',
    contacts: '+996555755755',
  },
];

const DataBase: React.FC = () => {
  const classes = useStyles();
  const [pageSize, setPageSize] = useState(10);

  return (
    <div className={classes.box}>
      <DataGrid
        columns={columns}
        rows={rows}
        pagination
        className={classes.dataGrid}
        rowsPerPageOptions={[10, 15, 25]}
        pageSize={pageSize}
        rowHeight={60}
      />
    </div>
  );
};

export default DataBase;
