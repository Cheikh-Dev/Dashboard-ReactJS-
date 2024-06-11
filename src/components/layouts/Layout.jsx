import React, { } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar"
import Sidebar from "../Sidebar";

export default function Layout() {
  return (
    <>
      <div className="fixed w-full h-screen Container flex flex-col">
        <header className="Header w-full bg-green-500">
          <div className="Navbar flex justify-center items-center w-full h-full">
            <Navbar />
          </div>
        </header>
        <main className="Main w-auto h-[90%] flex flex-col sm:flex-row">
          <div className="Sidebar h-[10%] w-full bg-gray-800 text-w order-2 sm:order-1 sm:w-auto sm:h-full">
            <Sidebar />
          </div>
          <div className="Outlet overflow-y-auto h-[90%] w-full order-1 sm:order-2 sm:w-5/6 sm:h-full">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
