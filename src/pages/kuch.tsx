import React, { useEffect, useState } from 'react'

const Kuch = () => {
  const [collectedData, setCollectedData] = useState<number[]>([])

  const arr = Array.from({ length: 100 }, (_, idx) => idx);

  const setData = (num: number) => {
    if (collectedData.includes(num)) {
      setCollectedData(collectedData.filter((n) => n !== num))
    } else {
      setCollectedData([...collectedData, num])
    }
  }

  return (
    <>
      <div className='grid grid-cols-10 gap-1 justify-center m-10 max-w-[450px] mx-auto'>
        {arr.map((_, idx) => (
          <div key={idx}>
            <div onClick={() => setData(idx + 1)} className={`${collectedData.includes(idx + 1) ? "bg-green-500 text-white" : "bg-white text-black"} cursor-pointer h-10 w-10 flex justify-center items-center hover:bg-green-500 hover:text-white`}>
              {idx + 1}
            </div>
          </div>
        ))}
      </div>
      <div className='text-center text-3xl'>
        Total is: {collectedData.reduce((curr, acc) => curr + acc, 0)} 
      </div>

    </>
  )
}

export default Kuch