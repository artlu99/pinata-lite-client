"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { FarcasterEmbed } from "react-farcaster-embed/dist/client";
import "react-farcaster-embed/dist/styles.css";

const fid = 6546;
const endpoint = "https://worker-misty-voice-905f.artlu.workers.dev/?fid=";
interface BookmarksResponse {
  unfiled: string[]
}
interface Bookmark {
  fid: string, username: string, hash: `0x${string}`
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

  const l: Bookmark[] = data ? data.unfiled.map((bm) => JSON.parse(bm)) : [];

  return (
    <>
      <div>Bookmarks (decentralized!):</div>
      <div>
        {l.map((bm, idx) => 
          <ul>
            <li>
              <a
                href={`https://supercast.xyz/c/${bm.hash}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {idx + 1}: {bm.hash.substring(0, 6)}...{bm.hash.slice(-5)}
              </a>
              <FarcasterEmbed
                url={`https://warpcast.com/${bm.username}/${bm.hash.slice(0,10)}`}
              />
            </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default DecentralizedBookmarks;
