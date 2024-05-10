import { RequestParams } from "@/interfaces";
import Product from "../../../../../db/models/products";

export async function GET(_request: Request, {params}: RequestParams) {
    try {
        const product = await Product.findBySlug(params.slug)
        return Response.json(product)
    } catch (error) {
        return Response.json({
            message: "Internal server error"
        }, { status: 500 })
    }
}
