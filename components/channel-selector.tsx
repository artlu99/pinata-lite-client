import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const knownChannels = [
  { id: "bcbhshow", name: "The BeavChris and BArt-Head Show" },
  { id: "christin", name: "christin's 🧹✨🏥🩺⚕️🌱 crew" },
  { id: "spirituality", name: "spirituality" },
  { id: "thomas", name: "thomas" },
];

function ChannelSelector({
  currentChannelId,
  onSelect,
}: {
  currentChannelId: string;
  onSelect: (value: string) => void;
}) {
  return (
    <>
      <div>Channel selector:</div>
      <Select
        onValueChange={(value) => {
          onSelect(value);
        }}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder={currentChannelId} />
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
    </>
  );
}

export default ChannelSelector;
