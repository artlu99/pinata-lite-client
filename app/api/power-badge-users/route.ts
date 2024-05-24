import { cacheInvalidateTime } from "@/config/site.config";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    /*
    Get All Power Badge Users
    This endpoint provides the list of all users who currently hold a power badge.
    The endpoint has no parameters and does not paginate.
    https://docs.farcaster.xyz/reference/warpcast/api
    */
    const result = await fetch(
      "https://api.warpcast.com/v2/power-badge-users",
      {
        next: { revalidate: cacheInvalidateTime.warpcastPowerBadge },
        method: "GET",
      }
    );
    if (!result.ok) {
      throw new Error("failed to fetch data");
    }
    const apiResponse = await result.json();
    return NextResponse.json(apiResponse, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
