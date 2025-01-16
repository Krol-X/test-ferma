import { createReducer, createAction } from '@reduxjs/toolkit';
import { StringEnum } from '@/utils/string-enum'

export const FilterEnum = new StringEnum('filter_none', 'filter_done', 'filter_undone')

const actions = {
  change: createAction('filter/change')
}

const initalState = FilterEnum.filter_none

const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(actions.change, (state, action) => {
      const new_filter = action.payload
      if (FilterEnum.has(new_filter)) {
        return new_filter
      } else {
        return state
      }
    });
})

export default {
  actions,
  reducer
}
