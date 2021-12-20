import React from "react";


export default function Caixa(props) {
    return (
        <>
            <div className="box">
                {props.children} {/* aqui os componentes filhos que vem do pai são injetados neste ponto */}
                Email: {props.email}
                <br />
                c2: {props.children[3]}   {/*<p>sapo - vim do pai4</p>*/}
                tamanho: {props.children.length}
               
            </div>
        </>
        );
}