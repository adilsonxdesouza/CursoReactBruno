import React from "react";
import ClasseCarro from "./componentes/ClasseCarro";

export default function AppClassComp() {
    return (
        <>
            <ClasseCarro canal="meucanal" fator={1}>  {/*Como eu quero passar um número e não string passo o valor de fator entre chaves*/}
                    <p>vim do pai</p>
            </ClasseCarro>
           
        </>
    );

} 