export interface Products {
    id: string;
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