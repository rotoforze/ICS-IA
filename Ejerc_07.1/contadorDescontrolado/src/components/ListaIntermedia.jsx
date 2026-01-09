import TarjetaUsuario from "./TarjetaUsuario.jsx";

function ListaIntermedia({listaUsuarios}) {
    console.log("ListaIntermedia");

    const tarjetas = listaUsuarios.map((usuario, key) => {
                return <TarjetaUsuario key={key} user={usuario.user} fullName={usuario.fullName}
                email={usuario.email} avatar={usuario.avatar} isOnline={usuario.isOnline}/>
            })
    return (
        <ul style={{display: 'flex', flexWrap: 'wrap'}}>
            {tarjetas}
        </ul>
    );
}

export default ListaIntermedia;