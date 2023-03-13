import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'videosApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
	tagTypes: ['Videos', 'Video', 'RelatedVideos'],
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: () => '/videos',
			providesTags: ['Videos']
		}),

		getVideo: builder.query({
			query: (id) => `/videos/${id}`,
			providesTags: (result, error, id) => [
				{ type: 'Video', id },
				{ type: 'RelatedVideos', id }
			]
		}),

		getRelatedVideos: builder.query({
			query: ({ id, title }) => {
				const tags = title.split(' ');
				const tagsQuery = tags.map((tag) => `title_like=${tag}`).join('&');
				const queryString = `/videos?${tagsQuery}&_limit=4&id_ne=${id}`;
				return queryString;
			},
			providesTags: (result, error, { id }) => [{ type: 'RelatedVideos', id }]
		}),

		addVideo: builder.mutation({
			query: (data) => ({
				url: '/videos',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Videos']
		}),

		updateVideo: builder.mutation({
			query: ({ id, data }) => ({
				url: `/videos/${id}`,
				method: 'PUT',
				body: data
			}),
			invalidatesTags: (result, error, { id }) => ['Videos', { type: 'Video', id }, { type: 'RelatedVideos', id }]
		}),

		deleteVideo: builder.mutation({
			query: (id) => ({
				url: `/videos/${id}`,
				method: 'DELETE'
			}),
			invalidatesTags: ['Videos']
		})
	})
});

export const {
	useGetVideosQuery,
	useGetVideoQuery,
	useGetRelatedVideosQuery,
	useAddVideoMutation,
	useUpdateVideoMutation,
	useDeleteVideoMutation
} = apiSlice;
