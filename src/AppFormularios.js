import React from "react";

export default function AppFormularios () {
    const [nome, setNome] = React.useState("digite seu nome");

    const [carro, setCarro] = React.useState("");

    const handleOnChange = function (e) {
        setNome(e.target.value);
    }
    return (
        <>
            <label> Digite seu nome</label>
            <input
                type="text"
                value={nome}
                // onChange={(e)=>setNome(e.target.value)}
                onChange={(e) => handleOnChange(e)} 
            />
            <p>Nome digigitado: {nome} </p><br /><vr />
            <p>Digite um carro</p>
            <select value={carro} onChange={(e) => setCarro(e.target.value)}> {/* no ES6 eu usaria onChange="meutarget(this) */}
                {/* e o this já é o proprio e.target portanto na funcao destino so precisaria usar e.value*/ }

                <option value="fusca">fusca</option>   {/* Em um select normal não tem a prop "value" na tag select */}
                <option value="fit">fit</option>
                <option value="corolla">corolla</option>

                {/* Também aceita optgroup */}
                <optgroup label="Swedish Cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                </optgroup>
                <optgroup label="German Cars">
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    <option value="fusca">Audi</option>
                </optgroup>
            </select>
            <p>O carro é {carro}</p>


        </>
    );

    //O argumento e não é o elemento e sim o objeto do evento associado ao elemento
    // Por isso para chegar no elemento a a partir do "e" usa-se a prop target
    // e depois a prop value pro value

   // alert(e);//[object Event]
   // alert(e.target); //[object HTMLInputElement]
   // alert(e.target.nodeName); //INPUT

    //auteração teste pro git

}