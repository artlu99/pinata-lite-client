import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function ToDo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>To Do</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>state management (dark mode, save settings)</li>
            <li>
              lots of feed settings: embeds on/off, power users on/off,
              following on/off, Airstack SCS slider
            </li>
            <li>algo selects channels per user</li>
            <li>cross-client pinned casts</li>
            <li>cross-client actions + frames</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ToDo;
