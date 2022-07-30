import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IArtworks} from "../../models/models";

const LS_FAV_KEY = 'rfk'

interface ArtworksState {
    artworks: IArtworks[]
}

const initialState: ArtworksState = {
    artworks: JSON.parse(localStorage.getItem(LS_FAV_KEY) ?? '[]')
}

export const artworksSlice = createSlice({
    name: 'artworks',
    initialState,
    reducers: {
        addArtwork: (state, action: PayloadAction<IArtworks>) => {
            state.artworks.push({
                ...action.payload
            })
        },
       /* setRating(state, action: PayloadAction<string>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourite(state, action: PayloadAction<string>) {
            state.favourites = state.favourites.filter(f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }*/
    }
})

export const artworksActions = artworksSlice.actions
export const artworksReducer = artworksSlice.reducer