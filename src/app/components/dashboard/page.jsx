import Layout from './layout';
import Image from 'next/image';
export default function Dashboard() {
    return (
        <Layout>
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
                        <button className="bg-white border-2 box-border border-[#FF5600] px-5 py-2 rounded-xl font-semibold text-[#FF5600]">Simpan Progress</button>
                        <button className='bg-[#FF5600] px-5 py-2 rounded-xl font-semibold text-white'>Selanjutnya</button>
                    </div>
                </form>
            </div>
            
        </Layout>
    )
}