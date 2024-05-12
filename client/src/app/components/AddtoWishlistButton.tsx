"use client"
import { ObjectId } from "mongodb";
import Swal from "sweetalert2";

export default function addToWishlist({ id }: { id: ObjectId }) {
    const handleWishlist = async () => {
        const res = await fetch("http://localhost:3000/api/wishlist", {
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
    }
    return (
        <>
            <button className="btn px-4 py-2 rounded-md mt-4" onClick={handleWishlist}>
                Add to Wishlist
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            </button>
        </>
    )
}
