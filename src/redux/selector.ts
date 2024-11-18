import { RootState } from './store'

export const isLoggedInSelector = (state: RootState) => state.nanny.isLoggedIn
export const isRegisterSelector = (state: RootState) => state.nanny.isRegister
export const itemsSelector = (state: RootState) => state.nanny.items
export const favsSelector = (state: RootState) => state.nanny.favourite
export const loginSelector = (state: RootState) => state.nanny.isLoading