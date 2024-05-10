export default function Footer() {
    return (
        <>
            <footer className="bg-white dark:bg-gray-900">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <a className="flex items-center">
                                <img src="../Digimap.png" alt="Digimap Logo" className="w-32 mb-4" />
                            </a>
                            <p className="text-black mb-4 max-w-[300px] text-justify">Digimap adalah Official Apple Premium & Authorized Reseller di Indonesia dan bagian dari PT Mitra Adiperkasa Tbk (MAP Group), peritel gaya hidup terdepan di Indonesia.</p>
                            <h4 className="text-lg font-bold mb-2">Digimap head office</h4>
                            <p className="text-black mb-4 max-w-[300px] text-justify">
                                Sahid Sudirman Centre
                                Jl. Jenderal Sudirman No.Kav. 86, RT.10/RW.11, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220.</p>
                            <p className="font-bold mb-2">Email: hello@digimap.co.id</p>
                            <p className="font-bold mb-2">WA: +62 857-4827-7740 (8:00 - 22:00)</p>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Products</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4 gap-10">
                                        <a href="https://flowbite.com/" className="hover:underline">Iphone</a>
                                    </li>
                                    <li className="mb-4 gap-10">
                                        <a href="https://tailwindcss.com/" className="hover:underline">Ipad</a>
                                    </li>
                                    <li className="mb-4 gap-10">
                                        <a href="https://tailwindcss.com/" className="hover:underline">Mac</a>
                                    </li>
                                    <li className="mb-4 gap-10">
                                        <a href="https://tailwindcss.com/" className="hover:underline">Watch</a>
                                    </li>
                                    <li className="mb-4 gap-10">
                                        <a href="https://tailwindcss.com/" className="hover:underline">Airpods</a>
                                    </li>
                                    <li className="mb-4 gap-10">
                                        <a href="https://tailwindcss.com/" className="hover:underline">Accessories</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">About Us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li>
                                        <a href="#" className="hover:underline">About Digimap</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow Us</h2>
                                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                                    <li className="mb-4">
                                        <a href="#" className="hover:underline">Privacy Policy</a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://digimap.co.id/" className="hover:underline">Digimap™</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )

}