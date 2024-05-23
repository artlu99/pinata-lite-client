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
            <li>
              lots of feed settings: power badge, me|channel following, Airstack
              SCS slider
            </li>
            <li>algo selects channels per user</li>
            <li>dark mode</li>
            <li>cross-client pinned casts</li>
            <li>cross-client actions + frames</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ToDo;
