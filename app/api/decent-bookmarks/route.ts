import { NextResponse, NextRequest } from "next/server";
import { fetchDecentBookmarks } from "@/lib/external";

export async function POST(request: NextRequest) {
  const js = (await request.json()) as {
    fid: number;
  };
  const { fid } = js;
  const bookmarks = await fetchDecentBookmarks(fid);

  try {
    return NextResponse.json(bookmarks, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
