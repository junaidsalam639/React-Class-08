import { createReducer } from "@reduxjs/toolkit";

const initalize = {
    a : 0,
}

export const Reducer = createReducer(initalize,{
        increament : (state , action) => {
            state.a += 1
        },
        decreament : (state , action ) => {
            state.a -= 1;
        },
        increamentByValue : (state , action) => {
            state.a += action.payload
        },
        decreamentByValue : (state , action) => {
            state.a -= action.payload
        }
})

