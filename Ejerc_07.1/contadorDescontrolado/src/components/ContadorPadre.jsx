import { useEffect, useState } from "react";
import ListaIntermedia from "./ListaIntermedia";

function ContadorPadre() {
    console.log("contadorPadre")
    const [contador, setContador] = useState(0);

    let listaUsuarios = [];
    
    for (let i = 0; i<500; i++) {
        listaUsuarios.push({
            user: "User",
            fullName: `Usuario ${i}`,
            email: `user${i}@ejemplo.com`,
            avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
            isOnline: getRandomBoolean()
        });
    }
    
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador+1)}>+1 local</button>
            <ListaIntermedia listaUsuarios={listaUsuarios} />
        </div>
    )
}

function getRandomBoolean() {
    return !!Math.floor(Math.random() * 2);
    
}

export default ContadorPadre;