import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
/*import {IArtworks, IRepo, IUser, ServerResponse} from '../../models/models'*/
import {IArtworks} from '../../models/models'

export const artworksApi = createApi({
    reducerPath: 'artworks/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:5000/'
    }),
    tagTypes: ['Artwork'],
    refetchOnFocus: true,
    endpoints: build => ({

        getAllArtworks: build.query<IArtworks[], number>({
            query: (limit: number = 5) => ({
                url: `/artworks`,
                params: {
                    _limit: limit,
                }
            }),
            providesTags: result => ['Artwork']
        }),
        getArtwork: build.query<IArtworks, number>({
            query: (id) => ({
                url: `/artworks/${id}`,
            }),
        }),
        createArtwork: build.mutation<IArtworks, IArtworks>({
            query: (artwork) =>  (
                {
                    url: `artworks`,
                    method: "POST",
                    body: artwork
                }),
            invalidatesTags: ['Artwork']
        }),
        deleteArtwork: build.mutation<IArtworks, IArtworks>({
            query: (artwork) =>  (
                {
                    url: `artworks/${artwork.id}`,
                    method: "DELETE",
                }),
            invalidatesTags: ['Artwork']
        }),
        updateArtwork: build.mutation<IArtworks, IArtworks>({
            query: (artwork) =>  (
                {
                    url: `artworks/${artwork.id}`,
                    method: "PUT",
                    body: artwork
                }),
            invalidatesTags: ['Artwork']
        })
    })
})

export const { useLazyGetAllArtworksQuery, useDeleteArtworkMutation, useUpdateArtworkMutation, useLazyGetArtworkQuery, useGetArtworkQuery} = artworksApi