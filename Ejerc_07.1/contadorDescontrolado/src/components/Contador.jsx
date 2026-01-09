import { useState } from "react";

function Contador() {
    console.log("Contador");
    const [contador, setContador] = useState(0);

    return (
        <>
            <h2>Contador: {contador}</h2>
            <button onClick={() => setContador(contador + 1)}>+1 local</button>
        </>
    );
}

export default Contador;