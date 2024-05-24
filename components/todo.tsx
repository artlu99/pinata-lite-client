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
            <li>channels metadata (owner+curator)</li>
            <li>feed filters: me|channel following</li>
            <li>sort buttons: # likes, engagement score</li>
            <li>calendars: how far back to go</li>
            <li>sliders: Airstack SCS, SCV, PageRank thresholds</li>
            <li>power badge historical views</li>
            <li>visible count of % of feed filtered out</li>
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
