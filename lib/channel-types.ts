// Warpcast API

export interface ChannelObject {
  id: string;
  url?: string;
  name: string;
  description: string;
  imageUrl: string;
  leadFid?: number;
  hostFids?: number[];
  moderatorFid?: number;
  createdAt?: number;
  followerCount?: number;
  followedAt?: number;
}
export interface ChannelResponseObject {
  result: {
    channel: ChannelObject;
  };
}
export interface UserFollowingChannelsObject {
  result: {
    channels: ChannelObject[];
  };
  next?: { cursor: string };
}
