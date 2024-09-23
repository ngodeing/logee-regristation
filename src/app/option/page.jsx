import Image from "next/image";
import Option from "../components/option/Option";
export default function OptionPage() {
    return (
        <div className="flex justify-center items-center h-[100vh] bg-[#FFF7F3]">
            <div className="flex justify-center bg-white w-full m-14 rounded-xl border flex-col gap-10 lg:py-28 py-10 px-5">
                <div className="flex flex-col items-center justify-center">
                    <Image src="/images/logee-black.png" alt="logo" width={350} height={100} className="cursor-pointer w-[150px] lg:w-[350px]" />
                    <p className="lg:text-lg text-md font-bold text-center text-[#FF5600]">Solusi Digital <span className="text-black">Bisnis Logistik</span></p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center text-black">
                    <h2 className="lg:text-2xl font-semibold text-lg">Pilih Tipe Bisnis Anda</h2>
                    <p className="lg:text-base font-extralight text-gray-400 text-center lg:w-[500px] w-[250px] text-xs">Untuk menyesuaikan layanan kami, pilih tipe bisnis yang sesuai dengan peran Anda.</p>
                </div>
                <div className="flex gap-16 flex-wrap justify-center items-center">
                    <Option />
                    <Option />
                </div>
            </div>
        </div>
    );
}