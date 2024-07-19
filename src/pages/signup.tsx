import React, { useState } from 'react'

const Signup = () => {
  const [inputVal, setInputVal] = useState({
    name: "",
    email: "",
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputVal((prevVal: any) => ({
      ...prevVal,
      [name]: value,
    }))
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
    // localStorage.setItem('credsName', )
  }


  return (
    <div>
      <div className='m-5'>
        <form className='flex flex-col gap-4 max-w-xl mx-auto p-5 bg-gray-400' onSubmit={handleSubmit}>
          <h2>Details</h2>
          <input type='text' name='name' placeholder='Name' value={inputVal.name} onChange={handleChange} className='p-2 text-black' />
          <input type='text' name='email' placeholder='Email' value={inputVal.email} onChange={handleChange} className='p-2 text-black' />
          <button type='submit' className='bg-black'>Signup</button>
        </form>
      </div>
    </div>
  )
}

export default Signup