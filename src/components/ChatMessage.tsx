import React from 'react';
import { MessageCircle, Bot } from 'lucide-react';
import { ChatMessage as ChatMessageType } from '../types';

interface Props {
  message: ChatMessageType;
}

export const ChatMessage: React.FC<Props> = ({ message }) => {
  const isBot = message.type === 'bot';
  
  return (
    <div className={`flex gap-3 ${isBot ? 'bg-gray-50' : ''} p-4 rounded-lg`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
        isBot ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
      }`}>
        {isBot ? <Bot size={20} /> : <MessageCircle size={20} />}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-900">
          {isBot ? 'CDP Assistant' : 'You'}
        </p>
        <p className="mt-1 text-gray-600">{message.content}</p>
      </div>
    </div>
  );
};