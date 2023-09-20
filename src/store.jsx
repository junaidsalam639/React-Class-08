import { configureStore } from "@reduxjs/toolkit";
import { Reducer } from "./Redux_React/Reducer";

export default configureStore({
    reducer : {
        custom : Reducer
    }
})

