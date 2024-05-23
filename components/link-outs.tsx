import { ExternalLink, GithubIcon } from "lucide-react";

export const GithubLink = () => (
  <div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/artlu99/pinata-lite-client"
    >
      <GithubIcon />
    </a>
  </div>
);

export const FarcasterChannelsLink = () => (
  <div>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://farcaster-channels.artlu.xyz"
    >
      <ExternalLink className="inline" />
      Live channels explorer
    </a>
  </div>
);
