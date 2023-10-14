import React from "react";
import { Outlet } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";

export default function Layout() {
  return (
    <div className="flex flex-col h-screen overflow-y-auto">
      <header className="bg-white shadow">
        <div className="flex flex-row items-center justify-between mx-auto py-2 px-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="flex flex-row items-center justify-self-start gap-1 text-gray-900"
          >
            <HomeOutlinedIcon
              className="text-gray-700"
              style={{ fontSize: 32 }}
            />
          </a>
          <h1 className="text-center text-md sm:text-3xl font-bold my-1 mx-auto text-gray-700">
            IOT Data Visualisation
          </h1>
        </div>
      </header>
      <main className="flex-grow">
        <div className=" px-2">{<Outlet />}</div>
      </main>
    </div>
  );
}
