import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todoSlice'

const Todos = () => {

    const allValues = useSelector(state => state.todos) // getting value from store
    const dispatch = useDispatch()
    // console.log(allValues);

    return (
        <>
            <br />
            <h3>MY Todos</h3>
            <table>
                <tbody>
                    {
                        allValues.map((elm, index) => {
                            // console.log(elm);

                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{elm.text}</td>
                                    <td><button onClick={() => dispatch(removeTodo(elm.id))}>X</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Todos