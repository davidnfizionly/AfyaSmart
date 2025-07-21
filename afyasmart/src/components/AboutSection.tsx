import React from 'react';
import { Brain, Shield, Sparkles } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              About Afya<span className="text-teal-500">Smart</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Empowering you with AI-powered health insights
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                <Brain className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Advanced AI</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Powered by state-of-the-art language models trained on medical knowledge to provide relevant information about your symptoms.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-lavender-gray/30 dark:bg-gray-700 rounded-full">
                <Shield className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Privacy First</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your health data stays private with end-to-end encryption. We never share your information without your explicit consent.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-salmon/10 dark:bg-salmon/20 rounded-full">
                <Sparkles className="h-8 w-8 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Continuous Learning</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our system continuously improves based on user feedback and the latest medical research to provide better health insights.
              </p>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-md mb-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At AfyaSmart, our mission is to make preliminary health information accessible to everyone, empowering individuals to make more informed decisions about their health and when to seek professional care.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that by combining artificial intelligence with medical knowledge, we can help bridge the gap between noticing symptoms and understanding what they might mean, ultimately leading to better health outcomes.
            </p>
          </div>
          
          <div className="bg-teal-50 dark:bg-teal-900/20 rounded-xl p-8 border border-teal-100 dark:border-teal-800/50">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Important Safety Notice</h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                <strong>Not a Medical Diagnosis:</strong> AfyaSmart provides health information for educational purposes only. It does not provide medical advice, diagnosis, or treatment.
              </p>
              <p>
                <strong>Seek Professional Help:</strong> Always consult with qualified healthcare professionals for medical concerns. If you're experiencing a medical emergency, call emergency services immediately.
              </p>
              <p>
                <strong>AI Limitations:</strong> While our AI is designed to provide relevant information, it has limitations and may not capture the full context of your health situation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;