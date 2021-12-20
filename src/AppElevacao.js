import React from "react";

import Nota from "./componentes/Nota";

import Resultado from "./componentes/Resultado";

export default function AppElevacao() {

    const [nota1v, setNota1] = React.useState(0);
    const [nota2v, setNota2] = React.useState(0);

    return (
        <>
            <Nota num={1} nota={nota1v} setNota={setNota1} />
            <Nota num={2} nota={nota2v} setNota={setNota2} />
            <Resultado somaNotas={ parseFloat(nota1v)+parseFloat(nota2v) }/>
           
        </>
    );

} 