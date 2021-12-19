import React    from "react";

export default function AppStateUnico() {
    const [form, setForm] = React.useState({ "nome": "adilson", "curso": "curso1" })

    const changeFormHandler = (e) => {

        if (e.target.getAttribute("name") == "fnome")
            setForm({ "nome": e.target.value, "curso": form.curso });

        if (e.target.getAttribute("name") == "fcurso")
            setForm({ "nome": form.nome, "curso": e.target.value });

    }

        // Assim que possivel substituir o handler acima por um genérico sem ifs

    return (
        <div className="box">
            <label>Nome:</label>
            <input type="text" name="fnome" onChange={(e) => changeFormHandler(e)} /><br />

            <label>Curso:</label>
            <input type="text" name="fcurso" onChange={(e)=> changeFormHandler(e)} /> <br />

            <p>Nome digitado: {form.nome}</p>
            <p>Curso digitado: {form.curso}</p>

                
        </div>
    )
}