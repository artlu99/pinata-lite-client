"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import "@farcaster/auth-kit/styles.css";
import { AuthKitProvider } from "@farcaster/auth-kit";
import { SignIn } from "@/components/sign-in";
import siteMeta from "@/config/site.config";

const config = {
  rpcUrl: "https://mainnet.optimism.io",
  domain: siteMeta.domain,
  siweUri: `${siteMeta.websiteUrl}/api/retrieveSigner`,
};

export function Auth() {
  const [open, setOpen] = useState(false);

  return (
    <AuthKitProvider config={config}>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="sm:w-[500px] w-[300px] mt-4" variant="outline">
            +
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px] max-w-[375px]">
          <SignIn />
        </DialogContent>
      </Dialog>
    </AuthKitProvider>
  );
}
