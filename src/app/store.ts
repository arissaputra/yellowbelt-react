import { configureStore } from '@reduxjs/toolkit'
import charactersApi from '../api/charactersApi'
import charactersReducer from '../reducers/charactersSlice'

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    characters: charactersReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(charactersApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch