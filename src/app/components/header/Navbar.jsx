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
        <nav className="flex justify-between items-center lg:px-10 px-3 absolute lg:top-3 top-0 left-0 right-0 h-16 bg-transparent">
            <Image src="/images/logee.png" alt="logo" width={200} height={100} className="cursor-pointer w-[150px] lg:w-[200px] ml-[-12.5px]" />

            {/* Hamburger Menu Button for Mobile */}
            <div className="md:hidden">
                <button onClick={toggleMenu} className="text-3xl">
                    {/* Hamburger Menu Icon (3 bars) */}
                    {isMenuOpen ? (
                        <div className="close-icon absolute top-0 right-0 z-10 bg-slate-600 px-3 text-white rounded-l-md">x</div>
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
            <div className={`md:flex ${isMenuOpen ? "flex p-5 mx-auto right-0 top-[-20px] absolute bg-slate-600 text-center shadow-2xl" : "hidden"} flex-col md:flex-row md:items-center w-full md:w-auto mt-4 md:mt-0`}>
                <ul className="flex flex-col md:flex-row lg:gap-10 gap-5 mr-0 md:mr-20 font-semibold cursor-pointer mt-5 lg:mt-0">
                    <li className="hover:text-[#FF5600] text-white">Solusi</li>
                    <li className="hover:text-[#FF5600] text-white">Produk</li>
                    <li className="hover:text-[#FF5600] text-white">Artikel</li>
                    <li className="hover:text-[#FF5600] text-white">Hubungi</li>
                </ul>

                <div className="flex flex-col md:flex-row lg:gap-5 gap-3 mt-10 md:mt-0">
                <button
                    className="bg-[#FF5600] text-white lg:py-3 px-4 py-2 rounded-md font-semibold text-sm lg:w-[120px] transition-all duration-100 ease-in-out transform hover:scale-110 hover:bg-[#2f2f2f] active:scale-95"
                    onClick={handleClick}
                >
                    Daftar
                </button>

                <button
                    className="bg-[#FFFFFF] text-[#FF5600] lg:py-3 py-2 px-4 rounded-md font-semibold text-sm lg:w-[120px] transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#2f2f2f] hover:text-white active:scale-95"
                    onClick={handleClick}
                >
                    Masuk
                </button>
                </div>
            </div>
        </nav>
    );
}
