import IconoIsOnline from "./IconoIsOnline";

function Avatar({ avatar, isOnline }) {
    return (
        <div style={{display: "flex", flexDirection: "column-reverse"}}>
            <img src={avatar} alt="img de usuario" style={{ borderRadius: 50 + '%' }} />
            <IconoIsOnline isOnline={isOnline} />
        </div>
    );
}
export default Avatar;