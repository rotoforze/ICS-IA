import { NavLink } from "react-router-dom";
import { useCountries } from "../context/CountryContext";
import { useState } from "react";

function CountryList({ paises }) {

    const { changePais } = useCountries();

    const handleChangePais = (pais) => {
        changePais(pais);
    }

    const [paisesFiltrados, setPaisesFiltrados] = useState(paises);

    const handlerFiltroBusqueda = (text) => {
        setPaisesFiltrados(
            paises.filter((p) => {
                if (p.name.common.toLowerCase().includes(text.toLowerCase())) return p;
            }))
    }

    const handlerFiltroOrdenPoblacion = (orden) => {
        switch (orden) {
            case "1":
                setPaisesFiltrados([...paisesFiltrados].sort((a, b) => a.name.common.localeCompare(b.name.common)));
                break;
            case "2":
                setPaisesFiltrados([...paisesFiltrados].sort((a, b) => b.name.common.localeCompare(a.name.common)));
                break;
            case "3":
                setPaisesFiltrados([...paisesFiltrados].sort((b, a) => a.population - b.population));
                break;
            case "4":
                setPaisesFiltrados([...paisesFiltrados].sort((a, b) => a.population - b.population));
                break;
            default:
                setPaisesFiltrados(paises);
                break;
        }
    }

    return (
        <aside className="lista-paises">
            <h4>Lista de países</h4>
            <div className="section">
                <label htmlFor="buscador">Búsqueda</label>
                <input type="text" id="buscador" placeholder="Spain" onChange={(e) => handlerFiltroBusqueda(e.target.value)} />
                <label htmlFor="orden">Orden</label>
                <select name="orden" id="orden" onChange={(e) => handlerFiltroOrdenPoblacion(e.target.value)}>
                    <option value="0">Sin ordenar</option>
                    <option value="1">A-Z</option>
                    <option value="2">Z-A</option>
                    <option value="3">De mayor población a menor población</option>
                    <option value="4">De menor población a mayor población</option>
                </select>
            </div>
            <div>
                {paisesFiltrados.map((pais) => {
                    return (
                        <div key={pais.cca3} id={pais.cca3} className="btnListaPaises">
                            <img src={pais.flags.png} alt={`Bandera de ${pais.name.common}`} />
                            <NavLink
                                to={`/${pais.name.common}`}
                                className={({ isActive }) => (isActive ? 'activo' : undefined) + " btn-navlink"}
                                onClick={() => handleChangePais(pais)}
                            >
                                {pais.name.common}
                            </NavLink>
                        </div>

                    )
                }
                )}
            </div>
        </aside>
    );
}
export default CountryList;