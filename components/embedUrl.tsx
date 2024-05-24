"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";

export function EmbedUrl({ url }: { url: string }) {
  const [result, setResult] = useState<any>();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/urlEmbed", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ url }),
      });
      setResult(await res.json());
    };
    fetchData();
  }, []);

  if (!result) {
    return null;
  }
  if (result.content === "website") {
    const data = result.res;
    return (
      data && (
        <div className="flex flex-col rounded-lg border sm:w-[450px] w-[290px]">
          <Link href={url} target="_blank">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={
                  (data?.open_graph.images && data.open_graph.images[0].url) ||
                  "/photo.svg"
                }
                width={400}
                height={200}
                alt="Image"
                className="object-cover rounded-tr rounded-tl w-full max-h-[250px]"
              />
            </AspectRatio>
            <div className="flex flex-col px-2 pb-2 gap-1">
              <p className="font-bold truncate">{data?.title}</p>
              <p className="text-xs truncate">{data?.description}</p>
              <p className="text-xs truncate">{data?.open_graph.url || url}</p>
            </div>
          </Link>
        </div>
      )
    );
  } else if (result.content === "image") {
    return (
      <Image
        unoptimized
        src={url}
        className="rounded-lg w-full"
        alt="Image"
        width={600}
        height={200}
      />
    );
  }
}
