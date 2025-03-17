import React, { useEffect } from 'react'
import './CSS/style.scss'
import ExpenseItem from './UI/ExpenseItem'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, setSelectedTodo } from '../features/todo/todoSlice'


const TodoListing = () => {
    const [sum, setSum] = React.useState(0)

    const dispatch = useDispatch()
    const todoArray = useSelector(state => state.todo.todoList)

    useEffect(() => {
        const totalExpenses = todoArray.reduce((sum, elm) => {
            return sum + Number(elm.expenseAmount);
        }, 0);

        // Store the calculated sum in the state
        setSum(totalExpenses)
    }, [todoArray])



    return (
        <>
            <div className="todoListing">

                <div className="topSection">
                    <div className="totalAmountSpend">
                        <div className="text">Total Amount Spent : </div>
                        <div className="amount">{sum}</div>
                    </div>
                </div>


                <div className="listing mt-4">
                    <div className="container">
                        {
                            todoArray.map((elm, index) => {

                                return (
                                    <ExpenseItem
                                        todoStatus={elm.status}
                                        key={index}
                                        deleteFunction={() => dispatch(removeTodo({ 'id': elm.id }))}
                                        editFunction={() => dispatch(setSelectedTodo(elm))}
                                        expenseName={elm.expenseName}
                                        expenseAmount={elm.expenseAmount}

                                    />
                                )
                            })
                        }
                    </div>
                </div>


            </div>
        </>
    )
}

export default TodoListing