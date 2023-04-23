import React, { useEffect } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';
import { getBlackList } from "../../redux/blackListSlice/blackListSlice";
import { RootState, AppDispatch } from '../../../../store/store';
import { useSelector, useDispatch } from 'react-redux';

import black from '../../assets/blackList.svg';
import close from '../../assets/close.png'



type TPopap = {
  popap: boolean;
  setPopap: React.Dispatch<React.SetStateAction<boolean>>;
};


const MyTable: React.FC<TPopap> = ({ popap, setPopap }) => {
  const classes = useStyles();

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getBlackList())
  }, [])


  const { blacklist } = useSelector((state: RootState) => state.blackList);
  console.log(blacklist);


  return (
    <div className={classes.bg}>
      <div className={classes.root} >
        <div className={classes.tableTop}>
          <h2 className={classes.tabelTitle}>
            <img src={black} alt='blacklist' />
            Черный список</h2>
          <img style={{ cursor: 'pointer' }} onClick={() => setPopap(false)} src={close} alt='close' />
        </div>

        <DataGrid
          rows={blacklist}
          columns={[
            {
              field: 'fio', headerName: 'ФИО', width: 180, headerClassName: classes.headerName, align: 'center'
            },
            {
              field: 'blacklist_created_at', headerName: 'Дата', width: 180, headerClassName: classes.headerName, align: 'center'
            },
            {
              field: 'acceptBy', headerName: 'Кто принял', width: 190, headerClassName: classes.headerName, align: 'center'
            },
          ]}
          pageSize={5}
          className={classes.table}
          rowHeight={60}

        />
      </div>
    </div>

  );
}


export default MyTable;



const useStyles = makeStyles({
  bg: {
    position: 'fixed',
    zIndex: 1,
    background: '#373333',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
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
    fontWeight: 'bold',
  },
  root: {
    color: '#fff',
    position: 'fixed',
    top: '20%',
    left: '35%',
    transform: 'translate(-50 %, -50 %)',
    zIndex: 1,
    borderRadisu: '16px',
    background: '#000',
    borderRadius: '16px',
    '&. .MuiDataGrid-root .MuiDataGrid-overlay': {
      background: '#000',
    },
  },
  table: {
    background: '#000',
    color: '#fff',
    padding: '15px',
    borderRadius: '10px',
    height: '450px',
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