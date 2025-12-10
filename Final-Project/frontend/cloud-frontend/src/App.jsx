import { useState } from "react";
import { useAuth } from "./hooks/useAuth";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Dashboard } from "./pages/Dashboard";
import { Navbar } from "./components/Navbar";
import "./index.css";

export default function App() {
  const { auth, login, register, logout } = useAuth();
  const [authView, setAuthView] = useState("login"); // 'login' | 'register'

  const isAuthenticated = Boolean(auth?.token);

  return (
    <div className="root-wrapper">
      <Navbar
        user={isAuthenticated ? auth.user : null}
        onLogout={logout}
        publicMode={!isAuthenticated}
      />

      {isAuthenticated ? (
        <Dashboard auth={auth} />
      ) : authView === "login" ? (
        <Login onLogin={login} onSwitchView={() => setAuthView("register")} />
      ) : (
        <Register
          onRegister={register}
          onSwitchView={() => setAuthView("login")}
        />
      )}
    </div>
  );
}
