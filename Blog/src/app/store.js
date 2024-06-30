import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from '../features/blogsDataSlice'
import categoryReducer from '../features/categoriesDataSlice'
import weatherReducer from '../features/weatherDataSlice'

export const store = configureStore({
    reducer: {
        blogs: blogsReducer,
        categories: categoryReducer,
        weather: weatherReducer
    }
})