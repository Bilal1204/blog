import { connect } from "@/dbConfig/dbConfig";
import { NextRequest,NextResponse } from "next/server";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";


connect();

export const POST = async (req) => {
    try {
        const reqBody = await req.json();
        const {name, username,email, password} = reqBody;
        
        const user = await User.findOne({email});
        if(user){
            return NextResponse.json({message : "User already exists", status: 400});
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword
        });
        const savedUser = await newUser.save();
        // console.log({savedUser})
        return NextResponse.json({message: "User created successfully", savedUser,status: 200})

    } catch (error) {
        return NextResponse.json({message : error.message, status : 400});
    }
}