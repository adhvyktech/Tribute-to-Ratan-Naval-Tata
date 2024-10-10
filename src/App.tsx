import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import TimelineNode from './components/TimelineNode';
import TimelineStructure from './components/TimelineStructure';
import TimelineConnector from './components/TimelineConnector'; // New import
import SearchBar from './components/SearchBar';
import ProfilePhoto from './components/ProfilePhoto';
import Header from './components/Header';
import Footer from './components/Footer';
import { TimelineEvent } from './types';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

const combinedEvents: TimelineEvent[] = [
  { id: 1, year: 1937, title: 'Born', description: 'Ratan Naval Tata was born on 28 December in Bombay, British India' },
  { id: 2, year: 1955, title: 'Graduated High School', description: 'Graduated from Riverdale Country School in New York City' },
  { id: 3, year: 1959, title: 'Cornell University', description: 'Graduated with a bachelor\'s degree in architecture from Cornell University' },
  { id: 4, year: 1961, title: 'Joined Tata Group', description: 'Started working on the shop floor of Tata Steel' },
  { id: 5, year: 1971, title: 'NELCO', description: 'Appointed Director-in-Charge of National Radio & Electronics (NELCO)' },
  { id: 6, year: 1981, title: 'Tata Industries', description: 'Appointed Chairman of Tata Industries' },
  { id: 7, year: 1984, title: 'Titan Industries', description: 'Established Titan Industries, a joint venture with Tamil Nadu Industrial Development Corporation' },
  { id: 8, year: 1991, title: 'Chairman of Tata Sons', description: 'Succeeded J. R. D. Tata as chairman of Tata Sons' },
  { id: 9, year: 1998, title: 'Tata Motors', description: 'Launched Tata Indica, India\'s first indigenously designed and manufactured car' },
  { id: 10, year: 2000, title: 'Tata Tea acquires Tetley', description: 'Led Tata Tea to acquire Tetley Group, UK' },
  { id: 11, year: 2000, title: 'Padma Bhushan', description: 'Received Padma Bhushan, the third highest civilian honour in India' },
  { id: 12, year: 2004, title: 'Tata Motors lists on NYSE', description: 'Tata Motors listed on New York Stock Exchange' },
  { id: 13, year: 2006, title: 'Tata Sky', description: 'Launched Tata Sky, a direct broadcast satellite television provider' },
  { id: 14, year: 2007, title: 'Corus Acquisition', description: 'Tata Steel acquired Corus Group, an Anglo-Dutch steel company' },
  { id: 15, year: 2008, title: 'Jaguar Land Rover', description: 'Tata Motors acquired Jaguar Land Rover from Ford Motor Company' },
  { id: 16, year: 2008, title: 'Tata Nano', description: 'Launched Tata Nano, the world\'s cheapest car' },
  { id: 17, year: 2008, title: 'Padma Vibhushan', description: 'Awarded Padma Vibhushan, the second highest civilian honour in India' },
  { id: 18, year: 2009, title: 'Tata Memorial Centre', description: 'Expanded cancer research and treatment facilities at Tata Memorial Centre' },
  { id: 19, year: 2010, title: 'Tata Hall at Harvard', description: 'Donated $50 million for construction of Tata Hall at Harvard Business School' },
  { id: 20, year: 2012, title: 'Retirement', description: 'Stepped down as chairman of Tata Sons' },
  { id: 21, year: 2014, title: 'Knight Grand Cross', description: 'Awarded Honorary Knight Grand Cross of the Order of the British Empire' },
  { id: 22, year: 2015, title: 'Startup Investments', description: 'Began actively investing in startups, including Ola, Paytm, and Snapdeal' },
  { id: 23, year: 2016, title: 'Interim Chairman', description: 'Returned as interim chairman of Tata Sons' },
  { id: 24, year: 2017, title: 'Tata Trusts', description: 'Focused on philanthropic activities through Tata Trusts' },
  { id: 25, year: 2018, title: 'Tata Hall at UCSD', description: 'Tata Trusts donated $70 million to establish Tata Institute for Genetics and Society at UC San Diego' },
  { id: 26, year: 2020, title: 'COVID-19 Response', description: 'Led Tata Trusts in committing ₹1,500 crore for COVID-19 relief efforts' },
  { id: 27, year: 2021, title: 'Assam Baibhav', description: 'Awarded Assam Baibhav for contribution to cancer care in Assam' },
  { id: 28, year: 2022, title: 'Air India Returns', description: 'Tata Group reacquired Air India, 69 years after its nationalization' },
  { id: 29, year: 2022, title: 'Goodfellows Launch', description: 'Launched Goodfellows, a startup for senior citizen companionship' },
  { id: 30, year: 2023, title: 'Order of Australia', description: 'Awarded Honorary Officer of the Order of Australia' },
  { id: 31, year: 2023, title: 'Maharashtra Udyog Ratna', description: 'Received Maharashtra Udyog Ratna award from Government of Maharashtra' },
  { id: 32, year: 2024, title: 'Tata Memorial Hospital Expansion', description: 'Oversaw expansion of Tata Memorial Hospital network across India' },
  { id: 33, year: 2024, title: 'Passed Away', description: 'Ratan Tata passed away on 9 October at the age of 86 in Mumbai' },
];

function AppContent() {
  const [events, setEvents] = useState<TimelineEvent[]>(combinedEvents);
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const { theme } = useTheme();

  useEffect(() => {
    if (searchTerm) {
      const filteredEvents = combinedEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        event.year.toString().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setEvents(filteredEvents);
    } else {
      setEvents(combinedEvents);
    }
  }, [searchTerm]);

  const handleNodeClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  const handleBackToOverview = () => {
    setSelectedEvent(null);
  };

  // New function to calculate node positions
  const calculateNodePosition = (index: number, totalNodes: number) => {
    const angle = index * (Math.PI * 2) / totalNodes * 5;
    const radius = 20 + (index * 180 / totalNodes);
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    return { x: x + window.innerWidth / 2, y: y + window.innerHeight / 2 };
  };

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 to-purple-100 text-gray-900'}`}>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className={`w-full max-w-4xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl p-8 relative overflow-hidden`}>
          <h1 className="text-3xl font-bold mb-6 text-center">Tribute to Ratan Naval Tata</h1>
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          
          {selectedEvent ? (
            <div className="animate-fadeIn">
              <button
                onClick={handleBackToOverview}
                className="mb-4 flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Overview
              </button>
              <h2 className="text-3xl font-bold mb-2">{selectedEvent.title}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{selectedEvent.year}</p>
              <p className="text-lg">{selectedEvent.description}</p>
            </div>
          ) : (
            <>
              <div className="relative mb-12">
                <ProfilePhoto />
                <div className="timeline-container">
                  {events.map((event, index) => (
                    <TimelineNode
                      key={event.id}
                      event={event}
                      index={index}
                      totalNodes={events.length}
                      onClick={handleNodeClick}
                    />
                  ))}
                  {events.map((event, index) => {
                    if (index < events.length - 1) {
                      const startPos = calculateNodePosition(index, events.length);
                      const endPos = calculateNodePosition(index + 1, events.length);
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
              </div>
              <TimelineStructure events={events} onEventClick={handleNodeClick} />
            </>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;