import React, { useState } from 'react';
import {
  ChevronDown, ChevronUp, ChevronRight, ArrowLeft,
  Calendar, AlertCircle, Home, Clock
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ResultsPageProps {
  goBack: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ goBack }) => {
  const [expandedCondition, setExpandedCondition] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<'conditions' | 'when-to-see' | 'remedies'>('conditions');

  const location = useLocation();
  const diagnosis = location.state?.diagnosis || 'No diagnosis provided.';

  const conditions = [
    {
      name: 'Tension Headache',
      description: 'A common type of headache that causes mild to moderate pain in your head and neck.',
      symptoms: ['Dull, aching head pain', 'Sensation of tightness or pressure across the forehead', 'Tenderness on the scalp, neck and shoulder muscles'],
      riskLevel: 'Low',
      riskColor: 'bg-green-500'
    },
    {
      name: 'Migraine',
      description: 'A headache of varying intensity, often accompanied by nausea and sensitivity to light and sound.',
      symptoms: ['Moderate to severe headache', 'Nausea or vomiting', 'Sensitivity to light and sound', 'Pain on one side of the head'],
      riskLevel: 'Moderate',
      riskColor: 'bg-yellow-500'
    },
    {
      name: 'Cluster Headache',
      description: 'Excruciating headaches, typically focused around one eye, occurring in cyclical patterns or clusters.',
      symptoms: ['Severe pain around one eye', 'Restlessness', 'Excessive tearing', 'Redness in the eye'],
      riskLevel: 'High',
      riskColor: 'bg-salmon'
    }
  ];

  return (
    <div className="min-h-screen pt-16 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex items-center">
            <button
              onClick={goBack}
              className="flex items-center text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 font-medium"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Chat
            </button>
          </div>

          {/* Diagnostic résumé affiché */}
          <div className="bg-teal-50 dark:bg-teal-900/20 p-6 rounded-xl shadow mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">AI Diagnosis Summary</h2>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{diagnosis}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">Your Health Assessment</h1>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Based on the symptoms you've shared, here are some potential conditions to be aware of.
              </p>

              <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
                <nav className="flex space-x-8">
                  {['conditions', 'when-to-see', 'remedies'].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab as typeof activeTab)}
                      className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                        activeTab === tab
                          ? 'border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400'
                          : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
                      }`}
                    >
                      {tab === 'conditions'
                        ? 'Potential Conditions'
                        : tab === 'when-to-see'
                        ? 'When to See a Doctor'
                        : 'Home Remedies'}
                    </button>
                  ))}
                </nav>
              </div>

              {activeTab === 'conditions' && (
                <div className="space-y-4">
                  {conditions.map((condition, index) => (
                    <div
                      key={index}
                      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300"
                    >
                      <div
                        className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 dark:bg-gray-750"
                        onClick={() => setExpandedCondition(expandedCondition === index ? null : index)}
                      >
                        <div className="flex items-center">
                          <div className={`w-3 h-3 ${condition.riskColor} rounded-full mr-3`} />
                          <h3 className="font-medium text-gray-900 dark:text-white text-lg">{condition.name}</h3>
                        </div>
                        <div className="flex items-center">
                          <span
                            className={`mr-3 text-sm px-2 py-1 rounded-full ${
                              condition.riskLevel === 'Low'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200'
                                : condition.riskLevel === 'Moderate'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-200'
                                : 'bg-salmon/10 text-salmon dark:bg-salmon/20 dark:text-salmon/90'
                            }`}
                          >
                            {condition.riskLevel} Risk
                          </span>
                          {expandedCondition === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </div>

                      {expandedCondition === index && (
                        <div className="p-4 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
                          <p className="text-gray-600 dark:text-gray-300 mb-4">{condition.description}</p>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">Common Symptoms:</h4>
                          <ul className="list-disc pl-5 mb-4 text-gray-600 dark:text-gray-300">
                            {condition.symptoms.map((symptom, i) => (
                              <li key={i}>{symptom}</li>
                            ))}
                          </ul>
                          <div className="flex items-center justify-between">
                            <button className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 font-medium flex items-center">
                              Learn more <ChevronRight size={16} className="ml-1" />
                            </button>
                            <button className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 flex items-center">
                              <Calendar size={16} className="mr-1" /> Track symptoms
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'when-to-see' && (
                <div className="space-y-6">
                  <div className="bg-salmon/10 dark:bg-salmon/20 p-4 rounded-lg flex">
                    <AlertCircle className="text-salmon mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-medium text-salmon mb-1">Seek immediate medical attention if:</h3>
                      <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
                        <li>Your headache comes on suddenly and is explosive or violent</li>
                        <li>Your headache is accompanied by fever, stiff neck, confusion, seizures, double vision, weakness, numbness or difficulty speaking</li>
                        <li>Your headache occurs after a head injury</li>
                        <li>You have a severe headache with vomiting</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white text-lg mb-3">Schedule a doctor's visit if:</h3>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Your headache pattern changes</li>
                      <li>Your headaches are getting worse or don't improve with over-the-counter drugs</li>
                      <li>You need to take pain relievers more than twice a week</li>
                      <li>Your headache is accompanied by other symptoms such as mild fever or pain when chewing</li>
                      <li>Your headaches are disabling</li>
                    </ul>
                  </div>

                  <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                      <Clock size={16} />
                      <span>Most doctor's appointments can be scheduled within 1-3 days</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'remedies' && (
                <div className="space-y-6">
                  <div className="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg">
                    <h3 className="font-medium text-teal-700 dark:text-teal-400 mb-3">General Headache Relief:</h3>
                    <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-2">
                      <li>Rest in a quiet, dark room</li>
                      <li>Apply a cold pack to your forehead or neck</li>
                      <li>Take over-the-counter pain medications like acetaminophen or ibuprofen as directed</li>
                      <li>Stay hydrated by drinking water</li>
                      <li>Try relaxation techniques such as deep breathing or meditation</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white text-lg mb-3">Preventative Measures:</h3>
                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-2">
                      <li>Maintain a regular sleep schedule</li>
                      <li>Stay hydrated throughout the day</li>
                      <li>Exercise regularly</li>
                      <li>Manage stress through relaxation techniques</li>
                      <li>Avoid known triggers such as certain foods or environmental factors</li>
                      <li>Maintain good posture to reduce tension in neck and shoulders</li>
                    </ul>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                    <Home size={16} />
                    <span>Always consult with a healthcare professional before starting any treatment</span>
                  </div>
                </div>
              )}
            </div>

            <div className="bg-gray-50 dark:bg-gray-750 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 mr-2"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                </svg>
                For educational purposes only. Not a medical diagnosis.
              </div>
              <div>
                <button className="text-teal-500 hover:text-teal-600 dark:text-teal-400 dark:hover:text-teal-300 font-medium">
                  Save Results
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Would you like to track your symptoms?</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Tracking your symptoms over time can help identify patterns and provide better insights for healthcare professionals.
            </p>
            <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300">
              Start Tracking Symptoms
            </button>
          </div>

          <div className="text-center">
            <p className="text-gray-700 dark:text-gray-300 mb-3">Was this assessment helpful?</p>
            <div className="flex justify-center space-x-4">
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-full transition-colors duration-300">
                👍 Yes
              </button>
              <button className="bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 px-6 py-2 rounded-full transition-colors duration-300">
                👎 No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
