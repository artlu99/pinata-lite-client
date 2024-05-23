import { Feed } from "@/components/feed";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import siteMeta from "@/config/site.config";
import Advert from "@/components/advert";
import ChannelSelector from "@/components/channel-selector";
import ToDo from "@/components/todo";
import DecentralizedBookmarks from "@/components/bookmarks";
import { Auth } from "@/components/auth";

export default async function Home() {
  const fid = siteMeta.defaultFid;

  return (
    <main className="grid min-h-screen gap-12 mt-12 px-4 sm:grid-cols-1 lg:grid-cols-3">
      <div className="hidden lg:block">
        <DecentralizedBookmarks fid={siteMeta.defaultFid} wideScreen={true} />
      </div>
      <div className="block lg:hidden">
        <Advert fid={siteMeta.defaultFid} />
        <hr />
        <DecentralizedBookmarks fid={siteMeta.defaultFid} wideScreen={false} />
      </div>
      <div className="block">
        <Image
          src={siteMeta.ogImage}
          alt="logo"
          className=""
          width={350}
          height={350}
        />
        <Auth />
        <Separator className="sm:w-[500px] w-sm" />
        <Feed channelId={siteMeta.channelId} />
      </div>
      <div className="hidden lg:block">
        <Advert fid={siteMeta.defaultFid} />
        <hr />
        <ChannelSelector />
        <hr />
        <ToDo />
      </div>
    </main>
  );
}
