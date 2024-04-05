import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState(0);
    const [listaContatos, setListacontatos] = useState([]);
    const [idade, setIdade] = useState(0);

    const registrar = (event) =>{
        event.preventDefault();      
        setListacontatos([...listaContatos,
        {
            nomeSalvo: nome,
            telefoneSalvo: telefone,
            idadeSalvo: idade,
        }
     ]);
    };

    return(
        <main>
        <form action="" onSubmit={registrar}>
            <label htmlFor="nome">Nome:</label>
            <input
            type="text"
            name="nome-contato"
            id="nome"
            value={nome}
            onChange={
                (event) => setNome(event.target.value)
            }
            />
            <label htmlFor="telefone">Telefone:</label>
            <input
            type="tel"
            name="telefone-contato"
            id="telefone"
            value={telefone}
            onChange={(event)=> setTelefone(event.target.value)}
            />
            <label htmlFor="idade"> Idade:</label>
            <input
            type="number"
            name="idade-contato"
            id="idade"
            value={idade}
            onChange={(event)=> setIdade(event.target.value)}
            />
 
            <button> Salvar </button>
        </form>
        {nome} {telefone}
        </main>
    );
}