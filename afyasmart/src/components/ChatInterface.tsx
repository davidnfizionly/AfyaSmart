import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic } from 'lucide-react';
import ChatMessage from './ChatMessage';
import { Message, HealthProfile } from '../types';
import TypingIndicator from './TypingIndicator';

interface ChatInterfaceProps {
  visible: boolean;
  healthProfile: HealthProfile | null;
  onViewResults: (diagnosis: string) => void; // ✅ accepte un string
}

const LAMBDA_ENDPOINT = 'https://2uywwyntrl32fqdmcykzyzabha0rqydp.lambda-url.us-east-1.on.aws/';

const ChatInterface: React.FC<ChatInterfaceProps> = ({ visible, healthProfile, onViewResults }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (visible && healthProfile) {
      const initialMessage = `Hi there! I'm Afya, your health assistant. I see you're ${healthProfile.age} years old. How can I help you today?`;
      setMessages([
        {
          id: '1',
          sender: 'ai',
          text: initialMessage,
          timestamp: new Date(),
        }
      ]);
    }
  }, [visible, healthProfile]);

  const handleSend = async () => {
    if (input.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setError(null);

    try {
      const response = await fetch(LAMBDA_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ symptoms: input })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server responded with status ${response.status}: ${errorText}`);
      }

      const data = await response.json();

      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: data.response,
        timestamp: new Date(),
        actions: [
          {
            label: 'View Detailed Diagnosis',
            action: () => onViewResults(data.response) // ✅ transmet le texte complet du diagnostic
          }
        ]
      };

      setMessages(prev => [...prev, aiMessage]);
    } catch (err) {
      console.error('Network Error:', err);
      setError('Unable to connect to the health assistant. Please check your connection or try again later.');
    } finally {
      setIsTyping(false);
    }
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setInput(prev => prev + " I've been having a headache");
        setIsListening(false);
      }, 3000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="flex flex-col h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {messages.map(message => (
              <ChatMessage key={message.id} message={message} />
            ))}
            {isTyping && <TypingIndicator />}
            {error && (
              <div className="text-center p-4 text-red-500 dark:text-red-400 bg-red-50 dark:bg-red-900/10 rounded-lg">
                <p className="font-medium">{error}</p>
                <p className="text-sm mt-2">Error Code: NETWORK_ERROR</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 px-4 py-4">
        <div className="max-w-3xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <button
              type="button"
              onClick={toggleListening}
              className="p-3 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
              aria-label="Start voice input"
            >
              <Mic size={20} />
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your symptoms..."
              className="flex-1 border-0 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-3 focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-400 focus:outline-none text-gray-800 dark:text-white"
            />
            <button
              type="submit"
              className="p-3 bg-teal-500 text-white rounded-full hover:bg-teal-600 transition-colors duration-300"
              aria-label="Send message"
            >
              <Send size={20} />
            </button>
          </form>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
            Your information is encrypted and private
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
