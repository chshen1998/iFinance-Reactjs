import React, {Component} from 'react'
import Modal from 'react-modal'
import {Context} from '../Store.js'
import './screens.css'

class SettingsPage extends Component {
    static contextType = Context
    state = {
        openBudgetModal: false,
        newBudget: ''
    }

    openModal = () => {
        this.setState({
            openBudgetModal: true,
            newBudget:''
        })
    }

    closeModal = () => {
        this.setState({
            openBudgetModal: false,
            newBudget:''
        })
    }

    handleChangeBudget = (event) => {
        this.setState({newBudget: event.target.value})
    }

    render() {
        const {budget, updateBudget} = this.context

        return (
            <div className='settingsPage'>
                <h1 className='header'>SETTINGS</h1>
                <button className="settingsButton" onClick={this.openModal}>
                    Budget
                </button>

                <Modal isOpen = {this.state.openBudgetModal}>
                    <div className='modalHeader'>
                        <button className='button-home' onClick={this.closeModal}>Close</button>
                    </div>
                    <form onSubmit={() => {updateBudget(parseFloat(this.state.newBudget)); 
                                            this.closeModal()}} 
                    className='budget-form'>
                        <h4>Current Daily Budget:</h4>
                        <h1>  {budget}</h1>
                        <h4>New Daily Budget:</h4>
                        <input type='text' value={this.state.newBudget} onChange={this.handleChangeBudget}/>
                        <button className='button-home' type='submit'>Change</button>
                    </form>
                </Modal>
            </div>  
        )
    }
}

export default SettingsPage
