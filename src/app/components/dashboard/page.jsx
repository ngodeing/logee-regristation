"use client"
import { useState } from 'react';
import Layout from './layout';
import Image from 'next/image';
export default function Dashboard() {
    const [steps, setSteps] = useState(0);
    const [fileName, setFileName] = useState("");

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
                <div className=' bg-white flex flex-col justify-center items-center pt-28 ml-60'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <h1 className='text-2xl font-semibold text-[#3F4045]'>Daftar Sebagai Perusahaan</h1>
                        <Image src="/images/Steps.png" alt="logo" width={800} height={100} className="cursor-pointer" />
                    </div>
                    <form action="" className='flex flex-col py-10'>
                        <h2 className='font-semibold text-[#3F4045] text-xl my-3'>Informasi Perusahaan</h2>
                        <div className='flex gap-10'>
                            <div>
                                <label htmlFor="name" className='label-regis'>Nama Perusahaan</label>
                                <input type="text" id="name" className='input-regis' placeholder='Masukkan Nama Perusahaan'/>
                            </div>
                            <div>
                                <label htmlFor="responsibility" className='label-regis'>Penanggung Jawab Perusahaan</label>
                                <input type="text" id="responsibility" className='input-regis' placeholder='Masukkan Penanggung Jawab'/>
                            </div>
                        </div>
                        <h2 className='font-semibold text-[#3F4045] text-xl my-3'>Alamat Perusahaan</h2>
                        <div className='flex flex-col'>
                            <div className='flex gap-10'>
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
                            <div className='flex gap-10'>
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
                            <div className='flex gap-10'>
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
                        <div className='flex gap-5 items-center self-end mt-20'>
                            <button className="bg-white border-2 box-border border-[#FF5600] w-[180px] py-2 rounded-xl font-semibold text-[#FF5600]">Simpan Progress</button>
                            <button className='bg-[#FF5600] w-[180px] py-2 border-2 border-[#FF5600]  rounded-xl font-semibold text-white' onClick={addSteps}>Selanjutnya</button>
                        </div>
                    </form>
                </div>
                )
            }
            { steps === 1 && (
                <div className='h-[100vh] bg-white flex flex-col justify-center items-center pt-28 ml-60'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <h1 className='text-2xl font-semibold text-[#3F4045]'>Daftar Sebagai Perusahaan</h1>
                        <Image src="/images/Steps2.png" alt="logo" width={800} height={100} className="cursor-pointer" />
                    </div>
                    <form action="" className='flex flex-col py-10'>
                        <h2 className='font-semibold text-[#3F4045] text-xl my-3'>Informasi Bank</h2>
                        <div className='flex gap-10'>
                            <div>
                                <div>
                                    <label htmlFor="name" className='label-regis'>Nama Bank</label>
                                    <input type="text" id="name" className='input-regis' placeholder='Masukkan Nama Bank'/>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Nomor Rekening</label>
                                    <input type="text" id="responsibility" className='input-regis' placeholder='Masukkan Nomor Rekening'/>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Lokasi KCP</label>
                                    <input type="text" id="responsibility" className='input-regis' placeholder='Masukkan Lokasi'/>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Nama Pemilik Rekening</label>
                                    <input type="text" id="responsibility" className='input-regis' placeholder='Masukkan Pemilik Rekening'/>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center self-end mt-20'>
                            <button className='bg-slate-200 w-[180px] py-2 border-2 border-slate-200  rounded-xl font-semibold text-slate-400' onClick={removeSteps}>Kembali</button>
                            <button className="bg-white border-2 box-border border-[#FF5600] w-[180px] py-2 rounded-xl font-semibold text-[#FF5600]">Simpan Progress</button>
                            <button className='bg-[#FF5600] w-[180px] py-2 border-2 border-[#FF5600] rounded-xl font-semibold text-white 'onClick={addSteps}>Selanjutnya</button>
                        </div>
                    </form>
                </div>
            )}
            { steps === 2 && (
                <div className=' bg-white flex flex-col justify-center items-center pt-28 ml-60'>
                    <div className='flex flex-col justify-center items-center gap-5'>
                        <h1 className='text-2xl font-semibold text-[#3F4045]'>Daftar Sebagai Perusahaan</h1>
                        <Image src="/images/Steps3.png" alt="logo" width={800} height={100} className="cursor-pointer" />
                    </div>
                    <form action="" className='flex flex-col py-10'>
                        <h2 className='font-semibold text-[#3F4045] text-xl my-3'>Dokumen Perusahaan</h2>
                        <div className='flex gap-10'>
                            <div>
                                <div className=''>
                                    <label htmlFor="name" className='label-regis'>NPWP Perusahaan</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.npwp ? fileNames.npwp : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[130px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'npwp')}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Akta Pendirian Usaha</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.akta ? fileNames.akta : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[130px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'akta')}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>KTP Direktur Perusahaan</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.ktp ? fileNames.ktp : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[130px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'ktp')}/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>SIUP/NIB</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.siup ? fileNames.siup : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[130px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'siup')}/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="responsibility" className='label-regis'>Pengesahan Akta dari Menteri</label>
                                    <div className='input-regis flex justify-between'>
                                        <p className='text-xs text-gray-400'>{fileNames.aktaMentri ? fileNames.aktaMentri : "Format JPG, PNG, atau PDF, maks 15MB"}</p>
                                        <button className='bg-[#f8fbff] border border-[#729CCC] text-[#729CCC] w-[130px] py-2 rounded-lg font-light text-xs' type='button'>Pilih Dokumen</button>
                                        <input type="file" id="name" className='opacity-0 absolute cursor-pointer' onChange={(e) => handleFileChange(e, 'aktaMentri')}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-5 items-center self-end mt-20'>
                            <button className='bg-slate-200 w-[180px] py-2 border-2 border-slate-200  rounded-xl font-semibold text-slate-400' onClick={removeSteps}>Kembali</button>
                            <button className="bg-white border-2 box-border border-[#FF5600] w-[180px] py-2 rounded-xl font-semibold text-[#FF5600]">Simpan Progress</button>
                            <button className='bg-[#FF5600] w-[180px] py-2 border-2 border-[#FF5600]  rounded-xl font-semibold text-white' onClick={addSteps}>Kirim</button>
                        </div>
                    </form>
                </div>
            )}
            {steps === 3 && (
                <div className='h-[100vh] bg-white flex flex-col justify-center items-center pt-16 ml-60'>
                        <Image src="/images/person.png" alt="logo" width={200} height={100} />
                        <h1 className='font-semibold text-[#3F4045] text-3xl mb-3 mt-10'>Pendaftaran Berhasil</h1>
                        <p className='text-[#3F4045] w-[400px] text-center'>Harap tunggu<span className='font-semibold'>1-2 hari untuk proses verifikasi.</span> Anda akan menerima <span className='font-semibold'>notifikasi melalui email</span> setelah proses verifikasi selesai.</p>
                        <button className='bg-[#FF5600] w-[250px] py-2 border-2 border-[#FF5600] rounded-lg font-semibold text-white mt-5'>Jelajahi Fitur Kami</button>
                        <p className='text-[#3F4045] text-sm mt-5'>Jika ada pertanyaan, silakan hubungi <span className='font-semibold'>Customer Care.</span></p>
                </div>
            )}
        </Layout>
    )
}