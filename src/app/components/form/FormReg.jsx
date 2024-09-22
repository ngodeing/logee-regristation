import Image from "next/image";

export default function FormReg() {
    return (
        <form action="" className="flex flex-col gap-3 text-black w-[500px] bg-white p-10 py-8 rounded-2xl">
            <h3 className="font-semibold text-3xl">Registrasi</h3>
            <p className="text-sm text-gray-400">Daftar sekarang dan buat akun untuk menemukan layanan yang sesuai dengan kebutuhan bisnis Anda</p>
            <div className="form-group flex flex-col">
                <label htmlFor="username">Nama Lengkap</label>
                <div className="form-control flex gap-2">
                    <Image src="/images/name.png" alt="user" width={25} height={25}/>
                    <input type="text" name="username" className="border-none w-full focus:outline-none" id="username"placeholder="Masukkan Nama"/>
                </div>
                <label htmlFor="gender">Sebutan</label>
                <div className="flex gap-20 mb-8 mt-2 text-gray-400">
                <div className="flex gap-2">
                    <input type="radio" name="gender" id="male" className="w-7"/>
                    <label htmlFor="male">Bapak</label>
                </div>
                <div className="flex gap-2">
                    <input type="radio" name="gender" id="female" className="w-7"/>
                    <label htmlFor="female">Ibu</label>
                </div>
                </div>
                <label htmlFor="Email">Email</label>
                <div className="form-control">
                    <Image src="/images/email.png" alt="user" width={20} height={20}/>
                    <input type="text" name="Email" id="Email" className="border-none w-full focus:outline-none" placeholder="Masukkan Email"/>
                </div>
                <label htmlFor="password">Kata Sandi</label>
                <div className="form-control">
                    <Image src="/images/password.png" alt="user" width={20} height={20}/>
                    <input type="password" name="password" id="password" className="border-none w-full focus:outline-none" placeholder="Masukkan Kata Sandi"/>
                </div>
                <label htmlFor="confirmpassword">Konfirmasi Kata Sandi</label>
                <div className="form-control">
                    <Image src="/images/password.png" alt="user" width={20} height={20}/>
                    <input type="password" name="confirmpassword" id="confirmpassword" className="border-none w-full focus:outline-none" placeholder="Masukkan Konfirmasi Kata Sandi"/>
                </div>
                <button className="bg-[#FF5600] px-5 py-3 rounded font-semibold text-white" type="submit">Registrasi</button>
            </div>
        </form>
    )
}