import React from "react";

export default function Nota(props) {
    return (
        <div style={{marginBottom:"1em"} }>
            <label>Nota {props.num }</label>
            <input type="text" value={props.nota} onChange={(e) => props.setNota(e.target.value)} />
            {/* A funçao setNota que está sendo executada é a do componente pai (AppElevacao) */}
        </div>
        
        );
}