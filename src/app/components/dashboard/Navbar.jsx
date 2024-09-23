import Image from "next/image"
export default function Navbar() {
    return (
        <div className="flex justify-end items-center lg:px-10 px-2 bg-white border absolute top-0 left-0 right-0 py-3 lg:gap-3 gap-2 shadow">
            <Image src="/images/profile.png" alt="logo" width={40} height={100} className="cursor-pointer w-[25px] lg:w-[40px]" />
            <p className="text-black text-sm lg:text-base">This is Username</p>
        </div>
    )
}