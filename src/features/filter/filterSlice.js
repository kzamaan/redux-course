import { createSlice } from '@reduxjs/toolkit';
// initial state
const initialState = {
	selectedTags: [],
	search: ''
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		tagSelected(state, action) {
			const tag = action.payload;
			if (state.selectedTags.includes(tag)) {
				state.selectedTags = state.selectedTags.filter((t) => t !== tag);
			} else {
				state.selectedTags.push(tag);
			}
		},
		searchChanged(state, action) {
			state.search = action.payload;
		}
	}
});

export default filterSlice.reducer;
export const { tagSelected, searchChanged } = filterSlice.actions;
