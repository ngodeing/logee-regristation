import InfoSection from "../components/header/InfoSection";
import Navbar from "../components/header/Navbar";

export default function HomePage() {
    return (
        <div className="home h-[100vh] flex flex-col justify-center">
            <Navbar />
            <InfoSection />
        </div>
    );
}