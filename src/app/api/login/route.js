import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/userModel";

connect();

export const POST = async (req) => {
    try {
        const reqBody = await req.json();
        const {username, password} = reqBody;

        const user = await User.findOne({username});
        if(!user){
            return NextResponse.json({message : "User does not exist", status: 404});
        }
        const isPasswordCorrect = await bcryptjs.compare(password, user.password);
        if(!isPasswordCorrect){
            return NextResponse.json({message : "Invalid credentials", status: 400});
        }
        const tokenData = {
            id: user._id,
            username: user.username,
            name: user.name,
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, {expiresIn: "1d"});
        const response = NextResponse.json({message: "User logged in successfully", token, status: 200})
        response.cookies.set('token', token, {httpOnly: true});
        return response;
    } catch (error) {
        return NextResponse.json({message : error.message, status : 400});
    }
}