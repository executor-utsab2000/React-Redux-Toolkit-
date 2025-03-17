import React from 'react'

const ExpenseItem = ({ slNo = '', expenseName = '', expenseAmount = '', editFunction, deleteFunction, todoStatus }) => {
    return (
        <div className={`expenseItem my-3 ${todoStatus == 'true' ? 'bg-success' : 'bg-warning'}`}>
            <div className="row">
                <div className="col-2">{slNo}</div>
                <div className="col-10">
                    <div className="row">
                        <div className="col-sm-8">{expenseName}</div>
                        <div className="col-sm-4">{expenseAmount}</div>
                        <div className="col-6 d-flex justify-content-center mt-5 mb-2" onClick={editFunction}><i className="fa-solid fa-pen-to-square"></i></div>
                        <div className="col-6 d-flex justify-content-center mt-5 mb-2" onClick={deleteFunction}><i className="fa-solid fa-trash"></i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExpenseItem