const DECENTBOOKMARKS_TOKEN = process.env.DECENTBOOKMARKS_TOKEN ?? "";
const FCAN_TOKEN = process.env.FCAN_TOKEN ?? "";

export interface FCANResponse {
  id: string;
  head: string;
  text: string;
  rewardsMultiple?: number;
  displayUrl?: string;
  attribUrl?: string;
}
export interface Bookmark {
  timestamp: number;
  fid: string;
  username: string;
  hash: `0x${string}`;
}
export interface BookmarksResponse {
  unfiled?: Bookmark[];
}

export async function fetchFCAN(fid: number): Promise<FCANResponse> {
  const endpoint = `https://fcan.xyz/getadsfor?fid=${fid}&src=client-bcbhshow.artlu.xyz`;
  const res = await fetch(`${endpoint}`, {
    headers: { Authorization: `Bearer ${FCAN_TOKEN}` },
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export async function fetchDecentBookmarks(
  fid: number
): Promise<BookmarksResponse> {
  const endpoint = "https://decent-bookmarks.artlu.xyz/?fid=";
  const res = await fetch(endpoint + fid, {
    headers: {
      Authorization: `Basic ${DECENTBOOKMARKS_TOKEN}`,
    },
    next: { revalidate: 0 },
  });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
