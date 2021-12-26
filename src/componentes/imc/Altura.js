import React from "react";

export default function Altura(props) {
    return (
        <>
            <label>Altura:</label>
            <input type="text" onChange={(e)=>props.setAltura(e.target.value)} /><br/>
        </>
        );
}