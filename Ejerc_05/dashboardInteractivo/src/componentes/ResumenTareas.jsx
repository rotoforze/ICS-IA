export function ResumenTareas({ listaSinFiltrar, listaFinal }) {

    const mensaje = []
    // si no hay items, mostramos un mensaje
    if (listaFinal.length == 0) {
        mensaje.push(<div key={0} className="alert alert-warning text-center shadow-sm">
            <i className="bi bi-exclamation-triangle-fill me-2"></i>
            ¡No hay tareas para mostrar!
        </div>)
    } else {
        // si las hay, mostramos x de tantas
        mensaje.push(<div key={1} className="alert alert-info text-center shadow-sm">
            Mostrando <strong>{listaFinal.length}</strong>/
            <strong>{listaSinFiltrar.length}</strong> tareas.
        </div>)
    }

    // comprobamos si todas están completadas mostramos un mensaje de filicitación
    let contador = 0;
    listaFinal.map((tarea) => {
        if (tarea.completada) contador++;
    })
    if (contador == listaFinal.length) mensaje.push(<div key={2} className="alert alert-success text-center fw-bold shadow-sm">
        ¡Felicidades! Has completado todas las tareas de esta sección.
    </div>)

    return (
        <div className="mt-3">
            <div className="card border-0">
                <div className="card-body p-2">
                    {mensaje}
                </div>
            </div>
        </div>
    )
}