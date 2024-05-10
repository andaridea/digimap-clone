import { Products } from "@/interfaces";
import { FaUser } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import Footer from "./components/footer";
async function getData(): Promise<Products[]> {
  "use server"
  const res = await fetch('http://localhost:3000/api/products', {
    method: "GET",
    cache: "no-store"
  })

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}
export default async function Home() {
  const data = await getData()
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav
        className="sticky top-0 z-50 relative flex w-full flex-nowrap items-center justify-between bg-zinc-10 py-2 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4 bg-neutral-50 transition duration-300">
        {/* Logo container */}
        <div className="flex items-center justify-center w-full">
          {/* Logo */}
          <Link className="mx-auto my-1" href="/">
            <img className="mx-auto h-14 ml-40" src="../Digimap.png" alt="Digimap Logo" loading="lazy" />
          </Link>
          {/* <!-- Right elements --> */}
          <div className="flex mr-10">
            {/* <!-- Icon --> */}
            <a className="me-4 text-neutral-600 dark:text-white" href="#">
              <FaHeart
                size={25}
              />
            </a>
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
              {/* <!-- Iphone --> */}
              <li
                className="my-4 ps-2 lg:my-0 lg:pe-1 lg:ps-2 mr-20">
                <a
                  className="text-black dark:text-white lg:px-2"
                  aria-current="page"
                  href="#">Iphone</a>
              </li>
              {/* <!-- Ipad --> */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-20">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#">Ipad
                </a>
              </li>
              {/* <!-- Mac --> */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-20">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#">Mac
                </a>
              </li>
              {/* <!-- Watch --> */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-20">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#">Watch
                </a>
              </li>
              {/* <!-- Airpods --> */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-20">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#">Airpods
                </a>
              </li>
              {/* <!-- Accessories --> */}
              <li
                className="mb-4 ps-2 lg:mb-0 lg:pe-1 lg:ps-0 mr-20">
                <a
                  className="p-0 text-black/60 transition duration-200 hover:text-black/80 hover:ease-in-out focus:text-black/80 active:text-black/80 motion-reduce:transition-none dark:text-white/60 dark:hover:text-white/80 dark:focus:text-white/80 dark:active:text-white/80 lg:px-2"
                  href="#">Accessories
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- End of Navbar --> */}
      {/* Search bar */}
      <div className="flex flex-grow justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 border border-gray-300 bg-zink-50 dark:text-white w-screen"
            />
          </div>
      {/* <!-- Carousel --> */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="../image-carousel-1.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide8" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="../image-carousel-2.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="../image-carousel-3.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="../image-carousel-4.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src="../image-carousel-5.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full">
          <img src="../image-carousel-6.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide5" className="btn btn-circle">❮</a>
            <a href="#slide7" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide7" className="carousel-item relative w-full">
          <img src="../image-carousel-7.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide6" className="btn btn-circle">❮</a>
            <a href="#slide8" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide8" className="carousel-item relative w-full">
          <img src="../image-carousel-8.webp" className="w-full h-500" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide7" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      {/* <!-- End of Carousel --> */}
      {/* <!-- List Product --> */}
      <h2 className="mt-10 mb-6 ml-16 text-2xl font-bold leading-9 tracking-tight text-gray-900">All Products</h2>
      <div className="container mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {data.map(el => {
          return (
            <div>
              <div className="flex flex-row">
                <img src={el.thumbnail} className="w-full h-auto object-cover object-center" />
                <a className="me-4 text-neutral-600 dark:text-white mt-20" href="#">
                  <MdFavoriteBorder
                    size={25}
                  />
                </a>
              </div>
              <div className="p-4 bg-transparent bg-opacity-0">
                <h3 className="text-sm text-center font-semibold mb-2">{el.name}</h3>
                <p className="text-gray-500 text-sm text-center mb-4">{el.price}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 mb-10">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See All
          </span>
        </button>
      </div>
      {/* <!-- End of List Product --> */}
      <img src="../banner-2.webp" className="w-full" />
      <Footer />
    </>
  )
}