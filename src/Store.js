import React, {createContext, Component} from 'react'

export const Context = createContext()

class ContextProvider extends Component {
    state = {
        spent: 0,
        budget: 20
    }

    updateSpent = (newAmount) => {
        this.setState({spent: newAmount})
    }

    updateBudget = (newBudget) => {
        this.setState({budget: newBudget})
    }

    render() {
        return (
            <Context.Provider value={{...this.state, updateSpent: this.updateSpent, updateBudget: this.updateBudget}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export default ContextProvider