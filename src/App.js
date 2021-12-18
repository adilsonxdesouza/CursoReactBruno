import React from "react";
import imagem from "./componentes/imgs/img2.gif";
//para  importar a imagem precisa incluir o file-loader no webpack.config.js

import Header from "./componentes/Header";
import Corpo from "./componentes/Corpo"

export default function App() {
    return (
        <>
            <Header />
            <Corpo/>
           
        </>
    );

} 