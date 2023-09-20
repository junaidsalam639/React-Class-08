import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const Example = () => {
    const dispatch = useDispatch();
    const { b } = useSelector(state => state.custom);

    const dataFecth = async () => {
        let data = await fetch('https://dummyjson.com/products')
            .then((data) => {
                return data.json()
            }).then((res) => {
                dispatch({
                    type: 'dataFecth',
                    payload: res.products,
                })
            })
    }

    return (
        <div className='container text-center'>
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

export default Example
