// In-memory mock API to keep the UI fully functional without a backend.

let mockFiles = [
  { id: "1", name: "report.pdf", size: 20480, type: "pdf" },
  { id: "2", name: "photo.png", size: 502400, type: "image" },
  { id: "3", name: "slides.pptx", size: 1048576, type: "ppt" },
];

const sleep = (ms = 220) => new Promise((resolve) => setTimeout(resolve, ms));

const inferType = (file) => {
  if (!file) return "-";
  if (file.type) return file.type.split("/").pop();
  const parts = file.name?.split(".") || [];
  return parts.length > 1 ? parts.pop() : "file";
};

export async function login(email, _password) {
  await sleep(260);
  return {
    token: "mock-token-123",
    user: { id: "1", email },
  };
}

export async function register({ name, email }) {
  await sleep(360);
  return {
    token: "mock-token-registered",
    user: {
      id: String(Date.now()),
      email,
      name: name || email.split("@")[0],
    },
  };
}

export async function getFiles() {
  await sleep();
  // Return a shallow copy to avoid accidental mutations from consumers.
  return [...mockFiles];
}

export async function uploadFile(file) {
  await sleep(320);
  const newFile = {
    id: String(Date.now()),
    name: file?.name || "untitled",
    size: file?.size || 0,
    type: inferType(file),
  };
  mockFiles = [newFile, ...mockFiles];
  return { message: "File uploaded (mock).", file: newFile };
}

export async function deleteFile(id) {
  await sleep(220);
  mockFiles = mockFiles.filter((file) => file.id !== id);
  return { message: `File ${id} deleted (mock).` };
}
