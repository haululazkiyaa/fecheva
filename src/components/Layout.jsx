import Drawer from "./Drawer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Drawer>
        <Outlet />
      </Drawer>
    </div>
  );
}

export default Layout;
