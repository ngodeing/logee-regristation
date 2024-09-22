export default function Verification() {
    return (
        <form action="" className="flex flex-col gap-5 text-black w-[500px] bg-white px-16 py-36 rounded-2xl justify-center items-center">
            <div className="flex flex-col gap-2 justify-center items-center mb-10">
                <h3 className="font-semibold text-4xl text-center">Verifikasi Akun Anda</h3>
                <p className="text-center text-gray-400 text-xs w-[350px]">Kami telah mengirimkan kode verifikasi ke email Anda. Masukkan kode tersebut untuk mengaktifkan akun Anda.</p>
            </div>
            <div className="flex gap-5">
                <input type="text" className="verification-control no-spinner" maxLength="1"/>
                <input type="text" className="verification-control no-spinner" maxLength="1"/>
                <input type="text" className="verification-control no-spinner" maxLength="1"/>
                <input type="text" className="verification-control no-spinner" maxLength="1"/>
                <input type="text" className="verification-control no-spinner" maxLength="1"/>
            </div>
            <div>
            </div>
            <div className="w-full">
            <button className="bg-[#FF5600] px-5 py-3 rounded font-semibold text-white w-full mb-5">Verifikasi Akun</button>
            <p className="text-gray-400 text-center">Tidak menerima kode?<br />Periksa Folder spam atau <a href="" className="text-[#FF5600]">kirim ulang kode</a></p>
            </div>
        </form>
    )
}