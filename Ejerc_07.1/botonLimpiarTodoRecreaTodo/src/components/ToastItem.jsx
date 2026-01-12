function ToastItem({id, message, funcionQuitarSegunID}) {
    console.log(id)
    return (
        <>
            <div style={{display: "flex", height: "fitContent", width: 100+"px", minWidth: "fit-content", padding: 10+"px", backgroundColor: "#f35757", margin: 10+"px"}}>
                <p>{message}</p>
                <button onClick={() => funcionQuitarSegunID(id)} style={{marginLeft: 5+"px"}}>X</button>
            </div>
        </>
    );
}

export default ToastItem;