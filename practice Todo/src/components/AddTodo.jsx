import React from 'react'
import './CSS/style.scss'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'

const AddTodo = () => {

    const [expenseName, setExpenseName] = React.useState('')
    const [expenseAmount, setExpenseAmount] = React.useState('')
    const [expenseStatus, setExpenseStatus] = React.useState('')

    const dispatch = useDispatch();
    const todoSelectedArray = useSelector(state => state.todo.currentSelected)
    const todoArray = useSelector(state => state.todo)

    React.useEffect(() => {
        if (todoSelectedArray != null) {
            setExpenseName(todoSelectedArray.expenseName)
            setExpenseAmount(todoSelectedArray.expenseAmount)
            setExpenseStatus(todoSelectedArray.status)
        }
    }, [todoSelectedArray])

    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            'expenseName': expenseName,
            'expenseAmount': expenseAmount,
            'status': expenseStatus
        }
        if (todoSelectedArray != null) {
            dispatch(updateTodo(data))
        }
        else {
            dispatch(addTodo(data))
        }

        setExpenseName('')
        setExpenseAmount('')
        setExpenseStatus('')

    }


    return (
        <>
            <div className="addTodo">
                <div className="formContainer">
                    <form className="form" onSubmit={submitHandler}>
                        <div className="row">
                            <div className="col-12 d-flex justify-content-center p-2"> <input type="text" placeholder='Enter Expense Name' value={expenseName} onChange={(e) => setExpenseName(e.target.value)} /></div>
                            <div className="col-sm-6 d-flex justify-content-center p-2"><input type="text" placeholder='Enter Expense Amount' value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} /></div>
                            <div className="col-sm-6 d-flex justify-content-center p-2">
                                <select name="" id="" onChange={(e) => setExpenseStatus(e.target.value)}>
                                    <option value="" selected disabled>Select Progress Type</option>
                                    <option value="true" selected={todoSelectedArray !== null && expenseStatus == true}>Done</option>
                                    <option value="false" selected={todoSelectedArray !== null && expenseStatus == false}>Not Done</option>
                                </select>
                            </div>
                            <div className="col-12 mt-4"><button type="submit">{todoSelectedArray != null ? 'Update ' : 'Add '} Todo</button> </div>
                        </div>
                    </form >
                </div >
            </div >
        </>
    )
}

export default AddTodo