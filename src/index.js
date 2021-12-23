import React from "react";
import ReactDOM from "react-dom";
//import AppEventos from "./AppEventos";
//import AppFormularios from "./AppFormularios";
//import AppStateUnico from "./AppStateUnico"
import AppCicloVida from "./AppCicloVida";
//import App from "./App";
require('file-loader?name=[name].[ext]!./index.html'); // a ausência desta linha gera o erro de directory listing (mostrar o diretório ao invez da página index.html)


const app = document.getElementById("app");


    ReactDOM.render(
        <>
            <AppCicloVida/>
        </>,

        app
    );
