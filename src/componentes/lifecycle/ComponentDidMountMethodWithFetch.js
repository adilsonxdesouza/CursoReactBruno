
import React from 'react'

export default class ComponentDidMountMethodWithFetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {    // O setTimeout foi só pra mostrar o resultado da api sendo carregado depois
        setTimeout(() => {    // Segundo o link https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
                              // aqui é o melhor lugar para buscar dados da api com o fetch
            fetch('https://jsonplaceholder.typicode.com/users').then(
                (response) => response.json()
            ).then(data => this.setState({ data: data }));
            const el = document.querySelector(".loader-container");
            if (el) {
                el.remove();  
            };
        }, 3000)

    }

    render() {
        //Também funciona mas não é uma boa prática. o render() não deve ser usado para carregar nada assíncrono

        //fetch('https://jsonplaceholder.typicode.com/users').then(  
        //    (response) => response.json()
        //).then(data => this.setState({ data: data }));

        return (
            <div>
                <p>This will print all the name available in API users data</p>
                <div className="loader-container">aguarde...</div> {/* poderia ser um spinner*/}
                {this.state.data.map(d => <h4 key={d.id}>{d.name}</h4>)}
            </div>
        )
    }
}

