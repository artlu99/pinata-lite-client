import { Feed } from "@/components/feed";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import "@farcaster/auth-kit/styles.css";
import Image from "next/image";
import siteMeta from "@/config/site.config";
import Advert from "@/components/advert";
import ChannelSelector from "@/components/channel-selector";
import ToDo from "@/components/todo";
import DecentralizedBookmarks from "@/components/bookmarks";
import { fetchDecentBookmarks, fetchFCAN } from "@/lib/external";

export const runtime = 'edge';

export default async function Home() {
  const fid = 6546;
  const advert = await fetchFCAN();
  const bookmarks = await fetchDecentBookmarks(fid);

  return (
    <main className="grid min-h-screen gap-12 mt-12 px-4 sm:grid-cols-1 lg:grid-cols-3">
      <div className="hidden lg:block">
        <ChannelSelector />
        <hr />
        <DecentralizedBookmarks data={bookmarks} />
      </div>
      <div className="block lg:hidden">
        <Advert data={advert} />
      </div>
      <div className="block">
        <Image
          src={siteMeta.ogImage}
          alt="logo"
          className=""
          width={350}
          height={350}
        />
        <Separator className="sm:w-[500px] w-sm" />
        <Feed channelId={siteMeta.channelId} />
      </div>
      <div className="hidden lg:block">
        <Advert data={advert} />
        <hr />
        <ToDo />
      </div>
    </main>
  );
}
