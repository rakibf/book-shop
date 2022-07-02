import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";

export default function MainLayout() {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </div>
  );
}
