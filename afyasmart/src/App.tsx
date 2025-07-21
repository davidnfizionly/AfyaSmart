import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ChatInterface from './components/ChatInterface';
import HealthProfileForm from './components/HealthProfileForm';
import ResultsPage from './components/ResultsPage';
import { AppView, HealthProfile } from './types';

function AppContent() {
  const [darkMode, setDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(AppView.Welcome);
  const [healthProfile, setHealthProfile] = useState<HealthProfile | null>(null);
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const startHealthCheck = () => {
    setCurrentView(AppView.HealthProfile);
  };

  const handleHealthProfileSubmit = (profile: HealthProfile) => {
    setHealthProfile(profile);
    setCurrentView(AppView.Chat);
  };

  // Transmet le diagnostic en tant qu'état à la route /results
  const handleViewResults = (diagnosis: string) => {
    navigate('/results', { state: { diagnosis } });
  };

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header 
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        onLogoClick={() => {
          setCurrentView(AppView.Welcome);
          navigate('/');
        }}
      />

      <Routes>
        <Route path="/" element={
          <>
            {currentView === AppView.Welcome && (
              <HeroSection startHealthCheck={startHealthCheck} />
            )}

            {currentView === AppView.HealthProfile && (
              <HealthProfileForm onSubmit={handleHealthProfileSubmit} />
            )}

            {currentView === AppView.Chat && (
              <ChatInterface
                visible={true}
                healthProfile={healthProfile}
                onViewResults={handleViewResults}
              />
            )}
          </>
        } />

        <Route path="/results" element={
          <ResultsPage goBack={() => navigate('/')} />
        } />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
