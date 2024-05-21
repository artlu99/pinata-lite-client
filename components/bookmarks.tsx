import { Bookmark, BookmarksResponse } from "@/lib/external";
import { FarcasterEmbed } from "react-farcaster-embed";
import "react-farcaster-embed/dist/styles.css";

const NUM_BOOKMARKS_SHOWN = 3;
const BOOKMARKS_ORDER: "ASC" | "DESC" = "DESC";

const renderBookmarkListItem = (bm: Bookmark, idx: number) => {
  const tsString = new Date(bm.timestamp).toLocaleString();
  return (
    <li key={`bookmark:${idx}`}>
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

const DecentralizedBookmarks = ({ data }: { data: BookmarksResponse }) => {
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
