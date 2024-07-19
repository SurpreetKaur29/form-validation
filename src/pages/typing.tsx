import React, { useState } from 'react'

const Typing = () => {
    const [text, setText] = useState('Hello World');

    const changeText = () => {
        const sliced = "";
        setText(sliced)
    }
    return (
        <div className='w-screen h-screen flex justify-center items-center flex-col'>
            <h1 className='text-4xl'>{text}</h1>
            <button onClick={changeText} className='bg-white text-black px-4 py-2 mt-5'>Change</button>
        </div>
    )
}

export default Typing;