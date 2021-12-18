import React from "react";

export default function Relogio() {
    return (
        <p style={{ textAlign: "center" }}>
            { new Date().toLocaleTimeString() }
        </p>
        );
}