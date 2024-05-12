"use client"
import { useEffect, useState } from "react";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { WishlistType } from "@/interfaces";
import { ObjectId } from "mongodb";

export default function Wishlist() {
    const [data, setData] = useState<WishlistType[]>([])

    async function fetchData() {
        const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/wishlist", {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        })

        const result = await res.json()
        // console.log(result, "<<<< result")
        // console.log(result.data, "<<<< result.data")
        setData(result.data)
    }

    useEffect(() => {
        fetchData()
    }, [])


async function handleRemoveWishlist(productId: ObjectId) {
        try {
            const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + `/api/wishlist/${productId}`, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            });

            if (!res.ok) {
                const errorData = await res.json()
                throw new Error(errorData.message);
            }

            // Hapus item dari state data setelah berhasil dihapus dari server
            setData(prevData => prevData.filter(item => item.productId !== productId));
        } catch (error: any) {
            console.error('Error removing item from wishlist:', error.message);
        }
    }

    return (
        <>
            <Navbar />
            <div className="min-h-screen">
                <main className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold mb-4">My Wishlist</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map((el, index) => {
                            const productDetail = el.productDetails[0]
                            return (
                                <div key = {index} className="bg-white bg-opacity-75 rounded-lg shadow-md p-6 flex flex-col items-center">
                                    <img
                                        src={productDetail.thumbnail}
                                        alt="Product 1"
                                        className="w-32 h-32 flex justify-center rounded mr-4"
                                    />
                                    <div>
                                        <h2 className="text-lg font-semibold">{productDetail.name}</h2>
                                        <p className="text-gray-600">
                                            {productDetail.description}
                                        </p>
                                        <div className="flex flex-col">
                                        <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">
                                            Add to Cart
                                        </button>
                                        <button 
                                        className="bg-red-500 text-black px-4 py-2 mt-2 rounded"
                                        onClick={() => handleRemoveWishlist(el.productId)}
                                        >
                                            Remove
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}
