import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  createGroupOnStudy,
  editGroupOnStudyById,
  getAllGroups,
  getGroupDepartmentFilters,
  getGroupOnStudyById,
} from './asyncActions'
import {
  GroupsOnStudyState,
  ICreateGroupOnstudyRES,
  IGroupOnStudy,
} from '../../types'

const initialState: GroupsOnStudyState = {
  groupsOnStudy: [],
  groupsOnStudyForFilters: [],
  groupOnStudy: {},
  isLoading: false,
  isError: false,
}

export const groupsOnStudySlice = createSlice({
  name: 'groupsOnStudy',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllGroups.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getAllGroups.fulfilled,
        (state, action: PayloadAction<IGroupOnStudy[]>) => {
          state.isLoading = false
          state.groupsOnStudy = action.payload
        }
      )
      .addCase(getAllGroups.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.groupsOnStudy = []
      })
      .addCase(getGroupDepartmentFilters.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getGroupDepartmentFilters.fulfilled,
        (state, action: PayloadAction<IGroupOnStudy[]>) => {
          state.isLoading = false
          state.groupsOnStudyForFilters = action.payload
        }
      )
      .addCase(getGroupDepartmentFilters.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.groupsOnStudyForFilters = []
      })
      .addCase(createGroupOnStudy.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        createGroupOnStudy.fulfilled,
        (state, action: PayloadAction<ICreateGroupOnstudyRES>) => {
          state.isLoading = false
          state.groupOnStudy = action.payload
        }
      )
      .addCase(createGroupOnStudy.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.groupOnStudy = {}
      })
      .addCase(getGroupOnStudyById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        getGroupOnStudyById.fulfilled,
        (state, action: PayloadAction<IGroupOnStudy>) => {
          state.isLoading = false
          state.groupOnStudy = action.payload
        }
      )
      .addCase(getGroupOnStudyById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.groupOnStudy = {}
      })
      .addCase(editGroupOnStudyById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(
        editGroupOnStudyById.fulfilled,
        (state, action: PayloadAction<IGroupOnStudy>) => {
          state.isLoading = false
          state.groupOnStudy = action.payload
        }
      )
      .addCase(editGroupOnStudyById.rejected, (state) => {
        state.isLoading = false
        state.isError = true
        state.groupOnStudy = {}
      })
  },
})

export default groupsOnStudySlice.reducer
