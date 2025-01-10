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