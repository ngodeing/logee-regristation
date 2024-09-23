import Image from "next/image";

export default function FormReg({ handleRegister }) {
    return (
        <form action="" className="flex flex-col gap-3 text-black lg:w-[500px] w-[280px] bg-white lg:px-10 px-5 lg:py-8 py-6 lg:rounded-2xl rounded-lg">
            <h3 className="font-semibold text-3xl">Registrasi</h3>
            <p className="text-sm text-gray-400">Daftar sekarang dan buat akun untuk menemukan layanan yang sesuai dengan kebutuhan bisnis Anda</p>
            <div className="form-group flex flex-col mt-2">
                <label htmlFor="username" className="text-sm lg:text-base">Nama Lengkap</label>
                <div className="form-control flex gap-2">
                    <Image src="/images/name.png" alt="user" width={25} height={25}/>
                    <input type="text" name="username" className="border-none w-full focus:outline-none" id="username"placeholder="Masukkan Nama"/>
                </div>
                <label htmlFor="gender" className="text-sm lg:text-base">Sebutan</label>
                <div className="flex lg:gap-20 gap-10 mb-8 mt-2 text-gray-400">
                <div className="flex gap-2">
                    <input type="radio" name="gender" id="male" className="w-7"/>
                    <label htmlFor="male" className="text-sm lg:text-base">Bapak</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="gender" id="female" className="w-7"/>
                    <label htmlFor="female" className="text-sm lg:text-base">Ibu</label>
                </div>
                </div>
                <label htmlFor="Email" className="text-sm lg:text-base">Email</label>
                <div className="form-control">
                    <Image src="/images/email.png" alt="user" width={20} height={20}/>
                    <input type="text" name="Email" id="Email" className="border-none w-full focus:outline-none" placeholder="Masukkan Email"/>
                </div>
                <label htmlFor="password" className="text-sm lg:text-base">Kata Sandi</label>
                <div className="form-control">
                    <Image src="/images/password.png" alt="user" width={20} height={20}/>
                    <input type="password" name="password" id="password" className="border-none w-full focus:outline-none" placeholder="Masukkan Kata Sandi"/>
                </div>
                <label htmlFor="confirmpassword" className="text-sm lg:text-base">Konfirmasi Kata Sandi</label>
                <div className="form-control">
                    <Image src="/images/password.png" alt="user" width={20} height={20}/>
                    <input type="password" name="confirmpassword" id="confirmpassword" className="border-none w-full focus:outline-none" placeholder="Masukkan Konfirmasi Kata Sandi"/>
                </div>
                <button className="bg-[#FF5600] px-5 py-2 lg:py-3 rounded font-semibold text-white text-sm lg:text-base transition-all duration-100 ease-in-out transform hover:bg-[#ffffff] hover:text-[#FF5600] border border-[#FF5600] box-border" type="submit" onClick={handleRegister}>Registrasi</button>
            </div>
        </form>
    )
}