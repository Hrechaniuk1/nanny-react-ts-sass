import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { toast } from 'react-toastify'  


import {registerUserOperation, loginUserOperation, logoutOperation, getDataFromCollectionOperation} from './operatioms'
import { NannyResponse } from "./operatioms";


function errorHandler(state: any, action: PayloadAction<any>) {
    toast.error('Something went wrong', {
        position: "top-right", 
        autoClose: 5000,  
        hideProgressBar: true,  
      });
    
}

function loadingHandler(state: any) {
  
}


type ItemArray = string[];

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
                state.favourite = state.favourite.filter(item => item !== action.payload)
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
                state.items = undefined
                state.favourite = []
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