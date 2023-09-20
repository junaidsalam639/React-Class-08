import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'

const Practice = () => {

  const dispatch = useDispatch();
  const { a } = useSelector(state => state.custom);

  const addBtn = () => {
      dispatch({
        type : 'increament'
      })
  }
  const subBtn = () => {
    dispatch({
      type : 'decreament'
    })
  }
  const addBtn25 = () => {
    dispatch({
      type : 'increamentByValue',
      payload : 25,
    })
  }
  const subBtn25 = () => {
    dispatch({
      type : 'decreamentByValue',
      payload : 25,
    })
  }


  return (
    <div className='container text-center w-100'>
       <h1 className='fw-bold my-3'>React_Redux_Toolkit :  {a}</h1>
       <button onClick={addBtn} className='btn btn-dark mx-3 text-light'>Increment_1</button>
       <button onClick={subBtn} className='btn btn-dark mx-3 text-light'>Decrement_2</button>
       <button onClick={addBtn25} className='btn btn-dark mx-3 text-light'>Increament_25</button>
       <button onClick={subBtn25} className='btn btn-dark mx-3 text-light'>Decrement_25</button>
    </div>
  )
}

export default Practice
