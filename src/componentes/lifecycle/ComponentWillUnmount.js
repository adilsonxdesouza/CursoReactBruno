import React, { Component } from 'react'

export default class ComponentWillUnmount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
        }
    }
    render() {
        return (
            <>
                <p>{this.state.show ? <Child /> : null}</p>
                <button onClick={() => { this.setState({ show: !this.state.show }) }}>Click me to toggle</button>
            </>
        )
    }
}

export class Child extends Component {
    componentWillUnmount() {            // O componentWillUnmount()  é chamado no elemento filho e é chamado quando o
        alert('This will unmount')      // pai deixa de renderizalo
    }
    render() {
        return (
            <>
                I am a child component
            </>
        )
    }
}