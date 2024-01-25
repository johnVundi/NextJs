import connectMongoDB from "@/libs/mongodb";
import Photo from "@/models/Photo";
import { NextResponse } from "next/server";

export async function PUT(request,{params}) {
    const { id } = params;
    const { newDescription: description} = await request.json();
    await connectMongoDB();
    await Photo.findByIdAndUpdate(id, {description});
    return NextResponse.json({message: "Photo description updated successfully"}, {status: 200})
}

export async function GET(request, {params}){
    const { id } = params;
    await connectMongoDB();
    const photo = await Photo.findOne({_id: id});
    return NextResponse.json({photo}, {status: 200});
}