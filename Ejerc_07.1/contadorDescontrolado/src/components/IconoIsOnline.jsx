import PuntitoVerde from "./PuntitoVerde";

function IconoIsOnline({isOnline}) {
    return (
        <>
        <PuntitoVerde isOnline={isOnline} />
        </>
    );
}

export default IconoIsOnline;