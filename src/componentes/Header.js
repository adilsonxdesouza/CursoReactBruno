import React from "react";
import topo from "./imgs/img200.jpg";
import Relogio from "./Relogio";

export default function Header() {
    return (
        <>
            <header className="box">
                <Relogio/>
                <img  src={topo} />
                Topo
             </header>
        </>
        );
}