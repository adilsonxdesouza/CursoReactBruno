import React, { Component } from 'react'

export default class GetSnapshotBeforeUpdateMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: ' constructor Method'
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: " componentDidMount Method" })
        }, 2000)
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        setTimeout(() => {
            document.getElementById('previous-state').innerHTML = "The previous state was " + prevState.name
        }, 2000)
    }
    componentDidUpdate() {
        setTimeout(() => {
            document.getElementById('current-state').innerHTML = "The current state is " + this.state.name
        }, 2000)
    }
    render() {
        return (
            <>
                <h5>This is a {this.state.name}</h5>
                <p id="previous-state"></p>
                <p id="current-state"></p>
               
            </>
        )
    }
}