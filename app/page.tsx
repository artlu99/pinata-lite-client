import { Feed } from "@/components/feed";
import "./globals.css";
import { Separator } from "@/components/ui/separator";
import "@farcaster/auth-kit/styles.css";
import Image from "next/image";
import siteMeta from "@/config/site.config";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-12 mt-12">
      <Image src={siteMeta.ogImage} alt="logo" className="" width={350} height={350} />
      <Separator className="sm:w-[500px] w-sm" />
      <Feed />
    </main>
  );
}
