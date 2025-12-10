import axios from "axios";
import { API_BASE_URL } from "./config";

const client = axios.create({
  baseURL: API_BASE_URL,
});

export async function login(email, password) {
  const response = await client.post("/auth/login", { email, password });
  return response.data;
}

export async function register(payload) {
  const response = await client.post("/auth/register", payload);
  return response.data;
}

export async function getFiles(token) {
  const response = await client.get("/files", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export async function uploadFile(file, token) {
  const formData = new FormData();
  formData.append("file", file);

  const response = await client.post("/files/upload", formData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function deleteFile(id, token) {
  const response = await client.delete(`/files/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
