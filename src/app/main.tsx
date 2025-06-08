import "./index.css";
import "./reset.css";

import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { RouterProvider } from "react-router";

import { router } from "./router.tsx";

async function enableMocking() {
  if (import.meta.env.PROD) {
    return;
  }

  const { worker } = await import("@/shared/api/mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
});
