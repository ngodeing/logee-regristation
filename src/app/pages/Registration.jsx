import Image from "next/image";
import FormReg from "../components/form/FormReg";
export default function Registration() {
    return (
        <div className="bg-[#FFF7F3]">
            <div className="flex justify-between items-center h-[100vh] bg-[#FFF7F3] w-[1100px] mx-auto">
                <div className="flex flex-col justify-between gap-10 ">
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/images/logee-black.png" alt="logo" width={250} height={100} className="cursor-pointer" />
                        <p className="text-sm font-bold text-center text-[#FF5600]">Solusi Digital <span className="text-black">Bisnis Logistik</span></p>
                    </div>
                    <Image src="/images/cuate.png" alt="register" width={500} height={500} className="cursor-pointer" />
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h2 className="text-4xl font-bold text-[#FF5600]">Logee Fulfillment</h2>
                        <p className="text-md font-extralight text-center text-black w-[450px]">Solusi digital lengkap untuk mengelola gudang, pesanan, dan pengiriman dalam satu platform.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src='/images/slider.png' alt="register" width={75} height={500} className="cursor-pointer" />
                    </div>
                </div>
                <FormReg />
            </div>
        </div>
    )
}