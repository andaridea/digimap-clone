import { Products } from "@/interfaces";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

async function getDataBySlug(slug: string): Promise<Products> {
    try {
        const res = await fetch('http://localhost:3000/api/products/' + slug, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            cache: "no-store"
        });
        const result = await res.json();
        return result;
    } catch (error: any) {
        throw new Error('Failed to fetch data by slug: ' + error.message);
    }
}

export default async function ProductDetail({ params }: { params: { slug: string } }) {
    const slug = params.slug
    const data = await getDataBySlug(slug)
    return (
        <>
        <Navbar />
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center">
                        <img src={data.thumbnail} alt="Product Image" className="w-96" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-4">{data.name}</h1>
                        <p className="text-xl font-semibold mb-4">{data.price}</p>
                        <p className="mb-4">{data.description}</p>
                        <button className="btn bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Beli Sekarang</button>
                        <button className="btn px-4 py-2 rounded-md mt-4">
                            Add to Wishlist
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        </button>
                    </div>
                    <div>
                        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-inherit rounded-box">
                            <div className="carousel-item">
                                <img src={data.image[0]} className="rounded-box w-40 h-30" />
                            </div>
                            <div className="carousel-item">
                                <img src={data.image[1]} className="rounded-box w-40 h-30" />
                            </div>
                            <div className="carousel-item">
                                <img src={data.image[2]} className="rounded-box w-40 h-30" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        <Footer />
        </>
    )
} 