// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Wednesday, March 4, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'U.S. Submarine Torpedoes Iranian Warship as Conflict Enters Day 5',
            summary: 'The Iran war escalated dramatically on Day 5 as Defense Secretary Pete Hegseth confirmed a U.S. submarine torpedoed and sank an Iranian warship in international waters off Sri Lanka in the Indian Ocean. Hegseth declared the bombing campaign is "just getting started," trumpeting reduced Iranian military capabilities and the death of an official charged with a Trump assassination plot. Israel simultaneously launched strikes on Iranian security sites, prompting Tehran to respond with a fresh barrage of missiles and drones. Congress is now set to vote on war powers as lawmakers from both parties question the conflict\'s costs, risks, and long-term strategy amid mounting concerns about regional destabilization.',
            tags: ['Iran war', 'U.S. military', 'submarine', 'Hegseth', 'Congress'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/livestory/conflict-with-iran-9.7109761' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-lebanon-march-04-2026' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-usa-israel-news-live-updates-march-4/' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Markets Rise on Reports of Iran\'s Secret Diplomatic Outreach to U.S.',
            summary: 'North American stock indexes climbed Wednesday following reports that Iran has made secret diplomatic overtures to the United States, offering a glimmer of hope that the five-day-old conflict could find an off-ramp. The news calmed jittery energy markets after Trump vowed to protect oil and gas tankers passing through the Strait of Hormuz — though gasoline and diesel prices had already spiked overnight as anxious drivers rushed to fill their tanks. Economists warn the supply chain disruptions from the war could raise prices for drugs, electronics, and other goods even if a ceasefire materializes, while Iranian strikes on Amazon data centers in the Gulf have highlighted the tech industry\'s vulnerability to physical disasters.',
            tags: ['markets', 'Iran diplomacy', 'oil prices', 'supply chain', 'Amazon'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/investing/markets/inside-the-market/article-stock-market-today-tsx-sp-500-live-updates-march-4-2026/' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-oil-gas-gallon-aaa-e2daee318b8e3e6a1124713909a410e4' },
                { title: 'AP News', url: 'https://apnews.com/article/amazon-aws-data-center-uae-iran-bahrain-71066b0a822c4cfd88b61e3fe79af917' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Macron Orders Aircraft Carrier to Mediterranean as France Flexes Military Muscle',
            summary: 'French President Emmanuel Macron has ordered France\'s nuclear-powered aircraft carrier Charles de Gaulle to the Mediterranean Sea, a significant show of force as Europe grapples with the widening Iran conflict. The deployment signals France\'s intent to play a major independent role in the crisis rather than simply deferring to American leadership. Meanwhile, Spain\'s Prime Minister has stood firm in opposing the Iran strikes and pushed back on Trump\'s criticism after the President threatened to cut off trade with Spain for refusing to allow U.S. use of joint military bases. The transatlantic rift over the war is deepening, with NATO allies increasingly split on both strategy and legality.',
            tags: ['France', 'Macron', 'aircraft carrier', 'Spain', 'NATO'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/france-macron-aircraft-carrier-charles-de-gaulle-mediterranean-dd185933de5e5cee87828768c0046fba' },
                { title: 'AP News', url: 'https://apnews.com/article/trump-spain-iran-trade-defense-nato-spending-43e0f13e7b1c7e6ebcc4b558474aacdc' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Time Running Out for Humboldt Broncos Crash Driver Facing Deportation',
            summary: 'Jaskirat Singh Sidhu, the truck driver responsible for the devastating 2018 Humboldt Broncos bus crash that killed 16 people, could be deported to India within weeks. Sidhu is leaving behind a wife and two children in Canada who are pleading with the government to let him stay. The case has reignited a painful national debate: some families of the victims say Sidhu should have been removed from the country years ago, while others question whether deportation on top of prison time constitutes double punishment. The looming removal forces Canadians to grapple once again with the intersection of immigration enforcement, criminal justice, and the lasting trauma of one of the country\'s worst sporting tragedies.',
            tags: ['Humboldt Broncos', 'deportation', 'Sidhu', 'immigration', 'Saskatchewan'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/manitoba/jaskirat-singh-sidhu-humboldt-crash-victims-9.7111384' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'B.C. Moving to Permanent Daylight Time — Could Your Province Be Next?',
            summary: 'British Columbia is set to change its clocks for the final time this weekend as the province officially moves to permanent daylight saving time, ending the biannual ritual of springing forward and falling back. The announcement by Premier David Eby has reignited conversations across the country about abolishing time changes entirely. Alberta Premier Danielle Smith said it\'s time to consider following suit, and several other provinces have confirmed discussions are underway. The move aligns B.C. with the U.S. states of Washington and Oregon, which passed similar legislation contingent on federal approval. Health experts have long argued that permanent daylight time reduces seasonal depression and car accidents during darker winter evenings.',
            tags: ['daylight saving', 'British Columbia', 'time change', 'Alberta', 'provinces'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/daylight-saving-time-canada-9.7113377' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Vancouver Teachers Pulled from Classrooms After Ministry Emails Land in Spam',
            summary: 'Dozens of teachers across British Columbia\'s Lower Mainland were suddenly suspended without pay after emails from the Ministry of Education about updating their criminal record checks were filtered into spam folders. The teachers had no idea their teaching licences were at risk until they were abruptly pulled from their classrooms. One Vancouver teacher described the experience as a "gut punch," saying the sudden suspension upended her life and left students without their regular instructor. The affected educators are now demanding to know whether the Ministry will compensate them for lost wages, and the incident has raised serious questions about the government\'s reliance on email for time-sensitive regulatory communications.',
            tags: ['teachers', 'B.C. education', 'Vancouver', 'email', 'suspension'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/british-columbia/vancouver-teacher-pay-suspension-emails-9.7113444' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Speaks Frankly on Trump: "It\'s Not Easy, Let\'s Be Clear"',
            summary: 'Prime Minister Mark Carney pulled back the curtain on his relationship with Donald Trump during an event at Australia\'s Lowy Institute, saying bluntly that dealing with the U.S. President is "not easy" and that he must choose his words carefully to avoid blowback. Carney framed the Canada-Australia critical minerals alliance as an example of middle-power strength, arguing that countries like Canada and Australia have more leverage than they realize — especially in resources essential to the global energy transition. The candid remarks represent a rare moment of diplomatic frankness from a leader who has largely tried to maintain a measured tone with Washington amid escalating tariff threats and the Iran conflict.',
            tags: ['Carney', 'Trump', 'Australia', 'critical minerals', 'diplomacy'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/carney-trump-it-is-not-easy-lets-be-clear-9.7113807' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-critical-minerals-alliance-with-australia-an-example-of-middle-power/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Carney Backs Iran War "With Regret" as Ottawa Scrambles to Help Stranded Canadians',
            summary: 'Prime Minister Carney said Canada\'s support for the U.S.-Israeli strikes on Iran was taken "with regret," acknowledging that the U.S. and Israel acted without engaging the UN or its allies and leaving open the question of where the conflict goes from here. Meanwhile, Foreign Affairs Minister Anand confirmed Ottawa is working to help Canadians stranded across the Middle East as commercial flights remain disrupted and evacuation options are limited. Canadians in the Persian Gulf told CBC they are living "by the grace of missile defence systems." The government faces mounting pressure from both hawks who want stronger support and doves who question Canada\'s complicity in a war that lacks clear international legal authority.',
            tags: ['Carney', 'Iran', 'Middle East', 'Anand', 'evacuations'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-carney-us-israeli-strikes-iran-position/' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/canadians-gulf-air-defence-expats-tourists-9.7113371' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'U.S. Could Hold "Red Card" Over Canada\'s Fighter Jet Options',
            summary: 'Canada\'s search for a next-generation fighter jet has hit a geopolitical snag, with analysts warning the U.S. could effectively veto Ottawa\'s consideration of Sweden\'s Saab Gripen as an alternative to the American-made F-35. Saab has pitched Canada as a "great" partner to co-design future fighter jets, but the aircraft relies on American-made components that could be subject to export controls — giving Washington a potential "red card" over the deal. The fighter jet debate takes on new urgency amid the Iran war and Carney\'s push to boost defence spending, with a BlackRock executive also being named deputy minister of international trade in the latest federal shuffle.',
            tags: ['fighter jets', 'Gripen', 'F-35', 'Saab', 'defence'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/canada-f35-gripen-trump-saab-lockheed-fighters-9.7113580' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/saab-canada-fighter-jets-9.7112654' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump Threatens to Cut Off Trade with Spain Over Iran Base Access',
            summary: 'President Trump threatened to sever trade relations with Spain after Madrid refused to allow American forces to use joint military bases for operations in the Iran war. Spanish Prime Minister Pedro Sánchez stood by his opposition to the strikes and pushed back forcefully on Trump\'s criticism, calling the threat disproportionate and a violation of alliance norms. The confrontation has deepened fractures within NATO, with member states increasingly divided over the legality and scope of the U.S.-led campaign. The trade threat adds economic coercion to what was already a tense diplomatic standoff, and European leaders are warning that Trump\'s approach risks permanently damaging transatlantic security cooperation.',
            tags: ['Trump', 'Spain', 'NATO', 'Iran', 'trade threats'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-spain-iran-trade-defense-nato-spending-43e0f13e7b1c7e6ebcc4b558474aacdc' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Tensions Flare as Lawmakers Question Iran War\'s Costs, Risks and Strategy',
            summary: 'Bipartisan tensions erupted on Capitol Hill as lawmakers grilled Secretary of State Marco Rubio on the Iran war\'s ballooning costs, strategic risks, and the absence of a clear exit plan. Members of Congress from both parties expressed frustration that the administration launched military operations without adequate consultation, and a vote on war powers authorization is now imminent. The hearing grew heated when several senators demanded to know whether the administration\'s ultimate goal is destroying nuclear capabilities or full regime change — a distinction with enormous implications for how long American forces stay engaged. Meanwhile, U.S. soldiers killed in the conflict are being remembered as devoted parents and reservists.',
            tags: ['Congress', 'Iran war', 'Rubio', 'war powers', 'strategy'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-war-marco-rubio-middle-east-9b9dfac9c40c8cf171e229e0a0a6980f' },
                { title: 'AP News', url: 'https://apnews.com/article/us-soldiers-who-died-iran-war-46f54df716fe1c5290363da0a15f99f3' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Noem Defends Portrayal of Killed Minneapolis Protesters as "Agitators" at Senate Hearing',
            summary: 'Kristi Noem faced sharp questioning during her Senate confirmation hearing as lawmakers pressed her on her characterization of protesters killed by law enforcement in Minneapolis as "agitators." The heated exchange underscored the ongoing political divisions over policing, protest rights, and the use of force that have defined American politics since 2020. Noem defended her position while outlining her vision for immigration enforcement at the Department of Homeland Security. The hearing comes at a volatile moment for the administration, which is simultaneously managing a foreign war, domestic policy battles, and growing public anxiety about the direction of the country.',
            tags: ['Noem', 'Senate hearing', 'DHS', 'Minneapolis', 'immigration'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/noem-testifies-congress-homeland-security-immigration-enforcement-ebb715699e3f4f6dd6fdd22157b4e1a7' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Iranian Strikes Hit Amazon Data Centers, Exposing Cloud Infrastructure Vulnerability',
            summary: 'Iranian missile strikes on Amazon Web Services data centers in the UAE and Bahrain have sent shockwaves through the tech industry, exposing the physical vulnerability of cloud infrastructure that underpins much of the modern internet. The attacks disrupted services for thousands of businesses worldwide and raised urgent questions about the concentration of critical digital infrastructure in geopolitically unstable regions. Amazon is scrambling to reroute traffic and restore services, but analysts warn the incident could accelerate a broader rethinking of where companies locate their data centers. The disruption also highlights how a conventional military conflict can cascade into a global technology crisis within hours.',
            tags: ['Amazon', 'AWS', 'data centers', 'Iran', 'cloud infrastructure'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/amazon-aws-data-center-uae-iran-bahrain-71066b0a822c4cfd88b61e3fe79af917' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'OpenAI Building a GitHub Rival as Code Repository Competition Heats Up',
            summary: 'OpenAI is in the early stages of developing its own code repository platform to compete directly with Microsoft\'s GitHub, prompted in part by recent GitHub outages that frustrated developers. The project is still months from completion, but the company is reportedly considering making it available to OpenAI customers — putting the ChatGPT creator in direct competition with Microsoft, which holds a significant stake in OpenAI. The move raises fascinating questions about the increasingly tangled relationship between the two companies and signals OpenAI\'s ambition to become a full-stack developer platform rather than just an AI model provider. Developer tools are becoming the next frontier in the AI arms race.',
            tags: ['OpenAI', 'GitHub', 'Microsoft', 'developer tools', 'code repository'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Spellbook Secures $40M from RBC to Acquire Smaller Legal AI Startups',
            summary: 'Canadian legal AI company Spellbook has raised $40 million from RBC to fund an acquisition spree targeting smaller generative AI startups in the legal technology space. The deal signals growing confidence in AI\'s ability to transform the legal profession and positions Spellbook as a potential consolidator in a fragmented market. The funding comes as law firms worldwide are increasingly adopting AI tools for contract review, legal research, and document drafting. RBC\'s investment also reflects a broader trend of Canadian financial institutions betting big on homegrown AI companies, particularly as the federal government pushes to establish Canada as a global AI hub amid fierce competition from the U.S. and China.',
            tags: ['Spellbook', 'legal AI', 'RBC', 'Canadian tech', 'acquisitions'],
            category: 'ai-tech',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-spellbook-secures-us40-million-from-rbc-to-snap-up-smaller-generative/' }
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
