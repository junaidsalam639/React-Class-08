import React, { useState } from 'react'

const Input = (props) => {
    const {
        data ,
        func
    } = props
    const [input , setInput] = useState('');
    const submit = () => {
      console.log(input);
      data(input)
      func(input)
    }
  return (
    <div>
      <label for="small-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Small input</label>
    <input type="text" id="small-input" class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => setInput(e.target.value)}></input>
    <button onClick={submit} className='btn btn-success'>submit</button>
    </div>
  )
}

export default Input
