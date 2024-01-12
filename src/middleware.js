import { NextResponse, NextRequest } from 'next/server'
import { getDataFromToken } from './helpers/getDataFromToken'
import jwt from 'jsonwebtoken'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    const path = request.nextUrl.pathname

    const isPublicPath = path === '/login' || path === '/signup' 
    const token = request.cookies.get('token')?.value || ''

    // if(token){
    //     // const data = await getDataFromToken(token)
    //     const data = await jwt.verify(token, process.env.JWT_SECRET)
    //     console.log({data})
    //     const username = data.username
    //     if(path[1] === 'users' && path[3] === 'edit'){
    //         if(username !== path[2]){
    //             return NextResponse.redirect(new URL(`/users/${path[2]}`), request.nextUrl)
    //         }
    //     }
    // }

    if(isPublicPath && token) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    
    if(!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
    }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/login','/signup','/profile'],
}