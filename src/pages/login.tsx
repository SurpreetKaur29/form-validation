import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Login = () => {
    const [inputVal, setInputVal] = useState<any>({
        email: "",
    })
    const [result, setResult] = useState<any>([])

    const router = useRouter()

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputVal((prevVal: any) => ({
            ...prevVal,
            [name]: value,
        }))
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            setResult(JSON.parse(localStorage.getItem('creds') as string) || [])
        }
    }, [])

    const handleSubmit = (e: any) => {
        e.preventDefault()

        const emailMatched = result.find((i: any) => i.email === inputVal.email)
        console.log({ emailMatched })

        if (!inputVal.email.trim()) {
            alert('please enter email')
        } else if (!emailMatched) {
            alert('email is not registered')
        } else if (emailMatched) {
            localStorage.setItem('login', inputVal.email)
            router.push('/')
        }
    }

    // console.log('result', result)

    return (
        <div>
            <div className='m-5'>
                <form className='flex flex-col gap-4 max-w-xl mx-auto p-5 bg-gray-400' onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <input type='text' name='email' placeholder='Email' value={inputVal.email} onChange={handleChange} className='p-2 text-black' />
                    <button type='submit' className='bg-black'>Login</button>
                    <Link className='text-center' href='/signup'>Signup</Link>
                </form>
            </div>
        </div>
    )
}

export default Login