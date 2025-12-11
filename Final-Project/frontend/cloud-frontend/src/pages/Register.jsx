import React, { useState } from "react";

export function Register({ onRegister, onSwitchView }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (
      !firstName.trim() ||
      !lastName.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      return "All fields are required.";
    }
    if (!email.includes("@")) {
      return "Email must contain '@'.";
    }
    const phoneDigits = phone.replace(/\D/g, "");
    if (phoneDigits.length < 10 || !phone.startsWith("+57")) {
      return "Phone must be a valid Colombian number starting with +57.";
    }
    const strong =
      /[a-z]/.test(password) &&
      /[A-Z]/.test(password) &&
      /\d/.test(password) &&
      /[^A-Za-z0-9]/.test(password) &&
      password.length >= 8;
    if (!strong) {
      return "Password must include upper, lower, number, symbol and 8+ chars.";
    }
    if (password !== confirmPassword) {
      return "Passwords do not match.";
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
      await onRegister({
        first_name: firstName,
        last_name: lastName,
        phone,
        email: email.trim(),
        password,
      });
      onSwitchView();
    } catch (err) {
      setFormError(err?.message || "Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2 className="auth-title">Create account</h2>
        <p className="auth-subtitle">
          Sign up to start storing and organizing your files.
        </p>
        <form onSubmit={handleSubmit} className="auth-form">
          <label className="field-label">
            First name
            <input
              type="text"
              className="field-input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
              autoComplete="given-name"
            />
          </label>

          <label className="field-label">
            Last name
            <input
              type="text"
              className="field-input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
              autoComplete="family-name"
            />
          </label>

          <label className="field-label">
            Phone
            <input
              type="tel"
              className="field-input"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+57..."
              autoComplete="tel"
            />
          </label>

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
              autoComplete="new-password"
            />
          </label>

          <label className="field-label">
            Confirm password
            <input
              type="password"
              className="field-input"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm password"
              autoComplete="new-password"
            />
          </label>

          {formError && <p className="error-text">{formError}</p>}

          <button className="btn auth-button" type="submit" disabled={loading}>
            {loading ? "Creating account..." : "Create account"}
          </button>
        </form>

        <p className="muted auth-switch">
          Already have an account?{" "}
          <button type="button" className="link-button" onClick={onSwitchView}>
            Sign in
          </button>
        </p>
      </div>
    </div>
  );
}
