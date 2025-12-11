// Single entry point for API calls. Switch between mock and real services
// by toggling USE_MOCKS and API_BASE_URL in config.js.

import { USE_MOCKS } from "./config";
import * as realApi from "./apiService";
import * as mockApi from "./mockService";

const baseApi = USE_MOCKS ? mockApi : realApi;

// Always use the real backend for authentication; keep other endpoints
// configurable while they are still mocked.
export const api = { ...baseApi, login: realApi.login, register: realApi.register };

export { setAuthToken } from "./apiService";
