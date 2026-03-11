// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Wednesday, March 11, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Iran Shuts Down Strait of Hormuz as Oil Prices Spike and Global Energy Crisis Deepens',
            summary: 'Iran has effectively stopped all cargo traffic through the Strait of Hormuz, one of the world\'s most critical energy chokepoints, sending oil prices surging past $120 a barrel before Trump\'s comments about a "short-term" war pulled prices back to around $90. The blockade represents Iran\'s most powerful retaliatory weapon against the U.S.-Israeli military campaign, now entering its twelfth day. The IEA has responded by proposing the largest-ever release of oil from strategic reserves to stabilize prices, while China — heavily dependent on Gulf oil — has remained conspicuously on the sidelines despite needing the strait open. The crisis has triggered global shipping disruptions, rattled consumer confidence, and forced G7 energy ministers into emergency consultations as the economic fallout of the war threatens to overshadow the military campaign itself.',
            tags: ['Iran war', 'Strait of Hormuz', 'oil prices', 'energy crisis', 'IEA'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump--03-11-2026' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/industry-news/energy-and-resources/article-iea-reportedly-proposes-largest-ever-oil-release-from-strategic/' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-us-israel-war-attrition-analysis-5d7e50c3a6da57414bbf4a5e255e4a7e' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Iran War Becomes a Contest of Who Can Take the Most Pain',
            summary: 'A major AP analysis frames the Iran conflict as a war of attrition where both sides are betting the other will break first. For the U.S., the biggest vulnerability is economic: surging gas prices have rattled consumers and financial markets, and Trump has sent mixed signals — calling the war "short-term" one moment while vowing to keep up the punishment on Iran the next. For Iran, the calculus is surviving a near-total bombardment of its military infrastructure while leveraging its ability to disrupt global energy markets through the Strait of Hormuz blockade and attacks on commercial shipping. Iran has also targeted Dubai\'s airport and oil facilities in the Gulf, expanding the conflict\'s footprint. The analysis warns that neither side has a clear off-ramp, raising the specter of a prolonged conflict with mounting civilian and economic costs on all sides.',
            tags: ['Iran war', 'attrition', 'oil markets', 'Trump', 'geopolitics'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-us-israel-war-attrition-analysis-5d7e50c3a6da57414bbf4a5e255e4a7e' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-china-strait-of-hormuz-iran-war/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Shooting at U.S. Consulate in Toronto Called a "National Security Incident"',
            summary: 'A shooting at the U.S. consulate in Toronto is being investigated as a national security incident, with Canadian authorities treating it as a potential act of political violence tied to the heightened tensions surrounding the Iran war. Details remain limited, but the incident has prompted an immediate security review at diplomatic facilities across Canada. The attack comes at an extraordinarily sensitive moment in Canada-U.S. relations, already strained by tariff disputes and differing approaches to the Middle East conflict. Officials are urging the public not to speculate while the investigation is underway, but the incident has intensified concerns about the domestic security implications of the overseas conflict spilling into North America.',
            tags: ['Toronto', 'U.S. consulate', 'shooting', 'national security', 'Canada'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/toronto/us-consulate-toronto-shooting-9.7123412' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Massive Freezing Rain Storm Shuts Down Schools Across Ontario and Quebec',
            summary: 'A punishing ice storm is battering Ontario and Quebec, forcing widespread school closures, cancelling flights, and flooding Toronto roads as heavy rain sweeps across southern Ontario ahead of dangerous freezing rain. Meteorologists are comparing the system to the devastating April 2023 ice storm, warning of prolonged power outages as ice accumulates on power lines and tree branches. Schools and bus services have been cancelled across Ottawa, Montreal, and much of eastern Ontario, while northeastern Ontario faces separate winter storm and snowfall warnings. Emergency crews are on standby for flood mitigation as the storm threatens to overwhelm drainage systems. The timing compounds existing pressure on households already dealing with elevated energy prices driven by the Iran war\'s disruption of global oil markets.',
            tags: ['ice storm', 'Ontario', 'Quebec', 'school closures', 'power outages'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/ottawa/school-bus-cancel-weather-ottawa-today-9.7122283' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/montreal/quebec-montreal-freezing-rain-wednesday-9.7123662' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/toronto/southern-ontario-rainfall-freezing-rain-9.7123595' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Canadians Fleeing Middle East War Arrive in Saudi Arabia',
            summary: 'Canadian citizens evacuating the Middle East conflict zone have begun arriving in Saudi Arabia as the government scrambles to assist nationals caught in the rapidly escalating Iran war. The evacuees describe harrowing journeys out of conflict areas, with some reporting near-misses from airstrikes and days of uncertainty before being able to leave. Global Affairs Canada says it is working with regional partners to facilitate further evacuations, but the closure of the Strait of Hormuz and attacks on commercial shipping are making logistics increasingly difficult. The arrivals underscore the human cost of the conflict for Canadians abroad and the growing pressure on Ottawa to do more to protect its citizens in the region.',
            tags: ['evacuation', 'Middle East', 'Canadians abroad', 'Iran war', 'Saudi Arabia'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/canadians-fleeing-middle-east-9.7123420' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Ottawa Eyeing Moves to Boost Oil Production Amid Global Supply Shock',
            summary: 'The Canadian federal government is exploring measures to ramp up domestic oil production in response to the global supply shock triggered by Iran\'s blockade of the Strait of Hormuz. With the IEA proposing a record release of strategic reserves and G7 energy ministers in emergency talks, Ottawa sees an opportunity to position Canada as a more reliable energy supplier to allies. The move would mark a significant policy pivot for the Carney government, which has faced criticism for its climate-focused energy agenda. Industry groups in Alberta and Saskatchewan are pushing for fast-tracked approvals, arguing that the geopolitical crisis demonstrates the strategic value of Canadian energy independence. The challenge will be balancing emergency production increases with the government\'s long-term emissions reduction commitments.',
            tags: ['oil production', 'energy policy', 'Canada', 'Iran war', 'supply shock'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/international-business/article-iea-meeting-g7-energy-ministers-release-strategic-oil-reserves/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'NDP MP Lori Idlout Crosses Floor to Liberals, Bringing Carney Closer to Majority',
            summary: 'Nunavut NDP MP Lori Idlout has crossed the floor to join the Liberals, bringing Prime Minister Mark Carney\'s caucus to 170 seats and setting him up to secure a majority government if upcoming byelections go his way. Idlout is the fourth MP to join the Liberals since November, and interim NDP Leader Don Davies appeared to scoop the announcement by releasing a statement expressing disappointment before the Liberals could make it official. The NDP has a longstanding position against floor crossing, calling it a betrayal of voters\' trust. For Carney, the move is a significant political win that strengthens his hand heading into three critical byelections. The Liberals need to win all three races to lock in a narrow majority, and Idlout\'s defection builds momentum at a time when the opposition is struggling to gain traction.',
            tags: ['Idlout', 'NDP', 'Liberals', 'floor crossing', 'Carney majority'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/idlout-crossing-floor-liberals-9.7123443' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'NDP and Conservatives Slam Carney\'s "Contradictory" Iran War Position',
            summary: 'Both the NDP and Conservatives are attacking Prime Minister Carney from opposite flanks on the Iran war, with NDP\'s Don Davies calling the government\'s position "contradictory" and Conservative MPs dismissing Carney\'s response as "mumbo jumbo." The criticism follows Carney\'s absence from Monday\'s take-note debate and his government\'s struggle to articulate a clear stance on Canada\'s role in the conflict. The NDP wants a stronger push for ceasefire and diplomatic solutions, while Conservatives are pressing for more muscular support of the U.S.-led campaign. Carney is caught in a political vice, trying to maintain allied solidarity while responding to a Canadian public that is deeply uneasy about the war\'s economic fallout and the risk of deeper involvement.',
            tags: ['Carney', 'Iran war', 'NDP', 'Conservatives', 'foreign policy'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/ndp-davies-carney-iran-contradictory-9.7123087' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/conservative-mp-carney-iran-response-9.7121665' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Ontario Secures $229M in Federal Funding to Help Tariff-Affected Sectors',
            summary: 'Ontario has secured $229 million in federal funding aimed at helping industries hit hardest by U.S. tariffs, providing a lifeline to manufacturers and exporters struggling with the trade barriers imposed by the Trump administration. The funding package targets sectors including auto parts, steel, and agriculture that have seen significant revenue declines since the tariffs took effect. The announcement reflects the Carney government\'s attempt to demonstrate it is actively mitigating the economic damage from the trade war, even as the Iran conflict adds new layers of uncertainty to the economy. Provincial officials say the money will go toward retraining programs, supply chain diversification, and direct support for affected businesses.',
            tags: ['Ontario', 'tariffs', 'federal funding', 'trade war', 'manufacturing'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/ontario-federal-funding-tariffs-9.7123117' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Federal Judge Backs Lawmakers in Press Credentials Dispute with Conservative Media',
            summary: 'A federal judge in Washington state has ruled that Democratic lawmakers were within their rights to deny press passes to three conservative media figures, finding they are political participants rather than bona fide journalists. The case involved Ari Hoffman of AM 570 KVI, podcaster Brandi Kruse, and Jonathan Choe of the Discovery Institute, who sued after being denied Capitol access. Judge David Estudillo rejected their emergency request for a temporary restraining order, upholding the legislature\'s authority to set its own credentialing standards. The ruling echoes a broader national debate about who qualifies as a journalist in the age of podcasts, influencers, and partisan media. First Amendment advocates are divided, with some warning the decision could be used to exclude legitimate independent media from government proceedings.',
            tags: ['press freedom', 'media credentials', 'First Amendment', 'conservative media', 'Washington'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/press-pass-podcasters-conservative-media-a8f5b5ceac3627dc1931b07a87952551' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Federal Judges Decline to Extend Interim U.S. Attorney Appointment in Milwaukee',
            summary: 'Federal judges in Milwaukee have declined to extend the appointment of interim U.S. Attorney Brad Schimel, creating a potential vacancy in one of Wisconsin\'s most important federal prosecutor positions. The decision is a rebuke of the Trump administration\'s approach to filling U.S. attorney slots, which has relied heavily on interim appointments that bypass Senate confirmation. Schimel, a former Wisconsin attorney general, was installed under a provision that allows courts to appoint interim prosecutors, but the judges\' refusal to extend his term signals growing judicial discomfort with the practice. The vacancy could disrupt ongoing federal cases in the district and adds to a pattern of courts pushing back against executive overreach in the appointment process.',
            tags: ['U.S. attorney', 'Milwaukee', 'judicial independence', 'Trump appointments', 'Wisconsin'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/us-attorney-brad-schimel-interim-appointment-6a4683ca3c516cdd44b9d641fcedaec3' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Hungary\'s Orbán Seizes $82 Million in Ukrainian Cash and Gold',
            summary: 'Hungarian Prime Minister Viktor Orbán has ordered authorities to hold approximately $82 million in seized Ukrainian cash and gold, a provocative move that further strains relations between NATO allies at a time when Western unity is already tested by the Iran war. The seizure, which Hungary frames as a legal enforcement action, has been condemned by Kyiv as an act of hostility and by EU officials as a dangerous escalation within the alliance. The incident highlights Orbán\'s continued willingness to undermine Western consensus on Ukraine, even as the broader geopolitical situation demands solidarity. The move comes as the Russia-Ukraine war continues with no resolution in sight, and analysts warn it could embolden other actors to take similar unilateral actions against Ukrainian assets.',
            tags: ['Orbán', 'Hungary', 'Ukraine', 'gold seizure', 'NATO'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/hungary-orban-ukraine-cash-gold-shipment-1dbb870993cd1386b4270bb473fee733' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Anthropic Launches Research Institute as Co-Founder Jack Clark Takes the Helm',
            summary: 'Anthropic has announced the creation of the Anthropic Institute, a new research arm led by co-founder Jack Clark that will focus on AI safety and policy research independent of the company\'s commercial operations. Clark said he has "no concerns" about research funding and emphasized the institute\'s mission to study the long-term implications of advanced AI systems. The move positions Anthropic to shape AI policy conversations from a dedicated research platform while maintaining separation from its increasingly competitive commercial AI business. The institute launch comes at a fraught moment for the company, which is navigating both rapid growth and political headwinds from the Trump administration. Industry observers see the move as both a genuine commitment to safety research and a strategic effort to build credibility with policymakers and the public.',
            tags: ['Anthropic', 'AI safety', 'Jack Clark', 'research institute', 'AI policy'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Google Expands Gemini in Chrome to Canada and Over 50 Languages',
            summary: 'Google is expanding its Gemini AI assistant built into Chrome to users in Canada, New Zealand, and India, along with support for more than 50 languages including Spanish, French, Hindi, and Chinese. The AI assistant can answer questions about on-screen content, send messages in Gmail, create comparison tables across open tabs, and remix images found online. The rollout represents Google\'s aggressive push to embed AI capabilities directly into its browser, making Gemini a constant companion for everyday web browsing. The expansion to Canada is particularly timely given the country\'s growing tech sector and demand for AI tools. The move intensifies competition with Microsoft\'s Copilot integration in Edge, as both tech giants race to make their browsers the primary interface for AI-assisted productivity.',
            tags: ['Google', 'Gemini', 'Chrome', 'AI assistant', 'Canada'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence/781192/chrome-gemini-ai-agentic-update-google-mac-windows' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Microsoft Teases Next-Gen Xbox "Project Helix" Reveal at GDC 2026',
            summary: 'Microsoft\'s official Game Dev account has posted images tagged as a "sneak peek" for GDC 2026, fuelling speculation that the long-teased Project Helix — Microsoft\'s next Xbox console that will reportedly play PC games natively — is about to be officially revealed. The images appear to show dev kits reminiscent of older Xbox One and Series X hardware, but the GDC timing suggests the new hardware will be unveiled at the developer conference. Project Helix has been one of the gaming industry\'s worst-kept secrets, with Microsoft previously confirming the console would bridge the gap between Xbox and PC gaming. If the reveal happens at GDC, it would mark a departure from the traditional E3 or dedicated Xbox event format, signalling Microsoft\'s focus on courting developers first.',
            tags: ['Microsoft', 'Xbox', 'Project Helix', 'GDC', 'gaming'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/games/890194/microsoft-teases-its-next-xbox-says-project-helix-will-play-pc-games-too' }
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
        delete prefs.likes[storyId];
        story.tags.forEach(tag => { prefs.tags[tag] = Math.max(0, (prefs.tags[tag] || 0) - 1); });
        prefs.categories[story.category] = Math.max(0, (prefs.categories[story.category] || 0) - 1);
        btn.classList.remove('liked');
        btn.querySelector('.label').textContent = 'Like';
    } else {
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

        const summary = document.createElement('p');
        summary.className = 'summary';
        summary.textContent = story.summary;

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
