import { cacheInvalidateTime } from "@/config/site.config";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const js = (await request.json()) as {
    channelId: string;
  };
  const { channelId } = js;
  try {
    /*
    Get a single Warpcast channel.
    https://docs.farcaster.xyz/reference/warpcast/api
    */
    const result = await fetch(
      `https://api.warpcast.com/v1/channel?channelId=${channelId}`,
      {
        next: { revalidate: cacheInvalidateTime.warpcast },
        method: "GET",
      }
    );
    if (!result.ok) {
      throw new Error("failed to fetch data");
    }
    const channelsResponse = await result.json();
    return NextResponse.json(channelsResponse, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
