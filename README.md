# CDP Support Chatbot

A React-based chatbot that provides guidance for Customer Data Platforms (CDPs) including Segment, mParticle, Lytics, and Zeotap.

## Features

- Real-time responses to CDP-related queries
- Support for basic how-to questions
- Advanced configuration guidance
- Cross-CDP feature comparisons
- Fuzzy search for better query matching
- Responsive design with mobile support

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/cdp-support-chatbot.git

# Install dependencies
npm install

# Start development server
npm run dev
```

## Security Considerations

1. **Input Sanitization**
   - All user inputs are sanitized to prevent XSS attacks
   - React's built-in escaping mechanisms are utilized
   - Content is rendered safely using React components

2. **Rate Limiting**
   - Implementation ready for rate limiting on the API layer
   - Prevents abuse and ensures service availability

3. **Content Security Policy (CSP)**
   - Strict CSP headers to prevent XSS and other injection attacks
   - Only allows resources from trusted sources

4. **Environment Variables**
   - Sensitive configuration is stored in environment variables
   - Production credentials are never exposed in the codebase

## Performance Optimizations

1. **Search Optimization**
   - Fuse.js configured with optimal weights for better search results
   - Search index is built at startup for faster queries
   - Caching layer ready for implementation

2. **React Optimizations**
   - React.memo() for expensive components
   - useCallback() for stable function references
   - Virtualization ready for large message lists

3. **Bundle Optimization**
   - Code splitting for better initial load time
   - Tree shaking enabled
   - Only essential dependencies included

4. **Caching Strategy**
   - Browser caching for static assets
   - Ready for implementing response caching
   - Service Worker support prepared

## Testing

```bash
# Run unit tests
npm test

# Run e2e tests
npm run test:e2e

# Run lint checks
npm run lint
```

## Deployment

The application is configured for deployment on various platforms:

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.