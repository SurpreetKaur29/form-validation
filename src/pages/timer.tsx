import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [start, setStart] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined;
        if (isRunning) {
            intervalId = setInterval(
                () => {
                    setStart(prev => prev + 1);
                }, 1000
            )
        } else {
            clearInterval(intervalId);
        }
        return () => clearInterval(intervalId)
    }, [isRunning])

    const handleReset = () => {
        setIsRunning(false);
        setStart(0)
    }

    const puaseAndResume = () => {
        setIsRunning(!isRunning);
    }
    return (
        <>
            <div className='flex flex-col items-center justify-center h-screen w-screen'>
                <h1 className='mb-4 text-3xl'>Count is : {start}</h1>

                <div className='flex gap-5'>
                    <button className='bg-white text-black px-5 py-2' onClick={puaseAndResume}>{isRunning ? "Stop" : "Start"}</button>
                    <button className='bg-white text-black px-5 py-2' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </>
    )
}

export default Timer;