import { cacheInvalidateTime } from "@/config/site.config";
import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const js = (await request.json()) as {
    fid: number;
  };
  const { fid } = js;
  try {
    /*
    Get User Following Channels
      List all Warpcast channels a user is following. Ordered by the time when
      the channel was followed, descending. Paginated.
    https://docs.farcaster.xyz/reference/warpcast/api
    */
    const result = await fetch(
      `https://api.warpcast.com/v1/user-following-channels?fid=${fid.toString()}`,
      {
        next: { revalidate: cacheInvalidateTime.warpcast },
        method: "GET",
      }
    );
    if (!result.ok) {
      throw new Error("failed to fetch data");
    }
    const channelsFollowed = await result.json();
    return NextResponse.json(channelsFollowed, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
