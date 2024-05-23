import { useEffect, useState } from "react";
import { FeedObject } from "@/lib/feed-types";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Embed } from "@/components/embed";
import { Checkbox } from "./ui/checkbox";
import { Separator } from "./ui/separator";
import { useBearStore } from "@/lib/bearStore";

const settingLabel = (label: string) => (
  <div className="grid gap-1.5 leading-none">
    <label
      htmlFor="image-only"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
  </div>
);

export default function Feed() {
  const [feed, setFeed] = useState<FeedObject>();

  const {
    channelId,
    hideEmbeds,
    toggleHideEmbeds,
    hideImageOnly,
    toggleHideImageOnly,
    hidePfp,
    toggleHidePfp,
  } = useBearStore();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/cronFeed", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ channel: channelId, pageSize: 10 }),
      });
      setFeed(await res.json());
    };
    fetchData();
  }, [channelId]);

  return (
    feed && (
      <>
        <div>Feed Settings:</div>
        <div className="items-top flex space-x-2">
          <Checkbox
            id="embeds"
            checked={hideEmbeds}
            onClick={() => toggleHideEmbeds()}
          />
          {settingLabel("Hide embeds")}
          <Checkbox
            id="image-only"
            checked={hideImageOnly}
            onClick={() => toggleHideImageOnly()}
          />
          {settingLabel("Hide image-only casts")}
          <Checkbox
            id="pfp"
            checked={hidePfp}
            onClick={() => toggleHidePfp()}
          />
          {settingLabel("Hide PFPs")}
          <Checkbox id="power-badge" checked={false} onClick={() => {}} />
          {settingLabel("Power Badge only")}
        </div>
        <Separator />
        {feed.casts.map((cast) => {
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
