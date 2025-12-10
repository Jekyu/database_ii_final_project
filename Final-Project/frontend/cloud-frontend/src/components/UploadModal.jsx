import React, { useState } from "react";

const ALLOWED_TYPES = [
  "application/pdf",
  "image/png",
  "image/jpeg",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
];

export function UploadModal({ open, onClose, onUpload }) {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (!open) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!file) {
      setError("Please choose a file before uploading.");
      return;
    }

    if (file && !ALLOWED_TYPES.includes(file.type)) {
      setError("Unsupported file type.");
      return;
    }

    try {
      setLoading(true);
      await onUpload(file);
      setFile(null);
      onClose();
    } catch {
      setError("Upload failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2 className="modal-title">Upload file</h2>
        <form onSubmit={handleSubmit} className="modal-body">
          <label className="field-label">
            Choose a file
            <input
            type="file"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            disabled={loading}
          />
          </label>
          {error && <p className="error-text">{error}</p>}
          <div className="modal-actions">
            <button
              type="button"
              className="btn btn-outline"
              onClick={onClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button type="submit" className="btn" disabled={loading}>
              {loading ? "Uploading..." : "Upload"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
