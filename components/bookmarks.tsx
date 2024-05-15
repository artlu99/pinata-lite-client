"use client";

import axios from "axios";
import { useState, useEffect } from "react";

const fid = 6546;
const endpoint = "https://worker-misty-voice-905f.artlu.workers.dev/?fid=";

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
        {l?.map((bm, idx) => (
          <ul>
            <li>
              <a
                href={`https://supercast.xyz/c/${bm}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {idx}: {bm.substring(0, 6)}...{bm.slice(-5)}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default DecentralizedBookmarks;
