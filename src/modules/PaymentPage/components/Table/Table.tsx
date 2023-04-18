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
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid"

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
  columns: any
}

// Define the table styles using makeStyles()
const useStyles = makeStyles({
  container: {
    borderRadius: "16px",
    boxShadow: "none",
    minHeight: "572px",
  },
  header: {
    padding: "24px 32px",
  },
  title: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  tableContainer: {
    minWidth: "650px",
    borderRadius: "16px",
    padding: "0 32px",
    border: "none !important",
  },
  table: {
    width: "100%",
    border: "none !important",
  },
  icon: {},
})

// Define the Table Component
const CompositeTable: React.FC<TableData> = ({ rows, columns }) => {
  const classes = useStyles()

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
          rowHeight={65}
        />
      </Box>
    </TableContainer>
  )
}

// Export the Table Component
export default CompositeTable
