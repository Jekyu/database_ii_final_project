import React, { useState } from "react";

export function Login({ onLogin, onSwitchView }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!email.trim() || !password.trim()) {
      return "Email and password are required.";
    }
    if (!email.includes("@")) {
      return "Email must contain '@'.";
    }
    if (password.length < 6) {
      return "Password must have at least 6 characters.";
    }
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      setFormError(error);
      return;
    }

    setFormError("");
    try {
      setLoading(true);
      await onLogin(email.trim(), password);
    } catch {
      setFormError("Invalid credentials or server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Sign in</h2>
        <p className="auth-subtitle">Access your UD Cloud Storage workspace.</p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label className="field-label">
            Email
            <input
              type="email"
              className="field-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>

          <label className="field-label">
            Password
            <input
              type="password"
              className="field-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              autoComplete="current-password"
            />
          </label>

          {formError && <p className="error-text">{formError}</p>}

          <button className="btn auth-button" type="submit" disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="muted auth-switch">
          New here?{" "}
          <button type="button" className="link-button" onClick={onSwitchView}>
            Create account
          </button>
        </p>
      </div>
    </div>
  );
}
