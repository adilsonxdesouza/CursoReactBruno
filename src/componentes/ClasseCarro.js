import React from "react";

export default class ClasseCarro extends React.Component {
    constructor(props) {
        super(props);
        this.modelo = "HRV";
        this.state= {         // O nome do object tem que ser exatamente "state" pois vem da classe React.Component
            ligado: false,
            velAtual: 0
        }
    }

    ligardesligar() {

        //this.state.ligado = true; ==> Assim muda só em memória . Pra mudar o estado e renderizar tem que usar o setState
        
        this.setState({ ligado: !this.state.ligado, velAtual: 10 });
    }

    render() {  // Obrigatório chamar e com o nome render()
        return (
            <div style={{color:"red"}}>
                <h1> classe carro</h1>
                Canal: {this.props.canal}  
                {this.props.children}
                <p> Modelo {this.modelo}</p>
                <p>{this.state.ligado ? "Ligado" : "Desligado"}</p>
                <p>velocicade:{this.state.velAtual}</p>
                <button onClick={() => this.ligardesligar() } >Ligar/desligar</button>
            </div>

            );
    }

    //Na class o props them que vir com this antes

}