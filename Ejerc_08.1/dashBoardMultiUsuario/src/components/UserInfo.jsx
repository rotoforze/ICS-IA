import React from "react";
import { useAuth } from "../context/AuthContext";

const UserInfo = React.memo(() => {
  const { currentUser } = useAuth();

  return (
    <div style={{ position: "absolute", top: 10, right: 10 }}>
      Usuario - {currentUser.nombre}
    </div>
  );
});

export default UserInfo;