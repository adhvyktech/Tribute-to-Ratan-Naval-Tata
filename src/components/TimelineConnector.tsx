import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface TimelineConnectorProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

const TimelineConnector: React.FC<TimelineConnectorProps> = ({ startX, startY, endX, endY }) => {
  const { theme } = useTheme();
  const lineColor = theme === 'dark' ? '#ffffff' : '#000000';

  const midX = (startX + endX) / 2;
  const midY = (startY + endY) / 2;
  const controlX = midX + (Math.random() - 0.5) * 50;
  const controlY = midY + (Math.random() - 0.5) * 50;

  const containerWidth = window.innerWidth;
  const containerHeight = window.innerHeight;

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
      <path
        d={`M ${startX + containerWidth / 2} ${startY + containerHeight / 2} Q ${controlX + containerWidth / 2} ${controlY + containerHeight / 2} ${endX + containerWidth / 2} ${endY + containerHeight / 2}`}
        fill="none"
        stroke={lineColor}
        strokeWidth="2"
        strokeDasharray="5,5"
      />
    </svg>
  );
};

export default TimelineConnector;
