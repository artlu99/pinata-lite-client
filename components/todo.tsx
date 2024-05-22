import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

async function ToDo() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger>To Do</AccordionTrigger>
        <AccordionContent>
          <ul>
            <li>state management</li>
            <li>themes/dark mode</li>
            <li>load channels metadata</li>
            <li>SIWF (without Vercel/NextJS)</li>
            <li>setting to hide caster details</li>
            <li>algo selects channels</li>
            <li>cross-client pinned casts</li>
            <li>portable bookmarks</li>
            <li>actions</li>
            <li>frames</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

export default ToDo;
