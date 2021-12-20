import React from "react";


// => ler mais sobre o assunto posteriormente


export default function AppUseEffect() {


    React.useEffect(                 
        () => {
            console.log("pagina carregada");
            document.title = `Contagem: ${contagem}`

        }      //O use effect é chamado quando a pag é carregada ou atualizada
    );

    const [contagem, setContagem] = React.useState(0);

    return (
        <>
            <div>Contagem: {contagem}</div>
            <button onClick={() => { setContagem(contagem + 1);}}   >clique</button>
           
        </>
    );

} 