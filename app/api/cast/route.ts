import { NextResponse, NextRequest } from "next/server";
import { NeynarAPIClient, isApiErrorResponse } from "@neynar/nodejs-sdk";

const client = new NeynarAPIClient(process.env.NEYNAR_API_KEY!);

export async function POST(request: NextRequest) {
  // a top-level cast in channel with 1 optional embeds, no replies
  // no mentions (YET)!!!

  const js = (await request.json()) as {
    signerId: string;
    channelId: string;
    castMessage: string;
    fileLink?: string;
  };

  const { signerId: signerUuid, channelId, castMessage: text, fileLink } = js;
  const idem = JSON.stringify(js);

  try {
    const { hash } = await client.publishCast(signerUuid, text, {
      embeds: fileLink ? [{ url: fileLink }] : undefined,
      channelId,
      idem,
    });
    return NextResponse.json(
      { message: `Cast with hash ${hash} published successfully` },
      { status: 200 }
    );
  } catch (err) {
    if (isApiErrorResponse(err)) {
      return NextResponse.json(
        { ...err.response.data },
        { status: err.response.status }
      );
    } else
      return NextResponse.json(
        { message: "Something went wrong" },
        { status: 500 }
      );
  }
}
