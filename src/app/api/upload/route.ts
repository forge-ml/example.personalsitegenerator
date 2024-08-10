import { NextResponse } from "next/server";
import {
  S3Client,
  HeadObjectCommand,
  ListObjectsV2Command,
} from "@aws-sdk/client-s3";
import { Upload } from "@aws-sdk/lib-storage";
import { loadEnvConfig } from "@next/env";

loadEnvConfig(process.cwd());

if (
  !process.env.AWS_ACCESS_KEY_ID ||
  !process.env.AWS_SECRET_ACCESS_KEY ||
  !process.env.AWS_S3_BUCKET ||
  !process.env.AWS_REGION
) {
  throw new Error("AWS credentials not found");
}

// Configure AWS S3 client
const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export async function POST(request: Request) {
  const formData = await request.formData();
  const file = formData.get("file") as File;
  const key = formData.get("key") as string;

  if (!file || !key) {
    return NextResponse.json({ error: "File or key missing" }, { status: 400 });
  }

  try {
    const url = await uploadToS3(file, key);
    return NextResponse.json({ url });
  } catch (error) {
    console.error("Error uploading to S3:", error);
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}

async function uploadToS3(file: File, key: string) {
  console.log("uploading to s3");
  const upload = new Upload({
    client: s3Client,
    params: {
      Bucket: process.env.AWS_S3_BUCKET,
      Key: `profiles/${key}`, // Add the folder name here
      Body: Buffer.from(await file.arrayBuffer()),
      ContentType: file.type,
      ACL: "public-read", // Make the uploaded file public
    },
  });

  try {
    const result = await upload.done();
    return result.Location;
  } catch (error) {
    console.error("Error uploading to S3:", error);
    throw error;
  }
}
