import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ChatMessage } from '../ChatMessage';

describe('ChatMessage', () => {
  it('renders bot message correctly', () => {
    const message = {
      id: '1',
      content: 'Hello, I am a bot',
      type: 'bot' as const,
      timestamp: new Date()
    };

    render(<ChatMessage message={message} />);
    
    expect(screen.getByText('CDP Assistant')).toBeInTheDocument();
    expect(screen.getByText('Hello, I am a bot')).toBeInTheDocument();
  });

  it('renders user message correctly', () => {
    const message = {
      id: '2',
      content: 'Hi there',
      type: 'user' as const,
      timestamp: new Date()
    };

    render(<ChatMessage message={message} />);
    
    expect(screen.getByText('You')).toBeInTheDocument();
    expect(screen.getByText('Hi there')).toBeInTheDocument();
  });
});