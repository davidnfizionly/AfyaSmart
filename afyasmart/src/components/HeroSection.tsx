import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  startHealthCheck: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ startHealthCheck }) => {
  return (
    <section className="min-h-screen pt-24 pb-16 flex items-center bg-gradient-to-br from-white to-teal-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
              Check Your Symptoms <br />
              <span className="text-teal-500 dark:text-teal-400">with Confidence</span>
            </h1>
            <button 
              onClick={startHealthCheck}
              className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Start Health Check
              <ArrowRight className="ml-2" size={20} />
            </button>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
              🔒 Your data is confidential and not stored
            </p>
          </div>
          <div className="lg:w-1/2 lg:pl-16">
            <img 
              src="https://imgs.search.brave.com/29zvAGY7wkEQQLCU1BC_crxFWwKzZW0js3HOit1F3FE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTc4/MTY0ODEyL3Bob3Rv/L2FmcmljYW4tbWFs/ZS1kb2N0b3ItZXhh/bWluaW5nLWJhYnkt/Ym95LmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0zU0ZseTBG/SEtvZUlDQ3lYLU1a/cVpXUWRrRmxFWWRK/QW5NYTVjQXpXakpZ/PQ" 
              alt="African doctor examining patient"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;