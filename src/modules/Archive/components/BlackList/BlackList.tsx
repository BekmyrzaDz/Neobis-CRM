import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import black from '../../assets/blackList.svg';
import close from '../../assets/close.png'

const rows = [
  { id: 1, fullName: 'Иванов Иван Иванович', date: '2022-04-11', acceptedBy: 'Петров Петр Петрович' },
  { id: 2, fullName: 'Петров Петр Петрович', date: '2022-04-10', acceptedBy: 'Иванов Иван Иванович' },
  { id: 3, fullName: 'Сидоров Сидор Сидорович', date: '2022-04-09', acceptedBy: 'Николаев Николай Николаевич' },
  { id: 4, fullName: 'Николаев Николай Николаевич', date: '2022-04-08', acceptedBy: 'Сидоров Сидор Сидорович' },
];



const useStyles = makeStyles({
  tableTop: {
    margin: '15px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  tabelTitle: {
    display: 'flex',
    gap: '10px',
  },
  headerName: {
    position: 'relative',
    left: '50px',
    color: '#fff',
    fontWeight: 'bold'
  },
  root: {
    color: '#fff',
    position: 'fixed',
    top: '30%',
    left: '35%',
    transform: 'translate(-50 %, -50 %)',
    zIndex: 1,
    borderRadisu: '16px',
    background: '#000',
    borderRadius: '16px'
  },
  table: {
    background: '#000',
    color: '#fff',
    padding: '15px',
    borderRadius: '10px',
    height: '400px',
    width: '600px',
    borderRight: 'none',
    border: 'none',
    '&. MuiDataGrid-columnSeparator': {
      opacity: 0
    },
    '& .MuiDataGrid-columnSeparator': {
      display: 'none',
    },
  }
});

export default function MyTable({ popap, setPopap }) {
  const classes = useStyles();

  const handleClick = (params) => {
    setPopap({
      open: true,
      data: params.row,
    });
  };


  return (
    <div className={classes.root} >
      <div className={classes.tableTop}>
        <h2 className={classes.tabelTitle}>
          <img src={black} alt='blacklist' />
          Черный список</h2>
        <img onClick={() => handleClick} src={close} alt='close' />
      </div>

      <DataGrid
        rows={rows}
        columns={[
          {
            field: 'fullName', headerName: 'ФИО', width: 180, headerClassName: classes.headerName, align: 'center'
          },
          {
            field: 'date', headerName: 'Дата', width: 180, headerClassName: classes.headerName, align: 'center'
          },
          {
            field: 'acceptedBy', headerName: 'Кто принял', width: 190, headerClassName: classes.headerName, align: 'center'
          },
        ]}
        pageSize={5}
        onRowClick={handleClick}
        className={classes.table}
        rowHeight={60}

      />
    </div>
  );
}
