import { ChannelObject } from "@/lib/channel-types";

export const cacheInvalidateTime = {
  pinata: 120, // 2 mins
  warpcast: 600, // 10 mins
  warpcastPowerBadge: 86400, // 1 day
};

export const knownChannels: ChannelObject[] = [
  {
    id: "bcbhshow",
    name: "The BeavChris and BArt-Head Show",
    imageUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/90dc6268-931b-44d7-5672-ef5a28009200/original",
    description:
      "Listen to BeavChris (@christin) and BArt-Head (@artlu) talk about Farcaster from an irreverent perspective. Streaming live TUE 8AM PT/11AM ET/3PM UTC on Unlonely with recording deployed on Base via Zora to view and/or mint! Learn more on bcbhshow.com",
  },
  {
    id: "christin",
    name: "christin's 🧹✨🏥🩺⚕️🌱 crew",
    imageUrl: "https://i.imgur.com/ojddNWl.jpg",
    description:
      "- conscientiously caring through cottagecore sensibilities and entertaining products: e.g. cleaning, feeding, ecosomatic co-regulation - celebrating human foibles and ordinary magic - crew members welcomed (join channel, vibe with casts and replies)",
  },
  {
    id: "spirituality",
    name: "spirituality",
    imageUrl: "https://imgur.com/KDv5qCf",
    description:
      "Welcome to all to discuss faiths of all kinds (or none), however way you commune with the divine.",
  },
  {
    id: "adrienne",
    name: "adrienne",
    imageUrl:
      "https://imagedelivery.net/BXluQx4ige9GuW0Ia56BHw/7a241cb2-f9ec-4b22-ea6f-eb511f314800/rectcrop3",
    description:
      "/adrienne is a channel for wanderers finding wonder in daily life ✨ share whatever sparks joy or piques your curiosity",
  },
  {
    id: "gmfarcaster",
    name: "gmfarcaster",
    imageUrl: "",
    description: "",
  },
  {
    id: "bnfarcaster",
    name: "bnfarcaster",
    imageUrl: "",
    description: "",
  },
  {
    id: "costco",
    name: "costco",
    imageUrl: "",
    description: "",
  },
  {
    id: "normcore",
    name: "normcore",
    imageUrl: "",
    description: "",
  },
  {
    id: "justinahn",
    name: "justinahn",
    imageUrl: "",
    description: "",
  },
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
