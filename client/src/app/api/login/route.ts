import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";
import { comparePasword } from "../../../../db/helpers/bcrypt";
import { UserLogin } from "../../../../db/models/user";
import { signToken } from "../../../../db/helpers/jwt";
import User from "../../../../db/models/user";

export async function POST(request :NextRequest) {
    try {
        const body = await request.json()
        // console.log(body);
        
        const parseResult = UserLogin.safeParse(body)

        if(!parseResult.success){
            throw parseResult.error
        }
        const user = await User.findByEmail(body.email)
        // console.log(user, "<< user")

        if(!user){
            throw Error("Invalid email or password")
        }

        if(!comparePasword(body.password, user.password)){
            throw Error("Invalid email or password")
        }

        const accessToken = signToken({
            id: user.id,
            email: user.email,
            username: user.username
        })

        return NextResponse.json(
            {
                data: accessToken
            },
            {
                status: 200
            }
        )

    } catch (error: any) {
        console.log(error);

        if(error instanceof ZodError){
            const err = error.issues[0].path + ' ' + error.issues[0].message

            return NextResponse.json({
                error: err
            }, {status: 400})
        }

        if(error instanceof Error){
            return NextResponse.json({
                error: error.message
            }, {status: 400})
        }

        return NextResponse.json(
            {
                error: "Internal Server Error"
            },
            {
                status: 500
            }
        )
    }
}