export interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

export interface DocEntry {
  platform: 'segment' | 'mparticle' | 'lytics' | 'zeotap';
  title: string;
  content: string;
  tags: string[];
}