import { useEffect, useState } from "react";
import { FeedObject } from "@/lib/feed-types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Embed } from "@/components/embed";

interface FeedProps {
  channelId: string;
}
export function Feed(props: FeedProps) {
  const [feed, setFeed] = useState<FeedObject>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/cronFeed", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ channel: props.channelId, pageSize: 10 }),
      });
      setFeed(await res.json());
    };
    fetchData();
  }, [props.channelId]);

  return (
    feed && (
      <>
        {feed.casts.map((cast) => (
          <div
            className="flex gap-4 sm:w-[500px] w-[350px] flex-row items-start"
            key={cast.hash}
          >
            <Avatar>
              <AvatarImage src={cast.author.pfp_url} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start w-full">
              <div className="flex gap-2">
                <p className="font-bold">{cast.author.display_name}</p>
                <p className="text-gray-600">@{cast.author.username}</p>
              </div>
              <p className="pb-2">{cast.text.replace(/https?:\/\/\S+/i, "")}</p>
              {cast.embeds && cast.embeds.length > 0 ? (
                <Embed embedObject={cast.embeds[0]} />
              ) : null}
            </div>
          </div>
        ))}
      </>
    )
  );
}
