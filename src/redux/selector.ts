import { RootState } from './store'

export const isLoggedIn = (state: RootState) => state.nanny.isLoggedIn
export const isRegister = (state: RootState) => state.nanny.isRegister
export const items = (state: RootState) => state.nanny.items
export const favs = (state: RootState) => state.nanny.favourite