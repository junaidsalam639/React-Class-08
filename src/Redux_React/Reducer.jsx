import { createReducer } from "@reduxjs/toolkit";

const initalize = {
    a : 0,
    b : [],
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
        },
        dataFecth : (state , action) => {
           state.b = action.payload
        }
        
})

