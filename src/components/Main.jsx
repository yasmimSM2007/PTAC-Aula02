import { useState } from "react";

export default function Main(){
    const [nome, setNome] = useState("");
    const [telefone,setNumber] = useState(0);

    return(
        <main>
            <form>
        <label>Nome</label>
        <input
        type="text"
        nome="" id=""
        onChange={(event)=> setNome(event.target.value)}
        />
        {nome}

        <label>Telefone</label>
        <input
        type="tel"
        telefone="" id=""
        onChange={(event)=> setNumber(event.target.value)}
        />
        {telefone}
        <button
        type="submit">Enviar</button>

        </form>

        </main>
    );
}