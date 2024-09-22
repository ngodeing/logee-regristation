import Image from "next/image";
import Option from "../components/option/Option";
export default function OptionPage() {
    return (
        <div className="flex justify-center items-center h-[100vh] bg-[#FFF7F3]">
            <div className="flex justify-center bg-white w-full m-14 rounded-xl border flex-col gap-10 py-16 px-5">
                <div className="flex flex-col items-center justify-center">
                    <Image src="/images/logee-black.png" alt="logo" width={350} height={100} className="cursor-pointer" />
                    <p className="text-lg font-bold text-center text-[#FF5600]">Solusi Digital <span className="text-black">Bisnis Logistik</span></p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center text-black">
                    <h2 className="text-2xl font-semibold">Pilih Tipe Bisnis Anda</h2>
                    <p className="text-md font-extralight text-gray-400 text-center w-[500px]">Untuk menyesuaikan layanan kami, pilih tipe bisnis yang sesuai dengan peran Anda.</p>
                </div>
                <div className="flex gap-16 flex-wrap justify-center items-center">
                    <Option />
                    <Option />
                </div>
            </div>
        </div>
    );
}