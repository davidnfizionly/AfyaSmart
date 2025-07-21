import React from 'react';
import { MessageSquare, FileText, BarChart4, Shield } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <MessageSquare className="h-10 w-10 text-teal-500" />,
      title: "Share Your Symptoms",
      description: "Describe what you're experiencing in your own words. Our AI assistant will ask follow-up questions to better understand your situation."
    },
    {
      icon: <FileText className="h-10 w-10 text-teal-500" />,
      title: "Get Health Insights",
      description: "Receive information about potential causes, risk levels, and recommendations based on your symptoms and health profile."
    },
    {
      icon: <BarChart4 className="h-10 w-10 text-teal-500" />,
      title: "Track Your Health",
      description: "Optionally track your symptoms over time to identify patterns and share more accurate information with healthcare providers."
    },
    {
      icon: <Shield className="h-10 w-10 text-teal-500" />,
      title: "Private & Secure",
      description: "Your health information is encrypted and never shared. We prioritize your privacy and security at every step."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            How Afya<span className="text-teal-500">Smart</span> Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get insights about your health in minutes with our AI-powered assistant
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step number indicator */}
              <div className="absolute -left-4 -top-4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                {index + 1}
              </div>
              
              {/* Card content */}
              <div className="bg-gray-50 dark:bg-gray-750 rounded-xl p-6 h-full flex flex-col items-center text-center border border-gray-200 dark:border-gray-700 transition-transform duration-300 hover:transform hover:-translate-y-1">
                <div className="mb-4 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
              </div>
              
              {/* Connector line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gray-300 dark:bg-gray-600"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto bg-teal-50 dark:bg-teal-900/20 rounded-xl p-6 border border-teal-100 dark:border-teal-800/50">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8">
              <img 
                src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg" 
                alt="Doctor using digital technology" 
                className="w-full max-w-xs rounded-lg shadow-md"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Not a Replacement for Medical Care</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                AfyaSmart provides educational information to help you understand your symptoms, but it does not replace professional medical advice, diagnosis, or treatment.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Always consult with a qualified healthcare provider for medical concerns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;