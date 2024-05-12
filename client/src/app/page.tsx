export const dynamic = 'force-dynamic'
import { Products } from "@/interfaces";
import Link from "next/link";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
async function getData(): Promise<Products[]> {
  "use server"
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/home', {
      method: "GET",
    })

    if (!res.ok) {
      throw new Error('Failed to fetch data')
    }

    return await res.json()

  } catch (error: any) {
    console.log(error)
    throw error
  }
}
export default async function Home() {
  const data = await getData()
  return (
    <>
      <Navbar />
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
      <h2 className="mt-10 mb-6 ml-16 text-2xl font-bold leading-9 tracking-tight text-gray-900">Featured Products</h2>
      <div className="container mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
        {data.map((el, index) => {
          return (
            <div key={index}>
              <img src={el.thumbnail} className="w-full h-auto object-cover object-center" />
              <div className="p-4 bg-transparent bg-opacity-0">
                <h3 className="text-sm text-center font-semibold mb-2">{el.name}</h3>
                <p className="text-gray-500 text-sm text-center mb-4">{el.price}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div className="flex justify-center">
        <Link href={"/products"} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 mb-10">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            See All
          </span>
        </Link>
      </div>
      {/* <!-- End of List Product --> */}
      <img src="../banner-2.webp" className="w-full" />
      <Footer />
    </>
  )
}