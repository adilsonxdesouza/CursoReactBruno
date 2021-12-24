import React from "react";


const carros = [
    { categoria: "suv", preco: "100000", modelo: "creta" },
    { categoria: "suv", preco: "1250000", modelo: "hrv" },
    { categoria: "popular", preco: "10000", modelo: "gol" },
    { categoria: "popular", preco: "20000", modelo: "voyage" },
];

const tabelaCarros = (cat) => {

    const carrosPorCat = cat != "" ? carros.filter(x => x.categoria == cat) : carros;
    return (
        
            <table border="1">
                <tr>
                    <td>Categoria</td>
                    <td>preço</td>
                    <td>modelo</td>
                </tr>
                {
                    carrosPorCat.map((x) => 
                        <tr>
                            <td> {x.categoria}</td>
                            <td> {x.preco}</td>
                            <td> {x.modelo}</td>

                        </tr>
                    )
                }
            </table>
        
    );
}

export default function AppExercAula29() {
    const [categoria, setCategoria] = React.useState("");
    /*setCategoria("suv");*/
  
    return (
     
        <>
            <label> categoria </label>
            <input type="text" onChange={(e) => setCategoria(e.target.value)} ></input>
            { /* {() => setCategoria("suv") }*/}
            {/*{setCategoria("popular")}*/}  {/* se chamar o setState dentro do render e sem ser por uma arros function causa loop infinito*/}
            {tabelaCarros(categoria)}
        </>
    );

}