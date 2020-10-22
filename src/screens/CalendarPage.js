import React, {Component } from 'react'
import Calendar from 'react-calendar'
import Modal from 'react-modal'
import ExpensesWindow from '../components/ExpensesWindow.js'
import './screens.css'

class CalendarPage extends Component {
    state ={
        openModal: false,
        date: new Date(),
    }

    selectDate = (date) => {
        this.setState({
            openModal: true,
            date: date,
        })
    }

    closeModal = () => {
        this.setState({openModal: false})
    }

    render() {
        const dateSplit = this.state.date.toString().split(" ")
        const dateString = dateSplit[2]+" "+dateSplit[1]+" "+dateSplit[3]
        const path = "expenses/" + dateString + "/transactions"
        return (
            <div className='calendarpage'>
                <h1 className='header'>CALENDAR</h1>
                <Calendar value={this.state.date} onChange={this.selectDate} maxDetail="month" minDetail="year" className='calendar'/>

                <Modal isOpen={this.state.openModal} ariaHideApp={false}>
                    <div className='modalHeader'>
                        <button className='button-home' onClick={this.closeModal}> Close </button>
                        <h2 className='date'>{dateString}</h2>
                    </div>
                    <ExpensesWindow DBpath={path}/>
                </Modal>
            </div>
        )
    }
}

export default CalendarPage