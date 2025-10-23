import { useState } from 'react';

export default function UserList({ listaUsuarios, handlerUsuarioSeleccionado, busqueda }) {
    // creo un map de cada usuario con su ID. La lista la recibo como parametro
    const resumenUsuarios = new Map();
    listaUsuarios.forEach((user) => {
        resumenUsuarios.set(user.id, user.nombre);
    });
    
    // si hemos recibido una búsqueda vamos a tener que eliminar los usuarios que no cumplan los filtros
    if (busqueda) {
        // recorremos el map
        resumenUsuarios.forEach((value, key) => {
            // comprobamos si van coincidinedo el orden de las letras 
            // (contains filtra si tiene las letras, aunque sea una cadena e includes no devuelve bien)
            for (let i = 0; i < busqueda.length; i++) {
                // si no coinide una letra, lo elimina del map
                if (value.toLowerCase().charAt(i) != busqueda.toLowerCase().charAt(i)) resumenUsuarios.delete(key)
            }
        })
    }

    // guardo en un array un div con el valor del id del usuario como key
    // y además le añado una clase de usuario con el que podré identificarlo como
    // un nombre de usuario en la futura lista
    // y pongo el nombre como el contenido del elemento
    // cuando se hace click en el contenedor, usamos la funcion onSeleccionarUsuario
    // para quitarle el color a todos los contenedores y, a su vez, colocarlo
    // al nuevo seleccionado, con su correspondiente id. Además, también pasamos la funcion que
    // manaejará pasarle el usuario al ProfileCard

    const elementos = Array.from(resumenUsuarios.entries()).map(([id, nombre]) => (
        <div key={id} role={id} className='usuario btn' onClick={(e) => {
            onSeleccionarUsuario(e);
            handlerUsuarioSeleccionado();
        }}>{nombre}</div>
    ));

    // devuelvo un div con id lista-usuarios y el contenido del array elementos
    return (
        <>
            <div id='lista-usuarios' className='d-grid gap-2'>
                {elementos}
            </div>
        </>
    )
}

function onSeleccionarUsuario(e) {
    document.querySelectorAll('.usuario').forEach((b) => {
        b.style.backgroundColor = '';
        b.removeAttribute('id');
    });
    e.currentTarget.style.backgroundColor = '#7598a4ff';
    e.currentTarget.id = ('selecionado');
    
}