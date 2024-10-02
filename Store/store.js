
import {configureStore} from '@reduxjs/toolkit'
import movieReducer from './movieSlice'
export const store=configureStore({
    devTools:true,
    reducer:{
        movieData:movieReducer,
    }
})