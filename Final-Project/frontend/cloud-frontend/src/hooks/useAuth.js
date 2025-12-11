import { useEffect, useState } from "react";
import { api, setAuthToken } from "../api/service";

const STORAGE_KEY = "cloud_ud_auth";

export function useAuth() {
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.token) {
          setAuthToken(parsed.token);
          setAuth({ token: parsed.token, user: parsed.user ?? null });
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const login = async (email, password) => {
    try {
      const data = await api.login(email, password);
      if (!data?.token) throw new Error("Login failed: token missing.");
      const nextAuth = { token: data.token, user: data.user ?? { email } };
      setAuthToken(data.token);
      setAuth(nextAuth);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAuth));
    } catch (error) {
      throw error;
    }
  };

  const register = async ({ first_name, last_name, phone, email, password }) => {
    const payload = {
      email: email.trim(),
      password,
      info_account: {
        first_name: first_name.trim(),
        last_name: last_name.trim(),
        phone: phone.trim(),
      },
    };

    return api.register(payload);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuth({ token: null, user: null });
    setAuthToken(null);
  };

  return { auth, login, register, logout };
}
