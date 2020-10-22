import React, {Component} from 'react'
import './components.css'
import ExpensesCardWhite from './ExpenseCardWhite.js'
import moment from 'moment'
import FirebaseDB from '../config/fbConfig.js'
import {Bounce} from 'react-activity'

class ExpensesTab extends Component {
    state = {
        transactions: [],
        isLoading: true,
    }
    
    componentDidMount() {
        const path = "expenses/" + moment().format("D MMM YYYY") + '/transactions'
        FirebaseDB.firestore().collection(path).get().then(querySnapshot=> {
            const results = []
            querySnapshot.docs.map(documentSnapshot=> results.push(documentSnapshot.data()))
            this.setState({transactions: results, isLoading: false})
        }).catch(err => console.error(err))
    }

    getRealTimeUpdates = () => {
        const path = "expenses/" + moment().format("D MMM YYYY") + '/transactions'
        FirebaseDB.firestore().collection(path).get().then(querySnapshot=> {
            const results = []
            querySnapshot.docs.map(documentSnapshot=> results.push(documentSnapshot.data()))
            this.setState({transactions: results, isLoading: false})
        }).catch(err => console.error(err))
    }

    render() {
        const {transactions, isLoading} = this.state
        const path = "expenses/" + moment().format("D MMM YYYY") + '/transactions'
        this.getRealTimeUpdates()

        let lastFive = []
        if (transactions.length > 5) {
            lastFive = transactions.slice(-5)
        } else {
            lastFive = transactions
        }
        const expensesList = lastFive.map(exp => <ExpensesCardWhite time={exp.time} note={exp.note} amount={exp.amount} path={path}/>)
        
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

export default ExpensesTab