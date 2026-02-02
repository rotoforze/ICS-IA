import { Link, NavLink } from "react-router-dom";
import { useCountries } from "../context/CountryContext";

function CountryList( { paises } ) {
    
    const { changePais } = useCountries(); 

    const handleChangePais = (pais) => {
        changePais(pais);
    }

    return (
        <aside>
            <h4>Lista de países</h4>
            <div>
                {paises.map((pais) => {
                    return (
                        <div key={pais.cca3} id={pais.cca3} className="btnListaPaises">
                            <img src={pais.flags.png} alt={`Bandera de ${pais.name.common}`} />
                            <NavLink 
                                to={`/${pais.name.common}`} 
                                className={({ isActive }) => (isActive ? 'activo' : undefined)}
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