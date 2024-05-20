"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { FarcasterEmbed } from "react-farcaster-embed/dist/client";
import "react-farcaster-embed/dist/styles.css";

const fid = 6546;
const endpoint = "https://decent-bookmarks.artlu.xyz/?fid=";

const NUM_BOOKMARKS_SHOWN = 3;
const BOOKMARKS_ORDER: "ASC" | "DESC" = "DESC";

interface Bookmark {
  timestamp: number;
  fid: string;
  username: string;
  hash: `0x${string}`;
}
interface BookmarksResponse {
  unfiled?: Bookmark[];
}

const renderBookmarkListItem = (bm: Bookmark, idx: number) => {
  const tsString = new Date(bm.timestamp).toLocaleString();
  return (
    <li>
      <a
        href={`https://supercast.xyz/c/${bm.hash}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {idx + 1}: {bm.hash.substring(0, 4)}...{bm.hash.slice(-5)} added{" "}
        {tsString}
      </a>
      <FarcasterEmbed
        url={`https://warpcast.com/${bm.username}/${bm.hash.slice(0, 10)}`}
      />
    </li>
  );
};

const DecentralizedBookmarks = () => {
  const [data, setData] = useState<BookmarksResponse | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(endpoint + fid);
      setData(response.data);
    }
    void fetchData();
  }, []);

  const l: Bookmark[] = data?.unfiled ?? [];

  return (
    <>
      <div>Bookmarks (decentralized!):</div>
      <div>
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
      </div>
    </>
  );
};

export default DecentralizedBookmarks;
