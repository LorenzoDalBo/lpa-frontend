import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineItem = () => {
  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work`}
      contentStyle={{ background: "rgb(33, 150, 243)", color: "#0a0a0a" }}
      contentArrowStyle={{ borderRight: "7px solid", color: "#0c0a09" }}
      date="2011 - present"
      iconStyle={{ background: "rgb(33, 150, 243)", color: "#3b0764" }}
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
