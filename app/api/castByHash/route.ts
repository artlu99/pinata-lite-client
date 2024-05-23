import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const js = (await request.json()) as {
    hash: string;
  };
  const { hash } = js;

  try {
    const castReq = await fetch(
      `https://api.pinata.cloud/v3/farcaster/casts/${hash}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      }
    );
    const castData = await castReq.json();
    return NextResponse.json(castData.cast, { status: 200 });
  } catch {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
