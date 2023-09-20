import React, { useState } from 'react'
import { useDispatch , useSelector } from 'react-redux'

const Practice = () => {
  const dispatch = useDispatch();
  const { a , b} = useSelector(state => state.custom);

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
  const dataFecth = async() => {
    let data = await fetch('https://dummyjson.com/products')
    .then((data) => {
      return data.json()
    }).then((res) => {
      dispatch({
        type : 'dataFecth',
        payload : res.products,
      })
    })
  } 


  return (
    <div className='container w-100 text-center'>
       <h1 className='fw-bold my-3'>React_Redux_Toolkit :  {a}</h1>
       <button onClick={addBtn} className='btn btn-dark mx-3 my-2 text-light'>Increment_1</button>
       <button onClick={subBtn} className='btn btn-dark mx-3 my-2 text-light'>Decrement_2</button>
       <button onClick={addBtn25} className='btn btn-dark mx-3 my-2 text-light'>Increament_25</button>
       <button onClick={subBtn25} className='btn btn-dark mx-3 my-2 text-light'>Decrement_25</button>
       <button onClick={dataFecth} className='btn btn-dark mx-3 my-2 text-light'>API_DATA_FECTH</button>
       <div>
       {b.map((item) => (
         <div className="news-card">
          <img src={item.thumbnail} alt="" />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Practice
