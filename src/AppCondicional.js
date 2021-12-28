import React from "react";

export default function AppCondicional() {
    const greeting = () => {
        const hora = new Date().getHours();
        if (hora > 0 && hora < 13)
            return <h1> Bom dia </h1>;
        else
            if (hora >= 13 && hora < 18)
                return <h1> Boa tarde </h1>;
            else
                return <h1> Boa noite </h1>;
    }

    const greeting2 = () => {
        const hora = new Date().getHours();
        return (
            <div>
                <h1> sou do greeting 2 </h1>
                {
                    (10 > 5) && (         // Aqui é uma outra forma de inserir  uma tag condicional aceita pelo React: 
                        <div>       {/*  { condiçao && (conteúdo )} */}
                            bom dia greeting 2
                        </div>
                    )
                }
            </div>)
    }
   

    return (
        <>
            {greeting2()}
           
        </>
    );

} 