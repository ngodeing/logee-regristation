import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
    return (
        <div className="flex flex-col gap-5 ">
            <Navbar />
            <Sidebar />
            {children}
        </div>
    );
}