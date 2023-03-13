import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
	reducerPath: 'videosApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9000' }),
	tagTypes: ['Videos'],
	endpoints: (builder) => ({
		getVideos: builder.query({
			query: () => '/videos',
			providesTags: ['Videos']
		}),
		getVideo: builder.query({
			query: (id) => `/videos/${id}`
		}),
		getRelatedVideos: builder.query({
			query: ({ id, title }) => {
				const tags = title.split(' ');
				const tagsQuery = tags.map((tag) => `title_like=${tag}`).join('&');
				const queryString = `/videos?${tagsQuery}&_limit=4&id_ne=${id}`;
				return queryString;
			}
		}),
		addVideo: builder.mutation({
			query: (data) => ({
				url: '/videos',
				method: 'POST',
				body: data
			}),
			invalidatesTags: ['Videos']
		})
	})
});

export const { useGetVideosQuery, useGetVideoQuery, useGetRelatedVideosQuery, useAddVideoMutation } = apiSlice;
