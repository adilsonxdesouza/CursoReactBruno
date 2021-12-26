import React from "react";

export default function Peso(props) {
    return (
        <>
            Peso: <input type="text" onChange={(e) => props.setPeso(e.target.value)} /><br/>
        </>
    );
}