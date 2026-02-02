import { useParams } from "react-router-dom";
import { useCountries } from "../context/CountryContext";

function CountryInformation() {
    const param = useParams();
    const { paisActual, getPaisPorNombre, changePais } = useCountries();
    if (!param) return (<h4>Selecciona un país de la lista.</h4>)

    if (paisActual && param != paisActual.name.common) changePais(getPaisPorNombre(param))

    if (paisActual == undefined) return (<h4>país: {paisActual}</h4>)

    return (
        <aside>
            <img src={paisActual.flags.png} alt="" />
            <section>
                <h5>Datos generales
                    <ul>
                        <li><b>Población: </b>{paisActual.population}</li>
                        <li><b>Capital: </b>{paisActual.capital}</li>
                        <li><b>Continente: </b>{paisActual.region}</li>
                        <li><b>Región: </b>{paisActual.subregion}</li>
                        <li><b>Idiomas: </b>{ }</li>
                    </ul>
                </h5>
            </section>
        </aside>
    );
}
export default CountryInformation;