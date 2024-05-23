"use client";

import { EmbedObject } from "@/lib/feed-types";
import { EmbedUrl } from "./embedUrl";
import { EmbedHash } from "./embedHash";

export const Embed = ({ embedObject }: { embedObject: EmbedObject }) =>
  embedObject.url ? (
    <EmbedUrl url={embedObject.url} />
  ) : (
    <EmbedHash hash={embedObject.cast_id?.hash} />
  );
