// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Monday, March 16, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'European Allies Seek Clarity on Trump\'s Calls to Send Warships to Strait of Hormuz',
            summary: 'European allies scrambled Monday to respond to President Trump\'s escalating demands that NATO partners deploy warships to the Strait of Hormuz to secure global oil shipments during the Iran war. UK Prime Minister Starmer ruled out a NATO-led mission to forcibly open the strait after meeting with Canadian PM Carney, but said both leaders "condemned the Iranian regime\'s missile and drone attacks" and are working with allies on an alternative plan. The diplomatic confusion underscores fractures within the Western alliance over how far to go in supporting U.S. military operations against Iran, with European capitals wary of being drawn deeper into a conflict many of their publics oppose. Oil markets remain volatile as roughly 20% of global crude passes through the contested waterway.',
            tags: ['Iran war', 'Strait of Hormuz', 'NATO', 'Starmer', 'Carney'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-16-2026' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-starmer-carney-meeting-strait-of-hormuz-iran-war/' }
            ]
        },
        {
            id: 'top-2',
            headline: '\'One Battle After Another\' Sweeps Oscars with Six Wins Including Best Picture',
            summary: 'Paul Thomas Anderson\'s sprawling political epic "One Battle After Another" dominated the 2026 Academy Awards on Sunday night, collecting six Oscars including Best Picture and Best Director. Sean Penn won Best Supporting Actor for his role but opted not to attend the ceremony. The film\'s sweep was a triumph for ambitious, auteur-driven filmmaking in an era increasingly dominated by franchises and sequels. Canadian talent also had a strong showing, with the Globe and Mail calling it a night where "Canadians triumph in heated rivalry with Hollywood." The ceremony itself drew praise for its pacing and relatively drama-free proceedings, though Penn\'s conspicuous absence generated its own share of backstage buzz and speculation.',
            tags: ['Oscars 2026', 'One Battle After Another', 'Paul Thomas Anderson', 'Sean Penn', 'awards'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/live/oscars-2026-updates' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/culture/film-and-tv/film/article-oscars-2026-best-and-worst-moments/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'USMCA Trade Negotiations Begin Monday as Tariff Tensions Simmer',
            summary: 'Tricky negotiations to renew the United States-Mexico-Canada Agreement kicked off Monday with all three countries arriving at the table under starkly different circumstances than when the deal was first struck. Trump\'s aggressive tariff posture — including levies on Canadian steel and aluminum — has poisoned the atmosphere, while Mexico is pushing back on labour provisions it says unfairly target its manufacturing sector. For Canada, the stakes are existential: roughly 75% of Canadian exports go to the U.S., and a breakdown in talks could send the already-fragile Canadian economy into recession. Trade analysts say the negotiations could drag on for months, with each side using the threat of walking away as leverage in a high-stakes game of economic brinkmanship.',
            tags: ['USMCA', 'trade', 'tariffs', 'Trump', 'Canada-US relations'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-usmca-mexico-canada-trade-tariffs-7a838812f96da25af9f7975461421ed2' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada\'s Inflation Rate Falls to 1.8% in February as Tax Holiday Effect Fades',
            summary: 'Canada\'s annual inflation rate eased to 1.8% in February, Statistics Canada reported Monday, a reading driven partly by the tail end of last year\'s temporary sales tax holiday that kept consumer prices lower for part of the month. The figure gives the Bank of Canada some breathing room, though economists warn the number masks rising pressure from oil-driven costs tied to the Iran war that haven\'t fully filtered through yet. The Bank of Canada is widely expected to hold interest rates at its next decision amid uncertainty about whether energy prices will push inflation back up in coming months. For Canadian households already stretched by high mortgage costs, the modest inflation reading offers little comfort as grocery and fuel prices remain stubbornly elevated.',
            tags: ['inflation', 'CPI', 'Bank of Canada', 'interest rates', 'economy'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/canada-annual-inflation-rate-february-2026-9.7130104' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/economy/article-canadas-inflation-rate-february-statscan-interest-rates/' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'BCE Plans $1.7-Billion AI Data Centre in Saskatchewan',
            summary: 'Canada\'s largest telecom company BCE announced plans to build a $1.7-billion artificial intelligence data centre in Saskatchewan, part of the company\'s push to diversify its revenue streams beyond traditional telecommunications. The facility would be one of the largest purpose-built AI computing centres in Canada and reflects the growing global race to secure data centre capacity as AI workloads explode. Saskatchewan\'s cold climate, relatively cheap electricity, and available land make it an attractive location for power-hungry computing infrastructure. The announcement comes as Canadian tech leaders warn that the country risks falling behind the U.S. and China in AI infrastructure investment, and positions BCE as a major player in the emerging AI compute economy.',
            tags: ['BCE', 'AI', 'data centre', 'Saskatchewan', 'telecom'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-bce-plans-to-build-saskatchewan-ai-data-centre/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: '\'Extremely Hazardous\' Winter Storm Closes Highways Across Northeastern Ontario',
            summary: 'A major winter storm slammed northeastern Ontario on Monday, forcing highway closures, cancelling flights at Sudbury airport, and knocking out power to thousands of residents across Manitoulin Island and the French River area. Hydro One crews are working to restore service as blowing snow and ice make conditions dangerous for both travel and repair work. Environment Canada issued rare "extremely hazardous" warnings for the region, urging residents to stay home and avoid all non-essential travel. The storm is a reminder that despite calendar spring being days away, Canadian winters still pack a punch well into March — and that northern Ontario\'s aging power infrastructure remains vulnerable to severe weather events.',
            tags: ['winter storm', 'Ontario', 'highways', 'power outages', 'Sudbury'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/sudbury/livestory/ontario-winter-weather-warning-highway-closures-power-outages-9.7130111' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Starmer and Carney Meet to Coordinate on Iran, Rule Out NATO Hormuz Mission',
            summary: 'UK Prime Minister Keir Starmer and Canadian PM Mark Carney held talks Monday focused on the Iran crisis, with Starmer publicly ruling out a NATO-led naval mission to forcibly reopen the Strait of Hormuz despite pressure from Washington. Both leaders condemned Iran\'s attacks but signaled they\'re pursuing a diplomatic track rather than military escalation, a position that puts them at odds with Trump\'s more hawkish demands. The meeting underscores Carney\'s strategy of positioning Canada as a bridge between European caution and American aggression on the world stage. For domestic audiences, Carney\'s restraint plays well with a Canadian public deeply skeptical of being dragged into another American-led Middle Eastern conflict.',
            tags: ['Carney', 'Starmer', 'Iran war', 'NATO', 'diplomacy'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-starmer-carney-meeting-strait-of-hormuz-iran-war/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Poilievre Pitches Tariff-Free Auto Industry Pact with the U.S.',
            summary: 'Conservative leader Pierre Poilievre proposed a bilateral tariff-free agreement specifically for the auto industry between Canada and the United States, an idea critics are already calling a throwback to the 1965 Auto Pact. The pitch comes as USMCA renegotiations begin and Canadian autoworkers face an uncertain future with Trump\'s tariff threats hanging over the sector. Poilievre framed the proposal as a way to protect hundreds of thousands of Canadian manufacturing jobs that depend on integrated cross-border supply chains. However, Globe and Mail columnist Campbell Clark noted that Poilievre is "arriving late to the auto debate" with a plan that may be more politically convenient than practically achievable, given that any such deal would require Trump to agree to sector-specific carve-outs he\'s shown no interest in.',
            tags: ['Poilievre', 'auto industry', 'tariffs', 'trade', 'Conservatives'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-poilievre-pitches-tariff-free-auto-industry-pact-with-us/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Company Offers Private Deep-Water Baffin Island Port to National Defence',
            summary: 'A private company has offered the Department of National Defence use of its deep-water port on Baffin Island, a move that could significantly bolster Canada\'s Arctic military presence without the decade-long wait for new government-built infrastructure. The port would give the Canadian Armed Forces year-round naval access to waters that are increasingly contested as climate change opens new Arctic shipping routes and Russia and China expand their northern ambitions. The offer highlights an emerging trend of private-sector solutions to Canada\'s chronic defence infrastructure gaps, though critics worry about relying on corporate partners for sovereign military capabilities. The proposal comes as the Carney government faces mounting pressure to demonstrate it\'s serious about Arctic sovereignty beyond just announcements and spending promises.',
            tags: ['Arctic', 'Baffin Island', 'defence', 'sovereignty', 'military'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-baffin-island-port-department-of-national-defence-offer/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump Immigration Data Becomes Harder to Find as Deportation Push Accelerates',
            summary: 'As the Trump administration ramps up its deportation campaign, key immigration data and statistics are becoming increasingly difficult to access, according to an AP investigation. Government websites that previously published regular enforcement figures have gone dark or been restructured, making it nearly impossible for journalists, researchers, and advocacy groups to independently verify the administration\'s claims about deportation numbers. The data blackout comes as ICE operations intensify across the country, with reports of drone surveillance over activist neighborhoods in Minnesota and expanded use of facial recognition technology. Critics say the lack of transparency is deliberate, designed to prevent accountability while allowing the administration to make unchallenged claims about the success of its immigration crackdown.',
            tags: ['immigration', 'deportation', 'data transparency', 'Trump', 'ICE'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-immigration-data-numbers-deportations-000a289890193c94474f19b877eb37d1' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Trump Agency Threatens Media-Rating Company NewsGuard, Calling It a Threat to Free Speech',
            summary: 'A Trump administration agency is threatening the livelihood of NewsGuard, a media-monitoring company that rates news outlets on reliability and transparency, reportedly through an FTC investigation that the company says is retaliatory. NewsGuard has consistently flagged misinformation from outlets sympathetic to the administration, making it a target for officials who view media accountability tools as censorship infrastructure. The company says the investigation is designed to intimidate it into silence and sends a chilling message to any organization that fact-checks or rates media credibility. Press freedom advocates warn the move fits a broader pattern of using government power to punish critics and undermine independent information ecosystems ahead of the 2026 midterms.',
            tags: ['NewsGuard', 'media freedom', 'FTC', 'Trump', 'press freedom'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-administration-newsguard-media-monitoring-ftc-investigation-291c71ebc2d00020326a56807ffccf5f' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Airline CEOs Demand Congress Restore Homeland Security Funding and Pay Airport Workers',
            summary: 'The CEOs of America\'s largest airlines issued a rare joint demand Monday urging Congress to restore funding to the Department of Homeland Security and ensure airport security workers are paid, warning that the ongoing budget standoff is creating safety risks at airports nationwide. TSA staffing shortages caused by funding uncertainty are already leading to longer security lines and increased wait times at major hubs, and airline executives say the situation is unsustainable heading into the busy spring travel season. The appeal puts corporate America squarely at odds with congressional Republicans who have been using DHS funding as leverage in broader budget negotiations. For travelers, the message is blunt: political dysfunction in Washington is making flying less safe and less pleasant.',
            tags: ['airlines', 'DHS funding', 'TSA', 'Congress', 'travel'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/airlines-ceo-homeland-security-funding-shutdown-789e7fdebd77ed80f1b529fa2fdebf01' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Meta Reportedly Plans to Cut at Least 20% of Its Workforce as It Bets Everything on AI',
            summary: 'Meta is planning to slash at least 20% of its global workforce in what would be one of the largest tech layoffs in history, according to reports from the Globe and Mail and multiple outlets. The cuts are driven by CEO Mark Zuckerberg\'s aggressive pivot toward artificial intelligence, with the company redirecting billions in savings from human employees toward AI infrastructure, compute capacity, and research talent. The layoffs would affect tens of thousands of workers across Meta\'s family of apps including Facebook, Instagram, and WhatsApp. The move signals that the era of big tech companies maintaining massive human workforces may be ending, as AI tools increasingly handle tasks from content moderation to code generation that previously required armies of employees.',
            tags: ['Meta', 'layoffs', 'AI', 'Zuckerberg', 'big tech'],
            category: 'ai-tech',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/technology/article-meta-platforms-layoffs-work-force-cuts-ai-spending/' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'JD.com Launches Joybuy in Europe to Take on Amazon with Same-Day Delivery',
            summary: 'Chinese e-commerce giant JD.com has officially launched its Joybuy platform in the UK, Germany, France, the Netherlands, Belgium, and Luxembourg — a direct challenge to Amazon\'s European dominance. The platform offers free same-day delivery on orders over £29 and a monthly membership at £3.99, significantly undercutting Amazon Prime\'s £8.99 UK price. Built on JD.com\'s own logistics network rather than relying on third-party carriers, Joybuy spans tech, beauty, grocery, appliances, and homeware categories. The launch represents the most ambitious attempt yet by a Chinese tech company to compete head-to-head with Amazon in Western markets, and comes at a time when geopolitical tensions between China and the West make the commercial rivalry all the more charged.',
            tags: ['JD.com', 'Joybuy', 'Amazon', 'e-commerce', 'Europe'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Google Overhauls Maps with AI-Powered Features Using Gemini',
            summary: 'Google announced a major overhaul of its Maps application on Monday, integrating Gemini AI features designed to help users navigate, discover places, and plan routes more intuitively. The update brings conversational search to Maps — users can now ask natural-language questions like "find a quiet café with good Wi-Fi near me" and get contextually relevant results. The AI can also summarize reviews, predict crowd levels, and suggest optimal departure times based on real-time traffic patterns. The refresh positions Google Maps as more of an AI-powered personal assistant for the physical world rather than just a navigation tool, and puts further pressure on Apple Maps to keep pace in the AI integration race that is reshaping every major consumer tech product.',
            tags: ['Google', 'Maps', 'Gemini', 'AI', 'navigation'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/google-maps-ai-gemini-update-1933c40eaecfdbb9aa54d8ae3efcec2e' }
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
