import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useBearStore } from "@/lib/bearStore";
import { FarcasterChannelsLink } from "./link-outs";

const knownChannels = [
  { id: "bcbhshow", name: "The BeavChris and BArt-Head Show" },
  { id: "christin", name: "christin's 🧹✨🏥🩺⚕️🌱 crew" },
  { id: "spirituality", name: "spirituality" },
  { id: "thomas", name: "thomas" },
];

function ChannelSelector() {
  const { channelId, setChannelId } = useBearStore();

  return (
    <>
      <div>Channel selector:</div>
      <Select
        onValueChange={(value) => {
          setChannelId(value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={channelId} />
        </SelectTrigger>
        <SelectContent>
          {knownChannels.map((selectItem) => {
            return (
              <SelectItem
                value={selectItem.id}
                key={"select-item-" + selectItem.id}
              >
                {selectItem.name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
      <FarcasterChannelsLink />
    </>
  );
}

export default ChannelSelector;
