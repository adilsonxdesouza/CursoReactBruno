import React from "react";
import Globais from "./componentes/Globais";

export default function AppGlobais() {
    const [ano, setAno] = React.useState(Globais.ano);

    const gravarAno = () => {
        Globais.ano = ano; // Atualizo a variável glogal com o conteudo do estado ano
    }

    // ************  Testar var globais na aula de route

    const mostrar = () => { alert(Globais.ano); }

    return (
        <>
            <p>Canal: {Globais.canal}</p>
            <p>Curso: {Globais.curso}</p>
            <p>Ano: {Globais.ano}</p>
            <p>novo ano:</p>

            {/* Quando coloquei value ={Globais.ano} , o input ficou readonly */}
            <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />

            {/* se chamar as funções do onclick sem arrow function elas são executadas imediataMENTE */}
            <button onClick={()=> gravarAno()} >Gravar</button>


            <button onClick={ () => mostrar()} >Mostrar</button> 

        </>
        );

}