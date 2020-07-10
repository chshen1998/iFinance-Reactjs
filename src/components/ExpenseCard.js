import React from 'react'
import './components.css'

function ExpenseCard(props) {
    return (
        <div className="expenseCard">
            <h4>{props.time}</h4>
            <h4>{props.note}</h4>
            <h4>${props.amount}</h4>
        </div>
    )
}

export default ExpenseCard