import { NextResponse } from "next/server"

export const POST = async req => {
    try{
        const data = await req.formData();
        const file = data.get("photo");
        const byteData = await file.arrayBuffer()
        const imageBuffer = Buffer.from(byteData)
        console.log("image", file);
        return new NextResponse("ok");
    }catch(error){
        return NextResponse.json({error: error.message}, {status: 500})
    }
}