import Avatar from "./Avatar";

function TarjetaUsuario({ id, fullName, email, avatar, isOnline }) {
    console.log("TarjetaUsuario");

    return (
        <div style={{backgroundColor: 'lightgray', border: 1+'px solid grey', borderRadius: 10+'px', width: 'fit-content', padding: 10+'px', margin: 'auto '+10+'px '+10+'px '+10+'px'}}>
            <Avatar avatar={avatar} isOnline={isOnline}/>
            <h3>{id}</h3>
            <div style={{display: "flex"}}>
                <h4 style={{textAlign: "start"}}>{fullName}</h4>
            </div>
            <a href={"mailto:" + email}>{email}</a>
        </div>
    );
}

export default TarjetaUsuario;