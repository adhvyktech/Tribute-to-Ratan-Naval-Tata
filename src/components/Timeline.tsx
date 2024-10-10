import React from 'react';
import TimelineNode from './TimelineNode';
import TimelineConnector from './TimelineConnector';
import { TimelineEvent } from '../types';

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const handleEventClick = (event: TimelineEvent) => {
    console.log('Event clicked:', event);
  };

  const calculatePosition = (index: number, totalNodes: number) => {
    const angle = index * (Math.PI * 2) / totalNodes * 5;
    const radius = 20 + (index * 180 / totalNodes);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x: x + window.innerWidth / 2, y: y + window.innerHeight / 2 };
  };

  return (
    <div className="relative w-full h-screen">
      {events.map((event, index) => {
        const position = calculatePosition(index, events.length);
        return (
          <TimelineNode
            key={event.id}
            event={event}
            index={index}
            totalNodes={events.length}
            onClick={handleEventClick}
          />
        );
      })}
      {events.map((event, index) => {
        if (index < events.length - 1) {
          const startPos = calculatePosition(index, events.length);
          const endPos = calculatePosition(index + 1, events.length);
          return (
            <TimelineConnector
              key={`connector-${index}`}
              startX={startPos.x}
              startY={startPos.y}
              endX={endPos.x}
              endY={endPos.y}
            />
          );
        }
        return null;
      })}
    </div>
  );
};

export default Timeline;
