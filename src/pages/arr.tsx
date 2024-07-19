import React from 'react'

const Arr = () => {
    const array1 = [5, 8, 12, 15, 20];
    const array2 = [15, 12, 8, 20, 5];

    const matched = array1.every((item) => array2.includes(item));
    const isMatched = array1.length === array2.length ? matched ? "Arrays have same elements" : "Arrays have different elements" : "Arrays length should be same";
    console.log("isMatched", isMatched)
    return (
        <div></div>
    )
}

export default Arr;