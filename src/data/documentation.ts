export const cdpDocs = [
  // Basic how-to entries
  {
    platform: 'segment',
    title: 'Setting up a new source',
    content: 'To set up a new source in Segment: 1. Navigate to Sources in your workspace. 2. Click Add Source. 3. Choose your source type from the catalog. 4. Follow the source-specific setup instructions. 5. Configure your source settings. 6. Enable the source when ready.',
    tags: ['source', 'setup', 'configuration']
  },
  {
    platform: 'mparticle',
    title: 'Creating user profiles',
    content: 'To create a user profile in mParticle: 1. Access the User Activity view. 2. Click Create Profile. 3. Enter user identifiers (email, ID, etc.). 4. Add user attributes. 5. Set user preferences. 6. Save the profile.',
    tags: ['profile', 'user', 'creation']
  },
  {
    platform: 'lytics',
    title: 'Building audience segments',
    content: 'To build an audience segment in Lytics: 1. Go to Audiences section. 2. Click Create New Audience. 3. Define segment criteria using behavioral data. 4. Set audience rules and conditions. 5. Test your segment. 6. Activate the segment.',
    tags: ['audience', 'segment', 'targeting']
  },
  {
    platform: 'zeotap',
    title: 'Data integration',
    content: 'To integrate data with Zeotap: 1. Access the Integration Hub. 2. Select your data source type. 3. Configure the connection settings. 4. Map your data fields. 5. Set up data sync frequency. 6. Start the integration.',
    tags: ['integration', 'data', 'connection']
  },
  
  // Advanced configuration entries
  {
    platform: 'segment',
    title: 'Advanced source configuration',
    content: 'For advanced Segment source configuration: 1. Enable debug mode for detailed logging. 2. Set up custom event schemas. 3. Configure event filtering rules. 4. Implement custom enrichment functions. 5. Set up real-time destination forwarding. 6. Configure retry policies for failed events.',
    tags: ['advanced', 'configuration', 'source']
  },
  {
    platform: 'mparticle',
    title: 'Advanced data filtering',
    content: 'For advanced mParticle data filtering: 1. Create custom filtering rules. 2. Set up event transformations. 3. Configure data quality rules. 4. Implement PII scrubbing. 5. Set up custom attribute mapping. 6. Configure real-time validation.',
    tags: ['advanced', 'filtering', 'data quality']
  },
  
  // Comparison entries
  {
    platform: 'comparison',
    title: 'Segment vs Lytics audience creation',
    content: 'Segment and Lytics handle audience creation differently. Segment uses Personas for audience building with SQL-like syntax and real-time evaluation. Lytics focuses on behavioral scoring and machine learning for audience creation. Segment is better for technical users who prefer SQL, while Lytics offers more automated audience optimization.',
    tags: ['comparison', 'audience', 'segment', 'lytics']
  },
  {
    platform: 'comparison',
    title: 'mParticle vs Zeotap data integration',
    content: 'mParticle and Zeotap have different approaches to data integration. mParticle offers more granular control with custom SDK implementations and server-side integration options. Zeotap focuses on simplified integration with pre-built connectors and automated data mapping. mParticle is better for custom implementations, while Zeotap excels in rapid deployment scenarios.',
    tags: ['comparison', 'integration', 'mparticle', 'zeotap']
  }
] as const;