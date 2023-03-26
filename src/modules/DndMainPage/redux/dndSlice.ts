// import { IStudentState, IStudent } from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { reorderColumnList } from '../dragndrop'
import { IColumn, IColumns, IData, IStudent, IUpdateStudent } from '../types'
import { fetchAllStudents, fetchUpdateStudent } from './asyncActions'

export interface IStudentState {
  student: IStudent[] | null
  updatedStudent: IUpdateStudent | null
  // columns: IColumns
  // columnOrder: string[]
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
}

const initialState: IStudentState = {
  student: [],
  updatedStudent: null,
  // columns: {
  //   "column-1": {
  //     id: "column-1",
  //     title: "Ждёт звонка",
  //     studentIds: [],
  //   },
  //   "column-2": {
  //     id: "column-2",
  //     title: "Звонок совершён",
  //     studentIds: [],
  //   },
  //   "column-3": {
  //     id: "column-3",
  //     title: "Записан на пробный урок",
  //     studentIds: [],
  //   },
  //   "column-4": {
  //     id: "column-4",
  //     title: "Посетил пробный урок",
  //     studentIds: [],
  //   },
  // },
  // // Facilitate reordering of the columns
  // columnOrder: ["column-1", "column-2", "column-3", "column-4"],
  isLoading: false,
  isSuccess: false,
  isError: false,
}

export const dndSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    // reorderColumnList: (
    //   sourceCol: IColumn,
    //   startIndex: number,
    //   endIndex: number
    // ) => {
    //   const newStudentIds: number[] = Array.from(sourceCol.studentIds)
    //   const [removed]: number[] = newStudentIds.splice(startIndex, 1)
    //   newStudentIds.splice(endIndex, 0, removed)
    
    //   const newColumn: IColumn = {
    //     ...sourceCol,
    //     studentIds: newStudentIds,
    //   }
    
    //   return newColumn
    // },

    // DragEnd: (state, action: PayloadAction) => {
    //   console.log(action)
    //   const { source, destination } = action.payload.result
    //   console.log("Source", source)
    //   console.log("Destination", destination)
  
    //   if (!destination) return
  
    //   if (
    //     destination.droppableId === source.droppableId &&
    //     destination.index === source.index
    //   ) {
    //     return
    //   }
  
    //   const sourceCol: IColumn = state.columns[source.droppableId]
    //   const destinationCol: IColumn = state.columns[destination.droppableId]
    //   destinationCol.studentIds
  
    //   if (sourceCol.id === destinationCol.id) {
    //     const newColumn = reorderColumnList(
    //       sourceCol,
    //       source.index,
    //       destination.index
    //     )
  
    //     const newState: IData = {
    //       ...state,
    //       columns: {
    //         ...state.columns,
    //         [newColumn.id]: newColumn,
    //       },
    //     }
    //     setState(newState)
    //     return
    //   }
  
    //   const startStudentIds: number[] = Array.from(sourceCol.studentIds)
    //   const [removed]: number[] = startStudentIds.splice(source.index, 1)
    //   const newStartCol: IColumn = {
    //     ...sourceCol,
    //     studentIds: startStudentIds,
    //   }
  
    //   const endStudentIds: number[] = Array.from(destinationCol.studentIds)
    //   endStudentIds.splice(destination.index, 0, removed)
  
    //   const newEndCol: IColumn = {
    //     ...destinationCol,
    //     studentIds: endStudentIds,
    //   }
  
    //   const newState: IData = {
    //     ...state,
    //     columns: {
    //       ...state.columns,
    //       [newStartCol.id]: newStartCol,
    //       [newEndCol.id]: newEndCol,
    //     },
    //   }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllStudents.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchAllStudents.fulfilled,
        (state, action: PayloadAction<IStudent[]>) => {
          state.isLoading = false
          state.isSuccess = true
          state.student = action.payload
        //   if (state.student) {
        //     const studentIdsToAddColumn1: number[] = state.student
        //       .filter(
        //         (item) =>
        //           item?.status?.name.toLowerCase() ===
        //             state.columns["column-1"].title.toLowerCase() &&
        //           item.on_request === true
        //       )
        //       .map((item) => item.id)
    
        //     state.columns["column-1"].studentIds.push(...studentIdsToAddColumn1)

            
        // const studentIdsToAddColumn2: number[] = state.student
        //   .filter(
        //     (item) =>
        //       item?.status?.name.toLowerCase() ===
        //         state.columns["column-2"].title.toLowerCase() &&
        //       item.on_request === true
        //   )
        //   .map((item) => item.id)

        // state.columns["column-2"].studentIds.push(...studentIdsToAddColumn2)

        // const studentIdsToAddColumn3: number[] = state.student
        //   .filter(
        //     (item) =>
        //       item?.status?.name.toLowerCase() ===
        //         state.columns["column-3"].title.toLowerCase() &&
        //       item.on_request === true
        //   )
        //   .map((item) => item.id)

        // state.columns["column-3"].studentIds.push(...studentIdsToAddColumn3)

        // const studentIdsToAddColumn4: number[] = state.student
        //   .filter(
        //     (item) =>
        //       item?.status?.name.toLowerCase() ===
        //         state.columns["column-4"].title.toLowerCase() &&
        //       item.on_request === true
        //   )
        //   .map((item) => item.id)

        // state.columns["column-4"].studentIds.push(...studentIdsToAddColumn4)
        // }
  })
      .addCase(fetchAllStudents.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.student = null
      })

      .addCase(fetchUpdateStudent.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        fetchUpdateStudent.fulfilled,
        (state, action: PayloadAction<IStudent>) => {
          state.isLoading = false
          state.isSuccess = true
          state.updatedStudent = action.payload
        }
      )
      .addCase(fetchUpdateStudent.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.updatedStudent = null
      })
  },
  
})

export const {} = dndSlice.actions
export default dndSlice.reducer
