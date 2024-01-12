import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

// users/bilal/edit

export const GET = async (req) => {
    try {
        const uname = req.nextUrl.searchParams.get('uname');
        const user = await User.findOne({username: uname}).select("-password");
        const blogs = await Blog.find({userName: uname});
        if(!user){
            return NextResponse.json({message: "User not found", status: 404});
        }
        return NextResponse.json({message: "User found", user, blogs});
    } catch (error) {
        return NextResponse.json({message: error.message, status: 400});
    }
}