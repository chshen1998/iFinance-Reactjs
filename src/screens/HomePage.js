import React, {Component} from 'react'
import moment from 'moment'
import {Line} from 'rc-progress'
import ExpensesTab from '../components/ExpensesTab.js'
import ExpensesWindow from '../components/ExpensesWindow.js'
import Modal from 'react-modal'
import FirebaseDB from '../FirebaseDB.js'
import './screens.css'

class HomePage extends Component {
    state = {
        total: 9.10,
        max: 35,
        openAddModal: false,
        addAmount: '',
        addNote: '',
        openExpModal: false,
    }

    toggleAddModal = () => {
        if (this.state.openAddModal) {
            this.setState({openAddModal: false})
        } else{
            this.setState({openAddModal: true})
        }
    }
    toggleExpModal = () => {
        if (this.state.openExpModal) {
            this.setState({openExpModal: false})
        } else{
            this.setState({openExpModal: true})
        }
    }

    addTotal = () => {
        this.toggleAddModal()
        this.updateDB()
        this.setState({
            total: this.state.total + parseFloat(this.state.addAmount),
        })
    }

    updateDB = () => {
        const path = "expenses/" + moment().format("D MMM YYYY") + "/transactions"
        FirebaseDB.firestore().collection(path).add({
            amount: this.state.addAmount,
            note: this.state.addNote,
            time: moment().format('LT'),
        }).then(() => this.setState({
            addAmount: '',
            addNote: ''
        }))
    }

    handleChangeAddAmount = (event) => {
        this.setState({addAmount: event.target.value})
    }
    handleChangeAddNote = (event) => {
        this.setState({addNote: event.target.value})
    }

    render() {
        let percentage = Math.round(this.state.total*100 / this.state.max)
        let displayTotal = (this.state.total === 0.00 ? 0 : Number(this.state.total).toFixed(2))
        const path = "expenses/" + moment().format('D MMM YYYY') + "/transactions"

        return (
            <div className='homepage'>
                <h1>{moment().format('dddd Do MMMM')}</h1>
                <h4>TOTAL EXPENSES TODAY:</h4>
                <h1>${displayTotal}</h1>
                <Line percent={percentage} strokeWidth='5' trailWidth='5' strokeColor='red' className='gaugebar'/>
                <div className='transactions'>
                    <h4>TODAY RECENT TRANSACTIONS:</h4>
                    <ExpensesTab/>
                    <button onClick={this.toggleExpModal}>View All</button>
                </div>
                <button onClick={this.toggleAddModal}>ADD</button>

                <Modal isOpen={this.state.openExpModal} ariaHideApp={false}>
                    <div className='modalHeader'>
                        <button onClick={this.toggleExpModal}>Close</button>
                        <h2 className='date'>TODAY</h2>
                    </div>
                    <ExpensesWindow DBpath={path}/>
                </Modal>

                <Modal isOpen={this.state.openAddModal} ariaHideApp={false}>
                    <button onClick={this.toggleAddModal}>Close</button>
                    <form onSubmit={this.addTotal} className='addform'>
                        <h4>HOW MUCH DID YOU SPEND?</h4>
                        <input type='text' placeholder='e.g. 3.50' value={this.state.addAmount} onChange={this.handleChangeAddAmount}/>
                        <h4>WHAT DID YOU PURCHASE?</h4>
                        <input type='text' placeholder='e.g. Lunch' value={this.state.addNote} onChange={this.handleChangeAddNote}/>
                        <button type='submit'>Add</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default HomePage