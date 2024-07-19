import { DataList } from '@/data';
import React from 'react'

const NetTotal = () => {

    const arr = [1, 2, 3, 4, 5];

    const gTotal = arr.reduce((currVal, accumulator) => {
        return currVal * accumulator
    }, 1)

    const fact = (num: number): number => {
        let result = 1;
        if (num === 1) {
            return result;
        } else {
            result = num * fact(num - 1);
            return result
        }
    };

    return (
        <h1 className='text-red-600'>
            Net Total is: {gTotal}
            <br />
            Factorial is: {fact(5)}
        </h1>
    )
}

export default NetTotal;