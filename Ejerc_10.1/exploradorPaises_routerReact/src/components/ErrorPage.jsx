import { Link } from "react-router-dom";
function ErrorPage() {
    return (
        <>
            <h1>Ha ocurrido un error inesperado!</h1>
            <Link to={"/"}>Volver atrás</Link>
        </>
    );
}

export default ErrorPage;