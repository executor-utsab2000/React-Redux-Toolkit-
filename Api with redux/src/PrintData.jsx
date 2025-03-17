import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import fetchData from './ApiFunction/usersData'

const PrintData = () => {

    const dispatch = useDispatch()
    const selector = useSelector(state => state.user.todoList) // user is the key in store
    const loading = useSelector(state => state.user.loading)

    useEffect(() => {
        fetchData(dispatch)
    }, [dispatch])

    console.log(loading);

    useEffect(() => {
        console.log(selector);
        console.log(loading);
    }, [selector])


    return (
        <div>PrintData</div>
    )
}

export default PrintData