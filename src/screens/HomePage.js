import React, {Component, useContext} from 'react'
import moment from 'moment'
import {Line} from 'rc-progress'
import ExpensesTab from '../components/ExpensesTab.js'
import ExpensesWindow from '../components/ExpensesWindow.js'
import Modal from 'react-modal'
import {Context} from '../Store.js'
import FirebaseDB from '../config/fbConfig.js'
import './screens.css'

class HomePage extends Component {
    static contextType = Context
    state = {
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
            addAmount: '',
            addNote: ''
        })
    }

    updateDB = () => {
        const path = "expenses/" + moment().format("D MMM YYYY") + "/transactions"
        const id = moment().format('LT') + this.state.addAmount
        FirebaseDB.firestore().collection(path).doc(id).set({
            amount: this.state.addAmount,
            note: this.state.addNote,
            time: moment().format('LT'),
        })
    }

    handleChangeAddAmount = (event) => {
        this.setState({addAmount: event.target.value})
    }
    handleChangeAddNote = (event) => {
        this.setState({addNote: event.target.value})
    }

    render() {
        const {spent, budget, updateSpent} = this.context
        let percentage = Math.round(spent*100 / budget)
        let displayTotal = (spent === 0.00 ? 0 : Number(spent).toFixed(2))
        const path = "expenses/" + moment().format('D MMM YYYY') + "/transactions"

        return (
            <div className='homepage'>
                <h1 className='header'>{moment().format('dddd Do MMMM')}</h1>
                <h4 className='header'>TOTAL EXPENSES TODAY:</h4>
                <h1 className='header'>${displayTotal}</h1>
                <Line percent={percentage} strokeWidth='5' trailWidth='5' strokeColor='red' className='gaugebar'/>
                <div className='transactions'>
                    <h4 className='header'>TODAY RECENT TRANSACTIONS:</h4>
                    <ExpensesTab/>
                </div>
                <button className='button-home' onClick={this.toggleExpModal}>View All</button>
                <button className='button-home' onClick={this.toggleAddModal}>ADD</button>

                <Modal isOpen={this.state.openExpModal} ariaHideApp={false}>
                    <div className='modalHeader'>
                        <button className='button-home' onClick={this.toggleExpModal}>Close</button>
                        <h2 className='date'>TODAY</h2>
                    </div>
                    <ExpensesWindow DBpath={path}/>
                </Modal>

                <Modal isOpen={this.state.openAddModal} ariaHideApp={false}>
                    <div className='modalHeader'>
                        <button className='button-home' onClick={this.toggleAddModal}>Close</button>
                    </div>
                    <form onSubmit={() => {this.addTotal(); 
                                            updateSpent(spent + parseFloat(this.state.addAmount));}} 
                    className='addform'>
                        <h4>HOW MUCH DID YOU SPEND?</h4>
                        <input type='text' placeholder='e.g. 3.50' value={this.state.addAmount} onChange={this.handleChangeAddAmount}/>
                        <h4>WHAT DID YOU PURCHASE?</h4>
                        <input type='text' placeholder='e.g. Lunch' value={this.state.addNote} onChange={this.handleChangeAddNote}/>
                        <button className='button-home' type='submit'>ADD</button>
                    </form>
                </Modal>
            </div>
        )
    }
}

export default HomePage