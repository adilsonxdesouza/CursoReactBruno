import React from "react";

export default function BtnCalcular (props) {
    return (
        <>
            <button onClick={()=>props.setResultado( props.peso/(props.altura * props.altura) )}  > calcular o imc </button>
        </>
    );

}