import Image from "next/image"
export default function Navbar() {
    return (
        <div className="flex justify-end items-center px-10 bg-white border absolute top-0 left-0 right-0 py-3 gap-3 shadow">
            <Image src="/images/profile.png" alt="logo" width={40} height={100} className="cursor-pointer" />
            <p className="text-black text-md">Citra Iwandari</p>
        </div>
    )
}