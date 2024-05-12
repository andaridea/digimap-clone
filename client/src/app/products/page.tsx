"use client"
import { Products } from "@/interfaces";
import { useEffect, useState } from "react";
import Link from "next/link";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ObjectId } from "mongodb";
import Swal from "sweetalert2";
import Search from "../components/search";

export default function Product() {
    const [dataProduct, setDataProduct] = useState<Products[]>([]);
    const [page, setPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);

    const addToWishlist = async ({ id }: { id: ObjectId }) => {
        // console.log(id, "<<< id")
        const res = await fetch(process.env.BASE_URL + "/api/wishlist", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(id),
            cache: "no-store"
        });

        const result = await res.json();

        if (!res.ok) {
            return Swal.fire({
                position: "top-end",
                icon: "error",
                title: "Failed",
                text: result.error
            });
        }

        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Success",
            text: "Success add to wishlist"
        });
    };

    useEffect(() => {
        const fetchDataProducts = async () => {
            setLoading(true);
            try {
                const res = await fetch(process.env.BASE_URL + `/api/products?page=${page}`, {
                    method: "GET",
                    cache: "no-store",
                    headers: {
                        'Content-type': 'application/json'
                    }
                });
                const result = await res.json();
                setDataProduct((prevData) => [...prevData, ...(result || [])]);
                setPage((prevPage) => prevPage + 1);
            } catch (error: any) {
                console.log(error.message);
            } finally {
                setLoading(false);
            }
        };

        if (!loading) {
            fetchDataProducts();
        }
    }, [page]);

    const handleScroll = () => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
        if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
            setPage((prevPage) => prevPage + 1);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Navbar />
            <Search />
            {/* List Product */}
            <h2 className="mt-10 mb-6 ml-16 text-2xl font-bold leading-9 tracking-tight text-gray-900">All Products</h2>
            <div className="container mx-auto mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
                {dataProduct?.map((el, index) => (
                    <div key={index}>
                        <img src={el.thumbnail} className="w-full h-auto object-cover object-center" />
                        <div className="p-4 bg-transparent bg-opacity-0">
                            <h3 className="text-lg font-semibold mb-2 text-center">{el.name}</h3>
                            <p className="text-gray-500 mb-4 text-center">{el.price}</p>
                        </div>
                        <div className="flex flex-col">
                            <Link href={`/products/${el.slug}`} className="btn btn-outline btn-info">See Detail</Link>
                            <div className="mt-2 flex justify-center">
                                <button className="btn btn-outline" onClick={() => addToWishlist({ id : el._id})}>
                                    Wishlist
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
                {loading && <p>Loading...</p>}
            </div>
            {/* End of List Product */}
            <Footer />
        </>
    );
}
