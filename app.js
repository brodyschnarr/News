// Daily news stories - updated daily at 5:30 AM EST
const newsData = {
    date: 'Monday, February 17, 2026',
    northAmerica: [
        {
            headline: 'TikTok Retains 95% of US Users After Ownership Transition',
            summary: 'Despite concerns over data privacy and a tumultuous ownership transfer, TikTok has successfully retained approximately 95% of its US daily active users according to new Sensor Tower data. The transition to American ownership under Oracle, MGX, and Silver Lake faced initial technical challenges including broken video uploads and FYP issues, but the platform has largely stabilized with minimal user exodus to competitor platforms.',
            sources: [
                { title: 'CNBC Report', url: 'https://www.cnbc.com/2026/02/16/tiktok-us-joint-venture-user-data' },
                { title: 'The Verge Analysis', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            headline: 'NPR Host David Greene Sues Google Over AI Voice Cloning',
            summary: 'Former Morning Edition host and current Left, Right & Center anchor David Greene has filed a lawsuit against Google alleging unauthorized use of his voice in AI-generated podcast content. The case highlights growing concerns about AI voice synthesis and intellectual property rights as major tech companies increasingly deploy synthetic voices across their platforms without explicit talent consent.',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'NPR Statement', url: 'https://www.npr.org' }
            ]
        }
    ],
    aiTech: [
        {
            headline: 'OpenAI Introduces ChatGPT Lockdown Mode for Enhanced Security',
            summary: 'OpenAI has launched Lockdown Mode for ChatGPT, a new security feature designed to prevent prompt injection-based data exfiltration. The mode tightly constrains how ChatGPT interacts with external systems and is recommended for enterprise users handling sensitive information. OpenAI states the feature is "not necessary for most people" but provides additional protection for high-risk use cases where AI systems might be targeted by sophisticated prompt injection attacks.',
            sources: [
                { title: 'OpenAI Blog', url: 'https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/' },
                { title: 'The Verge Coverage', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            headline: 'Apple Vision Pro Getting Foveated Streaming Technology',
            summary: 'Apple announced foveated streaming support for Vision Pro in the first visionOS 26.4 developer beta, bringing Valve\'s advanced rendering technique to the mixed reality headset. The technology dynamically renders content at highest fidelity where users are looking while reducing quality in peripheral vision, dramatically improving performance for streamed content. Early tests on Valve\'s Steam Frame showed impressive results, and developers are optimistic about similar gains on Vision Pro.',
            sources: [
                { title: 'The Verge Hands-On', url: 'https://www.theverge.com/games/816118/valve-steam-frame-vr-headset' },
                { title: 'Apple Developer', url: 'https://developer.apple.com' }
            ]
        },
        {
            headline: 'Vatican Partners with AI Translation Service for 60-Language Liturgy',
            summary: 'St. Peter\'s Basilica has partnered with Translated, an AI-powered live translation service, to make Vatican masses accessible in 60 languages. Visitors can access real-time audio and text translations via smartphone by scanning QR codes throughout the Basilica—no app installation required. The initiative represents one of the Catholic Church\'s most significant technological modernization efforts, making religious services accessible to pilgrims from around the world.',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Vatican News', url: 'https://www.vaticannews.va' }
            ]
        }
    ]
};

// Render news cards
function renderNews(stories, containerId) {
    const container = document.getElementById(containerId);
    
    stories.forEach(story => {
        const card = document.createElement('div');
        card.className = 'news-card';
        
        const headline = document.createElement('h3');
        headline.textContent = story.headline;
        
        const summary = document.createElement('p');
        summary.className = 'summary';
        summary.textContent = story.summary;
        
        const sources = document.createElement('div');
        sources.className = 'sources';
        
        story.sources.forEach(source => {
            const link = document.createElement('a');
            link.href = source.url;
            link.className = 'source-link';
            link.textContent = source.title;
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            sources.appendChild(link);
        });
        
        card.appendChild(headline);
        card.appendChild(summary);
        card.appendChild(sources);
        container.appendChild(card);
    });
}

// Set current date
document.getElementById('current-date').textContent = newsData.date;

// Render all news
renderNews(newsData.northAmerica, 'na-news');
renderNews(newsData.aiTech, 'tech-news');
