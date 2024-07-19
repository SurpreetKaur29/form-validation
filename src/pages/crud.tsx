import React, { useState } from 'react'

const Crud = () => {
    const [inputVal, setInputVal] = useState({
        name: "",
        email: "",
    })
    const [result, setResult] = useState<any>([])
    const [edit, setEdit] = useState(false)
    const [editId, setEditId] = useState(0)

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputVal((prevVal: any) => ({
            ...prevVal,
            [name]: value,
        }))
    }
    console.log("editId", editId);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        const emailsArr = result.map((i: any) => i.email)
        const emailMatched = emailsArr.filter((i: any) => i === inputVal.email)
        const emailEdited = emailMatched.filter((item: any) => item !== result[editId].email)
        console.log({ emailEdited })

        console.log('result', result)
        if (!inputVal.email.trim() && !inputVal.name.trim()) {
            alert('Please enter name and email')
        } else if (!inputVal.email.trim()) {
            alert('please enter email')
        } else if (!inputVal.name.trim()) {
            alert('please enter name')
        } else if (emailMatched.length && !edit) {
            alert('Email already exists')
        } else if (emailEdited.length && edit) {
            alert('Email already exists')
        } else if (edit) {
            result[editId] = inputVal
            setResult(result)
            setEdit(false)
            setInputVal({
                name: "",
                email: "",
            })
        } else {
            setResult([inputVal, ...result])
            setInputVal({
                name: "",
                email: "",
            })
        }
    }

    const handleEdit = (i: any) => {
        setEdit(true)
        setEditId(i)
        setInputVal({
            name: result[i].name,
            email: result[i].email,
        })
    }

    const handleDelete = (i: any) => {
        const newResult = result.filter((ele: any) => ele.email !== result[i].email)
        setResult(newResult)
    }

    return (
        <div>
            <div className='m-5'>
                <form className='flex flex-col gap-4 max-w-xl mx-auto p-5 bg-gray-400' onSubmit={handleSubmit}>
                    <h2>Details</h2>
                    <input type='text' name='name' placeholder='Name' value={inputVal.name} onChange={handleChange} className='p-2 text-black' />
                    <input type='text' name='email' placeholder='Email' value={inputVal.email} onChange={handleChange} className='p-2 text-black' />
                    <button type='submit' className='bg-black'>{edit ? 'Update' : 'Submit'}</button>
                </form>
            </div>
            <table className='max-w-xl mx-auto p-5 bg-gray-400 w-full border'>
                <tbody>
                    <tr className='border-b'>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    {result?.map((item: any, idx: number) => {
                        return (
                            <tr key={idx} className='text-center'>
                                <td>{idx + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button className='mr-3' onClick={() => handleEdit(idx)}>Edit</button>
                                    <button onClick={() => handleDelete(idx)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Crud