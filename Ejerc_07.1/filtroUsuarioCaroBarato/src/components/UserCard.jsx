function UserCard({ id, name, email, organization}) {
    

    return (
        <div style={{backgroundColor: 'lightgray', border: 1+'px solid grey', borderRadius: 10+'px', width: 'fit-content', padding: 10+'px', margin: 'auto '+10+'px '+10+'px '+10+'px'}}>
            <h3>{id}</h3>
            <div style={{display: "flex"}}>
                <h4 style={{textAlign: "start"}}>{name}</h4>
            </div>
            <a href={"mailto:" + email}>{email}</a>
            <h6>{organization}</h6>
        </div>
    );

}
export default UserCard;