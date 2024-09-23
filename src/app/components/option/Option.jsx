import Image from "next/image";
import Link from "next/link";
export default function Option() {
    return (
        <Link href="/registration">
        <div className="bg-white border flex cursor-pointer px-6 py-4 rounded-2xl lg:w-[500px] w-[250px] lg:justify-center items-center">
            <Image src="/images/shop.png" alt="logo" width={75} height={50} className="cursor-pointer w-[30px] lg:w-[75px]" />
            <div className="flex flex-col text-black justify-start items-center lg:ml-10 ml-3">
                <h3 className="font-semibold items-start self-start lg:text-xl text-md">Pelaku Usaha</h3>
                <p className="lg:text-sm text-gray-400 text-light w-[200px] lg:w-[300px] text-xs">Belanja kebutuhan usaha Anda dengan penawaran harga yang menarik.</p>
            </div>
        </div>
        </Link>
    );
}