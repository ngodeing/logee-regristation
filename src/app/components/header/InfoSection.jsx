import Link from 'next/link';
export default function InfoSection() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="lg:text-5xl text-2xl font-bold text-center text-[#FF5600]">Solusi Digital <span className="text-white">Bisnis Logistik</span></h1>
            <p className="lg:text-lg text-sm font-light text-center lg:w-[700px] w-[250px] text-white">LOGEE hadir sebagai jembatan untuk menghubungkan semua pemain logistik menjadi satu ekosistem yang memberikan solusi dan keuntungan bagi bisnis Anda.</p>
            <Link href="/option" className="bg-[#FF5600] text-white lg:px-5 lg:py-3 px-3 py-2 lg:text-lg text-sm rounded-md font-semibold mt-10 w-fit transition-all duration-100 ease-in-out transform hover:scale-110 hover:bg-[#ffffff] hover:text-[#FF5600] active:scale-95">
                Daftar Sekarang
            </Link>
        </div>
    );
}