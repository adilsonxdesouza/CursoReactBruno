import React from "react"


const seuPeso = (p, sp) => {
    return (
        <>
            <label> Informe seu peso</label> &nbsp;
            <input type="text" value={p} onChange={(e)=>sp(e.target.value) } /><br />
        </>
    );
}


const suaAltura = (a, sa) => {
    return (
        <>
            <label> Informe sua altura</label> &nbsp;
            <input type="text" value={a} onChange={(e) => sa(e.target.value)} /><br />
        </>
    );
}

const btnResultado = (p, a, sr) => {
    return (
        <button type="text" onClick={(e) => sr(p / (a * 2))} >calcular IMC</button>
    );
   
}

const calcularResultado = (p, a) => {
    return p / (a * a);
}

export default function AppCalculadora() {
    const [peso, setPeso] = React.useState(0);
    const [altura, setAltura] = React.useState(0);
    const [resultado, setResultado] = React.useState(0);

    return (
        <>
            {seuPeso(peso, setPeso)}
            {suaAltura(altura, setAltura)}
            {/* <button onClick={() => setResultado(calcularResultado(peso, altura))} >Calcular</button>*/}
            {btnResultado(peso,altura,setResultado)}
            <label>Resultado: </label>&nbsp;{resultado}
            
        </>
    );

}