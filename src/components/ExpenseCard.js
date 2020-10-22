import React, {Component} from 'react'
import FirebaseDB from '../config/fbConfig.js'
import {Context} from '../Store.js'
import {DeleteOutlined} from '@ant-design/icons'
import './components.css'

class ExpenseCard extends Component {
    static contextType = Context
    constructor(props) {
        super(props)
    }

    deleteCard = () => {
        const collPath = this.props.path
        const docPath = this.props.time + this.props.amount
        FirebaseDB.firestore().collection(collPath).doc(docPath).delete()
    }

    render() {
        const {spent, updateSpent} = this.context
        return (
            <div className="expenseCard">
                <h4>{this.props.time}</h4>
                <h4>{this.props.note}</h4>
                <h4>${this.props.amount}</h4>
                <button onClick={() => {this.deleteCard();
                                        updateSpent(spent - parseFloat(this.props.amount))}}> 
                    <DeleteOutlined /> 
                </button>
            </div>
        )
    }
}

export default ExpenseCard