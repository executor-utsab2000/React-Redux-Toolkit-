import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todoSlice'

const AddTodo = () => {

    const [value, setValue] = useState('')

    const dispatch = useDispatch() //dispatch with the use of reducer changes or updates value in the store

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(value)) //sending value  by dispatch to update store
        setValue('')
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddTodo