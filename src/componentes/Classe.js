import React from "react";

export default class Classe extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {  // Obrigatório chamar e com o nome render()
        return (
            <div style={{color:"red"}}>
                <h1> Adilson xavier</h1>
                Canal: {this.props.canal}  
                {this.props.children}
            </div>

            );
    }

    //Na class o props them que vir com this antes

}