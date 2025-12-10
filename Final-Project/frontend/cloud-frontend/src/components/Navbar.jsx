import React from "react";

export function Navbar({ user, onLogout, publicMode = false }) {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <div className="logo-mark">UD</div>
        <div>
          <h1 className="navbar-title">UD CLOUD STORAGE</h1>
        </div>
      </div>

      {!publicMode && (
        <div className="navbar-right">
          {user ? (
            <>
              <span className="navbar-user">{user.email}</span>
              <button className="btn btn-outline" onClick={onLogout}>
                Logout
              </button>
            </>
          ) : (
            <span className="navbar-user">Offline mode</span>
          )}
        </div>
      )}
    </header>
  );
}
