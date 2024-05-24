import { useEffect, useState } from "react";
import { CastObject, FeedObject } from "@/lib/feed-types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Embed } from "@/components/embed";
import { Separator } from "./ui/separator";
import { useBearStore } from "@/lib/bearStore";
import FeedSettings from "./feedSettings";

const isAllowedInMainFeed = (cast: CastObject, channelModerators: number[]) => {
  return (
    channelModerators.filter((m) => m === cast.author.fid).length > 0 ||
    cast.reactions.likes.filter(
      (l) => channelModerators.filter((m) => m === l.fid).length > 0
    ).length > 0
  );
};

const hasPowerBadge = (cast: CastObject, powerBadgeFids: number[]) =>
  powerBadgeFids.find((f) => f === cast.author.fid);

export default function Feed() {
  const [feed, setFeed] = useState<FeedObject>();
  const [powerBadgeFids, setPowerBadgeFids] = useState<number[]>();

  const {
    activeChannel,
    showSettings,
    hideEmbeds,
    hideImageOnly,
    hidePfp,
    hidePowerBadge,
    mainFeed,
    powerBadgeOnly,
    channelModerators,
  } = useBearStore();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/cronFeed", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ channel: activeChannel.id, pageSize: 10 }),
      });
      setFeed(await res.json());
    };
    fetchData();
  }, [activeChannel]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/power-badge-users", { method: "GET" });
      const js = await res.json();
      setPowerBadgeFids(js.result.fids);
    };
    fetchData();
  }, []);

  return (
    feed && (
      <>
        {showSettings && <FeedSettings />}
        <Separator />
        {feed.casts
          .filter(
            (c) =>
              !powerBadgeOnly ||
              (powerBadgeFids ? hasPowerBadge(c, powerBadgeFids) : true)
          )
          .filter((c) => !mainFeed || isAllowedInMainFeed(c, channelModerators))
          .map((cast) => {
            if (hideImageOnly && cast.text.length === 0) {
              return;
            }
            return (
              <div
                className="flex gap-4 sm:w-[500px] w-[350px] flex-row items-start"
                key={cast.hash}
              >
                {!hidePfp ? (
                  <Avatar>
                    <AvatarImage src={cast.author.pfp_url} />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar>
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                )}
                <div className="flex flex-col items-start w-full">
                  <div className="flex gap-2">
                    <p
                      className={
                        hidePfp ? "font-bold text-transparent" : "font-bold"
                      }
                    >
                      {cast.author.display_name}
                    </p>
                    {!hidePowerBadge && (
                      <p className="font-bold">
                        {hasPowerBadge(cast, powerBadgeFids ?? []) ? "⚡" : ""}
                      </p>
                    )}
                    <p className="text-gray-600">@{cast.author.username}</p>
                  </div>
                  <p className="pb-2">
                    {cast.text.replace(/https?:\/\/\S+/i, "")}
                  </p>
                  {!hideEmbeds && cast.embeds && cast.embeds.length > 0 ? (
                    <Embed embedObject={cast.embeds[0]} />
                  ) : null}
                </div>
              </div>
            );
          })}
      </>
    )
  );
}
