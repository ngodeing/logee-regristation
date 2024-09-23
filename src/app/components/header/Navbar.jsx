"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleClick = () => {
        router.push('/option');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="flex justify-between items-center lg:px-10 px-3 absolute top-0 left-0 right-0 h-16 bg-transparent">
            <Image src="/images/logee.png" alt="logo" width={200} height={100} className="cursor-pointer w-[150px] lg:w-[200px]" />

            {/* Hamburger Menu Button for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-3xl">
                    {/* Hamburger Menu Icon (3 bars) */}
                    {isMenuOpen ? (
                        <div className="close-icon absolute top-0 right-[195px] z-10 bg-slate-600 px-3 text-white rounded-l-md">x</div>
                    ) : (
                        <div className="space-y-1">
                            <span className="block w-7 h-1 bg-white rounded"></span>
                            <span className="block w-7 h-1 bg-white rounded"></span>
                            <span className="block w-7 h-1 bg-white rounded"></span>
                        </div>
                    )}
                </button>
            </div>

            {/* Links (hidden on mobile, shown on larger screens) */}
            <div className={`md:flex ${isMenuOpen ? "flex p-5 w-[200px] top-0 right-0 absolute bg-slate-600 mt-0 rounded-l-md text-center shadow-2xl" : "hidden"} flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}>
                <ul className="flex flex-col md:flex-row lg:gap-10 gap-5 mr-0 md:mr-20 font-semibold cursor-pointer">
                    <li className="hover:text-[#FF5600]">Solusi</li>
                    <li className="hover:text-[#FF5600]">Produk</li>
                    <li className="hover:text-[#FF5600]">Artikel</li>
                    <li className="hover:text-[#FF5600]">Hubungi</li>
                </ul>

                <div className="flex flex-col md:flex-row lg:gap-5 gap-3 mt-10 md:mt-0">
                    <button className="bg-[#FF5600] lg:py-3 px-4 py-2 rounded-md font-semibold text-sm lg:w-[120px]" onClick={handleClick}>Daftar</button>
                    <button className="bg-[#FFFFFF] text-[#FF5600] lg:py-3 py-2 px-4 rounded-md font-semibold text-sm lg:w-[120px]" onClick={handleClick}>Masuk</button>
                </div>
            </div>
        </nav>
    );
}
