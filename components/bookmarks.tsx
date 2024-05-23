"use client";

import { useEffect, useState } from "react";
import { Bookmark, BookmarksResponse } from "@/lib/external";
import { FarcasterEmbed } from "react-farcaster-embed/dist/client";
import "react-farcaster-embed/dist/styles.css";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import siteMeta from "@/config/site.config";
import { useNeynarContext } from "@neynar/react";

const NUM_BOOKMARKS_SHOWN = 3;
const BOOKMARKS_ORDER: "ASC" | "DESC" = "DESC";

const renderBookmarkListItem = (bm: Bookmark, idx: number) => {
  const tsString = new Date(bm.timestamp).toLocaleString();
  return (
    <li className="text-sm" key={`bookmark:${idx}`}>
      <a
        href={`https://supercast.xyz/c/${bm.hash}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {idx + 1}: {bm.hash.substring(0, 4)}...{bm.hash.slice(-5)}{" "}
        <i>added {tsString}</i>
      </a>
      <FarcasterEmbed
        url={`https://warpcast.com/${bm.username}/${bm.hash.slice(0, 10)}`}
      />
    </li>
  );
};

const DecentralizedBookmarks = ({ wideScreen }: { wideScreen: boolean }) => {
  const { user } = useNeynarContext();
  const fid = user ? user.fid : siteMeta.defaultFid;

  const [data, setData] = useState<BookmarksResponse>();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/decent-bookmarks", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({ fid }),
      });
      setData(await res.json());
    };
    fetchData();
  }, [fid]);

  const l: Bookmark[] = data?.unfiled ?? [];

  return (
    <Accordion
      type="single"
      collapsible
      defaultValue={wideScreen ? "item-1" : "item-closed"}
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>Bookmarks (decentralized!)</AccordionTrigger>
        <AccordionContent>
          {l.length === 0 ? (
            <div>No bookmarks found</div>
          ) : (
            <ul>
              {l
                .slice()
                .sort((a, b) =>
                  BOOKMARKS_ORDER === "DESC"
                    ? b.timestamp - a.timestamp
                    : a.timestamp - b.timestamp
                )
                .slice(0, NUM_BOOKMARKS_SHOWN)
                .map((bm, idx) => {
                  return renderBookmarkListItem(bm, idx);
                })}
            </ul>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default DecentralizedBookmarks;
