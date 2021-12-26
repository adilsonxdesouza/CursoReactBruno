import React from "react";

//export default function Altura(props) {
//    return (
//        <>
//            <label>Altura:</label>
//            <input type="text" onChange={(e)=>props.setAltura(e.target.value)} /><br/>
//        </>
//        );
//}

export default class AlturaClass extends React.Component {
    constructor(props) {
        super(props);
        //this.state = {
        //    altura: 0
        //}
    }

    render() {
        return (
            <>
                <label>Altura:</label>
                <input type="text" onChange={(e) => this.props.setAltura(e.target.value)} /><br />
            </>
        );
    }
    // A única coisa que mudou neste inpit é que o props do onchange eu tenho que chamar com o this : this.props.setAltura...
}