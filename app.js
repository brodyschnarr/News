// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Saturday, February 28, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'U.S. and Israel Launch Major Military Attack on Iran',
            summary: 'The United States and Israel have launched what officials describe as "massive and ongoing" military strikes against Iran, with explosions reported across multiple Iranian locations including Tehran. President Trump posted a video urging Iranians to "take over" their government once the attack is complete, while Iran has launched retaliatory missiles. Iran\'s foreign minister says the supreme leader and president are alive "as far as I know." The strikes represent the most significant U.S. military action in the Middle East in decades, sending shockwaves through global markets and disrupting flights across the region.',
            tags: ['Iran', 'U.S. military', 'Israel', 'Middle East', 'Trump'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-us-explosion-tehran-c2f11247d8a66e36929266f2c557a54c' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-israel-launches-attack-on-iran-declares-state-of-emergency/' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Neil Sedaka, Iconic Singer-Songwriter Behind Decades of Hits, Dies at 86',
            summary: 'Neil Sedaka, the prolific singer-songwriter who defined an era of American pop music with hits like "Breaking Up Is Hard to Do," "Calendar Girl," and "Laughter in the Rain," has died at the age of 86. Sedaka\'s career spanned from the late 1950s through the 1970s, during which he wrote or co-wrote more than 500 songs and sold tens of millions of records worldwide. His ability to reinvent himself across musical eras — from doo-wop to soft rock — made him one of the most enduring figures in popular music history.',
            tags: ['Neil Sedaka', 'obituary', 'music', 'entertainment'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/neil-sedaka-dead-c1002e2c903a458380d2078a47ab75b5' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/culture/music/article-neil-sedaka-singer-songwriter-dies-rock-n-roll/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Paramount\'s Bid to Buy Warner Bros. Discovery Raises Major Hollywood Consolidation Fears',
            summary: 'Paramount\'s move to acquire Warner Bros. Discovery is being called a "full-blown Hollywood inferno" by industry analysts, with critics warning the mega-merger could dramatically reduce choices for viewers and squeeze out independent voices in entertainment. The deal would combine two of the oldest and most storied studios in film history under one corporate umbrella, raising antitrust questions and concerns about the future of creative competition. If approved, the merged entity would control a massive library of intellectual property and could reshape the streaming landscape.',
            tags: ['Paramount', 'Warner Bros', 'Hollywood', 'media', 'merger'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/culture/film-and-tv/film/article-paramount-warner-bros-deal-netflix/' },
                { title: 'AP News', url: 'https://apnews.com/article/warner-bros-paramount-deal-explained-7c05a7455e3cef11875dd53784dbf9d2' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canadian Passports Are About to Get More Expensive',
            summary: 'The cost of Canadian passports is set to rise, and plans by Prime Minister Mark Carney\'s government to overhaul the way it sets prices could push them even higher in the future. The fee increase comes as Canadians face growing travel costs across the board, and the government\'s broader pricing review has drawn criticism from opposition parties who argue it amounts to a stealth tax on Canadians during a cost-of-living crisis. The passport fee hike is part of a wider modernization effort that officials say will improve processing times and service delivery.',
            tags: ['Canada', 'passports', 'cost of living', 'government fees'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/canadian-passport-price-increase-9.7109168' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Canada\'s Airline Regulator to Probe Puerto Vallarta Flight Disruptions',
            summary: 'Canada\'s transportation regulator has launched an investigation into the recent flight disruptions that stranded Canadian travellers in Puerto Vallarta, Mexico, as cartel violence destabilized the popular tourist destination. The probe will examine how Canadian airlines handled the crisis, including communication with passengers, rebooking procedures, and safety protocols. The disruptions left hundreds of Canadians stranded for days as the Mexican Navy moved in to secure the city, raising questions about travel advisory systems and airline responsibilities during security emergencies abroad.',
            tags: ['Canada', 'airlines', 'Puerto Vallarta', 'Mexico', 'travel'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/canadian-transportation-agency-puerto-vallarta-flight-disruptions-9.7107452' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-mexicans-and-canadians-in-puerto-vallarta-watch-their-step-in-a-cartel/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Bell Canada and Telus Reach Agreement Over Network-Sharing Impasse',
            summary: 'Bell Canada and Telus have resolved a long-standing dispute over their wireless network-sharing arrangement, averting a potential CRTC intervention that could have disrupted service for millions of Canadian mobile customers. The two telecom giants had been locked in disagreement over the terms of their partnership, which allows them to share infrastructure in certain regions to reduce costs and expand coverage. The deal is seen as a win for consumers, as a breakdown in the arrangement could have led to coverage gaps in rural areas and higher costs.',
            tags: ['Canada', 'Bell', 'Telus', 'telecom', 'CRTC'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-bell-canada-telus-agreement-network-sharing-impasse-crtc/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Backs U.S. Strikes on Iran, Tells Canadians in Iran to Shelter in Place',
            summary: 'Prime Minister Mark Carney has expressed Canada\'s support for the U.S.-led military strikes on Iran\'s nuclear program, calling it a necessary action to prevent nuclear proliferation. Speaking during his trade visit to India, Carney urged Canadians in Iran to shelter in place while Foreign Affairs Minister Anand advised Canadians in Israel, Palestine, and Lebanon to leave immediately. The crisis has thrust foreign policy to the top of the Canadian political agenda, with opposition leaders pressing for an emergency debate in Parliament on Canada\'s role and response.',
            tags: ['Canada', 'Carney', 'Iran', 'foreign policy', 'military'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-anand-urges-canadians-to-leave-israel-palestine-and-lebanon-as/' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/livestory/conflict-with-iran-9.7109761' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Carney Aims to Complete Canada-India Trade Deal by Year\'s End',
            summary: 'Prime Minister Carney told business leaders in Mumbai that his government is targeting the completion of a comprehensive trade deal with India before the end of 2026, signalling a dramatic thaw in relations that had been frozen by the diplomatic crisis over the killing of Hardeep Singh Nijjar. Carney said Canada can work with partners even when it disagrees on certain issues, while Foreign Affairs Minister Anand separately stated there will be "no exemptions for India on foreign interference concerns." Canadian universities also signed new partnership agreements with Indian counterparts during the visit.',
            tags: ['Canada', 'India', 'trade', 'Carney', 'diplomacy'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-canada-india-trade-deal-carney-speech/' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-no-exemptions-for-india-on-foreign-interference-concerns-anand-says/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Smith Blames Ottawa\'s Immigration Policies for Alberta\'s Budget Deficit',
            summary: 'Alberta Premier Danielle Smith is pinning her province\'s budget deficit on the federal government\'s immigration policies, claiming an influx of newcomers has strained provincial services beyond capacity. However, Alberta\'s own budget documents don\'t actually support the claim — Provincial Finance Minister Nate Horner admitted he didn\'t have the numbers on how newcomers specifically impacted Alberta\'s bottom line. Critics say Smith is scapegoating immigrants for fiscal challenges driven by volatile oil revenues and the province\'s refusal to implement a sales tax.',
            tags: ['Alberta', 'Danielle Smith', 'immigration', 'budget', 'provincial politics'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/alberta/article-smith-pins-alberta-deficit-on-ottawas-immigration-policies-but-the/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump Takes His Biggest Gamble Yet with Iran Strikes',
            summary: 'President Trump\'s decision to launch military strikes against Iran represents the most consequential and risky move of his presidency, analysts say. The attack on Iran\'s nuclear infrastructure has united some hawks in both parties but drawn fierce criticism from anti-war lawmakers and foreign policy experts who warn of unpredictable escalation. Trump framed the strikes as necessary to prevent Iran from developing nuclear weapons capable of reaching the United States, but the move risks dragging America into a broader Middle East conflict at a time when the administration is already managing economic turbulence from its tariff policies.',
            tags: ['Trump', 'Iran', 'military', 'foreign policy', 'Middle East'],
            category: 'us-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/us-politics/article-trump-iran-strikes-news-analysis/' },
                { title: 'AP News', url: 'https://apnews.com/live/live-updates-israel-iran-february-28-2026' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Treasury Department Terminates Union Contracts for IRS and Fiscal Service Workers',
            summary: 'The Treasury Department has terminated union contracts for workers at the IRS and the Bureau of the Fiscal Service, escalating the Trump administration\'s confrontation with the federal workforce. The move affects thousands of government employees and is part of a broader push to restructure federal agencies and reduce what the administration calls bureaucratic resistance to its agenda. Union leaders have vowed legal challenges, calling the terminations illegal and retaliatory, while congressional Democrats warned the action could cripple tax enforcement and revenue collection.',
            tags: ['IRS', 'unions', 'Treasury', 'Trump', 'federal workforce'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/treasury-irs-fiscal-service-union-contracts-dcd42250d58c8e4d46a2c0256064a857' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Attorney General Indicts 30 More People Who Protested at Minnesota Church',
            summary: 'The U.S. Attorney General has announced indictments against 30 additional people who participated in protests at a Minnesota church where immigration enforcement agents attempted to detain congregants. The latest round of charges brings the total number of people facing federal prosecution over the incident to over 50, in what civil liberties groups are calling an unprecedented crackdown on the right to protest. The church protests became a flashpoint in the national immigration debate after dramatic footage of the confrontation went viral on social media.',
            tags: ['immigration', 'protests', 'Minnesota', 'church', 'indictments'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/immigration-church-minnesota-837d2ebc7a121340a7eaf73600cba019' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Trump Orders U.S. Agencies to Phase Out Anthropic\'s AI Over Security Concerns',
            summary: 'The Trump administration has directed federal agencies to phase out their use of Anthropic\'s AI products after the Pentagon flagged the startup as a supply risk. The move is a significant blow to one of the leading AI companies, which had been building relationships with government clients. The decision reportedly stems from concerns about Anthropic\'s corporate structure, foreign investment ties, and what officials described as insufficient cooperation with national security reviews. The order could reshape the competitive landscape for government AI contracts, benefiting rivals like OpenAI and Google.',
            tags: ['Anthropic', 'AI', 'Pentagon', 'Trump', 'government'],
            category: 'ai-tech',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-trump-directs-us-agencies-to-phase-out-anthropics-ai-as-pentagon-calls/' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Block Lays Off 4,000 Workers, Citing AI as the Reason',
            summary: 'Block, the payments company led by Jack Dorsey, is cutting roughly 4,000 jobs with the CEO claiming AI tools are fundamentally changing "what it means to build and run a company." Dorsey said the layoffs reflect a genuine shift in how software companies operate as AI automates tasks previously done by humans. However, tech industry experts say the narrative is more complicated — pandemic-era overhiring and overly ambitious AI promises have both contributed to the wave of tech layoffs, and companies may be using AI as convenient cover for routine cost-cutting.',
            tags: ['Block', 'Jack Dorsey', 'AI', 'layoffs', 'tech industry'],
            category: 'ai-tech',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/block-layoffs-ai-9.7108981' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Canada\'s Minister to Meet OpenAI CEO Over AI Safety After B.C. Shooting',
            summary: 'Canada\'s innovation minister says OpenAI is still not doing enough to address AI safety concerns in the wake of a shooting in Tumbler Ridge, B.C. that was linked to an individual\'s interactions with an AI chatbot. The minister plans to meet directly with CEO Sam Altman to discuss stronger safety policies. The Globe and Mail reports that the tragedy has underscored the urgent need for regulation around AI chatbots, particularly regarding how companies handle users who express violent ideation — though experts warn that getting regulation wrong could be just as dangerous.',
            tags: ['OpenAI', 'AI safety', 'Canada', 'regulation', 'Tumbler Ridge'],
            category: 'ai-tech',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/open-ai-tumbler-ridge-safety-policies-9.7109001' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-tumbler-ridge-ai-chatbots-regulation/' }
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
