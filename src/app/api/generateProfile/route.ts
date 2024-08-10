import { NextRequest, NextResponse } from "next/server";
import forge from "../../../../forge/client";

export async function POST(request: NextRequest) {
  try {
    const { imageUrl } = await request.json();
    if (!imageUrl) {
      return NextResponse.json(
        { error: "Image URL is required" },
        { status: 400 }
      );
    }

    const profile = await forge.profile.queryImage({
      imageUrl,
      prompt: "Generate a professional profile for the given image",
    });

    return NextResponse.json({ profile });
  } catch (error) {
    console.error("Error generating profile:", error);
    return NextResponse.json(
      { error: "Failed to generate profile" },
      { status: 500 }
    );
  }
}
