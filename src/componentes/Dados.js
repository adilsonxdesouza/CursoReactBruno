import React from "react";

export default function Dados(props) {
    return (
        <>
            <div className="box" >
                <p>Nome: {props.nome} </p>
                <p>End: {props.endereco}</p>
            </div>
        </>
        );
}