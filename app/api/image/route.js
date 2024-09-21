import { NextResponse } from "next/server"
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

export const POST = async req => {
    try {
        const s3 = new S3Client();
        const data = await req.formData();
        const file = data.get("photo");
        const byteData = await file.arrayBuffer()
        const Bucket = "medicom.hexerve";
        const Body = Buffer.from(byteData)
        const [ file_name, extension ] = file.name.split(".");
        const Key = `${file_name}_${(new Date()).getTime()}.${extension}`;
        await s3.send(new PutObjectCommand({ Bucket, Key, Body }))
        const imageUrl = `https://${Bucket}.s3.${process.env.AWS_REGION}.amazonaws.com/${Key}`;
        return NextResponse.json({ imageUrl }, { status: 201 })
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: error.message }, { status: 500 })
    } 
}