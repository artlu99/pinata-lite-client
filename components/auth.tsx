"use client";

import { NeynarContextProvider, Theme } from "@neynar/react";
import "@neynar/react/dist/style.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SignIn } from "@/components/sign-in";

export function Auth() {
  const [open, setOpen] = useState(false);

  return (
    <NeynarContextProvider
      settings={{
        clientId: process.env.NEXT_PUBLIC_NEYNAR_CLIENT_ID || "",
        defaultTheme: Theme.Light,
        eventsCallbacks: {
          onAuthSuccess: () => {},
          onSignout() {},
        },
      }}
    >
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
    </NeynarContextProvider>
  );
}
