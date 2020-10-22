import React, {Component} from 'react'
import './components.css'
import ExpensesCard from './ExpenseCard.js'
import FirebaseDB from '../config/fbConfig.js'
import {Bounce} from 'react-activity'

class ExpensesWindow extends Component {
    _isMounted = false

    constructor(props) {
        super(props)
        this.state = {
            transactions: [],
            isLoading: true,
        }
    }
    
    
    componentDidMount() {
        this._isMounted = true
        const path = this.props.DBpath
        FirebaseDB.firestore().collection(path).get().then(querySnapshot=> {
            const results = []
            querySnapshot.docs.map(documentSnapshot=> results.push(documentSnapshot.data()))
            this.setState({transactions: results, isLoading: false})
        }).catch(err => console.error(err))
    }

    componentDidUpdate() {
        const path = this.props.DBpath
        FirebaseDB.firestore().collection(path).get().then(querySnapshot=> {
            const results = []
            querySnapshot.docs.map(documentSnapshot => results.push(documentSnapshot.data()))
            this.setState({transactions: results, isLoading: false})
        }).catch(err => console.error(err))
    }

    render() {
        const {transactions, isLoading} = this.state

        const expensesList = transactions.map(exp => <ExpensesCard time={exp.time} note={exp.note} amount={exp.amount} path={this.props.DBpath}/>)

        if (isLoading) {
            return (
                <Bounce/>
            )
        }
        return (
            <div className='expensesTab'>
                {expensesList}
            </div>
        )
    }
}

export default ExpensesWindow