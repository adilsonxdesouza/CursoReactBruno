import React from "react";
import ReactDOM from "react-dom";
require('file-loader?name=[name].[ext]!./index.html'); // a ausência desta linha gera o erro de directory listing (mostrar o diretório ao invez da página index.html)
import App from "./App";

const app = document.getElementById("app");

function tick() {

    ReactDOM.render(
        <>
            <App />
        </>,

        app
    );
}

setInterval(tick, 1000);  // Este exercicio da aula 9 serve para mostrar o componente componentes/relogio que mostra o horario
                          // atual. Ao clicar em inspecionar no browser fica evidente que só este componente é atualizado na página

