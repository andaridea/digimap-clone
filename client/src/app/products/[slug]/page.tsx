import { Products } from "@/interfaces";

async function getDataBySlug(slug: string): Promise<Products> {
    try {
        const res = await fetch('http://localhost:3000/api/products/' + slug, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
            cache: "no-store"
        });
        console.log('Response status:', res.status); // Log the response status
        const result = await res.json();
        console.log('Response data:', result); // Log the response data
        return result; // Return the JSON data
    } catch (error: any) {
        // Handle fetch error
        throw new Error('Failed to fetch data by slug: ' + error.message);
    }
}

export default async function ProductDetail({ params }: { params: { slug: string }}) {
    const slug = params.slug
    const data = await getDataBySlug(slug)
    console.log(data, "<<<<<")
    return (
        <>
            <div className="container mx-auto py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center">
                        <img src="https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/bab0b82505d6f05803d66796ede39eeb/helix/01-APPLE-8DVTBAPP0-APPMME23PA-A-PurpleSS.jpg" alt="Product Image" className="w-96" />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-2xl font-bold mb-4">iPad Pro 11 Inch (2022)</h1>
                        <p className="text-xl font-semibold mb-4">Rp 16.499.000</p>
                        <p className="mb-4">Deskripsi produk akan ditampilkan di sini.</p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Beli Sekarang</button>
                    </div>
                    <div>
                        <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-inherit rounded-box">
                        <div className="carousel-item">
                            <img src="https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/bab0b82505d6f05803d66796ede39eeb/helix/01-APPLE-8DVTBAPP0-APPMME23PA-A-PurpleSS.jpg" className="rounded-box w-40 h-30" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/bab0b82505d6f05803d66796ede39eeb/helix/02-APPLE-8DVTBAPP0-APPMME23PA-A-PurpleSS.jpg" className="rounded-box w-40 h-30" />
                        </div>
                        <div className="carousel-item">
                            <img src="https://bb-scm-prod-pim.oss-ap-southeast-5.aliyuncs.com/products/bab0b82505d6f05803d66796ede39eeb/helix/04-APPLE-8DVTBAPP0-APPMME23PA-A-PurpleSS.jpg" className="rounded-box w-40 h-30" />
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </>
    )
} 