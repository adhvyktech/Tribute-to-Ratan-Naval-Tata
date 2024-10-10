import React from 'react';
import { TimelineEvent } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface TimelineNodeProps {
  event: TimelineEvent;
  index: number;
  totalNodes: number;
  onClick: (event: TimelineEvent) => void;
}

const TimelineNode: React.FC<TimelineNodeProps> = ({ event, index, totalNodes, onClick }) => {
  const { theme } = useTheme();
  
  // Calculate position using a spiral pattern
  const angle = index * (Math.PI * 2) / totalNodes * 5; // Increase multiplier for more rotations
  const radius = 100 + (index * 180 / totalNodes); // Adjust for desired spread
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      className={`absolute w-20 h-20 rounded-full ${
        theme === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
      } shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-110 transition-transform duration-300 animate-float`}
      style={{
        left: `calc(50% + ${x}px - 32px)`,
        top: `calc(50% + ${y}px - 32px)`,
        animationDelay: `${index * 0.1}s`,
      }}
      onClick={() => onClick(event)}
    >
      <div className="text-center">
        <div className="font-bold text-xs">{event.year}</div>
        <div className="text-xxs">{event.title}</div>
      </div>
    </div>
  );
};

export default TimelineNode;