import Product from "../../../../db/models/products"
export async function GET() {
    try {
        const data = await Product.findAll()

        return Response.json(data)
    } catch (error) {
        return Response.json({
            message: "Internal server error"
        }, { status: 500 })
    }
}


