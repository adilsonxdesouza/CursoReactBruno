import React from "react";
import imagem1 from "./imgs/img2.gif";
import imagem2 from "./imgs/pub.jpg";

export default function Led(props) {
    //const [ligado, setLigado] = React.useState(true);
    return (
        <>  <h1>Eventos Led controle no pai</h1>
            <img style={{ width: "50px", height: "50px" }} src={props.ligado1 ? imagem1 : imagem2} /><br />
            <button onClick={() => {props.setLigado1(!props.ligado1) } }> {props.ligado1 ? "ligado" : "desligado"} </button>
        </>
       
        );
}
