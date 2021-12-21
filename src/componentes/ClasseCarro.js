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

    ligardesligar() {  // Seria function ligardesligar() mas em classe se omite a palavra function na definição da função

        //this.state.ligado = true; ==> Assim muda só em memória . Pra mudar o estado e renderizar tem que usar o setState
        
       // this.setState({ ligado: !this.state.ligado, velAtual: 10 });

        // Ao invez de modificar diretamente o valor do objeto no setState como foi feito acima, uma outra forma é 
        // passar uma função anônima como argumento do setState como abaixo.
        // Esta forma é considerada mais segura pois pode ocorrer de ter um delay entre a atualização do state em memória e sua
        // renderização na tela
        this.setState(
            (state) => ({ligado: !state.ligado }) // (ES6) Nesta arrow function é retornado um objeto então o precisa dos parênteses para
        )                                         // Não confundir as {} com o retorno de função ( que ai precisaria return)
    }


    acelerar() {

        this.setState(
            (state,props) => ({velAtual:state.velAtual + props.fator})
        );
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
                <button onClick={() => this.ligardesligar()} >Ligar/desligar</button>
                <button onClick={()=> this.acelerar() }>Acelerar</button>
            </div>

            );
    }

    //Na class o props them que vir com this antes

}