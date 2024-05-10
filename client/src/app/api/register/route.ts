import { NextRequest, NextResponse } from "next/server";
import { ZodError } from "zod";

export async function POST(request: NextRequest){
    try {
        const body = await request.json()
        // console.log(body, "<<<<<<<")
        const {email} = body
        // const newUser = await User.addUser(body)
        
        return NextResponse.json({
            data: email
        }, {status: 200})
        
    } catch (error) {
        console.log(error);

        if(error instanceof ZodError){
            const err = error.issues[0].path + ' ' + error.issues[0].message

            return NextResponse.json({
                error: err
            }, {status: 400})
        }

        return NextResponse.json({
            error: 'Internal Server Error'
        }, {status: 500})
        
    }
}