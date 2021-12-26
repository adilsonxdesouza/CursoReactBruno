import React from "react";

import "./estilos.css"; // pra poder carregar precisei especificar a extensão css no webpack.config.js e o css-loader no 
                        // webpack.config.js e no package.json
                        // Veja que é só importar direto sem o alias nem o "from"
                        // Foi criada uma tag style no head do virtual dom

//import estilos from "./eslilosModulo.css";


const estilos2 = {
    backgroundColor: "#0f0",
    color: "#444"

}

export default function AppCssAula8() {

    var estilos1 = {
        backgroundColor: "ff0",
        border:"1px dashed purple"

    }
    return (
        <>
            {/*No style inline é um obj json e não css tradicional, por isso a provp é camel case e o valor sempre entre aspas*/}
            <h1 style={{ backgroundColor: "#f00", color: "green", fontSize: "1em" }}>Adilson h1</h1>

            {/* pode usar uma variável criada fora ou dentro da function */}
            <p style={estilos1}> inline const interna </p>
            <p style={estilos2}> inline const externo </p>
            <br /><br />

            {/* veja que uso a prop className do react e não class mas o conteúdo é o nome da classe css da forma tradicional
             * sem precisar estar entre chaves */}
            {/* *** Importante: por questão de peformance, o uso de className (que vem de um arquivos css como abaixo) é a forma recomendada */}
            <p className="texto"> vim de um arquivo css</p>

            {/* veja que quando é id e não class é igual o css tradicional */}
            <p id="textoid">Tenho um id e não class</p>

            <br /><br /> <hr />
            {/* <p className={estilos.texto}>Eu estou usando um módulo css</p> */}
        </>
        );
}