import React from "react";
import { useAuth } from "./AuthContext";

const UseAuthContext = () => {
  const { isHuman, setIsHuman } = useAuth();
  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>
      <p className="authText">{isHuman ? "You are now authenticated, you can proceed" : "you are not authenticated"}</p>
      <input
        type="checkbox"
        value={isHuman}
        onChange={(e) => setIsHuman(e.target.checked)}
      />I'm not a robot
    </div>
  );
};

export default UseAuthContext;
