import React from "react";
import imagem from "./componentes/imgs/img2.gif";
//para  importar a imagem precisa incluir o file-loader no webpack.config.js

import Caixa from "./componentes/Caixa";
import Corpo from "./componentes/Corpo"

function Canal() {
    return (
        <div style={{ color: "red", border: "dashed 1px #00f" , padding:"10px"}} >Meu canal</div>
        );
}

export default function AppContencao() {
    return (
        <>
            <Caixa email="adilson@g1.com">
                <Canal/>
                <h2>Adilson - vim do pai2</h2> 
                <p>Maysa - vim do pai2</p>
                <p>sapo - vim do pai4</p>  
            </Caixa>                            

            {/* este conteudo dentro de <Caixa> não é renderizado sozinho */}
            {/* Ele é automaticamente passado como props.children para o conponente Caixa e só será*/}
            {/* renderizado se lá no Caixa for renderizado o props.children*/}
            {/****** IMPORTANTE:> Não colocar comentários dentro de <Caixa></Caixa> pois serão considerados como children*/}
        </>
    );

} 