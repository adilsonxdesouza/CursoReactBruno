import React from "react";
import Pagina1 from "./componentes/Pagina1";
import Pagina2 from "./componentes/Pagina2";

export default function AppRouteNativo() {

    const [pagina, setPagina] = React.useState(0);

    React.useEffect(() => {
        const url = window.location.href;
        const p = url.split("?");
        //linkPagina(p[1]);
        setPagina(p[1]);
        }

    );

    const linkPagina = (p) => {
        if (p >= 1) {
            window.open(`http://localhost:3030?${p}`, "_self");
        } else {
            window.open("http://localhost:3030", "_self");
        } 

    }

    const retornaPagina = () => {
        if (pagina == 1) { return <Pagina1 /> } else
            if (pagina == 2) { return <Pagina2 /> } else
                return (
                    <>
                        <button onClick={() => linkPagina(1)}>Pagina1</button>&nbsp;
                        <button onClick={() => linkPagina(2)}>Pagina2</button>&nbsp;
                   </>
                );
    }
    return (
        <>
            {retornaPagina()}
        </>
       
    );

    
}