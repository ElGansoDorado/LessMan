import { setupWorker } from "msw/browser";
import { eventHandlers } from "./handlers/event";
import { authHandlers } from "./handlers/auth";

export const worker = setupWorker(...eventHandlers, ...authHandlers);
