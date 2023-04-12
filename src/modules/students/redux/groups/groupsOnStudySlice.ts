import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getAllGroups, getGroupDepartmentFilters } from './asyncActions'
import { GroupsOnStudyState, IGroupOnStudy } from '../../types'

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
  },
})

export default groupsOnStudySlice.reducer
