import React, { useEffect, useState } from 'react'

const Count = () => {
    const [count, setCount] = useState(6673)
    function isPrime(num: number) {
        if (num <= 1) {
            return false;
        }

        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false;
            }
        }
        alert(count + " is a prime number")
    }

    useEffect(() => {
        isPrime(count)
    }, [count])

    return (
        <div className='flex justify-center gap-5 mt-10 items-center flex-row-reverse'>
            <button className='text-3xl w-24 rounded-md bg-green-500' onClick={() => setCount(count + 1)}>
                +
            </button>
            {count}
            <button className='text-3xl w-24 rounded-md bg-red-500' onClick={() => setCount(count - 1)}>
                -
            </button>
        </div>
    )
}

export default Count