"use client"
import { FaUser } from "react-icons/fa";
import Link from "next/link";
export default function Navbar () {
    return (
        <>
                 {/* <!-- Navbar --> */}
                 <nav
                className="sticky top-0 z-50 relative flex w-full flex-nowrap items-center justify-between bg-zinc-10 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 bg-neutral-50 transition duration-300">
                {/* Logo container */}
                <div className="flex items-center justify-center w-full">
                    {/* Logo */}
                    <Link className="mx-auto my-1" href="/">
                        <img className="mx-auto h-14 ml-10" src="../Digimap.png" alt="Digimap Logo" loading="lazy" />
                    </Link>
                    {/* <!-- Right elements --> */}
                    <div className="flex mr-10">
                        {/* <!-- Icon --> */}
                        <Link className="me-4 text-neutral-600 dark:text-white" href="/login">
                            <FaUser
                                size={25}
                            />
                        </Link>
                    </div>
                </div>
                <div className="flex w-full flex-wrap items-center justify-between px-3">
                    {/* <!-- Hamburger button for mobile view --> */}
                    <button
                        className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
                        type="button"
                        data-twe-collapse-init
                        data-twe-target="#navbarSupportedContent8"
                        aria-controls="navbarSupportedContent8"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        {/* <!-- Hamburger icon --> */}
                        <span
                            className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                    {/* <!-- Collapsible navbar container --> */}
                    <div
                        className="!visible mt-2 hidden flex-grow basis-[100%] items-center justify-center lg:mt-0 lg:!flex lg:basis-auto"
                        id="navbarSupportedContent8">
                        {/* <!-- Menu Navbar --> */}
                        <ul
                            className="list-style-none flex flex-col ps-0 lg:mt-1 lg:flex-row">
                            {/* <!-- Home --> */}
                            <li
                                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 mr-20">
                                <Link
                                    className="text-black dark:text-white lg:px-2"
                                    aria-current="page"
                                    href="/">Home</Link>
                            </li>
                            {/* <!-- Products --> */}
                            <li
                                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-20">
                                <Link
                                    className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="/products">Products
                                </Link>
                            </li>
                            {/* <!-- Wishlist --> */}
                            <li
                                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-20">
                                <Link
                                    className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                                    href="/wishlist">Wishlist
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <!-- End of Navbar --> */}
        </>
    )
}