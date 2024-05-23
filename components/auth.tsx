import "@neynar/react/dist/style.css";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { SignIn } from "@/components/sign-in";

export default function Auth() {
  const [open, setOpen] = useState(false);

  return (
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
  );
}
