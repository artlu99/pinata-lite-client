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

export async function fetchFCAN(): Promise<FCANResponse> {
  const endpoint =
    "https://fcan.xyz/getadsfor?fid=391262&src=client-bcbhshow.artlu.xyz";
  const res = await fetch(`${endpoint}`, { next: { revalidate: 0 } });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}

export async function fetchDecentBookmarks(
  fid: number
): Promise<BookmarksResponse> {
  const endpoint = "https://decent-bookmarks.artlu.xyz/?fid=";
  const res = await fetch(endpoint + fid, { next: { revalidate: 0 } });
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
