import React, { useMemo, useState } from "react";
import { FileList } from "../components/FileList";
import { UploadModal } from "../components/UploadModal";
import { useFiles } from "../hooks/useFiles";
import { api } from "../api/service";
import { formatSize } from "../utils/formatSize";

const sortComparators = {
  name: (a, b) => a.name.localeCompare(b.name),
  size: (a, b) => (a.size || 0) - (b.size || 0),
};

export function Dashboard({ auth }) {
  const { files, loading, error, refresh } = useFiles(auth.token);
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [actionError, setActionError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [activeTab, setActiveTab] = useState("files"); // files | account
  const [selectedFolderId, setSelectedFolderId] = useState("root");

  const folderOptions = useMemo(
    () => [
      { id: "root", name: "Root" },
      { id: "projects", name: "Projects" },
      { id: "shared", name: "Shared" },
    ],
    []
  );

  const normalizedFiles = useMemo(
    () =>
      files.map((file) => ({
        ...file,
        folderId: file.folderId || "root",
      })),
    [files]
  );

  const totalSize = normalizedFiles.reduce(
    (acc, file) => acc + (file.size || 0),
    0
  );

  const sortedFiltered = useMemo(() => {
    const filtered = normalizedFiles.filter((file) =>
      file.name.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );
    const comparator = sortComparators[sortBy] || sortComparators.name;
    const sorted = [...filtered].sort(comparator);
    return sortDir === "asc" ? sorted : sorted.reverse();
  }, [normalizedFiles, searchQuery, sortBy, sortDir]);

  const currentFiles = useMemo(
    () =>
      sortedFiltered.filter(
        (file) => (file.folderId || "root") === selectedFolderId
      ),
    [sortedFiltered, selectedFolderId]
  );

  const metrics = useMemo(() => {
    const storageLimit = 5 * 1024 * 1024 * 1024; // mock 5GB
    const remaining = Math.max(storageLimit - totalSize, 0);
    return {
      totalFiles: normalizedFiles.length,
      totalSize,
      storageLimit,
      storageRemaining: remaining,
      accountStatus: "Active",
      currentPlan: "Free",
    };
  }, [normalizedFiles, totalSize]);

  const handleDelete = async (id) => {
    setActionError("");
    try {
      await api.deleteFile(id, auth.token);
      await refresh();
    } catch {
      setActionError("Delete operation failed.");
    }
  };

  const handleUpload = async (file) => {
    setActionError("");
    try {
      await api.uploadFile(file, auth.token);
      await refresh();
    } catch (err) {
      setActionError("Upload failed. Try again.");
      throw err;
    }
  };

  const handleRefresh = async () => {
    setActionError("");
    await refresh();
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      setSortDir((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(column);
      setSortDir("asc");
    }
  };

  const AccountView = (
    <div className="content-card metrics-grid">
      <div className="metric-tile">
        <p className="eyebrow">Total files</p>
        <h3 className="metric-value">{metrics.totalFiles}</h3>
      </div>
      <div className="metric-tile">
        <p className="eyebrow">Storage used</p>
        <h3 className="metric-value">{formatSize(metrics.totalSize)}</h3>
      </div>
      <div className="metric-tile">
        <p className="eyebrow">Storage remaining</p>
        <h3 className="metric-value">
          {formatSize(metrics.storageRemaining)}
        </h3>
      </div>
      <div className="metric-tile">
        <p className="eyebrow">Account status</p>
        <h3 className="metric-value">{metrics.accountStatus}</h3>
      </div>
      <div className="metric-tile">
        <p className="eyebrow">Current plan</p>
        <h3 className="metric-value">{metrics.currentPlan}</h3>
      </div>
    </div>
  );

  const FilesView = (
    <>
      <div className="content-header">
        <div>
          <p className="eyebrow">Library</p>
          <h2 className="content-title">Your files</h2>
        </div>
        <div className="content-actions">
          <input
            type="text"
            className="search-input"
            placeholder="Search by name"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            className="btn btn-outline"
            onClick={handleRefresh}
            disabled={loading}
          >
            Refresh
          </button>
          <button className="btn" onClick={() => setIsUploadOpen(true)}>
            New upload
          </button>
        </div>
      </div>

      {loading && <p className="muted">Loading files...</p>}
      {error && (
        <div className="error-block">
          <p className="error-text">{error}</p>
          <button className="btn btn-outline" onClick={handleRefresh}>
            Retry
          </button>
        </div>
      )}
      {actionError && <p className="error-text">{actionError}</p>}

      {!loading && !error && (
        <div className="content-card">
          <FileList
            folders={folderOptions}
            files={currentFiles}
            onSelectFolder={(folder) => setSelectedFolderId(folder.id)}
            onDelete={handleDelete}
            onSort={handleSort}
            sortBy={sortBy}
            sortDir={sortDir}
            onMeta={() => {}}
          />
        </div>
      )}
    </>
  );

  return (
    <div className="app-shell">
      <div className="app-body centered-body">
        <main className="content">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "files" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("files")}
            >
              Files
            </button>
            <button
              className={`tab ${activeTab === "account" ? "tab-active" : ""}`}
              onClick={() => setActiveTab("account")}
            >
              Account
            </button>
          </div>

          {activeTab === "files" ? FilesView : AccountView}
        </main>
      </div>

      <UploadModal
        open={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onUpload={handleUpload}
      />
    </div>
  );
}
