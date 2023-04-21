import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { paymentHistory } from "../../assets"
import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridCellParams,
} from "@mui/x-data-grid"
import clsx from "clsx"

// Define the table data interface
// interface TableData {
//   account: string
//   time: string
//   date: string
//   whoAccepted: string
//   whoPaid: string
//   amount: string
//   paymentStatus: string
// }

// Define the table column header names
// const columns: string[] = [
//   "Счёт",
//   "Время",
//   "Дата",
//   "Кто принял",
//   "Кто оплатил",
//   "Сумма",
//   "Статус оплаты",
// ]

interface TableData {
  rows: any
}

// Define the table styles using makeStyles()
export const useStyles = makeStyles({
  container: {
    borderRadius: "16px",
    boxShadow: "none",
    // minHeight: "572px",
  },
  header: {
    padding: "24px 32px",
  },
  icon: {},
  headerName: {
    fontFamily: "Segoe UI !important",
    fontWeight: 700,
    fontSize: "14px",
    color: "#aaaaaa",
  },
  amountHeader: {
    color: "#756FB3",
  },
  ceil: {
    fontFamily: "Segoe UI",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "18.62px",
    color: "#252525",
  },
  amount: {
    color: "#756FB3",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  tableContainer: {
    minWidth: "650px",
    borderRadius: "16px",
    padding: "0 32px 24px",
    border: "none !important",
  },
  table: {
    width: "100%",
    border: "none !important",
  },
  "& .statusGottaPay.red": {
    color: "#D74245",
  },
  "& .statusSoonPayment.orange": {
    color: "#FF9900",
  },
  "& .statusPaid.green": {
    color: "#00A64E",
  },
  "& .statusPaidInFull.violet": {
    color: "#756FB3",
  },
  // statusGottaPay: {

  // },
  // statusSoonPayment: {

  // },
  // statusPaid: {

  // },
  // statusPaidInFull: {

  // },
})

// Define the Table Component
const CompositeTable: React.FC<TableData> = ({ rows }) => {
  const classes = useStyles()

  // const generateColorsObject = (color) => {
  //   const colorKey = color;
  //   const colorObject = {}
  //   colorObj[colorKey] = color
  //   return colorObj; // it's value will have something like { 'red': 'red' }
  // }

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      width: 60,
      type: "number",
      headerClassName: classes.headerName,
      cellClassName: (params: GridCellParams) => clsx(classes.ceil),
      headerAlign: "center",
      align: "center",
    },
    {
      field: "payment_type",
      headerName: "Счёт",
      width: 150,
      headerClassName: classes.headerName,
      cellClassName: (params: GridCellParams) => clsx(classes.ceil),
      headerAlign: "center",
      align: "center",
    },
    {
      field: "payment_time",
      headerName: "Время",
      width: 150,
      editable: true,
      headerClassName: classes.headerName,
      cellClassName: (params: GridCellParams) => clsx(classes.ceil),
      headerAlign: "center",
      align: "center",
    },
    {
      field: "last_payment_date",
      headerName: "Дата",
      width: 150,
      editable: true,
      headerClassName: classes.headerName,
      cellClassName: (params: GridCellParams) => clsx(classes.ceil),
      headerAlign: "center",
      align: "center",
    },
    {
      field: "acceptBy",
      headerName: "Кто принял",
      width: 150,
      editable: true,
      headerClassName: classes.headerName,
      cellClassName: (params: GridCellParams) => clsx(classes.ceil),
      headerAlign: "center",
      align: "center",
    },
    {
      field: "fio",
      headerName: "Кто оплатил",
      width: 150,
      editable: true,
      headerClassName: classes.headerName,
      cellClassName: (params: GridCellParams) => clsx(classes.ceil),
      headerAlign: "center",
      align: "center",
    },
    {
      field: "amount",
      headerName: "Сумма",
      type: "number",
      width: 200,
      editable: true,
      headerClassName: `${classes.headerName} ${classes.amountHeader}`,
      cellClassName: (params: GridCellParams) => clsx(classes.amount),
      headerAlign: "center",
      align: "center",
    },
    {
      field: "payment_status",
      headerName: "Статус оплаты",
      width: 150,
      editable: true,
      headerClassName: classes.headerName,
      cellClassName: (params: GridCellParams) => {
        return clsx(classes.ceil, {
          // classes.statusGottaPay: params.payment_status === ''
        })
      },
      headerAlign: "center",
      align: "center",
    },
  ]

  return (
    <TableContainer className={classes.container} component={Paper}>
      <div className={classes.header}>
        <h3 className={classes.title}>
          <img className={classes.icon} src={paymentHistory} />
          История оплаты
        </h3>
      </div>
      <Box className={classes.tableContainer}>
        <DataGrid
          columns={columns}
          rows={rows}
          autoHeight
          pageSizeOptions={[5, 10, 25, 50, 100]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          className={classes.table}
          disableRowSelectionOnClick
          // columnHeaderTitle={}
          rowHeight={64}
          // getCellClassName={(params: GridCellParams<any, any, any>) => {
          //   // params.value.
          //   if (params.value === "Оплачено") {
          //     return classes["& .statusPaid.green"]
          //   }
          //   // return params.value >= 15 ? "hot" : "cold"
          // }}
          // getCellClassName={(params: GridCellParams<any, any, number>) => {
          //   if (params.field === "city" || params.value == null) {
          //     return ""
          //   }
          //   return params.value >= 15 ? "hot" : "cold"
          // }}
        />
      </Box>
    </TableContainer>
  )
}

// Export the Table Component
export default CompositeTable
