import { useEffect, useState } from "react";
import { api } from "../api/service";

const STORAGE_KEY = "cloud_ud_auth";

export function useAuth() {
  const [auth, setAuth] = useState({ token: null, user: null });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed?.token) {
          setAuth(parsed);
        } else {
          localStorage.removeItem(STORAGE_KEY);
        }
      } catch {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  const login = async (email, password) => {
    const data = await api.login(email, password);
    const nextAuth = { token: data.token, user: data.user };
    setAuth(nextAuth);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAuth));
  };

  const register = async ({ name, email, password }) => {
    const data = await api.register({ name, email, password });
    const nextAuth = { token: data.token, user: data.user };
    setAuth(nextAuth);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(nextAuth));
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuth({ token: null, user: null });
  };

  return { auth, login, register, logout };
}
