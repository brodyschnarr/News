// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Thursday, March 12, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Iran\'s New Supreme Leader Vows to Keep Strait of Hormuz Closed as Oil Nears $100',
            summary: 'Mojtaba Khamenei, Iran\'s newly appointed Supreme Leader, has issued his first public statement vowing to keep the Strait of Hormuz closed and demanding the U.S. close all military bases in the region before any negotiations can begin. The defiant posture sent oil prices surging to nearly $100 a barrel in Thursday trading, while global stock markets plummeted on fears of a prolonged energy crisis. The IEA has declared this the largest oil supply disruption in history, and G7 energy ministers are scrambling to coordinate a response. The closure has paralyzed one of the world\'s most critical shipping lanes, through which roughly 20% of global oil passes daily, and Iran may have also laid sea mines to enforce the blockade.',
            tags: ['Iran war', 'Strait of Hormuz', 'oil prices', 'Mojtaba Khamenei', 'energy crisis'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-iran-war-oil-tankers-energy-prices-trump/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-12-2026' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/oil-prices-markets-thursday-march-12-9.7125437' }
            ]
        },
        {
            id: 'top-2',
            headline: 'U.S. Military Strike on Iranian School Confirmed by Internal Probe',
            summary: 'An internal U.S. military investigation has reportedly confirmed that American forces were responsible for a deadly strike on an Iranian elementary school, with outdated intelligence likely leading to the catastrophic targeting error. The revelation, first reported by the AP, is expected to intensify international condemnation of the U.S. campaign and complicate the Trump administration\'s narrative about precision strikes. Pentagon chief Pete Hegseth has simultaneously blocked photographers from his Iran war briefings, drawing accusations of restricting press access during wartime. The school strike is already being compared to some of the most infamous civilian casualty incidents in recent American military history, and could become a defining moment in public opinion on the conflict.',
            tags: ['Iran war', 'school strike', 'Pentagon', 'Hegseth', 'civilian casualties'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-us-school-hegseth-trump-2ffff06808f7a584b0a03831897ab0b8' },
                { title: 'AP News', url: 'https://apnews.com/article/hegseth-pentagon-briefings-photographers-ad0cc21ad17d299c90284788fba62b5a' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Tornadoes Kill Two in Indiana as Severe Weather Ravages the Midwest',
            summary: 'Deadly tornadoes tore through northwestern Indiana and Kankakee, Illinois on Wednesday, killing at least two people and leveling buildings across a wide swath of the Midwest. The storms are part of an intense weather system that has also battered eastern Canada with freezing rain and ice. Emergency crews are conducting search and rescue operations in the hardest-hit areas, where entire blocks have been flattened. The severe weather event comes on top of the economic stress many American households are already facing from surging energy prices tied to the Iran conflict, compounding the sense of crisis across the country.',
            tags: ['tornadoes', 'Indiana', 'Illinois', 'severe weather', 'Midwest'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/tornado-severe-weather-illinois-indiana-midwest-dce09b60816c498aad9c2a79c18285c1' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Hundreds of Thousands Without Power as Quebec and Atlantic Canada Hammered by Storm',
            summary: 'A massive winter storm has left hundreds of thousands of homes and businesses without power across Quebec and Atlantic Canada, with school closures continuing for a second day and Newfoundland facing what forecasters are calling a "dog\'s breakfast" of dangerous weather conditions. The storm system, which combines freezing rain, heavy snow, and high winds, has paralyzed transportation networks and forced emergency shelters to open across multiple provinces. Hydro-Québec crews are working around the clock to restore power, but officials warn some areas may remain in the dark for days. The storm compounds an already difficult winter for Canadians dealing with soaring energy costs driven by the Iran war\'s disruption of global oil supplies.',
            tags: ['storm', 'power outages', 'Quebec', 'Newfoundland', 'school closures'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/montreal/storm-power-outages-quebec-9.7125282' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Air Transat and Air Canada Hike Ticket Prices as Jet Fuel Costs Soar',
            summary: 'Canadian airlines are passing the pain of the oil crisis directly to travellers, with Air Transat announcing higher fares on European routes and Air Canada adjusting prices across its network as jet fuel costs spike to levels not seen in years. The price increases are a direct consequence of the Iran war\'s disruption of global energy markets, with the Strait of Hormuz blockade sending crude oil toward $100 a barrel. Industry analysts warn the fare hikes are likely just the beginning, as airlines burn through fuel hedges secured at lower prices. The increases will hit hardest during the spring and summer travel season, potentially dampening demand for international travel at a time when Canadian carriers were counting on a strong recovery year.',
            tags: ['airlines', 'jet fuel', 'Air Transat', 'Air Canada', 'oil crisis'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/air-transat-charging-more-flights-europe-9.7124548' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Canada\'s Trade Deficit Widens to $3.65 Billion in January on Auto Weakness',
            summary: 'Canada\'s trade deficit ballooned to $3.65 billion in January, larger than economists expected, driven primarily by a sharp drop in motor vehicle and parts exports. The figures from Statistics Canada underscore the ongoing damage from U.S. tariffs on the auto sector, which has been one of the hardest-hit industries in the Canada-U.S. trade war. The wider deficit adds to concerns about the health of the Canadian economy heading into a period of heightened uncertainty, with the Iran conflict piling energy-related inflation on top of the existing tariff pressures. The data will likely factor into the Bank of Canada\'s upcoming rate decision, as policymakers weigh slowing trade against persistent inflationary forces.',
            tags: ['trade deficit', 'auto sector', 'tariffs', 'Statistics Canada', 'economy'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/economy/article-canada-trade-deficit-january-statistics-canada/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Heads to Arctic War Games as NATO Flexes Muscle in Norway',
            summary: 'Prime Minister Mark Carney is travelling to Norway for a defence-focused trip with Nordic countries, stopping first in Yellowknife on Thursday before heading to observe NATO Arctic military exercises. The trip comes at a critical moment as the Iran war tests Western alliance cohesion and Canada faces growing pressure to demonstrate its commitment to collective defence. Carney is expected to discuss Arctic sovereignty, military readiness, and energy security with Nordic leaders, all issues that have taken on new urgency as the geopolitical landscape shifts. Critics argue Carney should be focused on domestic priorities, but supporters say the trip sends an important signal about Canada\'s willingness to step up on the world stage during a time of global crisis.',
            tags: ['Carney', 'NATO', 'Arctic', 'Norway', 'defence'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/carney-nato-war-games-norway-canada-9.7124665' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-carney-travel-norway-defence-focused-northern-trip/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Gun Control Advocates Press for Answers on Weapons Used in Tumbler Ridge Shooting',
            summary: 'Gun control advocates are demanding that the RCMP release details about the weapons used in the Tumbler Ridge, B.C. shooting, as the Mounties say information cannot be made public until their investigation is complete. The Globe and Mail\'s editorial board has weighed in, arguing that the families of victims and all Canadians deserve clarity from Ottawa, the B.C. government, and the RCMP about the silent aftermath of the tragedy. The case has reignited the national debate over firearms policy, with advocates arguing that transparency about the weapons involved is essential for informed policy-making. The Carney government has signaled support for further gun control measures but has not yet introduced new legislation.',
            tags: ['gun control', 'Tumbler Ridge', 'RCMP', 'firearms policy', 'British Columbia'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-gun-control-advocates-rcmp-weapons-tumbler-ridge-shooting/' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/opinion/editorials/article-tumbler-ridge-ottawa-bc-rcmp-carney/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Russia Sentences 19 for Deadly 2024 Concert Hall Attack That Killed 149',
            summary: 'A Russian court has sentenced 19 people for their roles in the devastating 2024 Crocus City Hall concert attack that killed 149 people, one of the deadliest terrorist incidents in modern Russian history. The sentencing comes as Russia\'s attention is divided between its ongoing war in Ukraine and the geopolitical opportunity presented by the Iran war, which analysts say is giving Moscow room to operate with less Western scrutiny. The case has raised questions about Russian intelligence failures and the country\'s vulnerability to extremist violence even as it projects military power abroad. For Canada, the sentencing is a reminder of the complex security landscape that PM Carney navigates as he meets with NATO allies in Norway this week.',
            tags: ['Russia', 'concert attack', 'terrorism', 'sentencing', 'security'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/russia-sentencing-moscow-concert-hall-attacks-9.7125322' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Pentagon Blocks Photographers from Hegseth\'s Iran War Briefings',
            summary: 'The Pentagon has barred photographers from Defense Secretary Pete Hegseth\'s briefings on the Iran war, a move that press freedom advocates are calling an unprecedented restriction on wartime media access. The decision comes just as revelations emerge about a U.S. strike on an Iranian elementary school, raising suspicions that the administration is tightening information control as the war generates increasingly negative headlines. Media organizations have filed formal protests, arguing that visual documentation of official briefings is a cornerstone of press freedom and government accountability. The restriction adds to a pattern of the Trump administration limiting media access during the conflict, and congressional Democrats are calling for hearings on wartime transparency.',
            tags: ['Pentagon', 'Hegseth', 'press freedom', 'Iran war', 'media access'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/hegseth-pentagon-briefings-photographers-ad0cc21ad17d299c90284788fba62b5a' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Trump Administration Launches New Process to Replace Tariffs Struck Down by Supreme Court',
            summary: 'The Trump administration is kicking off a new legal process to try to reimpose tariffs that were struck down by the Supreme Court, signaling it has no intention of backing away from its protectionist trade agenda despite judicial setbacks. The new approach attempts to use different statutory authority to achieve the same tariff levels on Chinese, EU, and other imports. Trade experts are skeptical the new framework will survive legal challenges either, but the move keeps uncertainty elevated for businesses on both sides of the border. For Canada, which is already dealing with the fallout from existing tariffs, the administration\'s persistence signals that trade tensions are unlikely to ease anytime soon.',
            tags: ['tariffs', 'Supreme Court', 'Trump', 'trade war', 'China'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-tariffs-manufacturing-china-eu-6f4243502a1d8ce6c301f39c083a93e9' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Jill Biden Opens Up About Joe\'s Decision to End 2024 Reelection Bid',
            summary: 'Former First Lady Jill Biden has released a memoir detailing the agonizing internal deliberations that led to President Joe Biden\'s decision to end his 2024 reelection campaign. The book provides an intimate look at the family discussions, political calculations, and emotional toll of the decision, which upended the Democratic primary and ultimately paved the way for Trump\'s return to the White House. Biden writes candidly about her own conflicted feelings, revealing she believed her husband could still win but ultimately supported his choice to step aside. The memoir arrives at a moment when many Democrats are second-guessing the decision as Trump\'s second term unfolds amid the Iran war and escalating domestic tensions.',
            tags: ['Jill Biden', 'memoir', 'Joe Biden', '2024 election', 'Democrats'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/jill-biden-memoir-joe-2024-presidential-campaign-1b262b2148a945f101c6268e0d568ac4' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Microsoft and Retired Military Chiefs Back Anthropic in Court Fight Against Pentagon',
            summary: 'Microsoft and a group of retired military leaders have filed briefs supporting AI company Anthropic in its escalating legal battle with the Pentagon over the use of AI in military applications. The case centers on whether AI companies can refuse to allow their technology to be used for lethal military purposes, a question with profound implications for the entire tech industry. Anthropic has argued that its safety-focused approach to AI development requires it to maintain control over how its models are deployed, while the Pentagon contends that national security needs should override corporate policy. The involvement of Microsoft — itself a major defense contractor — on Anthropic\'s side signals deep industry unease about government overreach into AI governance.',
            tags: ['Anthropic', 'Pentagon', 'Microsoft', 'AI military', 'AI safety'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-anthropic-ai-microsoft-pentagon-c4210e7eddd9ad90161e7fa2da9736e2' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Meta Launches MTIA 300 Chip, Reveals Roadmap for AI-Focused Silicon Through 2027',
            summary: 'Meta has unveiled its MTIA 300 chip, the latest in its custom silicon family designed to train the ranking and recommendation AI systems that power Instagram and Facebook. More significantly, the company revealed an ambitious roadmap through 2027 with the MTIA 400, 450, and 500 chips that will be capable of handling all AI workloads, though Meta says it will primarily use them for generative AI inference in the near term. The move represents Meta\'s deepening commitment to reducing its dependence on Nvidia GPUs, a strategic priority as AI compute demand continues to outstrip supply across the industry. The chip launch positions Meta alongside Google, Amazon, and Microsoft in the growing club of tech giants designing their own AI accelerators.',
            tags: ['Meta', 'MTIA', 'AI chips', 'custom silicon', 'AI infrastructure'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Cyberattack Disrupts Stryker\'s Global Medical Equipment Networks',
            summary: 'Medical equipment giant Stryker has disclosed a major cyberattack that has disrupted its global networks, affecting the company\'s ability to manufacture and distribute critical medical devices. The attack comes at a particularly dangerous time as hospitals worldwide are preparing for potential mass casualty scenarios related to the Iran war, and healthcare systems in the Middle East are already under extreme strain. Stryker, which makes surgical equipment, implants, and hospital beds used in operating rooms globally, says it is working with cybersecurity firms and law enforcement to contain the breach. The incident highlights the growing vulnerability of healthcare supply chains to cyber threats, a risk that has been amplified by geopolitical tensions.',
            tags: ['Stryker', 'cyberattack', 'medical equipment', 'cybersecurity', 'healthcare'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/stryker-cyberattack-iran-medical-equipment-products-8dd418618a3bd4fa4c97caf7978c11ee' }
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
