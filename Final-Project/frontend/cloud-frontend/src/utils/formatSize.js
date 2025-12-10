// Format bytes into a readable KB / MB string.

export function formatSize(bytes) {
  if (bytes == null) return "-";
  const kb = bytes / 1024;
  if (kb < 1024) return `${kb.toFixed(1)} KB`;
  const mb = kb / 1024;
  return `${mb.toFixed(1)} MB`;
}
