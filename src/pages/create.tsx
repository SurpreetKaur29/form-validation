import React, { useState } from 'react'

const Create = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Submitted data:", data);
    };
    return (
        <div className='w-1/2 mx-auto mb-3'>
            <form onSubmit={handleSubmit} className='bg-[gray] p-10 mb-3'>
                <input type='text' onChange={handleChange} name="name" className="mb-3 text-black" placeholder='name' /><br></br>
                <input type='text' onChange={handleChange} name="email" className="mb-3 text-black" placeholder='email' /><br></br>
                <button type="submit" className='bg-white text-black p-3'>Submit</button>
            </form>
            <table className='w-full'>
                <tbody>
                    <tr>
                        <th className='w-20'>Sr. No.</th>
                        <th className='w-20'>Name</th>
                        <th className='w-20'>Email</th>
                        <th className='w-20'>Actions</th>
                    </tr>
                    <tr>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'></td>
                        <td className='text-center'>View</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Create