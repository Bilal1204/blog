import { NextRequest, NextResponse } from "next/server";

export const GET = (req) => {
    try {
        const response = NextResponse.json({
            message: "User Logged Out Successfully",
            success: true,
        });
        response.cookies.set("token", "", {
            httpOnly: true,
            expires: new Date(0),
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            domain: process.env.NODE_ENV === "production" ? process.env.DOMAIN : "localhost",
        });
        return response;       
    } catch (error) {
        return new NextResponse(error, { status: 500 });
    }
}