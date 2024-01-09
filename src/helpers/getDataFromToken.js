import { NextRequest,NextResponse } from "next/server";
import jwt from 'jsonwebtoken'

export const getDataFromToken = async (req) => {
    try {
        const token = req.cookies.get('token')?.value || ''
        const data = jwt.verify(token, process.env.JWT_SECRET)
        return data;
    } catch (error) {
        throw new Error(error.message)
    }
}