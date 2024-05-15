"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { FarcasterEmbed } from "react-farcaster-embed/dist/client";
import "react-farcaster-embed/dist/styles.css";

const fid = 6546;
const endpoint = "https://worker-misty-voice-905f.artlu.workers.dev/?fid=";
const usernames = ["links", "alexpaden", "artlu"];
interface BookmarksResponse {
  unfiled: string[];
}

const DecentralizedBookmarks = () => {
  const [data, setData] = useState<BookmarksResponse | undefined>(undefined);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(endpoint + fid);
      setData(response.data);
    }
    void fetchData();
  }, []);

  const l = data?.unfiled;
  return (
    <>
      <div>Bookmarks (decentralized!):</div>
      <div>
        {l?.slice(0, 3).map((bm, idx) => (
          <ul>
            <li>
              <a
                href={`https://supercast.xyz/c/${bm}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {idx + 1}: {bm.substring(0, 6)}...{bm.slice(-5)}
              </a>
              <FarcasterEmbed
                url={`https://warpcast.com/${usernames[idx]}/${bm}`}
              />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default DecentralizedBookmarks;
