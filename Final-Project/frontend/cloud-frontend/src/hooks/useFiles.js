import { useEffect, useState } from "react";
import { api } from "../api/service";

export function useFiles(token) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError("");
      try {
        const data = await api.getFiles(token);
        if (!cancelled) setFiles(data);
      } catch (err) {
        if (!cancelled) setError("Could not load files right now.");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    if (token) {
      load();
    } else {
      setFiles([]);
      setLoading(false);
    }

    return () => {
      cancelled = true;
    };
  }, [token]);

  const refresh = async () => {
    if (!token) {
      setFiles([]);
      return;
    }

    setLoading(true);
    setError("");
    try {
      const data = await api.getFiles(token);
      setFiles(data);
    } catch {
      setError("Could not refresh files.");
    } finally {
      setLoading(false);
    }
  };

  return { files, loading, error, setFiles, refresh };
}
