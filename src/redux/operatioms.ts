// gen imports
import {createAsyncThunk} from '@reduxjs/toolkit'
import { AxiosError } from 'axios'

// custom imports
import {loginUser, logoutUser, getDataFromCollection, registerUser} from '../fetch/firebase'

// types
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


// functions

export const loginUserOperation = createAsyncThunk<loginRegisterUserResult, LoginUser, rejected>('login', async (data, thunkAPI) => {
    try {
      const result = await loginUser(data.email, data.password)
      console.log(result)
        if(result) {
            return true
        } else {
            return thunkAPI.rejectWithValue('Invalid login credentials');
        }
    //   return true
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

export const getDataFromCollectionOperation = createAsyncThunk<NannyResponse[] | undefined, string, rejected>('info', async (sortBy, thunkAPI) => {
    try {
        const response = await getDataFromCollection(sortBy)
        return response
    } catch (err) {
        if(err instanceof AxiosError) {
            return thunkAPI.rejectWithValue(err.message)
        }
        return thunkAPI.rejectWithValue('Something went wrong with getting nannys')
    }
})