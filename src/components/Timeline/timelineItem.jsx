import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineItem = ({ timesItem }) => {
  const { titulo, periodo, descricao, mes } = timesItem || {};

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--work`}
      contentStyle={{ background: "#60a5fa", opacity: "50", color: "#000000" }}
      contentArrowStyle={{ borderRight: "7px solid", color: "#000000" }}
      date={mes}
      iconStyle={{ background: "#0070e0", opacity: "50", color: "#000000" }}
    >
      <h3 className="vertical-timeline-element-title font-black">{titulo}</h3>
      <h4 className="vertical-timeline-element-subtitle">Periodo: {periodo}</h4>
      <p>{descricao}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;