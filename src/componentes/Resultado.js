import React from "react";

export default function Resultado(props) {
    return (
        <div style={{marginBottom:"1em"} }>
            <label>Soma Notas : { props.somaNotas}</label>
            <p> {props.somaNotas > 60 ? "Aprovado" : "Reprovado"} </p>
            {/* A funçao somaMotas que está sendo executada é a do componente pai (AppElevacao) */}
        </div>
        
        );
}