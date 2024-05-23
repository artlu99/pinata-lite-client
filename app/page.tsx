"use client";

import Image from "next/image";
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

const Logo = () => (
  <Image src={siteMeta.logo} alt="logo" className="" width={450} height={450} />
);

export default function Home() {
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
          <Logo />
          <DecentralizedBookmarks wideScreen={true} />
        </div>
        <div className="block lg:hidden">
          <Advert />
          <Logo />
          <hr />
          <DecentralizedBookmarks wideScreen={false} />
        </div>
        <div className="block">
          <ChannelSelector />
          <Auth />
          <hr />
          <Separator className="sm:w-[500px] w-sm" />
          <Feed />
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
