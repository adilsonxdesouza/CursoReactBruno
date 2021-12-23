import React from 'react'

export class GetDerivedStateFromProps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Constructor Method'
        }
    }

    static getDerivedStateFromProps(props, state) { // O Métoedo é estatico
        return { name: props.nameFromParent }       // O médodo getDerivedStateFromProps é opcional e é usado para modificar o estado
        //return { name: "adilson" }                // antes do render
    }

    render() {
        return (
            <div>
                This is a {this.state.name}
            </div>
        )
    }
}
