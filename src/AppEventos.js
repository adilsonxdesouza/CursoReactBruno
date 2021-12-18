import React from "react";
import Led from "./componentes/Led";

export default function AppEventos() {

    const cancelar = (obj) => {        // Este método que retorna o preventDefault do objeto é necessário por que no React, diferente do 
        return obj.preventDefault();   // Vanilla, eu não posso usar o onClick = "return false" pra cancelar o funcionamento padrao do elemento
    }

    const [ligado, setLigado] = React.useState(true);
    return (
        <>
            <Led ligado1={ligado} setLigado1={setLigado} /><br />
            <a href="https://google.com.br"
                target="_blank"
                onClick={(e)=>cancelar(e)}   // Aquo a arraw function recebe o próprio objeto corrente em " (e) => " e usa ele mesmo como 
            > É pra não funcionar</a>        {/* argumento em cancelar(e) */}
           
        </>
    );

} 