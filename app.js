// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Tuesday, February 17, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Jesse Jackson, Civil Rights Icon and Presidential Candidate, Dies at 84',
            summary: 'Reverend Jesse Jackson, one of the most prominent civil rights leaders of the 20th century and a close associate of Martin Luther King Jr., has died at the age of 84. Jackson ran twice for the Democratic presidential nomination — in 1984 and 1988 — becoming the first major Black candidate to mount a serious national campaign. He founded the Rainbow Coalition and spent decades advocating for voting rights, economic justice, and international diplomacy. His death marks the passing of one of the last towering figures of the civil rights movement era.',
            tags: ['Jesse Jackson', 'civil rights', 'obituary', 'politics'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-jesse-jackson-civil-rights-leader-and-presidential-hopeful-dies-at-84/' },
                { title: 'AP News', url: 'https://apnews.com' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Shooting at Rhode Island Youth Hockey Game Leaves 3 Dead Including Shooter',
            summary: 'A shooting at a youth hockey rink in Pawtucket, Rhode Island left three people dead — including the shooter — and three others wounded, according to authorities. The incident occurred during a game, sending players and spectators scrambling for safety. Police have not yet confirmed a motive. The shooting adds to a growing national conversation about public safety at youth sporting events, with local officials calling for emergency security reviews at sports facilities across the state.',
            tags: ['shooting', 'Rhode Island', 'crime', 'US news'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/pawtucket-hockey-rink-shooting-rhode-island-c8ac3e8067ce2f2ce07e4d98009ecdaa' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Iran and UN Nuclear Watchdog Meet in Geneva Ahead of Further US Talks',
            summary: 'Iranian officials met with representatives from the International Atomic Energy Agency in Geneva in what observers describe as a critical step ahead of renewed diplomatic engagement with the United States over Tehran\'s nuclear program. The talks come after months of escalating tensions, with Iran reportedly advancing uranium enrichment beyond agreed thresholds. Diplomats from both sides have signalled cautious optimism that a framework for negotiations could emerge, though significant gaps over sanctions relief and inspection rights remain unresolved.',
            tags: ['Iran', 'nuclear', 'diplomacy', 'US', 'geopolitics'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-nuclear-talks-us-geneva-8628f2dbd4c911cb4cda5fb92c1aadef' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada vs. US: Women\'s Hockey Gold Medal Showdown Set for Milan-Cortina',
            summary: 'Canada\'s women\'s hockey team punched their ticket to the gold medal game at the 2026 Milan-Cortina Winter Olympics, edging Switzerland 2-1 in a tense semifinal. They will now face their longtime rival the United States, setting up what is expected to be one of the most-watched hockey games of the Games. The storied rivalry between the two programs has defined women\'s Olympic hockey for three decades, with both teams trading gold medals across multiple Games.',
            tags: ['Canada', 'Olympics', 'hockey', 'women\'s hockey', 'Milan-Cortina 2026'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/sports/olympics/article-milan-cortina-2026-womens-hockey-canada-us-rivalry-gold-showdown/' },
                { title: 'CBC Sports', url: 'https://www.cbc.ca/sports' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Car Crash Insurance Reporting: A Legal Requirement Most Canadians Don\'t Know About',
            summary: 'A surprising number of Canadians are unaware that the law requires drivers to report all collisions to their insurer — even minor fender-benders they choose to pay out of pocket. Legal and insurance experts told CBC News that failing to report can void your insurance policy, expose you to personal injury lawsuits years later, and result in dramatically higher premiums if the unreported incident is eventually discovered. The gap in public awareness is prompting calls for clearer communication from provincial insurance regulators.',
            tags: ['Canada', 'insurance', 'law', 'driving', 'consumer'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Canada\'s Olympic Hockey Success Provides Carney Government Brief Political Boost',
            summary: 'Prime Minister Mark Carney\'s office is quietly welcoming the wave of national pride surrounding Canada\'s strong Olympic performance in Milan-Cortina, particularly in hockey, as a welcome distraction from ongoing trade tensions with the United States. Polling analysts note that major international sporting events often provide temporary boosts to incumbent governments through a rally-around-the-flag effect. With both the men\'s and women\'s hockey teams in medal contention and Canada\'s overall medal count near the top, the political optics are unusually favorable for the Liberals.',
            tags: ['Canada', 'Carney', 'Liberals', 'Olympics', 'politics'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/' },
                { title: 'CBC Politics', url: 'https://www.cbc.ca/news/politics' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Canada Marks Family Day With Ongoing Tariff Standoff Looming Over Economy',
            summary: 'As Canadians in most provinces observe Family Day, the federal government faces mounting pressure over its response to US tariff threats that economists say could push Canada into a technical recession. Finance Minister Chrystia Freeland is expected to announce a series of business support measures this week, while premiers from Ontario, Quebec, and Alberta have issued a joint statement demanding a coordinated national industrial strategy. Business groups warn that uncertainty alone is already causing investment freezes and project cancellations.',
            tags: ['Canada', 'Family Day', 'tariffs', 'economy', 'trade'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news' },
                { title: 'Financial Post', url: 'https://financialpost.com' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Court Orders Trump Administration to Restore George Washington Slavery Exhibit in Philadelphia',
            summary: 'A federal judge ordered the Trump administration to immediately restore a historic exhibit at the President\'s House site in Philadelphia that documents George Washington\'s use of enslaved people at what was once the executive mansion. The administration had removed the exhibit as part of a broader rollback of federally-funded programming related to racial history, drawing immediate legal challenges from civil liberties groups. The ruling is being closely watched as a test of executive authority over publicly-funded historical interpretation.',
            tags: ['Trump', 'George Washington', 'slavery', 'history', 'courts'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/george-washington-slavery-exhibit-restored-trump-2a32236320f280ba3e647d900c1301b4' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Trump and Maryland Governor Moore Trade Accusations Over Potomac River Sewage Crisis',
            summary: 'President Trump and Maryland Governor Wes Moore are locked in a public dispute over responsibility for a major sewage spill into the Potomac River, with each blaming the other\'s administration for inadequate infrastructure investment and slow emergency response. The spill has affected drinking water intakes downstream and prompted beach closures along a stretch of the river near the capital. Environmental advocates say the confrontation is overshadowing the urgent need for bipartisan infrastructure investment in aging regional wastewater systems.',
            tags: ['Trump', 'Maryland', 'environment', 'Potomac', 'US politics'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-wes-moore-potomac-sewage-spill-bc43a446ea2db477501d90f1725a8935' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Sony Develops AI to Track Source Material Used in AI-Generated Music',
            summary: 'Sony has developed technology that can identify which real artists and recordings had the most influence on AI-generated music tracks — and crucially, it works even without cooperation from the AI developers who made the song. The company says the tool could underpin a future licensing system where human artists are compensated when their work is used to train AI models. Sony has "yet to decide" when to deploy it commercially, but the announcement signals a major push by the music industry to claw back economic value from AI generation.',
            tags: ['Sony', 'AI', 'music', 'copyright', 'licensing'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Wired', url: 'https://www.wired.com' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Nothing Confirms Phone 4A Launch for March 5th',
            summary: 'Nothing has officially confirmed that its highly anticipated Phone 4A will launch on March 5th, ending months of speculation about the mid-range device\'s release window. The Phone 4A is expected to target the value segment more aggressively than its predecessors, bringing Nothing\'s distinctive transparent design and Glyph lighting system to a broader audience. The announcement comes as the competitive mid-range Android market heats up, with multiple manufacturers launching new devices in the first quarter.',
            tags: ['Nothing', 'Phone 4A', 'Android', 'smartphones', 'tech'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: '9to5Google', url: 'https://9to5google.com' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'X Under Fire Again as Grok AI Generates Sexualized Images',
            summary: 'X is facing fresh regulatory and public scrutiny after its Grok AI image generation tool was found producing sexualized content that critics say violates platform policies and potentially applicable laws in several jurisdictions. The controversy follows earlier incidents in which Grok generated deepfake images of celebrities without consent. EU regulators have signalled they are examining whether the platform\'s safeguards meet requirements under the Digital Services Act, adding to a growing list of compliance concerns for Elon Musk\'s social media platform.',
            tags: ['X', 'Grok', 'AI', 'content moderation', 'Elon Musk'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Reuters', url: 'https://www.reuters.com' }
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
