import React from "react";

import Peso from "./componentes/imc/Peso";
import Altura from "./componentes/imc/Altura";
import BtnCalcular from "./componentes/imc/BtnCalcular";
import Resultado from "./componentes/imc/Resultado";


export default function AppImc() {
    const [peso, setPeso] = React.useState();
    const [altura, setAltura] = React.useState();
    const [resultado, setResultado] = React.useState(0);

    return (
        <>
            <Altura altura={altura} setAltura={setAltura} />
            <Peso peso={peso} setPeso={ setPeso}/>
            <BtnCalcular peso={peso} altura={altura} setResultado={ setResultado } />
            <Resultado resultado={resultado}/>

        </>
        );
}
