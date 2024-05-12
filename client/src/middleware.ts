import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'
import { jwtVerify } from 'jose'
 
export async function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/api/wishlist')) {
    const authorization = cookies().get("Authorization")
    // console.log("middleware masuk", authorization)
    if (!authorization) {
      return NextResponse.json(
        {
          message: "You must login first"
        },
        {
          status: 401
        }
      )
    }

    const token = authorization.value.split(" ")[1]

    if (!token) {
      return NextResponse.json(
        {
          message: "You must login first"
        },
        {
          status: 401
        }
      )
    }

    const secret = new TextEncoder().encode(
      'rahasia',
    )
    const jwt = token
    
    const { payload } = await jwtVerify<{
      id: string
      email: string,
      username: string
    }>(jwt, secret)

    // console.log(payload, "<<<< payload")

    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('userId', payload.id)
    // console.log(requestHeaders.set('userId', payload.id), "<<< req headers ini")
    // console.log(payload._id, "<<< payload aja ini")

    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    })
    // console.log(response, "<<< response")
    return response
    // console.log(payload, "<<<< payload")

    // const decode = verifyToken(token)
    // console.log(decode)

  }
 
  if (request.nextUrl.pathname.startsWith('/login')) {
    const authorization = cookies().get("Authorization")

    if(authorization) {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  if (request.nextUrl.pathname.startsWith('/wishlist')) {
    const authorization = cookies().get("Authorization")

    if(!authorization) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

}