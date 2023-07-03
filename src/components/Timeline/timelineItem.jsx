import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineItem = () => {
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work`}
      contentStyle={{ background: "#60a5fa", opacity: "50", color: "#000000" }}
      contentArrowStyle={{ borderRight: "7px solid", color: "#000000" }}
      date="2011 - present"
      iconStyle={{ background: "#0070e0", opacity: "50", color: "#000000" }}
    >
      <h3 className="vertical-timeline-element-title">Creative Director</h3>
      <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
      <p>
        Creative Direction, User Experience, Visual Design, Project Management,
        Team Leading
      </p>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;
