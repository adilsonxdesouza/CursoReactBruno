//import React, {useState } from "react"; // O useState já está dentro do React mas desta forma não prisaria referenci-alo com React.useState()
                                          // mas só useState()
import React    from "react";


//const [num, setNum] = useState(50) // usa desconstrução de array, se usar aqui da erro: tem que ser dentro da functiom do componente

function Numero(props) {  // Poderia tambem criar este componente em outro arquivo e importalo
    return(               // Numero só recebe de AppState o valor de num em props
        <div className="box">
            <h1>
                valor de num no comp Numero : {props.numero}
            </h1>
        </div>

        );
}

function NumeroComBotao(props) {
    return (
        <div className="box">
            <h1>
                valor de num no comp NumerocomBotao : {props.numero}
            </h1>
            <button onClick={() => props.setNumero(props.numero + 10)} >Clique</button>
            {/* Numero com botão recebe de AppState() além do numero, a função setNumero usada no botão e com isso
             * acaba atualizando o estado de num no componenente pai AppState que acaba refletindo nos componentes filhos
             * ( inclusive o próprio NumeroComBotao()*/}
        </div>
        );
}


export default function AppState() {
    const [num, setNum] = React.useState(50);

    return (
        <div className="box">
            <h1>valor de num:{num}</h1>
            <Numero  numero={num} />   {/* Como Numero() é filho de AppState() eu passo a(s) prop(s) que ele vai usar de AppState() para Numero() */ }  
            <button onClick={() => setNum(num + 10)}>clique</button>

            <NumeroComBotao numero={num} setNumero={ setNum} />

          
        </div>
    )
}