import Image from "next/image";
export default function Option() {
    return (
        <div className="bg-white border flex cursor-pointer px-6 py-4 rounded-2xl w-[500px] justify-center items-center">
            <Image src="/images/shop.png" alt="logo" width={75} height={50} className="cursor-pointer" />
            <div className="flex flex-col text-black justify-start items-center ml-10">
                <h3 className="font-semibold items-start self-start text-xl">Pelaku Usaha</h3>
                <p className="text-md text-gray-400 text-light w-[300px]">Belanja kebutuhan usaha Anda dengan penawaran harga yang menarik.</p>
            </div>
        </div>
    );
}