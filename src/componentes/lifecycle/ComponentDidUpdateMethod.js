import React, { Component } from 'react'

export default class ComponentDidUpdateMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'from previous state  (primeiro)',
            num:1
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ name: "to current state (segundo)" })
        }, 3000)
    }
    componentDidUpdate(prevState) {  // Este método só é executado se ( e após ) o estado for alterado em componentDidMount
        if (prevState.name !== this.state.name) {
            setTimeout(() => {
                document.getElementById('statechange').innerHTML = "Yes the state is changed (terceiro)"
            }, 3000);
        }
        if (this.state.num < 10) {
            setTimeout(() => {
                this.setState({ num: this.state.num + 1 }); // Se colocar o setState forma de um if no componentDidUpdate
            }, 1000);                                       // gera erro de loop infinito
        }

    }
    render() {
        return (
            <div>
                State was changed {this.state.name}
                <p id="statechange"></p>
                <p>Numero{this.state.num}</p>
            </div>
        )
    }
}