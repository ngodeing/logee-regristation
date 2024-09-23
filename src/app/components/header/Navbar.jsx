"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
export default function Navbar() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/option');
    }
    return (
        <nav className="flex justify-between items-center px-10 absolute top-0 left-0 right-0">
            <Image src="/images/logee.png" alt="logo" width={200} height={100} className="cursor-pointer"/>
            <div className="flex items-center">
                <ul className="flex gap-5 mr-20 font-semibold cursor-pointer">
                    <li>Solusi</li>
                    <li>Produk</li>
                    <li>Artikel</li>
                    <li>Hubungi</li>
                </ul>
                <div className="flex gap-5">
                    <button className="bg-[#FF5600] px-5 py-3 rounded-md font-semibold" onClick={handleClick}>Daftar</button>
                    <button className="bg-[#FFFFFF] text-[#FF5600] px-5 py-3 rounded-md font-semibold" onClick={handleClick}>Masuk</button>
                </div>
            </div>
        </nav>
    );
}