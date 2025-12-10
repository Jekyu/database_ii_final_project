// Single entry point for API calls. Switch between mock and real services
// by toggling USE_MOCKS and API_BASE_URL in config.js.

import { USE_MOCKS } from "./config";
import * as realApi from "./apiService";
import * as mockApi from "./mockService";

export const api = USE_MOCKS ? mockApi : realApi;
