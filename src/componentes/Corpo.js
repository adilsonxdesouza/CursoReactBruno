import React from "react";
import Dados from "./Dados";

const meustyle = {
    fontSize: "3em",
    backgroundColor: "green", // As props css no json sempre tem que ter valores entre aspas
}

export default function Corpo() {
    return (
        <>
            <div className="box" id="main">
                <p style={{ backgroundColor: "yellow", fontSize: "2em" }}>Estou no comp corpo</p>
                <Dados nome="tito" endereco="ubaldo pinto" />
                <p style={meustyle}>style= json com props css camel case</p>

                <div className="box bichona">sou do app.scss transpilado para tag style
                    <a> um link </a>
                </div>
               
            </div>
        </>
        );
}