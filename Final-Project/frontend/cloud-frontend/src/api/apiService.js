import axios from "axios";
import { API_BASE_URL } from "./config";

const client = axios.create({
  baseURL: `${API_BASE_URL}/api`,
});

let authToken = null;

export function setAuthToken(token) {
  authToken = token || null;
  if (authToken) {
    client.defaults.headers.common.Authorization = `Bearer ${authToken}`;
  } else {
    delete client.defaults.headers.common.Authorization;
  }
}

client.interceptors.request.use((config) => {
  if (authToken && !config.headers?.Authorization) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${authToken}`;
  }
  return config;
});

function handleError(error) {
  const rawMessage =
    error?.response?.data?.message ||
    error?.response?.data?.error ||
    error?.message ||
    "Request failed";
  const message = Array.isArray(rawMessage) ? rawMessage.join(" ") : rawMessage;
  const normalizedError = new Error(message);
  normalizedError.status = error?.response?.status;
  throw normalizedError;
}

export async function login(email, password) {
  try {
    const response = await client.post("/auth/login", { email, password });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function register(payload) {
  try {
    const response = await client.post("/account/register", payload);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function getFiles(token) {
  try {
    const response = await client.get("/files", {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function uploadFile(file, token) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await client.post("/files/upload", formData, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export async function deleteFile(id, token) {
  try {
    const response = await client.delete(`/files/${id}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });

    return response.data;
  } catch (error) {
    handleError(error);
  }
}
