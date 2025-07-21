import React from 'react';
import { Message } from '../types';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isAi = message.sender === 'ai';
  
  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[80%] ${isAi ? 'order-last' : 'order-first'}`}>
        {isAi && (
          <div className="flex items-center mb-1">
            <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center text-white text-xs font-bold">
              A
            </div>
            <span className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-300">Afya</span>
          </div>
        )}
        
        <div 
          className={`rounded-2xl px-4 py-3 ${
            isAi 
              ? 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-sm' 
              : 'bg-teal-500 text-white'
          }`}
        >
          <p className="text-base">{message.text}</p>
          
          {message.actions && message.actions.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {message.actions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    isAi
                      ? 'bg-teal-500 text-white hover:bg-teal-600'
                      : 'bg-white text-teal-500 hover:bg-gray-100'
                  }`}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
        
        <div className={`text-xs text-gray-500 mt-1 ${isAi ? 'text-left' : 'text-right'}`}>
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;