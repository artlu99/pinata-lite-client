import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const js = (await request.json()) as {
    channel: string;
    pageSize: number;
  };
  const { channel, pageSize } = js;

  try {
    const result = await fetch(
      `https://api.pinata.cloud/v3/farcaster/casts?channel=${channel}&pageSize=${pageSize}`,
      {
        next: { revalidate: 60 },
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      }
    );
    if (!result.ok) {
      throw new Error("failed to fetch data");
    }
    const cronFeed = await result.json();
    return NextResponse.json(cronFeed, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
