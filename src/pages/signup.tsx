import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Signup = () => {
  const [inputVal, setInputVal] = useState<any>({
    name: "",
    email: "",
  })
  const [result, setResult] = useState<any>([])

  useEffect(() => {
    if (typeof window !== undefined) {
      setResult(JSON.parse(localStorage.getItem('creds') as string) || [])
    }
  }, [])

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setInputVal((prevVal: any) => ({
      ...prevVal,
      [name]: value,
    }))
  }


  const handleSubmit = (e: any) => {
    e.preventDefault()

    const emailMatched = result.filter((i: any) => i.email === inputVal.email)

    if (!inputVal.email.trim() && !inputVal.name.trim()) {
      alert('Please enter name and email')
    } else if (!inputVal.email.trim()) {
      alert('please enter email')
    } else if (!inputVal.name.trim()) {
      alert('please enter name')
    } else if (emailMatched.length) {
      alert('Email already exists')
    } else {
      if (inputVal.name && inputVal.email) {
        localStorage.setItem('creds', JSON.stringify([inputVal, ...result]))
        let preValues = []
        if (typeof window !== undefined) {
          preValues = JSON.parse(localStorage.getItem('creds') as string) || []
        }
        setResult(preValues)
        setInputVal({
          name: "",
          email: "",
        })
      }
    }
  }
  console.log({ result })

  return (
    <div>
      <div className='m-5'>
        <form className='flex flex-col gap-4 max-w-xl mx-auto p-5 bg-gray-400' onSubmit={handleSubmit}>
          <h2>Signup</h2>
          <input type='text' name='name' placeholder='Name' value={inputVal.name} onChange={handleChange} className='p-2 text-black' />
          <input type='text' name='email' placeholder='Email' value={inputVal.email} onChange={handleChange} className='p-2 text-black' />
          <button type='submit' className='bg-black'>Signup</button>
          <Link className='text-center' href='/login'>Login</Link>
        </form>
      </div>
    </div>
  )
}

export default Signup