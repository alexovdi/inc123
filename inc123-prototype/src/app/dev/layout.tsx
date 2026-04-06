import { Outlet } from "react-router-dom";
import { CatalogHeader } from "./_components/CatalogHeader";
import { CatalogSidebar } from "./_components/CatalogSidebar";
import { ThemeToggle } from "../ThemeToggle";

export default function DevLayout() {
  return (
    <div className="flex flex-col h-screen">
      <CatalogHeader />
      <div className="flex flex-1 overflow-hidden">
        <CatalogSidebar />
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <ThemeToggle />
    </div>
  );
}
