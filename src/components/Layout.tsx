
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 px-4 py-6 md:px-6 lg:px-8 prose max-w-none">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
