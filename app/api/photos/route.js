import connectMongoDB from "@/libs/mongodb";
import Photo from "@/models/Photo";
import { NextResponse } from "next/server";

export async function GET(){
    await connectMongoDB();
    const photos = await Photo.find();
    return NextResponse.json({photos})
}

export async function POST(request){
    const {photo, description } = await request.json();
    await connectMongoDB();
    await Photo.create({photo, description})
    return NextResponse.json({message:"Photo updated"}, {status: 201});

}
