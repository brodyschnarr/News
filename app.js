// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Monday, February 17, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Canada Faces Unprecedented Pressure as US Tariff Threats Intensify',
            summary: 'The Canadian government is navigating a diplomatic tightrope as the United States escalates tariff threats targeting key exports including lumber, dairy, and auto parts. Prime Minister Mark Carney convened an emergency cabinet session to assess retaliatory options, while provincial premiers called for a unified response. Economists warn that broad 25% tariffs could shave 2.4% off Canadian GDP in the near term, with Ontario\'s auto corridor considered the most vulnerable sector.',
            tags: ['Canada', 'trade', 'economy', 'tariffs'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news' },
                { title: 'Reuters', url: 'https://www.reuters.com' }
            ]
        },
        {
            id: 'top-2',
            headline: 'OpenAI Launches ChatGPT Lockdown Mode to Block Data Exfiltration',
            summary: 'OpenAI introduced Lockdown Mode for ChatGPT, a new enterprise security feature that tightly constrains how the AI interacts with external systems, specifically designed to prevent sophisticated prompt-injection attacks from leaking user data. The feature, described as unnecessary for most casual users, arrives amid growing concerns that AI assistants can be manipulated by malicious content embedded in documents or web pages to send sensitive information to bad actors.',
            tags: ['AI', 'OpenAI', 'ChatGPT', 'security'],
            category: 'top-stories',
            sources: [
                { title: 'OpenAI Blog', url: 'https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/' },
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Bank of Canada Holds Rate Steady Amid Trade Uncertainty',
            summary: 'The Bank of Canada held its benchmark interest rate steady at 3.0% in its latest announcement, citing trade policy uncertainty as a key reason for caution despite inflation trending near target. Governor Tiff Macklem warned that escalating tariff threats from the US represent the single largest downside risk to the Canadian economic outlook, and signalled the Bank is prepared to cut aggressively if trade conditions deteriorate materially in the coming months.',
            tags: ['Canada', 'economy', 'Bank of Canada', 'interest rates'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news' },
                { title: 'Financial Post', url: 'https://financialpost.com' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Toronto Transit Commission Approves Subway Expansion Funding',
            summary: 'The TTC board approved a landmark funding agreement with the federal and Ontario governments to accelerate the Ontario Line and Scarborough Subway Extension projects. The combined $12.5 billion commitment marks the largest single transit investment in Toronto\'s history, with the Ontario Line now projected to open its first stations by 2030. Critics noted that the timeline remains aggressive given ongoing labour shortages and supply chain pressures in the construction sector.',
            tags: ['Toronto', 'transit', 'infrastructure', 'Ontario'],
            category: 'canadian-news',
            sources: [
                { title: 'Toronto Star', url: 'https://www.thestar.com' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'PM Carney Defends National Security Posture Amid NATO Spending Debate',
            summary: 'Prime Minister Mark Carney defended Canada\'s updated defence spending commitments in the House of Commons, pledging to reach NATO\'s 2% GDP target by 2030 — two years ahead of the previous plan. The announcement came under pressure from both US officials and opposition leaders who argued Canada has long relied on American military coverage. The NDP questioned whether the spending increase would focus on domestic industrial capacity or foreign procurement contracts.',
            tags: ['Canada', 'Carney', 'NATO', 'defence', 'politics'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC Politics', url: 'https://www.cbc.ca/news/politics' },
                { title: 'National Post', url: 'https://nationalpost.com' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Conservative Leadership Race Heats Up as Poilievre Faces Internal Criticism',
            summary: 'Conservative Party leader Pierre Poilievre faces growing internal pressure from caucus members who argue his confrontational approach to US-Canada trade tensions is backfiring with moderate voters. A Leger poll released this week shows the Liberals narrowing the gap to just 4 points nationally, down from a 12-point Conservative lead three months ago. Poilievre\'s office pushed back, calling the polling shift a temporary rally-around-the-flag effect that will fade.',
            tags: ['Canada', 'Conservatives', 'Poilievre', 'politics', 'polling'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com' },
                { title: 'Leger Polling', url: 'https://leger360.com' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump Administration Moves to Expand Executive Control Over Federal Agencies',
            summary: 'The Trump White House unveiled a sweeping executive order requiring all major federal regulatory agencies to submit proposed rules to the Office of Management and Budget for approval before publication, a move critics say would give the president unprecedented control over independent bodies like the EPA and FTC. Legal scholars are divided on constitutionality, with challenges expected at the DC Circuit Court. Proponents argue it brings accountability and eliminates unelected bureaucratic overreach.',
            tags: ['Trump', 'executive order', 'federal agencies', 'US politics'],
            category: 'us-politics',
            sources: [
                { title: 'Politico', url: 'https://www.politico.com' },
                { title: 'The Atlantic', url: 'https://www.theatlantic.com' },
                { title: 'Reuters', url: 'https://www.reuters.com' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Senate Passes Revised Budget Framework in Narrow Vote',
            summary: 'The US Senate passed a revised budget resolution 52-48 along party lines, advancing a framework that pairs significant tax cuts with spending reductions to Medicaid and federal housing programs. Democrats warned the cuts would strip healthcare from millions of low-income Americans, while Republican sponsors argued the fiscal consolidation is essential to address the $36 trillion national debt. The resolution now goes to the House, where a handful of moderate Republicans have signalled reservations.',
            tags: ['Senate', 'budget', 'tax cuts', 'Medicaid', 'US politics'],
            category: 'us-politics',
            sources: [
                { title: 'NBC News', url: 'https://www.nbcnews.com' },
                { title: 'Washington Post', url: 'https://www.washingtonpost.com' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Apple Vision Pro Gains Foveated Streaming in visionOS 26.4 Beta',
            summary: 'Apple introduced foveated streaming in the first visionOS 26.4 developer beta, bringing an advanced rendering technique popularised by Valve to the Vision Pro headset. The technology tracks where a user\'s eyes are focused and renders that area at maximum fidelity while reducing quality in peripheral vision, cutting GPU load dramatically. Early developer feedback has been enthusiastic, with one studio reporting a 40% performance improvement on GPU-bound streaming workloads.',
            tags: ['Apple', 'Vision Pro', 'visionOS', 'VR', 'AR'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: '9to5Mac', url: 'https://9to5mac.com' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'NPR Host Sues Google Over Unauthorised AI Voice Clone',
            summary: 'Former NPR Morning Edition host David Greene filed a lawsuit against Google alleging the company cloned his voice without consent to power an AI podcast narrator. The case is expected to set a significant precedent in an area where US law has lagged the rapid advance of voice synthesis technology. Greene\'s legal team is seeking both damages and an injunction to have the AI voice removed from Google\'s platforms, and several other broadcast journalists are reportedly preparing similar suits.',
            tags: ['Google', 'AI', 'voice cloning', 'lawsuit', 'media'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Wired', url: 'https://www.wired.com' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'TikTok Retains 95% of US Users After Ownership Handover',
            summary: 'Despite a rocky transition to its new American ownership consortium — Oracle, MGX, and Silver Lake — TikTok has held onto approximately 95% of its US daily active users, according to new Sensor Tower data. The platform briefly went down following the handover, causing widespread feed disruptions, but recovered quickly. Analysts suggest the loyalty data significantly strengthens the new owners\' negotiating position in ongoing talks with advertisers who had paused spending during the uncertainty.',
            tags: ['TikTok', 'social media', 'US', 'Oracle'],
            category: 'ai-tech',
            sources: [
                { title: 'CNBC', url: 'https://www.cnbc.com' },
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        }
    ]
};

// ─────────────────────────────────────────────
//  Preferences Storage
// ─────────────────────────────────────────────

function getPrefs() {
    try {
        return JSON.parse(localStorage.getItem('daily_brief_prefs') || '{"likes":{},"tags":{},"categories":{}}');
    } catch { return { likes: {}, tags: {}, categories: {} }; }
}

function savePrefs(prefs) {
    localStorage.setItem('daily_brief_prefs', JSON.stringify(prefs));
}

function toggleLike(storyId, story, btn) {
    const prefs = getPrefs();

    if (prefs.likes[storyId]) {
        // Unlike
        delete prefs.likes[storyId];
        story.tags.forEach(tag => { prefs.tags[tag] = Math.max(0, (prefs.tags[tag] || 0) - 1); });
        prefs.categories[story.category] = Math.max(0, (prefs.categories[story.category] || 0) - 1);
        btn.classList.remove('liked');
        btn.querySelector('.label').textContent = 'Like';
    } else {
        // Like
        prefs.likes[storyId] = { headline: story.headline, category: story.category, tags: story.tags, likedAt: newsData.date };
        story.tags.forEach(tag => { prefs.tags[tag] = (prefs.tags[tag] || 0) + 1; });
        prefs.categories[story.category] = (prefs.categories[story.category] || 0) + 1;
        btn.classList.add('liked');
        btn.querySelector('.label').textContent = 'Liked';
    }

    savePrefs(prefs);
    updateLikeCount();
}

function updateLikeCount() {
    const prefs = getPrefs();
    const count = Object.keys(prefs.likes).length;
    const el = document.getElementById('like-count');
    if (el) el.textContent = count;
}

// ─────────────────────────────────────────────
//  Render
// ─────────────────────────────────────────────

function renderStories(stories, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const prefs = getPrefs();

    stories.forEach(story => {
        const isLiked = !!prefs.likes[story.id];

        const card = document.createElement('div');
        card.className = 'news-card';

        // Header row: headline + like button
        const header = document.createElement('div');
        header.className = 'card-header';

        const h3 = document.createElement('h3');
        h3.textContent = story.headline;

        const likeBtn = document.createElement('button');
        likeBtn.className = 'like-btn' + (isLiked ? ' liked' : '');
        likeBtn.innerHTML = `<span class="heart">❤️</span><span class="label">${isLiked ? 'Liked' : 'Like'}</span>`;
        likeBtn.addEventListener('click', () => toggleLike(story.id, story, likeBtn));

        header.appendChild(h3);
        header.appendChild(likeBtn);

        // Summary
        const summary = document.createElement('p');
        summary.className = 'summary';
        summary.textContent = story.summary;

        // Sources
        const sources = document.createElement('div');
        sources.className = 'sources';
        story.sources.forEach(src => {
            const a = document.createElement('a');
            a.href = src.url;
            a.className = 'source-link';
            a.textContent = src.title;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            sources.appendChild(a);
        });

        card.appendChild(header);
        card.appendChild(summary);
        card.appendChild(sources);
        container.appendChild(card);
    });
}

// ─────────────────────────────────────────────
//  Active Nav Highlight on Scroll
// ─────────────────────────────────────────────

function initScrollSpy() {
    const sections = document.querySelectorAll('.news-section');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navLinks.forEach(l => l.classList.remove('active'));
                const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));
}

// ─────────────────────────────────────────────
//  Init
// ─────────────────────────────────────────────

document.getElementById('current-date').textContent = newsData.date;

renderStories(newsData['top-stories'], 'grid-top-stories');
renderStories(newsData['canadian-news'], 'grid-canadian-news');
renderStories(newsData['canadian-politics'], 'grid-canadian-politics');
renderStories(newsData['us-politics'], 'grid-us-politics');
renderStories(newsData['ai-tech'], 'grid-ai-tech');

updateLikeCount();
initScrollSpy();
