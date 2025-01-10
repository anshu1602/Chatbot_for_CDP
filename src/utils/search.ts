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