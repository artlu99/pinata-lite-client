import Image from "next/image";
import { useEffect, useState } from "react";
import { useNeynarContext } from "@neynar/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBearStore } from "@/lib/bearStore";
import {
  ChannelObject,
  ChannelResponseObject,
  UserFollowingChannelsObject,
} from "@/lib/channel-types";
import { FarcasterChannelsLink } from "./link-outs";
import siteMeta, { knownChannels } from "@/config/site.config";
import { unique } from "radash";

export const ChannelLogo = () => {
  const { channelId } = useBearStore();
  const [imageUrl, setIimageUrl] = useState(siteMeta.logo);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/channel-by-id", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ channelId }),
      });
      const channelResultObject = (await res.json()) as ChannelResponseObject;
      console.log(channelResultObject.result.channel);
      setIimageUrl(
        channelResultObject?.result?.channel?.imageUrl || siteMeta.logo
      );
    };
    fetchData();
  }, [channelId]);

  return (
    <Image src={imageUrl} alt="logo" className="" width={450} height={450} />
  );
};

function ChannelSelector() {
  const { channelId, setChannelId } = useBearStore();

  const [followingChannels, setFollowingChannels] = useState<ChannelObject[]>();
  const { user } = useNeynarContext();
  const fid = user ? user.fid : siteMeta.defaultFid;

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/user-following-channels", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ fid }),
      });
      const userFollowingChannelsObject =
        (await res.json()) as UserFollowingChannelsObject;

      setFollowingChannels(userFollowingChannelsObject.result.channels);
    };
    fetchData();
  }, [fid]);

  const knownAndFollowingChannels = unique(
    knownChannels.concat(followingChannels ?? []),
    (c) => c.name
  );

  return (
    <>
      <div>Channel selector:</div>
      <Select
        onValueChange={(value) => {
          setChannelId(value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={channelId} />
        </SelectTrigger>
        <SelectContent>
          {knownAndFollowingChannels.map((selectItem) => {
            return (
              <SelectItem
                value={selectItem.id}
                key={"select-item-" + selectItem.id}
              >
                {selectItem.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <FarcasterChannelsLink />
    </>
  );
}

export default ChannelSelector;
