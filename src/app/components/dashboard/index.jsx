"use client"
import { useState } from 'react';
import Layout from './layout';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSidebar } from "../../SidebarContext";

export default function Dashboard() {
    const { isSidebarOpen } = useSidebar();
    const [steps, setSteps] = useState(0);
    const [fileName, setFileName] = useState("");
    const router = useRouter();

    const addSteps = () => {
        setSteps(steps + 1);
    }

    const removeSteps = () => {
        setSteps(steps - 1);
    }
    
    const [fileNames, setFileNames] = useState({
        npwp: "",
        siup: "",
        akta: "",
        ktp: "",
        aktaMentri: ""
    });

    const handleClick = () => {
        router.push('/home');
    }
      
    const handleFileChange = (event, fieldName) => {
        const file = event.target.files[0];
        if (file) {
          setFileNames({
            ...fileNames,
            [fieldName]: file.name
          });
        }
    };
    
    return (
        <Layout>
            {steps === 0 && (
                <div className={`${isSidebarOpen ? "ml-80" : "ml-0"} overflow-scroll flex flex-col justify-center items-center lg:py-32 pt-24`}>
                    <div className='flex flex-col justify-center items-center gap-5 bg-white'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-[#3F4045]'>Daftar Sebagai Perusahaan</h1>
                        <Image src="/images/Steps.png" alt="logo" width={800} height={100} className="cursor-pointer" />
                    </div>
                    <form action="" className='flex flex-col py-10 justify-center items-center lg:justify-normal lg:items-start'>
                        <div>
                            <h2 className='font-semibold text-[#3F4045] text-xl my-3'>Informasi Perusahaan</h2>
                            <div className='flex lg:gap-10 flex-col lg:flex-row w-[250px] lg:w-auto'>
                                <div>
                                    <label htmlFor="name" className='label-regis'>Nama Perusahaan</label>
                                    <input type="text" id="name" className='input-regis' placeholder='Masukkan Nama Perusahaan'/>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Penanggung Jawab Perusahaan</label>
                                    <input type="text" id="responsibility" className='input-regis' placeholder='Masukkan Penanggung Jawab'/>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 className='font-semibold text-[#3F4045] text-xl my-3'>Alamat Perusahaan</h2>
                            <div className='flex flex-col w-[250px] lg:w-auto'>
                                <div className='flex lg:gap-10 gap-0 flex-col lg:flex-row'>
                                    <div>
                                        <label htmlFor="address" className='label-regis'>Alamat Lengkap</label>
                                        <input type="text" id="address" className='input-regis' placeholder='Masukkan Alamat'/>
                                    </div>
                                    <div>
                                        <label htmlFor="city" className='label-regis'>Provinsi</label>
                                        <select name="city" id="city" className='input-regis'>
                                            <option value="Jawa Barat">Jawa Barat</option>
                                            <option value="Jawa Timur">Jawa Timur</option>
                                            <option value="Jawa Tengah">Jawa Tengah</option>
                                            <option value="Jawa Timur">Jawa Timur</option>
                                            <option value="Jawa Tengah">Jawa Tengah</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex lg:gap-10 gap-0 flex-col lg:flex-row'>
                                    <div>
                                        <label htmlFor="capital-city" className='label-regis'>Kabupaten/Kota</label>
                                        <select name="capital-city" id="capital-city" className='input-regis'>
                                            <option value="Banyumas">Banyumas</option>
                                            <option value="Blora">Blora</option>
                                            <option value="Demak">Demak</option>
                                            <option value="Grobogan">Grobogan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="local-city" className='label-regis'>Kecamatan</label>
                                        <select name="local-city" id="local-city" className='input-regis'>
                                            <option value="Banyuwangi">Banyuwangi</option>
                                            <option value="Blora">Blora</option>
                                            <option value="Demak">Demak</option>
                                            <option value="Grobogan">Grobogan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className='flex lg:gap-10 gap-0 flex-col lg:flex-row'>
                                    <div>
                                        <label htmlFor="village" className='label-regis'>Kelurahan/Desa</label>
                                        <select name="village" id="village" className='input-regis'>
                                            <option value="Banyuwangi">Banyuwangi</option>
                                            <option value="Blora">Blora</option>
                                            <option value="Demak">Demak</option>
                                            <option value="Grobogan">Grobogan</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="posId" className='label-regis'>Kode Pos</label>
                                        <input type="text" id="posId" className='input-regis' placeholder='Masukkan Kode Pos'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-col justify-center lg:flex-row gap-5 items-center lg:self-end w-full lg:w-auto mt-20'>
                            <button className="bg-white border-2 box-border border-[#FF5600] py-2 rounded-xl font-semibold text-[#FF5600] text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-gray-200">Simpan Progress</button>
                            <button className='bg-[#FF5600] py-2 border-2 border-[#FF5600]  rounded-xl font-semibold text-white text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-[#ac3900] hover:border-[#ac3900]' onClick={addSteps}>Selanjutnya</button>
                        </div>
                    </form>
                </div>
                )
            }
            {steps === 1 && (
                <div className={`${isSidebarOpen ? "ml-80" : "ml-0"} lg:h-[100vh] overflow-scroll flex flex-col justify-center items-center lg:pt-32 pt-24`}>
                    <div className='flex flex-col justify-center items-center gap-5 bg-white'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-[#3F4045]'>Daftar Sebagai Perusahaan</h1>
                        <Image src="/images/Steps2.png" alt="logo" width={800} height={100} className="cursor-pointer" />
                    </div>
                    <form action="" className='flex flex-col py-10 justify-center items-center lg:justify-normal lg:items-start'>
                        <div>
                            <h2 className='font-semibold text-[#3F4045] text-xl my-3'>Informasi Bank</h2>
                            <div className='flex lg:gap-10 flex-col lg:flex-row w-[250px] lg:w-auto'>
                                <div>
                                    <label htmlFor="name" className='label-regis'>Nama Bank</label>
                                    <input type="text" id="name" className='input-regis' placeholder='Masukkan Nama Bank'/>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Lokasi KCP</label>
                                    <input type="text" id="responsibility" className='input-regis' placeholder='Masukkan Lokasi'/>
                                </div>
                            </div>
                            <div className='flex lg:gap-10 flex-col lg:flex-row w-[250px] lg:w-auto'>
                                <div>
                                    <label htmlFor="name" className='label-regis'>Nomor Rekening</label>
                                    <input type="text" id="name" className='input-regis' placeholder='Masukkan Nomor Rekening'/>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Nama Pemilik Rekening</label>
                                    <input type="text" id="responsibility" className='input-regis' placeholder='Masukkan Nama Pemilik Rekening'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center lg:flex-row gap-5 items-center lg:self-end w-full lg:w-auto mt-20'>
                            <button className="bg-slate-200 border-2 box-border border-slate-200 py-2 rounded-xl font-semibold text-slate-400 text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-slate-400 hover:border-slate-400 hover:text-white" onClick={removeSteps}>Kembali</button>
                            <button className="bg-white border-2 box-border border-[#FF5600] py-2 rounded-xl font-semibold text-[#FF5600] text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-gray-200">Simpan Progress</button>
                            <button className='bg-[#FF5600] py-2 border-2 border-[#FF5600]  rounded-xl font-semibold text-white text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-[#ac3900] hover:border-[#ac3900]' onClick={addSteps}>Selanjutnya</button>
                        </div>
                    </form>
                </div>
                )
            }
            { steps === 2 && (
                <div className={`${isSidebarOpen ? "ml-80" : "ml-0"} overflow-scroll flex flex-col justify-center items-center lg:py-40 pt-24`}>
                    <div className='flex flex-col justify-center items-center gap-5 bg-white'>
                        <h1 className='lg:text-2xl text-xl font-semibold text-[#3F4045]'>Daftar Sebagai Perusahaan</h1>
                        <Image src="/images/Steps3.png" alt="logo" width={800} height={100} className="cursor-pointer" />
                    </div>
                    <form action="" className='flex flex-col py-10 justify-center items-center lg:justify-normal lg:items-start'>
                        <h2 className='font-semibold text-[#3F4045] text-xl my-3 w-full lg'>Dokumen Perusahaan</h2>
                        <div className='flex lg:gap-10 flex-col lg:flex-row w-[250px] lg:w-auto'>
                            <div>
                                <div className=''>
                                    <label htmlFor="name" className='label-regis'>NPWP Perusahaan</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.npwp ? fileNames.npwp : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[145px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'npwp')}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Akta Pendirian Usaha</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.akta ? fileNames.akta : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[145px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'akta')}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>KTP Direktur Perusahaan</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.ktp ? fileNames.ktp : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[145px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'ktp')}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>SIUP/NIB</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.siup ? fileNames.siup : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[145px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'siup')}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Pengesahan Akta dari Menteri</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.aktaMentri ? fileNames.aktaMentri : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[145px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'aktaMentri')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center lg:flex-row gap-5 items-center lg:self-end w-full lg:w-auto mt-20'>
                        <button className="bg-slate-200 border-2 box-border border-slate-200 py-2 rounded-xl font-semibold text-slate-400 text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-slate-400 hover:border-slate-400 hover:text-white" onClick={removeSteps}>Kembali</button>
                            <button className="bg-white border-2 box-border border-[#FF5600] py-2 rounded-xl font-semibold text-[#FF5600] text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-gray-200">Simpan Progress</button>
                            <button className='bg-[#FF5600] py-2 border-2 border-[#FF5600]  rounded-xl font-semibold text-white text-sm lg:text-base w-full lg:w-[180px] transition-all duration-100 ease-in-out transform hover:bg-[#ac3900] hover:border-[#ac3900]' onClick={addSteps}>Selanjutnya</button>
                        </div>
                    </form>
                </div>
            )}
            {steps === 3 && (
                <div className={`${isSidebarOpen ? "ml-80" : "ml-0"} h-[100vh] overflow-scroll flex flex-col justify-center items-center lg:pt-10 pt-0`}>
                        <Image src="/images/person.png" alt="logo" width={200} height={100} />
                        <h1 className='font-semibold text-[#3F4045] lg:text-3xl text-xl mb-3 mt-10'>Pendaftaran Berhasil</h1>
                        <p className='text-[#3F4045] lg:w-[400px] w-[250px] text-xs lg:text-base text-center'>Harap tunggu<span className='font-semibold'> 1-2 hari untuk proses verifikasi.</span> Anda akan menerima <span className='font-semibold'>notifikasi melalui email</span> setelah proses verifikasi selesai.</p>
                        <button className='bg-[#FF5600] w-[250px] lg:py-2 py-1 border-2 border-[#FF5600] rounded-lg font-semibold text-white mt-5 text-sm lg:text-base' onClick={handleClick} type='button'>Jelajahi Fitur Kami</button>
                        <p className='text-[#3F4045] lg:text-base mt-5 w-[250px] lg:w-auto text-center text-xs'>Jika ada pertanyaan, silakan hubungi <span className='font-semibold cursor-pointer'>Customer Care.</span></p>
                </div>
            )}
        </Layout>
    )
}