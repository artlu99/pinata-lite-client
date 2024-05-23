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
            <li>state management (dark mode)</li>
            <li>setting to hide caster details</li>
            <li>setting to hide casts with embeds only</li>
            <li>algo selects channels</li>
            <li>cross-client pinned casts</li>
            <li>actions + frames</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ToDo;
