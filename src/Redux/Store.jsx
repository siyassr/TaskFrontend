import {configureStore} from "@reduxjs/toolkit";
import useReducer from "../Redux/UserSlice"
import taskReducer from "../Redux/TaskSlice"

const Store = configureStore({
    reducer:{
        user:useReducer,
        tasks:taskReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools:true
})
export default Store