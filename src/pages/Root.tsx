import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

const Root = () => {
  return (
    <div className="min-h-screen bg-primary-light dark:bg-primary flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};
export default Root;
