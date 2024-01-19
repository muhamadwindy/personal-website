import { Outlet } from "react-router-dom";
import { NavbarApp } from "./NavbarApp";

export default function RootLayout() {
  return (
    <div className="flex flex-col bg-[#f8fafc] p-2 min-h-screen">
      <header>
        <NavbarApp></NavbarApp>
      </header>
      <main>
        <div className="mx-auto max-w-screen-xl my-2 py-2">
          <Outlet />
        </div>
      </main>
      <footer className="mt-auto">
        <div className="text-center text-sm font-semibold ">
          Muhamad Windy Sulistiyo © 2024. All Right Reserved
        </div>
      </footer>
    </div>
  );
}
