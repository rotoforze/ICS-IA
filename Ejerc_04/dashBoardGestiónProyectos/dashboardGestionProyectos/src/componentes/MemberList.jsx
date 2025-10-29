export function MemberList({ proyecto }) {
    const responsables = proyecto.responsables.map((responsable) => (
        <span
            key={responsable.id}
            className="badge rounded-pill bg-secondary me-2 mb-2"
        >
            {responsable.nombre}
        </span>
    ));
    return (
    <div>
        <h6 className="text-muted mb-1">Responsables:</h6>
        <div className="d-flex flex-wrap">{responsables}</div>
    </div>
    );
}