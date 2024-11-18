// gen imports
import { createSlice, PayloadAction} from "@reduxjs/toolkit";
import { toast } from 'react-toastify'  

// custom imports
import {registerUserOperation, loginUserOperation, logoutOperation, getDataFromCollectionOperation} from './operatioms'
import { NannyResponse } from "./operatioms";

// types
type ItemArray = string[];

export type initialType = {
    isLoading: boolean
    isLoggedIn: boolean
    isRegister: boolean
    items: undefined | NannyResponse[]
    favourite: ItemArray
}

// helpers
function errorHandler(state: initialType) {
    state.isLoading = false
    toast.error('Something went wrong', {
        position: "top-right", 
        autoClose: 5000,  
        hideProgressBar: true,  
      });
    
}

function loadingHandler(state: initialType) {
  state.isLoading = true
}

function showToast(message: string) {
    toast.info(message, {
        position: "top-right", 
        autoClose: 5000,  
        hideProgressBar: true,  
      });
}


// slice

const initialState: initialType = {
    isLoading: false,
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
                state.isLoading = false
                showToast('Welcome!')
            })
            .addCase(loginUserOperation.rejected, errorHandler)
            .addCase(logoutOperation.pending, loadingHandler)
            .addCase(logoutOperation.fulfilled, (state) => {
                state.isLoggedIn = false
                state.items = undefined
                state.favourite = []
                state.isLoading = false
                showToast('See you soon!')
            })
            .addCase(logoutOperation.rejected, errorHandler)
            .addCase(getDataFromCollectionOperation.pending, loadingHandler)
            .addCase(getDataFromCollectionOperation.fulfilled, (state, action) => {
                state.items = action.payload
                state.isLoading = false
            })
            .addCase(getDataFromCollectionOperation.rejected, errorHandler)
            .addCase(registerUserOperation.pending, loadingHandler)
            .addCase(registerUserOperation.fulfilled, (state, action) => {
                state.isRegister = action.payload
                state.isLoading = false
                showToast('New user created successfully')
            })
            .addCase(registerUserOperation.rejected, errorHandler)

    }
})

export const {addFavs, delFavs} = mainSlice.actions
export const reducer = mainSlice.reducer