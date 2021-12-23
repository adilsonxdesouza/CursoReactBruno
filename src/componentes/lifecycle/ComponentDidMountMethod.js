import React from 'react'

export default class ComponentDidMountMethod extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'This name will change in 5 sec'
        }
    }
    componentDidMount() {           // Método de ciclo de vida mais usado para ser usado depois que o elemento é renderizado
        setTimeout(() => {
            this.setState({ name: "This is a componentDidMount Method" })
        }, 5000)

    }
    render() {
        return (
            <div>
                <p>{this.state.name}</p>
            </div>
        )
    }
}