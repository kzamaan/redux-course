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
				// update cache pessimistically
				const result = await queryFulfilled;
				dispatch(
					tasksApi.util.updateQueryData('getTasks', undefined, (draft) => {
						draft.push(result.data);
					})
				);
			}
		}),
		updateTask: builder.mutation({
			query: ({ taskId, data }) => ({
				url: `/tasks/${taskId}`,
				method: 'PATCH',
				body: data
			}),
			async onQueryStarted({ taskId, data }, { dispatch, queryFulfilled }) {
				// optimistic update to the UI
				const patchResult = dispatch(
					tasksApi.util.updateQueryData('getTasks', undefined, (draft) => {
						// find the task in the cache
						const task = draft.find((t) => t.id === taskId);
						task.status = data.status;
					})
				);

				try {
					await queryFulfilled;
				} catch (error) {
					// undo the optimistic update
					patchResult.undo();
				}
			}
		})
	})
});

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation } = tasksApi;
