import Link from 'next/link';
export default function InfoSection() {
    return (
        <div className="flex flex-col gap-5 items-center justify-center">
            <h1 className="text-5xl font-bold text-center text-[#FF5600]">Solusi Digital <span className="text-white">Bisnis Logistik</span></h1>
            <p className="text-lg font-light text-center w-[700px]">LOGEE hadir sebagai jembatan untuk menghubungkan semua pemain logistik menjadi satu ekosistem yang memberikan solusi dan keuntungan bagi bisnis Anda.</p>
            <Link href="/optionpage" className="bg-[#FF5600] px-5 py-3 rounded-md font-semibold mt-10 w-fit">
                Daftar Sekarang
            </Link>
        </div>
    );
}