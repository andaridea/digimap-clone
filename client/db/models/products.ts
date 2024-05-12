import { db } from "../config"
import { Products } from "@/interfaces"

export default class Product {
    static col() {
        return db.collection<Products>("products")
    }
    static async findAll() {
        return await this.col().find({}).toArray() as Products[]
    }
    static async findLimit() {
        return await this.col().find({}).limit(5).toArray() as Products[]
    }
    static async findBySlug(slug: string) {
        const product =  await this.col().findOne({
            slug: slug
        }) as Products | null

        return product
    }
    static async searchByName (searchParams: string) {
        await this.col().find({
            name: {$regex: new RegExp(searchParams, 'i')}
        }).toArray() as Products[]
    }
}