import { NextResponse, NextRequest } from "next/server";
import { fetchFCAN } from "@/lib/external";

export async function POST(request: NextRequest) {
  const js = (await request.json()) as {
    fid: number;
  };
  const { fid } = js;
  const advert = await fetchFCAN(fid);

  try {
    return NextResponse.json(advert, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
