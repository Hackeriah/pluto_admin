"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import ContextWrapper from "./components/calendar/context/contextWrapper";
import "./globals.css";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded((prev) => !prev);
  };

  const sidebarWidth = isSidebarExpanded ? "12vw" : "4vw";
  const mainWidth = isSidebarExpanded ? "w-[88%]" : "w-full";
  const mainPadding = isSidebarExpanded ? "pl-2" : "pl-8";

  return (
    <html lang="en">
      <head></head>
      <body>
        {pathname === "/login" ? (
          <>{children}</>
        ) : (
          <div className="flex-col w-[99%] hidden xl:flex">
            <Navbar toggleSidebar={toggleSidebar} />
            <div className="flex mt-[10vh] h-[90vh] w-full">
              <div
                className={`fixed h-[90vh] bg-yellow-200 z-[5] w-fit  transition-all ${sidebarWidth}`}
              >
                <Sidebar isSidebarExpanded={isSidebarExpanded} />
              </div>
              <main
                className={`relative ${mainWidth} ${mainPadding} transition-all duration-300`}
                style={{ marginLeft: sidebarWidth }}
              >
                <ContextWrapper>{children}</ContextWrapper>
              </main>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}


