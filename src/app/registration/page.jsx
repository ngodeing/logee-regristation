"use client"
import Image from "next/image";
import FormReg from "../components/form/FormReg";
import Verification from "../components/form/Verification";
import { useState } from "react";

export default function Registration() {
    const [status, setstatus] = useState('unsend');

    const handleRegister = () => {
        setstatus('send');
    };

    return (
        <div className="bg-[#FFF7F3]">
            <div className="flex justify-center lg:justify-between items-center lg:h-[100vh] bg-[#FFF7F3] lg:w-[1100px] gap-10 flex-wrap lg:flex-nowrap mx-auto lg:py-0 py-10">
                <div className="flex flex-col justify-between gap-10 ">
                    <div className="flex flex-col items-center justify-center">
                        <Image src="/images/logee-black.png" alt="logo" width={250} height={100} className="cursor-pointer w-[150px] lg:w-[250px]" />
                        <p className="text-sm font-bold text-center text-[#FF5600]">Solusi Digital <span className="text-black">Bisnis Logistik</span></p>
                    </div>
                    <Image src="/images/cuate.png" alt="register" width={500} height={500} className="cursor-pointer w-[200px] lg:w-[500px] self-center" />
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h2 className="lg:text-4xl font-bold text-[#FF5600] text-2xl">Logee Fulfillment</h2>
                        <p className="lg:text-base font-extralight text-center text-black lg:w-[450px] w-[250px] text-xs">Solusi digital lengkap untuk mengelola gudang, pesanan, dan pengiriman dalam satu platform.</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Image src='/images/slider.png' alt="register" width={75} height={500} className="cursor-pointer w-[50px] lg:w=[75px]" />
                    </div>
                </div>
                {status === 'send' ? <Verification /> : <FormReg handleRegister={handleRegister} />}
            </div>
        </div>
    )
}