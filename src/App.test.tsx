import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders welcome message', () => {
    render(<App />);
    expect(screen.getByText(/I'm your CDP Assistant/)).toBeInTheDocument();
  });

  it('allows sending messages', async () => {
    render(<App />);
    
    const input = screen.getByPlaceholderText(/Type your question/i);
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'How do I use Segment?' } });
    fireEvent.click(sendButton);

    expect(await screen.findByText('How do I use Segment?')).toBeInTheDocument();
  });

  it('shows bot response after user message', async () => {
    vi.useFakeTimers();
    render(<App />);
    
    const input = screen.getByPlaceholderText(/Type your question/i);
    const sendButton = screen.getByText('Send');

    fireEvent.change(input, { target: { value: 'segment source setup' } });
    fireEvent.click(sendButton);

    vi.advanceTimersByTime(500);
    
    expect(await screen.findByText(/Navigate to Sources/)).toBeInTheDocument();
    
    vi.useRealTimers();
  });
});