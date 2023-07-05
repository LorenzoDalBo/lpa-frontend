import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const TimelineItem = ({ timesItem }) => {
  const { titulo, periodo, descricao, mes } = timesItem || {};

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: "rgb(255,255,255)", color: "#000000" }}
      date={mes}
      iconStyle={{ background: "rgb(0,0,0)", color: "#000000" }}
    >
      <h3 className="vertical-timeline-element-title font-black">{titulo}</h3>
      <h4 className="vertical-timeline-element-subtitle">Periodo: {periodo}</h4>
      <p>{descricao}</p>
    </VerticalTimelineElement>
  );
};

export default TimelineItem;