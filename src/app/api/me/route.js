import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import Blog from "@/models/blogModel";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";


connect();

// export const GET = async (req) => {
//     try {
//         const data = await getDataFromToken(req);
//         const user = await User.findById(data.id);
//         return NextResponse.json({message: 'success', user});
//     } catch (error) {
//         return NextResponse.json({message: error.message});
//     }
// }

export const PUT = async (req) => {
    try {
        const data = await req.json();
        const newPassword = data.newPassword;
        const user = {
            username: data.username,
            name: data.name,
            email: data.email
        }
        // console.log({user});
        if(newPassword === ''){
        const updatedUser = await User.findOneAndUpdate({username: user.username}, user, {new: true});
        return NextResponse.json({message: 'success', updatedUser});
        }
        else{
            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(newPassword, salt);
            user.password = hashedPassword;
            const updatedUser = await User.findOneAndUpdate({username: user.username}, user, {new: true}).select('-password');
            return NextResponse.json({message: 'success', updatedUser});
        }
    } catch (error) {
        return NextResponse.json({message: error.message});
    }
}