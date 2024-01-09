import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import Blog from "@/models/blogModel";

connect();

export const POST = async (req) => {
    try {
        const data = await req.json();
        const {title, content,userName, userId} = data;
        const blog = new Blog({title, content,userName, userId});
        const savedBlog = await blog.save();
        return NextResponse.json({message: "Blog created successfully", savedBlog,status: 200})
    } catch (error) {
        return NextResponse.json({message : error.message, status : 400});
    }
}

export const GET = async (req) => {
    try {
        const id = req.nextUrl.searchParams.get('id')
        const page = req.nextUrl.searchParams.get('page')
        const limit = req.nextUrl.searchParams.get('limit')
        const username = req.nextUrl.searchParams.get('userName')
        if(page && limit){
            const startIndex = (Number(page) - 1) * Number(limit);
            const blogs = await Blog.find().sort({_id: -1}).limit(Number(limit)).skip(startIndex);
            return NextResponse.json({message:"Blogs Retrieved Successfully", blogs});
        }
        if (username) {
            const blogs = await Blog.find({userName: username});
            return NextResponse.json({message:"Blogs Retrieved Successfully", blogs});
        }
        else if (id) {
            const blog = await Blog.findById(id);
            if (!blog) {
                return NextResponse.json({message: "Blog not found", status: 404});
            }
            return NextResponse.json({message:"Blog Retrieved Successfully", blog});
        } else {
            const blogs = await Blog.find();
            return NextResponse.json({message:"Blogs Retrieved Successfully", blogs});
        }
    } catch (error) {
        return NextResponse.json({message : error.message, status : 400});
    }
}