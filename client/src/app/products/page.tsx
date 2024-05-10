"use client"
import { Products } from "@/interfaces"
import { useEffect, useState } from "react"
import { MdFavoriteBorder } from "react-icons/md";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Product() {
    const [dataProduct, setDataProduct] = useState<Products[]>([])

    useEffect(() => {
        const fetchDataProducts = () => {
            fetch("http://localhost:3000/api/products", {
                method: "GET",
                cache: "no-store",
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(result => {
                    // console.log(result, "<<<< result")
                    setDataProduct(result || [])
                })
                .catch(error => {
                    console.log(error.message)
                })
        }
        fetchDataProducts()
    }, [])
    // console.log(dataProduct, "<<<<")
    return (
        <>
            <Navbar />
            {/* <!-- List Product --> */}
            <h2 className="mt-10 mb-6 ml-16 text-2xl font-bold leading-9 tracking-tight text-gray-900">All Products</h2>
            <div className="container mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
                {
                    dataProduct?.map((el, index) => {
                        return (
                            <div key={index}>
                                <div className="flex flex row">
                                <img src={el.thumbnail} className="w-full h-auto object-cover object-center" />
                                <a className="me-4 text-neutral-600 dark:text-white mt-20" href="#">
                                    <MdFavoriteBorder
                                        size={25}
                                    />
                                </a>
                                </div>
                                <div className="p-4 bg-transparent bg-opacity-0">
                                    <h3 className="text-lg font-semibold mb-2 text-center">{el.name}</h3>
                                    <p className="text-gray-500 mb-4 text-center">{el.price}</p>
                                </div>
                                <Link href= {`/products/${el.slug}`} className="btn btn-outline btn-info">See Detail</Link>
                            </div>
                        )
                    })
                }
            </div>
            {/* <!-- End of List Product --> */}
            <Footer />
        </>
    )
}