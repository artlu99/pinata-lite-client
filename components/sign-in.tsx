"use client";

import { CastForm } from "@/components/cast-form";
import { NeynarAuthButton, useNeynarContext } from "@neynar/react";

export function SignIn() {
  const { user } = useNeynarContext();
  const signerId = user ? user.signer_uuid : undefined;

  return (
    <div className="mx-auto">
      {signerId && <CastForm signerId={signerId} />}

      <NeynarAuthButton />
    </div>
  );
}
