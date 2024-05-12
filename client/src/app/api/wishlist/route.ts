import { NextRequest, NextResponse } from "next/server";
import Wishlist from "../../../../db/models/wishlist";
import { headers } from 'next/headers'

export async function POST(request: NextRequest) {
    try {
        const headersList = headers()
        const userId = headersList.get('userId')
        // console.log(request.headers, "<<< request")
        // const userId = request.headers.get("userId")
        const productId = await request.json()
        // console.log("User ID from header:", userId);
        // console.log("Product ID from request:", productId)

        if (!userId) {
            return NextResponse.json(
                {
                    message: "User not found"
                },
                {
                    status: 404
                }
            )
        }

        const check = await Wishlist.getOne(userId, productId)

        if (check) {
            throw new Error("Already on whislist")
        }

        const result = await Wishlist.create(userId, productId)

        return NextResponse.json(

            {
                message: "Success add to wishlist"
            },
            {
                status: 201
            }
        )

    } catch (error: any) {
        // console.error("Error:", error.message);
        return NextResponse.json(
            {
                message: "Internal server error"
            },
            {
                status: 500
            }
        )
    }
}

export async function GET(request: NextRequest) {
    try {
        const headersList = headers()
        const userId = headersList.get('userId') as string
        // console.log(userId, "<<< get")

        const data = await Wishlist.getAll(userId)
        return NextResponse.json(
            {
                data: data
            },
            {
                status: 200
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                message: "Internal server error"
            },
            {
                status: 500
            }
        )
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const headersList = headers()
        const userId = headersList.get('userId') as string
        // console.log(userId, "<<<<")
        if (!userId) {
            return NextResponse.json(
                {
                    data: "You must login first"
                },
                {
                    status: 404

                })
        }

        const body = await request.json()
        const { _id } = body

        await Wishlist.delete(_id)

        return NextResponse.json(
            {
                data: "Wishlist Deleted Successfully"
            },
            {
                status: 200

            })
    } catch (error) {
        return NextResponse.json({
            error: "Internal Server Error"
        }, { status: 500 })
    }
}