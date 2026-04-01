import { Toaster } from "@/components/ui/sonner";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import StagingFlow from "./pages/StagingFlow";

export type Page = "landing" | "staging" | "dashboard";

export default function App() {
  // Simple hash-based routing — no auth gating, renders immediately
  const hash = typeof window !== "undefined" ? window.location.hash : "";
  const initialPage: Page =
    hash === "#/stage"
      ? "staging"
      : hash === "#/dashboard"
        ? "dashboard"
        : "landing";

  const navigate = (page: Page) => {
    const map: Record<Page, string> = {
      landing: "#/",
      staging: "#/stage",
      dashboard: "#/dashboard",
    };
    window.location.hash = map[page];
    window.location.reload();
  };

  return (
    <>
      {initialPage === "landing" && <LandingPage navigate={navigate} />}
      {initialPage === "staging" && <StagingFlow navigate={navigate} />}
      {initialPage === "dashboard" && <Dashboard navigate={navigate} />}
      <Toaster />
    </>
  );
}
