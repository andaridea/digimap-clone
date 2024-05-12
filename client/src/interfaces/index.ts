import { ObjectId } from "mongodb";

export interface Products {
    _id: ObjectId;
    name: string;
    slug: string;
    description: string;
    excerpt: string;
    price: number;
    tags: string[];
    thumbnail: string;
    image: string[]
    createdAt: string;
    updatedAt: string
}

export type RequestParams = {
    params: {
        slug: string
    }
}

export type Users = {
    _id?: ObjectId;
    name: string;
    username: string;
    email: string;
    password: string
}


export type WishlistType = {
    _id: ObjectId,
    userId: ObjectId,
    productId: ObjectId,
    createdAt: string,
    updatedAt: string
    productDetails: Products[]
}

