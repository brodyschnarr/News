// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Monday, March 9, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Iran Names Mojtaba Khamenei as New Supreme Leader as Oil Surges Past $100',
            summary: 'Iran has named Mojtaba Khamenei — son of the late Ayatollah Ali Khamenei — as its new Supreme Leader, signalling that hardliners remain firmly in control even as the country endures devastating strikes on its energy infrastructure. Oil prices surged past $100 a barrel and briefly spiked near $120 before pulling back, as strikes on oil facilities across the Middle East and fears over Strait of Hormuz shipping rattled global markets. Wall Street futures slumped and investor sentiment continues to slide as the conflict shows no sign of abating. The G7 is now discussing tapping strategic oil reserves as Iran vows to use surging prices as leverage against the Western coalition.',
            tags: ['Iran war', 'Mojtaba Khamenei', 'oil prices', 'Supreme Leader', 'Middle East'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/livestory/iran-israel-us-war-day-10-9.7119190' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-mojtaba-khamenei-new-supreme-leader/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-khamenei-03-09-2026' }
            ]
        },
        {
            id: 'top-2',
            headline: 'NATO Shoots Down Second Iranian Ballistic Missile Entering Turkey\'s Airspace',
            summary: 'NATO intercepted and shot down a second Iranian ballistic missile that entered Turkish airspace, a dramatic escalation that draws the Western military alliance closer to direct confrontation with Tehran. The incident underscores how the Iran war is spilling beyond the Middle East and testing NATO\'s collective defence commitments under Article 5. Turkey, which shares a border with Iran, finds itself in an increasingly precarious position as missiles and debris threaten its territory. Meanwhile, Israel has begun ground raids in Lebanon, opening yet another front in a conflict that continues to widen. The missile interception has intensified diplomatic pressure on all sides, with calls for ceasefire negotiations growing louder even as military operations escalate.',
            tags: ['NATO', 'Turkey', 'Iran', 'ballistic missile', 'Article 5'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-war-nato-turkey/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-khamenei-03-09-2026' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Live Nation and DOJ Reach Settlement in Ticketmaster Antitrust Case',
            summary: 'Live Nation and the U.S. Department of Justice have reached a settlement in the landmark antitrust case that accused the entertainment giant of operating an illegal monopoly through its Ticketmaster subsidiary. The deal reportedly allows Live Nation to keep Ticketmaster but requires significant concessions around exclusive venue contracts and amphitheatre usage. Some state attorneys general may still push ahead with their own cases regardless of the federal settlement. The resolution comes after the trial began last week following a failed bid by Live Nation to have the lawsuit dismissed entirely. The settlement is a mixed result for consumers who hoped the case would force a breakup of the ticketing behemoth that has long been blamed for sky-high concert prices and service fees.',
            tags: ['Live Nation', 'Ticketmaster', 'antitrust', 'DOJ', 'settlement'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/entertainment/live-nation-doj-settlement-9.7120378' },
                { title: 'AP News', url: 'https://apnews.com/article/livenation-antitrust-justice-department-0a6ef66f497e5f626096de753bfff8ce' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canadian Military Personnel Identified on White Supremacist Dating Site',
            summary: 'A CBC News visual investigation has revealed that members of the Canadian Armed Forces are among the profiles leaked from a whites-only dating website that promoted white supremacist ideology. The discovery raises serious questions about the military\'s ability to identify and root out extremism within its ranks, an issue that has plagued the institution for years despite repeated pledges to address it. The leaked profiles were cross-referenced with publicly available information to confirm the identities of serving members. Defence experts say the findings underscore the need for more aggressive screening and monitoring, while civil liberties advocates caution that any crackdown must respect due process and privacy rights.',
            tags: ['Canadian military', 'white supremacy', 'extremism', 'Armed Forces', 'investigation'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/whitedate-canada-military-9.7117307' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Alberta Schools Pull More Than 160 Titles Under Ban on Explicit Images',
            summary: 'Alberta school divisions complying with a provincial order have removed more than 160 titles from their shelves, ranging from illustrated versions of literary classics to coming-of-age memoirs and dramatic retellings of mythology. The ban targets books containing explicit images of sexual acts, but critics say the dragnet approach has swept up acclaimed graphic novels that deal thoughtfully with identity, history, and adolescence. Access to information requests reveal the full scope of the removals for the first time, sparking fierce debate over where to draw the line between protecting children and censoring important literary works. Educators and librarians warn that the ban is having a chilling effect on what teachers feel comfortable including in their curricula.',
            tags: ['Alberta', 'book ban', 'schools', 'graphic novels', 'censorship'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/edmonton/alberta-school-book-ban-order-graphic-novels-9.7118495' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Ontario Premier Defends Health-Care Record as Hospitals Warn of Financial Crisis',
            summary: 'Ontario Premier Doug Ford is defending his government\'s health-care spending record as hospitals across the province warn that a financial crisis is looming. Hospital administrators say years of underfunding, compounded by inflation and surging demand, have pushed the system to a breaking point where facilities may be forced to cut services or close beds. Ford insists his government has invested record amounts in health care, but critics point out that per-capita spending has actually declined when adjusted for inflation and population growth. The clash comes at a politically sensitive time as health care consistently ranks as the top concern for Ontario voters, and opposition parties are seizing on the hospital warnings as evidence of government failure.',
            tags: ['Ontario', 'health care', 'hospitals', 'Doug Ford', 'funding'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/toronto/doug-ford-health-care-spending-9.7116136' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Calls Special Elections for Three Ridings That Could Deliver Majority Government',
            summary: 'Prime Minister Mark Carney has called special elections in three federal districts, a strategic move that could hand the Liberals a majority government if they sweep all three seats. The byelections are a critical test of whether Carney\'s early popularity as PM translates into actual ballot-box support. With Parliament sitting as a minority, every seat matters, and the Liberals are betting that Carney\'s honeymoon period and the rally-around-the-flag effect of the Iran war will carry them to victory. The NDP and Conservatives are expected to campaign hard, framing the races as a referendum on Liberal governance rather than a personal vote on Carney\'s appeal.',
            tags: ['Carney', 'byelections', 'majority government', 'Liberals', 'Parliament'],
            category: 'canadian-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/carney-liberals-election-majority-parliament-1b165c66e00a9f76b0072b815a458d5f' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/voting-ndp-leadership-race-convention-9.7119241' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Voting Begins for New Federal NDP Leader',
            summary: 'Voting has officially opened in the federal NDP leadership race, as the party looks to choose a successor who can rebuild its brand and challenge both the Liberals and Conservatives. The race comes at a pivotal moment for the NDP, which is trying to carve out a distinct identity under a new leader while navigating the political complexities of the Iran war and a shifting economic landscape. Candidates have debated issues from housing affordability to pharmacare, with the party\'s activist base pushing for a more aggressive progressive platform. The outcome will shape the NDP\'s strategy heading into potential byelections and an eventual general election, with the winner needing to quickly unify the party and raise its national profile.',
            tags: ['NDP', 'leadership race', 'federal politics', 'voting', 'progressive'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/voting-ndp-leadership-race-convention-9.7119241' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Carney Government Proposes Parliamentary Debate on Iran War',
            summary: 'The Carney government has proposed a formal House of Commons debate on Canada\'s role in the Iran war, a move that could force all parties to publicly state their positions on the conflict. The proposal comes as Canadians grow increasingly anxious about the war\'s economic fallout — particularly soaring energy prices — and its implications for Canadian troops and diplomats in the region. Opposition parties have called for greater transparency about Canada\'s military contributions and diplomatic strategy, and a debate would provide a forum for those questions. The motion also tests the dynamics of Carney\'s minority Parliament, where he\'ll need opposition support to pass any meaningful resolutions on the conflict.',
            tags: ['Carney', 'Iran war', 'Parliament', 'debate', 'foreign policy'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-carney-government-debate-iran-war-house-leader/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'DHS Shutdown Causes Chaos at Airport Security Checkpoints Nationwide',
            summary: 'Travellers across the United States are encountering hours-long waits at airport security checkpoints as a Department of Homeland Security shutdown disrupts TSA operations. The staffing crisis has left checkpoints understaffed at major airports, with some passengers reporting missing flights due to the delays. The shutdown stems from a congressional budget impasse that has left DHS without funding, and there\'s no clear timeline for resolution. Airlines are urging passengers to arrive at least three hours early for domestic flights, while lawmakers trade blame over the funding gridlock. The disruption highlights the real-world consequences of Washington\'s political dysfunction, hitting millions of ordinary travellers during what is already a stressful travel season.',
            tags: ['DHS shutdown', 'TSA', 'airports', 'travel delays', 'Congress'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/airports-long-lines-tsa-be150ad677e71fe5fd5fecf57ba12a52' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Trump\'s "Roaring" Economy Meets a Rough Start to 2026',
            summary: 'Despite President Trump\'s insistence that the American economy is "roaring," the latest numbers paint a grimmer picture as 2026 gets underway. Oil prices driven sky-high by the Iran war are pushing gas costs up sharply, inflation remains stubbornly above target, and consumer confidence is dropping. The jobs picture, while still technically strong, is softening in key sectors as businesses brace for the economic ripple effects of war and lingering tariffs. Trump continues to dismiss the headwinds, rejecting calls to tap the Strategic Petroleum Reserve and blaming negative indicators on media bias. Economists warn that if the conflict drags on, the combination of energy costs and trade disruptions could tip the economy into a genuine slowdown.',
            tags: ['economy', 'inflation', 'oil prices', 'Trump', 'recession risk'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-economy-iran-inflation-jobs-gas-prices-7fbd5e99e3b6023963dd3de226aee4e4' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Fox News Apologizes for Airing Old Footage of Hatless Trump at Dignified Transfer',
            summary: 'Fox News has issued an apology after broadcasting old video footage showing President Trump without a hat at a dignified transfer ceremony at Dover Air Force Base, where fallen service members\' remains are received. The network admitted the editing error was a mistake and not intentional, but the incident has ignited a firestorm on social media and drawn criticism from both sides of the political aisle. The dignified transfer ceremonies have taken on heightened significance during the Iran war, as the number of American casualties mounts. The gaffe is particularly embarrassing for Fox, which has been Trump\'s most reliable media ally, and it underscores the intense scrutiny surrounding every aspect of the president\'s conduct during wartime.',
            tags: ['Fox News', 'Trump', 'dignified transfer', 'media', 'Iran war'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/baseball-cap-fox-news-trump-dover-dignified-transfer-29a8f2c1a4a6b2218d18daa2eb5109d9' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Microsoft Brings Anthropic\'s Claude Cowork to Copilot for Multi-Step AI Tasks',
            summary: 'Microsoft is integrating Anthropic\'s Claude Cowork feature into its Copilot assistant, a significant collaboration aimed at helping users perform long-running, multi-step tasks. The integration was built in close partnership with Anthropic and represents a notable shift in the AI competitive landscape, with Microsoft embracing a rival\'s technology to enhance its own product. The Cowork feature is designed to handle complex workflows that go beyond simple question-and-answer interactions, such as research projects, document analysis, and code reviews. It\'s currently in testing and will be available to preview later this month through Microsoft\'s Frontier program. The partnership signals that the AI industry may be moving toward more interoperability between competing systems.',
            tags: ['Microsoft', 'Anthropic', 'Claude', 'Copilot', 'AI agents'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence/860730/anthropic-cowork-feature-ai-agents-claude-code' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Qualcomm Unveils Arduino Ventuno Q Board for Robots and AI',
            summary: 'Following its acquisition of Arduino last October, Qualcomm has announced the Arduino Ventuno Q, a new single-board computer designed for building autonomous robots and AI-powered machines. The board is powered by a Dragonwing IQ8 processor with 16GB of RAM and a 40 TOPS neural processing unit, making it a serious contender for edge AI applications. Pricing and availability haven\'t been confirmed yet, but the specs position it as a significant step up from hobby-grade boards. The Ventuno Q is designed to process input from connected sensors and enable machines to function autonomously, targeting the growing market for robotics development platforms that bridge the gap between prototyping and production-ready hardware.',
            tags: ['Qualcomm', 'Arduino', 'robotics', 'AI hardware', 'edge computing'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Arduino Blog', url: 'https://blog.arduino.cc/2026/03/09/introducing-arduino-ventuno-q-your-new-ai-robotics-and-actuation-platform/' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Apple Launches $599 iPhone 17e and New MacBook in Budget-Friendly Push',
            summary: 'Apple has kicked off what it\'s calling a "big week" with the launch of two $599 devices aimed squarely at budget-conscious buyers: the iPhone 17e and an updated entry-level MacBook. The dual launch signals Apple\'s recognition that not every customer wants a $1,000+ flagship, especially as inflation and economic uncertainty squeeze consumer spending. The iPhone 17e slots in as Apple\'s most affordable current-generation iPhone while still including key features like the latest A-series chip and improved cameras. The new MacBook targets students and first-time buyers with a competitive price point for Apple silicon. Both launches come as Apple navigates a complicated global market disrupted by the Iran war and tariff uncertainty.',
            tags: ['Apple', 'iPhone 17e', 'MacBook', 'budget devices', 'consumer tech'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/apple-iphone17e-macbook-monitors-ipad-e52b1d9b4df4c0bc6b40b11dc155450b' }
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
