
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Ver obs no webpack.config.js ref a erro cannot get page
// Deve antes ser instalada a versão 5 do router: npm install react-router-dom (não consegui fazer funcionar na v6 ainda)

import PaginaHome from "./paginas/PaginaHome";
import PaginaEmpresa from "./paginas/PaginaEmpresa";
import NavBar from "./paginas/NavBar";
import { default as Footer } from "./paginas/FooterReactIcons"; // Forma de importar um export default com alias (presisa 
                                                                // da palavra reservada "default")


export default function AppReactRouter() {
    return (
        <>  
           
            <Router>
                {/*veja que na estrutura abaixo o navbar e  o footer ficam fixos ( como se fosse uma master page*/}
                {/* e o conteudo dentro de switch vai mudando*/}
                <NavBar />

                <Switch>
                    <Route path="/" exact component={PaginaHome} />
                    <Route path="/empresa" > <PaginaEmpresa /> </Route> {/* o componente da página pode ser incluido destas 2 formas */}

                </Switch>

                <Footer />  {/*Quando tentei colocar fora do Router  parece gue gerou um loop infinito */}
            </Router>
           
        </>
        );
}