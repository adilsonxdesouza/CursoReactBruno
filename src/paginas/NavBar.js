import React from "react";
import { Link } from "react-router-dom"

export default  function NavBar () {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>  {/*com o <Link> o conteúdo da página é carregado sem refresh*/}
            </li>
            <li>
                <Link to="/empresa">Empresa alt</Link>
            </li>
            <li>
                <a href="/empresa">Empresa link normal</a> {/*com o <a> a pagina é recarregada  com refresh*/}
            </li>
        </ul>
        );
}