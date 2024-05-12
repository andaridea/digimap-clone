import { WishlistType } from "@/interfaces";
import { z } from "zod"
import { db } from "../config";
import { ObjectId } from "mongodb";

const WishlistSchema = z.object({
    userId: z.string(),
    productId: z.string()
})

export default class Wishlist {
    static col() {
        return db.collection("wishlist")
    }

    static async getAll(userId: string) {
        const id = new ObjectId(userId)
        const data = await this.col().aggregate([
            {
                $match: {
                    userId: id
                }
            },
            {
                $lookup: {
                    from: "products",
                    localField: "productId",
                    foreignField: "_id",
                    as: "productDetails"
                  }
            }
        ]).toArray()

        return data
    }

    static async getOne(userId: string, productId: string) {

        return await this.col().findOne({
            userId: new ObjectId((userId)),
            productId: new ObjectId((productId))
        }) as WishlistType
    }

    static async create(userId: string, productId: string) {
        const wishlist = WishlistSchema.safeParse({ userId, productId })

        if (!wishlist.success) {
            throw wishlist.error
        }

        return await this.col().insertOne({
            userId: new ObjectId((userId)),
            productId: new ObjectId(productId),
            createdAt: new Date(),
            updatedAt: new Date()
        })
    }

    static async delete(id: string) {
        return await this.col().deleteOne({
            _id: new ObjectId(id)
        })
    }
}   