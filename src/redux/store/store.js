import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slices/userSlice";
import employeeSlice from "../slices/employeeSlice";


const store = configureStore({
    reducer:{
        user:userSlice,
        employee:employeeSlice
    }
})

export default store;

