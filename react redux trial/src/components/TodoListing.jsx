import React from 'react'
import { removeTodo, setEditTodo, removeAll } from '../features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const TodoListing = () => {

    const todoList = useSelector(state => state.todo.todos) //useSelector gives access to current state in the form of call back
    const dispatch = useDispatch();


    return (
        <>
            <h3>Todo Listing</h3>
            <table>
                <tbody>
                    {
                        todoList.map((elm, index) => {

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{elm.text}</td>
                                    <td>{elm.expense}</td>
                                    <td>
                                        <button onClick={() => dispatch(removeTodo({ 'id': elm.id }))}>X</button>
                                    </td>
                                    <td>
                                        <button onClick={() => dispatch(setEditTodo(elm))}>Update</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <button onClick={() => dispatch(removeAll())}>Remove All</button>
        </>
    )
}

export default TodoListing