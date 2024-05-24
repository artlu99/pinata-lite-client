"use client";

import { NeynarContextProvider, Theme } from "@neynar/react";
import { useBearStore } from "@/lib/bearStore";
import { GithubLink } from "@/components/link-outs";
import { Separator } from "@/components/ui/separator";
import "./globals.css";
import Advert from "@/components/advert";
import Auth from "@/components/auth";
import ChannelSelector, { ChannelLogo } from "@/components/channel-selector";
import DecentralizedBookmarks from "@/components/bookmarks";
import Feed from "@/components/feed";
import PageSettings from "@/components/pageSettings";
import ToDo from "@/components/todo";

export default function Home() {
  const { showSettings, showLogo, loadAds, loadBookmarks, showToDo } =
    useBearStore();

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
          {showLogo && <ChannelLogo />}
          {loadBookmarks && <DecentralizedBookmarks wideScreen={true} />}
        </div>
        <div className="block lg:hidden">
          {loadAds && <Advert />}
          {showLogo && <ChannelLogo />}
          <hr />
          {loadBookmarks && <DecentralizedBookmarks wideScreen={false} />}
        </div>
        <div className="block">
          <ChannelSelector />
          <Auth />
          <hr />
          <Separator className="sm:w-[500px] w-sm" />
          {showSettings && <PageSettings />}
          <Feed />
        </div>
        <div className="hidden lg:block">
          {loadAds && <Advert />}
          {showToDo && (
            <>
              <hr />
              <ToDo />
            </>
          )}
        </div>
        <GithubLink />
      </main>
    </NeynarContextProvider>
  );
}
