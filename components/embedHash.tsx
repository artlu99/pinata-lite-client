"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AvatarImage, Avatar, AvatarFallback } from "./ui/avatar";
import { useBearStore } from "@/lib/bearStore";

export function EmbedHash({ hash }: { hash: string | undefined }) {
  const [cast, setCast] = useState<any>();

  const { hidePfp } = useBearStore();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/castByHash", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ hash }),
      });
      setCast(await res.json());
    };
    fetchData();
  }, [hash]);

  return (
    cast && (
      <Link
        href={`https://warpcast.com/${cast.author.username}/${cast.hash}`}
        target="_blank"
      >
        <div
          className="flex gap-2 text-sm sm:text-md sm:w-[450px] w-[290px] p-2 flex-row items-start border rounded-lg"
          key={cast.hash}
        >
          {!hidePfp ? (
            <Avatar className="h-6 w-6">
              <AvatarImage src={cast.author.pfp_url} />
              <AvatarFallback>FC</AvatarFallback>
            </Avatar>
          ) : (
            <Avatar className="h-6 w-6">
              <AvatarFallback>FC</AvatarFallback>
            </Avatar>
          )}
          <div className="flex flex-col items-start w-full">
            <div className="flex gap-2">
              <p
                className={hidePfp ? "font-bold text-transparent" : "font-bold"}
              >
                {cast.author.display_name}
              </p>
              <p className="text-gray-600">@{cast.author.username}</p>
            </div>
            <p className="pb-2">{cast.text.replace(/https?:\/\/\S+/i, "")}</p>
          </div>
        </div>
      </Link>
    )
  );
}
