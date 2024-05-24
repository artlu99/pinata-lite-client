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

export default function PageSettings() {
  const {
    showLogo,
    toggleShowLogo,
    loadAds,
    toggleLoadAds,
    loadBookmarks,
    toggleLoadBookmarks,
    showToDo,
    toggleShowToDo,
  } = useBearStore();

  return (
    <Accordion type="single" collapsible >
      <AccordionItem value="settings-1">
        <AccordionTrigger>Zen Settings</AccordionTrigger>
        <AccordionContent>
          <div className="items-top flex space-x-2 my-4">
            <Checkbox
              id="logo"
              checked={showLogo}
              onClick={() => toggleShowLogo()}
            />
            {settingLabel("Channel Logo")}
            <Checkbox
              id="bookmarks"
              checked={loadBookmarks}
              onClick={() => toggleLoadBookmarks()}
            />
            {settingLabel("Bookmarks")}
            <Checkbox
              id="ads"
              checked={loadAds}
              onClick={() => toggleLoadAds()}
            />
            {settingLabel("Ads")}
            <Checkbox
              id="todo"
              checked={showToDo}
              onClick={() => toggleShowToDo()}
            />
            {settingLabel("To Do List")}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
