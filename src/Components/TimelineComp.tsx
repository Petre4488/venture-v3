
"use client";

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import '../app/globals.css';

export default function TimelineComp() {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar} className="reactIcon" />
        <Timeline.Content>
          <Timeline.Time>Step 1</Timeline.Time>
          <Timeline.Title className="text-pinkish">Create a contract</Timeline.Title>
          <Timeline.Body className="text-white">
            Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
            E-commerce & Marketing pages.
          </Timeline.Body>
          <Button color="">
            Learn More
            <HiArrowNarrowRight className="ml-2 h-3 w-3" />
          </Button>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}  className="reactIcon"/>
        <Timeline.Content>
          <Timeline.Time>Step 2</Timeline.Time>
          <Timeline.Title className="text-pinkish">Marketing UI design in Figma</Timeline.Title>
          <Timeline.Body className="text-white">
            All of the pages and components are first designed in Figma and we keep a parity between the two versions
            even as we update the project.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
      <Timeline.Item>
        <Timeline.Point icon={HiCalendar}  className="reactIcon"/>
        <Timeline.Content>
          <Timeline.Time>Step 3</Timeline.Time>
          <Timeline.Title className="text-pinkish">E-Commerce UI code in Tailwind CSS</Timeline.Title>
          <Timeline.Body className="text-white">
            Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
          </Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}
