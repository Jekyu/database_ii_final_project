import React from "react";
import { formatSize } from "../utils/formatSize";

const SortIndicator = ({ active, direction }) => {
  if (!active) return <span className="sort-indicator muted">^/v</span>;
  return (
    <span className="sort-indicator">
      {direction === "asc" ? "^" : "v"}
    </span>
  );
};

export function FileList({
  folders = [],
  files = [],
  onSelectFolder,
  onDelete,
  onSort,
  sortBy,
  sortDir,
  onMeta,
}) {
  return (
    <>
      {folders && folders.length > 0 && (
        <div className="folder-list">
          {folders.map((folder) => (
            <button
              key={folder.id}
              type="button"
              className="btn btn-small btn-outline"
              onClick={() => onSelectFolder?.(folder)}
            >
              {folder.name}
            </button>
          ))}
        </div>
      )}

      {files.length === 0 ? (
        <div className="empty-state">
          <p className="muted">No files yet.</p>
        </div>
      ) : (
        <table className="file-table">
          <thead>
            <tr>
              <th>
                <button
                  type="button"
                  className="table-sort"
                  onClick={() => onSort("name")}
                >
                  Name{" "}
                  <SortIndicator active={sortBy === "name"} direction={sortDir} />
                </button>
              </th>
              <th>
                <button
                  type="button"
                  className="table-sort"
                  onClick={() => onSort("size")}
                >
                  Size{" "}
                  <SortIndicator active={sortBy === "size"} direction={sortDir} />
                </button>
              </th>
              <th className="file-table-actions">Actions</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file) => (
              <tr key={file.id}>
                <td className="file-name">{file.name}</td>
                <td>{formatSize(file.size)}</td>
                <td className="file-table-actions">
                  <button
                    className="btn btn-small btn-outline"
                    onClick={() => onMeta?.(file)}
                  >
                    Meta
                  </button>
                  <button
                    className="btn btn-small btn-danger"
                    onClick={() => onDelete(file.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
