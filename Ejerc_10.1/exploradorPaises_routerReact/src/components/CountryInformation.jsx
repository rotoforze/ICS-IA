import { NavLink, useParams } from "react-router-dom";
import { useCountries } from "../context/CountryContext";
import { useEffect } from "react";

function CountryInformation() {
    const { nombre } = useParams();
    const { paisActual, getPaisPorNombre, changePais, getPaisPorDiminutivo } = useCountries();

    useEffect(() => {
        if (!nombre) return;

        const paisEncontrado = getPaisPorNombre(nombre);

        if (paisEncontrado && paisEncontrado.name.common !== paisActual?.name.common) {
            changePais(paisEncontrado);
        }
    }, [nombre, paisActual, getPaisPorNombre, changePais]);

    if (!nombre) return <h4>Selecciona un país de la lista.</h4>;
    if (!paisActual) return <h4>País no encontrado.</h4>;
    const fronteras = [];
    Object.values(paisActual.borders).forEach((p) => fronteras.push(getPaisPorDiminutivo(p)?.name?.common))
    return (
        <aside className="info-pais">
            <img src={paisActual.flags.png} alt={paisActual.name.common} />
            <section>
                <h5>Datos generales</h5>
                <ul>
                    <li><b>Nombre oficial:</b> {paisActual.name.official}</li>
                    <li><b>Población:</b> {paisActual.population.toLocaleString()}</li>
                    <li><b>Capital:</b> {paisActual.capital?.[0]}</li>
                    <li><b>Continente:</b> {paisActual.region}</li>
                    <li><b>Región:</b> {paisActual.subregion}</li>
                    <li><b>Idiomas:</b> {paisActual.languages && Object.values(paisActual.languages).join(", ")}</li>
                    <li><b>Fronteras:</b> {fronteras.map((frontera) => <NavLink to={"/"+frontera}>{frontera} </NavLink>)}</li>
                </ul>
            </section>
        </aside>
    );
}

export default CountryInformation;
