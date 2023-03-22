import { apiSlice } from 'features/api/apiSlice';

export const tasksApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => '/tasks'
		}),
		createTask: builder.mutation({
			query: (data) => ({
				url: '/tasks',
				method: 'POST',
				body: data
			}),
			async onQueryStarted(data, { dispatch, queryFulfilled }) {
				await queryFulfilled;
				dispatch(
					tasksApi.util.updateQueryData('getTasks', undefined, (draft) => {
						draft.push(data);
					})
				);
			}
		})
	})
});

export const { useGetTasksQuery, useCreateTaskMutation } = tasksApi;
