import React from "react";


const consultar = () => {
    document.getElementById("nomeconsultado").value = localStorage.getItem("nome");
    //Funciona tanto aqui fora quando dentro da func AppLocalStorage() 
}

export default function AppLocalStorage() {

    const [nome, setNome] = React.useState();


    return (

        <>
            <label>Digite nome</label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} /><br />
            <button onClick={() => localStorage.setItem("nome", nome)} >guardar</button>
            <button onClick={() => consultar()} >ler</button>
            <button onClick={() => localStorage.removeItem("nome")} >apagar</button> <br />
            Nome gravado <input type="text" id="nomeconsultado"></input>
            
        </>
    );

}