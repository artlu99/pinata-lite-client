export interface FeedObject {
  casts: CastObject[];
}

export interface CastObject {
  hash: `0x{string}`;
  author: {
    fid: number;
    display_name?: string;
    username?: string;
    pfp_url?: string;
  };
  text: string;
  mentioned_profiles: UserProfile[];
  parent_author: { fid: number | null };
  parent_hash: string | null;
  parent_url: string;
  embeds?: EmbedObject[];
  reactions: {
    likes: UserDetails[];
    likes_count: number;
    recasts: UserDetails[];
    recasts_count: number;
  };
  replies: { count: number };
}

export interface EmbedObject {
  url?: string;
  cast_id?: {
    fid: number;
    hash: string;
  };
}

interface UserDetails {
  fid: number;
  fname: string;
}

interface UserProfile {
  fid: number;
  username?: string;
  display_name?: string;
  follower_count: number;
  following_count: number;
  pfp_url: string | null;
  power_badge: boolean;
}
