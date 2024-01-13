import { NextResponse } from "next/server";

export const GET = () => {
    try {
        const response = NextResponse.json({
            message: "User Logged Out Successfully",
            success: true,
        });
        response.cookies.set("token", "", {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', 
            sameSite: 'lax', 
            expires: new Date(0),
        });
        return response;       
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
}