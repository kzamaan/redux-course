import { apiSlice } from 'features/api/apiSlice';
import { filledSelectedProjects } from 'features/filter/filterSlice';

export const tasksApi = apiSlice.injectEndpoints({
	tagTypes: ['Task'],
	endpoints: (builder) => ({
		getTasks: builder.query({
			query: () => '/tasks',
			async onQueryStarted(data, { dispatch, queryFulfilled }) {
				// update cache pessimistically
				try {
					const result = await queryFulfilled;
					dispatch(filledSelectedProjects(result.data.map((t) => t.project.projectName)));
				} catch (error) {
					console.log(error);
				}
			}
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

		getTask: builder.query({
			query: (taskId) => `/tasks/${taskId}`,
			providesTags: (result, error, taskId) => [{ type: 'Task', id: taskId }]
		}),

		updateTask: builder.mutation({
			query: ({ taskId, data }) => ({
				url: `/tasks/${taskId}`,
				method: 'PATCH',
				body: data
			}),
			async onQueryStarted({ taskId, data }, { dispatch, queryFulfilled }) {
				// optimistic update to the UI
				let patchResult = null;
				if (data.status) {
					patchResult = dispatch(
						tasksApi.util.updateQueryData('getTasks', undefined, (draft) => {
							// find the task in the cache
							const task = draft.find((t) => t.id === taskId);
							task.status = data.status;
						})
					);
				}

				try {
					const result = await queryFulfilled;

					// update the cache with the result from the server
					if (!data.status) {
						dispatch(
							tasksApi.util.updateQueryData('getTasks', undefined, (draft) => {
								// find the task in the cache
								const task = draft.find((t) => t.id === taskId);
								const { taskName, project, teamMember, deadline } = result.data;
								task.taskName = taskName;
								task.project = project;
								task.teamMember = teamMember;
								task.deadline = deadline;
							})
						);
					}
				} catch (error) {
					// undo the optimistic update
					if (patchResult) {
						patchResult.undo();
					}
				}
			},
			invalidatesTags: (result, error, { taskId }) => [{ type: 'Task', id: taskId }]
		})
	})
});

export const { useGetTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useGetTaskQuery } = tasksApi;
