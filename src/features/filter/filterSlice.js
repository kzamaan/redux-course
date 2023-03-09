import { createSlice } from '@reduxjs/toolkit';
// initial state
const initialState = {
	orderBy: 'default',
	filterBy: 'all'
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {}
});

export default filterSlice.reducer;
export const { tagSelected, searchChanged } = filterSlice.actions;
