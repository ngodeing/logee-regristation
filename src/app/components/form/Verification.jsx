"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react";

export default function Verification() {
    const router = useRouter()
    const handleClick = () => {
        router.push('/dashboard')
    }

    const inputRefs = useRef([]);

    const handleInput = (e, index) => {
        const value = e.target.value;
        const key = e.nativeEvent.inputType;  // Detect input type (like Backspace)

        // Move to next input if there's a value and it's not the last input
        if (value && index < inputRefs.current.length - 1) {
            inputRefs.current[index + 1].focus();
        }
        
        // Move to previous input on backspace if the current input is empty
        if (key === "deleteContentBackward" && index > 0) {
            inputRefs.current[index - 1].focus();
        }
    };

    return (
        <form action="" className="flex flex-col lg:gap-5 text-black lg:w-[500px] w-[280px] bg-white px-16 lg:py-36 py-10 lg:rounded-2xl rounded-lg justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center lg:mb-10 mb-0">
                <h3 className="font-semibold lg:text-4xl text-center text-2xl">Verifikasi Akun Anda</h3>
                <p className="text-center text-gray-400 text-xs lg:text-sm lg:w-[350px] w-[250px]">Kami telah mengirimkan kode verifikasi ke email Anda. Masukkan kode tersebut untuk mengaktifkan akun Anda.</p>
            </div>
            <div className="flex lg:gap-5 gap-2 mt-5 mb-2 lg:mt-0">
                {Array(5).fill("").map((_, index) => (
                <input
                    key={index}
                    type="text"
                    className="verification-control no-spinner"
                    maxLength="1"
                    ref={(el) => (inputRefs.current[index] = el)}
                    onInput={(e) => handleInput(e, index)}
                />
                ))}
            </div>
            <div>
            </div>
            <div className="flex flex-col justify-center items-center">
            <button className="bg-[#FF5600] lg:px-5 lg:py-3 py-2 rounded font-semibold text-white mb-5 text-sm lg:text-base w-[200px] transition-all duration-100 ease-in-out transform hover:bg-[#ffffff] hover:text-[#FF5600] border border-[#FF5600] box-border" onClick={handleClick} type="button">Verifikasi Akun</button>
            <p className="text-gray-400 text-center text-sm lg:text-base">Tidak menerima kode?<br />Periksa Folder spam atau <a href="" className="text-[#FF5600]">kirim ulang kode</a></p>
            </div>
        </form>
    )
}