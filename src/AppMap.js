import React from "react";


export default function AppMap() {
    const carros = ["fusca", "gol", "focus"];
    const listacarros = carros.map((valor, indice) => <li>{indice} &gt; {valor}</li>);
    // O map aceita como parametro o valor do item do array e (opcionalmente) o índice

    const carrosjson = [
        { "modelo": "fusca", "ano": "1990" },
        {"modelo":"gol","ano":"2015"}
    ];

   // console.log("liks"+carrosjson);
    const listacarrosjson = carrosjson.map((item, indice) => <li>{indice} &gt; modelo:{item.modelo}  - ano: { item.ano}</li>);

    return (
        <>
            <ul>{listacarrosjson}</ul>
           
        </>
    );

} 