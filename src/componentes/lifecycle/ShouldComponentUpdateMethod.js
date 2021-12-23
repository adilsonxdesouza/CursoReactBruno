import React, { Component } from 'react'

export default class ShouldComponentUpdateMethod extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'shouldComponentUpdate Method no construtor'
        }
    }
    shouldComponentUpdate() {   // Este mátodo se retornar false faz com que as alterações de estado feitas em 
                                // componentDidMount não seja executadas
                                // Não faz difererça se não tiver componentDidMount
        return false; //Change to true for state to update
    }

    //componentDidMount() {
    //    setTimeout(() => {
    //        this.setState({ name: "alteração via componentDidMount Method" })
    //    }, 3000)
    //}
    render() {
        return (
            <div>
                <p>This is a {this.state.name}</p>
            </div>
        )
    }
}