function PuntitoVerde({isOnline}) {
    const color = isOnline ? "green" : "red";
    const estilos = {
        backgroundColor: color,
        width: 20 + 'px',
        height: 20 + 'px',
        borderRadius: 10 + 'px',
        margin: 'auto ' + 0,
        position: "sticky"
    }

    return (
        <div style={estilos}></div>
    );
}

export default PuntitoVerde;