export interface FeedObject {
  casts: CastObject[];
}

interface CastObject {
  hash: `0x{string}`;
  author: { display_name?: string; username?: string; pfp_url?: string };
  text: string;
  embeds?: EmbedObject[];
}

export interface EmbedObject {
  url?: string;
  cast_id?: {
    fid: number;
    hash: string;
  };
}
