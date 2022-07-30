import {IUser} from "../../models/models";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    isAuth: boolean
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    isAuth: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsAuth(state, action: PayloadAction <boolean>) {
            state.isAuth = action.payload;
        }
    }
})

export const userActions = userSlice.actions
export const userReducer = userSlice.reducer