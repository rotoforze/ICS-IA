function Controlador({ handlerNuevoMensaje, handlerEliminarTodo }) {
    return (
        <>
            <div style={{ width: 40 + "dvw", height: 10 + "dvh", backgroundColor: "#36a541dd", minHeight: `fit-content`, padding: 5+"px", margin: 0 + "px auto", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button style={{ width: 15 + "dvw", height: 5 + "dvh", minHeight: `fit-content` }} onClick={() => handlerNuevoMensaje()}>Añadir nuevo</button>
                <button style={{ width: 15 + "dvw", height: 5 + "dvh", marginLeft: 25 + "px",minHeight: `fit-content` }} onClick={() => handlerEliminarTodo()}>Elimiar todos</button>
            </div>
        </>
    );
}

export default Controlador;