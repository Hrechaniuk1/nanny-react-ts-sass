import {createAsyncThunk} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

import {loginUser, logoutUser, getDataFromCollection, registerUser} from '../fetch/firebase'

type LoginUser = {
    email: string,
    password: string
}

type RegisterUser = {
    name: string,
    email: string,
    password: string
}

type rejected = {
    rejectValue: string
}

type loginRegisterUserResult = boolean
  
  interface Review {
    reviewer: string;
    rating: number; 
    comment: string; 
  }

 export type NannyResponse = {
    id: string; 
    experience: string;
    kids_age: string;
    birthday: string;
    avatar_url: string;
    reviews: Review[];
    about: string;
    name: string;
    rating: number;
    price_per_hour: number;
    characters: string[];
    location: string;
    education: string;
  }

export const loginUserOperation = createAsyncThunk<loginRegisterUserResult, LoginUser, rejected>('login', async (data, thunkAPI) => {
    try {
      await loginUser(data.email, data.password)
      return true
    } catch (err) {
        if(err instanceof AxiosError) {
            return thunkAPI.rejectWithValue(err.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong with login')
    }
})

export const registerUserOperation = createAsyncThunk<loginRegisterUserResult, RegisterUser, rejected>('register', async (data, thunkAPI) => {
    try {
        await registerUser(data.email, data.password)
        return true
    } catch (err) {
        if(err instanceof AxiosError) {
            return thunkAPI.rejectWithValue(err.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong with register')
    }
})

export const logoutOperation = createAsyncThunk<boolean, void, rejected>('logout', async (_, thunkAPI) => {
    try {
        await logoutUser()
        return true
    } catch (err) {
        if(err instanceof AxiosError) {
            return thunkAPI.rejectWithValue(err.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong with logout')
    }
})

export const getDataFromCollectionOperation = createAsyncThunk<NannyResponse[] | undefined, undefined, rejected>('info', async (_, thunkAPI) => {
    try {
        const response = await getDataFromCollection()
        return response
    } catch (err) {
        if(err instanceof AxiosError) {
            return thunkAPI.rejectWithValue(err.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong with getting nannys')
    }
})