import React from "react";

import styles from "./componentes/estilos/meumodulo.module.css"; // este formato nome.module.css é exigido pelo webpack


// Obs.: anotar no caderno as observações sobre module css no webpack.config.js

export default function AppCssModulo() {
    return (
        <>
            sou AppCssModulo
            <div className={styles.classemodulo}> meu css veio do módulo</div>
        </>
        );
}