import { createSlice, PayloadAction} from "@reduxjs/toolkit";

import {registerUserOperation, loginUserOperation, logoutOperation, getDataFromCollectionOperation} from './operatioms'
import { NannyResponse } from "./operatioms";


function errorHandler(state: any, action: PayloadAction<any>) {

    
}

function loadingHandler(state: any) {
  
}


type ItemArray = Item[];

export type initialType = {
    isLoggedIn: boolean
    isRegister: boolean
    items: undefined | NannyResponse[]
    favourite: ItemArray
}

const initialState: initialType = {
    isLoggedIn: false,
    isRegister: false,
    items: undefined,
    favourite: []
}

const mainSlice = createSlice({
    name: 'nannys',
    initialState: initialState,
    reducers: {
        addFavs: (state, action: PayloadAction<string>) => {
                state.favourite.push(action.payload);

            },
        delFavs: (state, action: PayloadAction<string>) => {
                state.favourite = state.favourite.filter(item => item.id !== action.payload.id)
            }
    },
    extraReducers: builder => {
        builder
            .addCase(loginUserOperation.pending, loadingHandler)
            .addCase(loginUserOperation.fulfilled, (state) => {
                state.isLoggedIn = true
            })
            .addCase(loginUserOperation.rejected, errorHandler)
            .addCase(logoutOperation.pending, loadingHandler)
            .addCase(logoutOperation.fulfilled, (state) => {
                state.isLoggedIn = false
            })
            .addCase(logoutOperation.rejected, errorHandler)
            .addCase(getDataFromCollectionOperation.pending, loadingHandler)
            .addCase(getDataFromCollectionOperation.fulfilled, (state, action) => {
                state.items = action.payload
            })
            .addCase(getDataFromCollectionOperation.rejected, errorHandler)
            .addCase(registerUserOperation.pending, loadingHandler)
            .addCase(registerUserOperation.fulfilled, (state, action) => {
                state.isRegister = action.payload
            })
            .addCase(registerUserOperation.rejected, errorHandler)

    }
})

export const {addFavs, delFavs} = mainSlice.actions
export const reducer = mainSlice.reducer