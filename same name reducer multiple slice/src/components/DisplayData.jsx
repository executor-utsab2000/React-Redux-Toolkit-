import React from 'react'
import { setData as adminSetData } from '../features/adminSlice';
import { setData as userSetData } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';


const DisplayData = () => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = React.useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            id: nanoid(),
            item: inputValue
        }

        dispatch(adminSetData(data))
        dispatch(userSetData(data))

        setInputValue('')

    }

    const getAdminData = useSelector(state => state.admin.data)
    const getUserData = useSelector(state => state.user.data)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <input type="submit" value="Submit" />
            </form>
            <hr />

            <h3>Display Data</h3>

            <h4>User</h4>
            <ul>
                {
                    getUserData.map((elm) => {
                        return (
                            <li>{elm.item}</li>
                        )
                    })
                }
            </ul>

            <hr />

            <h4>Admin</h4>
            <ul>
                {
                    getAdminData.map((elm) => {
                        return (
                            <li>{elm.item}</li>
                        )
                    })
                }
            </ul>

            <hr />


        </>
    )
}

export default DisplayData