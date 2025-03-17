import React, { useEffect, useState } from 'react'
import { addTodo, updateTodo } from '../features/todoSlice'
import { useDispatch, useSelector } from 'react-redux'

const AddTodo = (props) => {

  const [expenseItem, setExpenseItem] = useState('')
  const [expenseAmount, setExpenseAmount] = useState(0)

  const todoDispatch = useDispatch()

  // in todoListing.jsx page 
  const editTodo = useSelector(state => state.todo.editTodo) //todo is the keyValue of reducer in store 

  useEffect(() => {
    // console.log(editTodo);
    if (editTodo) {
      setExpenseItem(editTodo.text)
      setExpenseAmount(editTodo.expense)
    }

  }, [editTodo])


  const submitHandler = (e) => {
    e.preventDefault()

    if (editTodo) {
      todoDispatch(updateTodo({
        'id': editTodo.id,
        'text': expenseItem,
        'expense': expenseAmount
      }))

      setExpenseAmount(0)
      setExpenseItem('')
      return;

    }


    const data = {
      'text': expenseItem,
      'expense': expenseAmount
    }

    todoDispatch(addTodo(data))
    setExpenseAmount(0)
    setExpenseItem('')
  }

  return (
    <>
      <div className="">
        <form onSubmit={submitHandler}>
          <input type="text" value={expenseItem} onChange={(e) => setExpenseItem(e.target.value)} /><br />
          <input type="text" value={expenseAmount} onChange={(e) => setExpenseAmount(e.target.value)} /><br />
          <button type="submit">{editTodo ? 'Update' : 'Add Todo'}</button><br />
        </form>
      </div>
    </>
  )
}

export default AddTodo