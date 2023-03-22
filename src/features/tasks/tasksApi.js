import { apiSlice } from 'features/api/apiSlice';

export const tasksApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => '/tasks'
		})
	})
});

export const { useGetTasksQuery } = tasksApi;
