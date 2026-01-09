function TarjetaUsuario({ user, fullName, email, avatar, isOnline }) {
    console.log("TarjetaUsuario")

    const color = isOnline ? "green" : "red";
    const estilos = {
        backgroundColor: color,
        width: 20 + 'px',
        height: 20 + 'px',
        borderRadius: 10 + 'px',
        margin: 'auto '+0
    }

    return (
        <div style={{backgroundColor: 'lightgray', border: 1+'px solid grey', borderRadius: 10+'px', width: 'fit-content', padding: 10+'px', margin: 'auto '+10+'px '+10+'px '+10+'px'}}>
            <img src={avatar} alt="img de usuario" style={{borderRadius: 50+'%'}} />
            <h3>{user}</h3>
            <div style={{display: "flex"}}>
                <h4 style={{textAlign: "start"}}>{fullName}</h4>
                <div style={estilos}></div>
            </div>
            <a href={"mailto:" + email}>{email}</a>
        </div>
    );
}

export default TarjetaUsuario;