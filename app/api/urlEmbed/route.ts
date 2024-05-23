import { preprocess } from "@/lib/preprocess-embeds";
import { NextResponse, NextRequest } from "next/server";
import { unfurl } from "unfurl.js";

export async function POST(request: NextRequest) {
  const js = (await request.json()) as {
    url: string;
  };
  const { url } = js;

  const cachedData = await preprocess(url); // speed up known embeds
  if (cachedData) return cachedData;

  let content;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error("failed to fetch data");
    }
    const contentType = res.headers.get("content-type");
    if (contentType?.includes("text/html")) {
      const res = await unfurl(url);
      content = "website";
      return NextResponse.json({ res, content }, { status: 200 });
    } else if (contentType?.includes("image")) {
      content = "image";
      return NextResponse.json({ url, content }, { status: 200 });
    } else {
      content = "null";
      return NextResponse.json({ url, content }, { status: 200 });
    }
  } catch (error) {
    console.log("problem with url:", url);
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
