import { useEffect, useState } from "react";
import ListaIntermedia from "./ListaIntermedia";
import Contador from "./Contador";

function ContadorPadre() {
    console.log("contadorPadre")

    let listaUsuarios = [];
    
    for (let i = 0; i<500; i++) {
        listaUsuarios.push({
            id: i,
            fullName: `Usuario ${i}`,
            email: `user${i}@ejemplo.com`,
            avatar: `https://i.pravatar.cc/150?img=${(i + 1) % 70 + 1}`,
            isOnline: getRandomBoolean()
        });
    }
    
    return (
        <div>
            <Contador />
            <ListaIntermedia listaUsuarios={listaUsuarios} />
        </div>
    )
}

function getRandomBoolean() {
    return !!Math.floor(Math.random() * 2);
    
}

export default ContadorPadre;