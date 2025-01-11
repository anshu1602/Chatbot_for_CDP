<<<<<<< Updated upstream
import { describe, it, expect } from 'vitest';
import { generateResponse, searchDocs } from '../search';

describe('search utilities', () => {
  describe('generateResponse', () => {
    it('should return default message for non-CDP questions', () => {
      const response = generateResponse('what is the weather like?');
      expect(response).toContain("I'm a CDP support chatbot");
    });

    it('should return relevant information for CDP-related questions', () => {
      const response = generateResponse('how to set up segment source');
      expect(response).toContain('Navigate to Sources');
    });

    it('should handle comparison questions', () => {
      const response = generateResponse('compare segment vs lytics');
      expect(response).toContain('Segment and Lytics handle audience creation differently');
    });
  });

  describe('searchDocs', () => {
    it('should find relevant documentation', () => {
      const result = searchDocs('segment source setup');
      expect(result?.platform).toBe('segment');
      expect(result?.title).toContain('source');
    });

    it('should return null for irrelevant queries', () => {
      const result = searchDocs('something completely unrelated');
      expect(result).toBeNull();
    });
  });
});
=======
import Fuse from 'fuse.js';
import { cdpDocs } from '../data/documentation';

const fuse = new Fuse(cdpDocs, {
  keys: [
    { name: 'title', weight: 2 },
    { name: 'content', weight: 1 },
    { name: 'tags', weight: 1.5 },
    { name: 'platform', weight: 1 }
  ],
  threshold: 0.4,
  includeScore: true
});

export const searchDocs = (query: string) => {
  const results = fuse.search(query);
  return results.length > 0 ? results[0].item : null;
};

export const generateResponse = (query: string): string => {
  const normalizedQuery = query.toLowerCase();
  
  // Handle non-CDP questions
  if (!normalizedQuery.includes('cdp') && 
      !normalizedQuery.includes('segment') && 
      !normalizedQuery.includes('mparticle') && 
      !normalizedQuery.includes('lytics') && 
      !normalizedQuery.includes('zeotap') &&
      !normalizedQuery.includes('compare')) {
    return "I'm a CDP support chatbot. I can help you with questions about Segment, mParticle, Lytics, and Zeotap platforms. I can also compare features between different CDPs. Please ask me something related to these CDPs!";
  }

  // Check for comparison questions
  if (normalizedQuery.includes('compare') || 
      normalizedQuery.includes('difference') || 
      normalizedQuery.includes('versus') || 
      normalizedQuery.includes('vs')) {
    const comparisonResults = fuse.search(query).filter(result => result.item.platform === 'comparison');
    if (comparisonResults.length > 0) {
      return comparisonResults[0].item.content;
    }
  }

  const result = searchDocs(query);
  
  if (!result) {
    return "I couldn't find specific information about that. Could you please rephrase your question or ask about a different CDP feature?";
  }

  return result.content;
};
>>>>>>> Stashed changes
