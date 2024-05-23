"use client";

import Image from "next/image";
import { useState } from "react";
import { NeynarContextProvider, Theme } from "@neynar/react";
import { Separator } from "@/components/ui/separator";
import "./globals.css";
import siteMeta from "@/config/site.config";
import Advert from "@/components/advert";
import Auth from "@/components/auth";
import ChannelSelector from "@/components/channel-selector";
import DecentralizedBookmarks from "@/components/bookmarks";
import Feed from "@/components/feed";
import ToDo from "@/components/todo";
import GithubLink from "@/components/github";

export default function Home() {
  const [channelId, setChannelId] = useState(siteMeta.channelId);

  return (
    <NeynarContextProvider
      settings={{
        clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || "",
        defaultTheme: Theme.Light,
        eventsCallbacks: {
          onAuthSuccess: () => {},
          onSignout() {},
        },
      }}
    >
      <main className="grid min-h-screen gap-12 mt-12 px-4 sm:grid-cols-1 lg:grid-cols-3">
        <div className="hidden lg:block">
          <DecentralizedBookmarks wideScreen={true} />
        </div>
        <div className="block lg:hidden">
          <Advert />
          <hr />
          <DecentralizedBookmarks wideScreen={false} />
        </div>
        <div className="block">
          <Image
            src={siteMeta.ogImage}
            alt="logo"
            className=""
            width={350}
            height={350}
          />
          <ChannelSelector
            currentChannelId={channelId}
            onSelect={setChannelId}
          />
          <Auth channelId={channelId} />
          <hr />
          <Separator className="sm:w-[500px] w-sm" />
          <Feed channelId={channelId} />
        </div>
        <div className="hidden lg:block">
          <Advert />
          <hr />
          <ToDo />
        </div>
        <GithubLink />
      </main>
    </NeynarContextProvider>
  );
}
