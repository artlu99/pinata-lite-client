import { ChannelObject } from "@/lib/channel-types";

export const cacheInvalidateTime = {
  warpcast: 600,
  pinata: 60,
};

export const knownChannels: ChannelObject[] = [
  {
    id: "bcbhshow",
    name: "The BeavChris and BArt-Head Show",
    imageUrl: "",
    description: "",
  },
  {
    id: "christin",
    name: "christin's 🧹✨🏥🩺⚕️🌱 crew",
    imageUrl: "",
    description: "",
  },
  { id: "spirituality", name: "spirituality", imageUrl: "", description: "" },
];

const siteMeta = {
  title: "The BeavChris and BArt-Head Show",
  description: "Farcaster lite client for /bcbhshow, powered by Pinata",
  domain: "client-bcbhshow.artlu.xyz",
  websiteUrl: "https://client-bcbhshow.artlu.xyz",
  channelId: "bcbhshow",
  defaultFid: 391262,
  logo: "/logo.svg",
  ogImage: "/og.png",
  favicon: "/favicon.png",
};

export default siteMeta;
