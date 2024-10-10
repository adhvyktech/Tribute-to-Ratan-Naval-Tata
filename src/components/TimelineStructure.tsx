import React from 'react';
import { TimelineEvent } from '../types';
import { useTheme } from '../contexts/ThemeContext';

interface TimelineStructureProps {
  events: TimelineEvent[];
  onEventClick: (event: TimelineEvent) => void;
}

const TimelineStructure: React.FC<TimelineStructureProps> = ({ events, onEventClick }) => {
  const { theme } = useTheme();

  const sortedEvents = [...events].sort((a, b) => a.year - b.year);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Life Milestones</h2>
      <div className="relative">
        {sortedEvents.map((event, index) => (
          <div key={event.id} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
            <div className={`w-1/2 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'} relative z-10`}>
              <h3 className="text-xl font-semibold">{event.title}</h3>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{event.description}</p>
            </div>
            <div
              className={`w-12 h-12 rounded-full ${
                theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'
              } flex items-center justify-center text-white font-bold cursor-pointer transition-transform hover:scale-110 relative z-20`}
              onClick={() => onEventClick(event)}
            >
              {event.year}
            </div>
            <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'text-right pr-8'} relative z-10`}>
              <p className={`text-lg font-semibold ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                {event.year}
              </p>
            </div>
          </div>
        ))}
        <div
          className={`absolute top-0 bottom-0 left-1/2 w-1 ${
            theme === 'dark' ? 'bg-white' : 'bg-black'
          } transform -translate-x-1/2 z-0`}
        ></div>
      </div>
    </div>
  );
};

export default TimelineStructure;