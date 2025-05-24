
import React from "react";
import './../styles/App.css';
import { AuthProvider } from "./AuthContext";
import UseAuthContext from "./UseAuthContext";

const App = () => {
  return (
    <div>
        {/* Do not remove the main div */}
        <AuthProvider>
          <UseAuthContext/>
        </AuthProvider>
    </div>
  )
}

export default App
