import { createSlice } from '@reduxjs/toolkit';
// initial state
const initialState = {
	orderBy: '',
	filterBy: 'all'
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setOrderBy(state, action) {
			state.orderBy = action.payload;
		},
		setFilterBy(state, action) {
			state.filterBy = action.payload;
		}
	}
});

export default filterSlice.reducer;
export const { setOrderBy, setFilterBy } = filterSlice.actions;
