import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "./ui/checkbox";
import { useBearStore } from "@/lib/bearStore";

const settingLabel = (label: string) => (
  <div className="grid gap-1.5 leading-none">
    <label
      htmlFor="image-only"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {label}
    </label>
  </div>
);

export default function FeedSettings() {
  const {
    hideEmbeds,
    toggleHideEmbeds,
    hideImageOnly,
    toggleHideImageOnly,
    hidePfp,
    toggleHidePfp,
    mainFeed,
    toggleMainFeed,
    powerBadgeOnly,
    togglePowerBadgeOnly,
  } = useBearStore();

  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="feed-settings-1">
        <AccordionTrigger>Signal-to-Noise settings</AccordionTrigger>
        <AccordionContent>
          <div className="items-top flex flex-col space-x-2">
            <div className="flex mt-2">
              <Checkbox
                id="embeds"
                checked={hideEmbeds}
                onClick={() => toggleHideEmbeds()}
              />
              {settingLabel("Hide embeds")}
              <Checkbox
                id="image-only"
                checked={hideImageOnly}
                onClick={() => toggleHideImageOnly()}
              />
              {settingLabel("Hide image-only casts")}
              <Checkbox
                id="pfp"
                checked={hidePfp}
                onClick={() => toggleHidePfp()}
              />
              {settingLabel("Hide PFPs")}
              <Checkbox
                id="power-badge"
                checked={powerBadgeOnly}
                onClick={() => togglePowerBadgeOnly()}
              />
              {settingLabel("Power Badge only")}
            </div>
            <div className="flex mt-2">
              <Checkbox
                id="main-feed"
                checked={mainFeed}
                onClick={() => toggleMainFeed()}
              />
              {settingLabel("Main feed")}
              {/*<Checkbox id="channel-follows" checked={false} onClick={() => {}} />
              {settingLabel("Channel followers only")}
              <Checkbox id="my-follows" checked={false} onClick={() => {}} />
              {settingLabel("My follows only")}
              <Checkbox id="my-followers" checked={false} onClick={() => {}} />
              {settingLabel("My followers only")} */}
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
