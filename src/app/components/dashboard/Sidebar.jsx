import Image from "next/image"
export default function Sidebar(){
    return (
        <div className="flex flex-col w-[250px] bg-white border top-0 left-0 absolute h-[100vh] shadow">
            <div className="flex items-center justify-center py-3 border">
                <Image src="/images/logee-black.png" alt="logo" width={150} height={100} className="cursor-pointer"/>
            </div>
            <div>
                <ul className="flex flex-col gap-3 cursor-pointer">
                    <div className="flex items-center gap-5 justify-start list ">
                        <Image src="/images/home2.png" alt="logo" width={20} height={100} className="cursor-pointer"/> 
                        <li className="">Beranda</li>
                    </div>
                    <div className="flex items-center gap-5 justify-start list ">
                        <Image src="/images/pencil.png" alt="logo" width={20} height={100} className="cursor-pointer"/> 
                        <li className="">Daftar</li>
                    </div>
                    <div className="flex items-center gap-5 justify-start list ">
                        <Image src="/images/account.png" alt="logo" width={20} height={100} className="cursor-pointer"/> 
                        <li className="">Akun</li>
                    </div>
                    <div className="w-[80%] h-[1px] bg-slate-300 items-center self-center"></div>
                    <div className="flex items-center gap-5 justify-start list ">
                        <Image src="/images/signout.png" alt="logo" width={20} height={100} className="cursor-pointer"/> 
                        <li className="">Keluar</li>
                    </div>
                </ul>
            </div>
            <Image src="/images/Small-Active.png" alt="logo" width={40} height={100} className="cursor-pointer bottom-5 right-5 absolute"/> 
        </div>
    )
}