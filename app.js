// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Sunday, March 15, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Trump Urges Allies to Send Warships to Strait of Hormuz as Gulf States Intercept Iranian Missiles',
            summary: 'President Trump called on U.S. allies to deploy warships to the Strait of Hormuz as the Iran war entered a dangerous new phase on Sunday. Gulf Arab states intercepted a fresh barrage of Iranian missiles and drones overnight, with Iran openly threatening to widen the conflict beyond its current borders. The UAE remains a focal point after Iran\'s foreign minister said Tehran would "try to be careful" not to hit populated areas — a statement that did little to reassure Gulf capitals already on high alert. Britain said it is weighing a "range of options" in response to Trump\'s request, while oil markets brace for another volatile week with the Strait — through which 20% of global oil passes — effectively a war zone.',
            tags: ['Iran war', 'Strait of Hormuz', 'Trump', 'Gulf states', 'UAE'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-15-2026' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-iraq-us-trump-march-15-2026-9bbed3c906146844be08fdfd02595754' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-iran-us-israel-war-uae/' }
            ]
        },
        {
            id: 'top-2',
            headline: 'U.S. Military Aircraft Crashes in Iran-Iraq Zone, Crew Members Killed',
            summary: 'A U.S. military aircraft went down in the Iran-Iraq operational zone, killing several crew members including an Alabama father who had recently deployed and multiple service members from Ohio. The Pentagon confirmed the crash but offered few details about the circumstances, saying only that it occurred during operations related to the ongoing Iran campaign. The incident underscores the escalating human cost of a conflict that has now claimed American lives on the front lines. Families are demanding answers about the mission and conditions that led to the fatal crash, while the tragedy is likely to intensify domestic debate about the war\'s scope and whether Congress should have a greater role in authorizing operations.',
            tags: ['military crash', 'Iran war', 'Pentagon', 'casualties', 'Iraq'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/us-military-aircraft-down-iran-iraq-7f56db745b94fd80a7553560cf49c292' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Iran War Economy: Even If the War Is Won, the Economic Damage Is Already Done',
            summary: 'A stark Globe and Mail analysis argues that regardless of how the Iran war ends militarily, the economic fallout is already baked in. Oil prices have surged to levels not seen since 2008, supply chains are scrambling to reroute around the Persian Gulf, and inflation is ticking back up globally just as central banks were beginning to declare victory over the post-pandemic price spiral. The piece warns that the war has handed the global economy a stagflationary shock — rising prices combined with slowing growth — that will linger long after any ceasefire. For ordinary consumers, that means higher gas prices, more expensive groceries, and an increasingly uncertain job market heading into spring.',
            tags: ['economy', 'Iran war', 'oil prices', 'inflation', 'stagflation'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/commentary/article-iran-war-oil-economy-trump-inflation/' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada and Nordic Countries Vow Closer Collaboration as "Middle Power" Bloc',
            summary: 'Prime Minister Mark Carney joined leaders from Norway, Sweden, Denmark, Finland, and Iceland in Oslo for a mini-summit aimed at forging a closer "middle power" alliance. The meeting comes on the heels of a massive NATO exercise in northern Norway and focuses on Arctic security, Russian military threats, and the fallout from U.S. unpredictability under Trump. Few concrete details emerged about how the countries plan to collaborate, but the symbolism was clear: smaller democracies are banding together as the traditional Western alliance frays. For Canada, the Nordic pivot represents Carney\'s effort to diversify the country\'s strategic relationships beyond its overwhelming dependence on the United States.',
            tags: ['Carney', 'Nordic summit', 'Arctic', 'NATO', 'middle powers'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-carney-canada-nordic-relations-oslo-norway-sweden-denmark-finland/' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Ottawa Announces $35-Billion Arctic Investment to Connect Northern Communities',
            summary: 'The federal government unveiled a $35-billion Arctic investment plan that includes the long-stalled Mackenzie Valley Highway and expanded infrastructure to connect remote northern families and communities. Northwest Territories Premier hailed the announcement as a generational investment that will transform life in the North, while the Carney government framed it as both an economic development initiative and a sovereignty play amid rising geopolitical tensions over Arctic resources and shipping routes. Critics question whether the massive price tag is realistic given Ottawa\'s fiscal constraints, but northern leaders say decades of neglect have left communities isolated and vulnerable — and that the cost of inaction is even higher.',
            tags: ['Arctic', 'infrastructure', 'Mackenzie Valley Highway', 'NWT', 'federal spending'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'National Historic Courthouse in London, Ont. Faces Shadow from 54-Storey Tower Development',
            summary: 'Plans for a 54-storey residential tower next to London, Ontario\'s castle-like Old Middlesex County Courthouse — a designated national historic site — are raising alarm among heritage advocates. The development would literally cast a shadow over the place where the city began, and critics say it exposes a glaring gap in federal heritage protection law: national historic site designation doesn\'t actually prevent incompatible development on adjacent land. Supporters of the project argue the city desperately needs housing density and that the tower has been designed to complement rather than diminish the historic structure. The clash encapsulates the tension between Canada\'s housing crisis and its commitment to preserving the built heritage that gives communities their character.',
            tags: ['heritage', 'London Ontario', 'development', 'housing', 'historic sites'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/canada-ontario-london-old-middlesex-county-courthouse-development-9.7107268' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Liberals Introduce New Bill to Help Police Track and Identify Criminals Online',
            summary: 'The Carney government introduced legislation giving police new powers to track and identify criminal suspects online, a second attempt after privacy concerns torpedoed an earlier version of the bill. The new version includes what the justice minister calls "safeguards" to protect Canadians\' privacy while still enabling law enforcement to keep pace with digital crime. Privacy advocates remain skeptical, arguing the bill still grants overly broad surveillance authority that could be abused. The Conservatives are offering qualified support but say the bill doesn\'t go far enough on enforcement, while the NDP wants stronger judicial oversight provisions before backing it. The legislation reflects a growing bipartisan consensus that online anonymity has become a shield for serious criminals — the debate is over where to draw the line.',
            tags: ['online surveillance', 'privacy', 'police powers', 'legislation', 'Liberals'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Why Are So Many MPs Crossing the Floor to Carney\'s Liberals?',
            summary: 'A CBC At Issue panel examined the wave of opposition MPs crossing the floor to join Mark Carney\'s Liberal caucus, a trend that is reshaping the parliamentary landscape. The defections — from both the Conservatives and NDP — suggest that Carney\'s crisis-manager brand and centrist positioning are proving magnetic to politicians who see him as a winner. Critics say the floor-crossings reveal more about political opportunism than genuine ideological alignment, while Liberal strategists argue it proves Carney is building the kind of big-tent coalition Canada needs during wartime. The trend is infuriating opposition leaders who are watching their benches thin out, and raises questions about whether party loyalty means anything in an era of personality-driven politics.',
            tags: ['Carney', 'Liberals', 'floor crossing', 'MPs', 'Parliament'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Conservatives Table Bill to Give More Legal Protection for Home Self-Defence',
            summary: 'The Conservative Party introduced a private member\'s bill that would expand legal protections for Canadians who use force to defend themselves against home intruders. The legislation responds to several high-profile cases where homeowners faced criminal charges after confronting burglars, which Conservatives argue is a failure of the justice system. The bill would create a stronger presumption of self-defence in home invasion scenarios, shifting the burden away from victims. The Liberals have been cautious in their response, acknowledging public frustration but warning that loosening self-defence laws could lead to American-style "stand your ground" problems. Legal experts are divided, with some calling it a common-sense reform and others cautioning it could escalate violence in domestic disputes.',
            tags: ['self-defence', 'Conservatives', 'home invasion', 'criminal law', 'private member bill'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Republican Election Bill\'s Citizenship Proof Requirement Could Burden Millions of Voters',
            summary: 'The biggest change in the Republican-backed SAVE Act — requiring documentary proof of citizenship to vote — could become a significant burden for millions of American voters who lack readily accessible documents like passports or birth certificates. Analysis shows the requirement would disproportionately affect elderly, low-income, and minority voters who are less likely to have such documents on hand. Republicans frame the measure as essential to election security, citing concerns about non-citizen voting, though studies consistently show such fraud is exceedingly rare. Democrats and voting rights groups say the bill is a thinly veiled voter suppression effort designed to shrink the electorate ahead of the 2026 midterms, and have vowed legal challenges if it passes.',
            tags: ['SAVE Act', 'voting rights', 'election security', 'Congress', 'midterms'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/hub/iran' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'FCC Chairman Warns Broadcasters Against Airing "Fake News" After Trump Complains About War Coverage',
            summary: 'FCC Chairman issued a warning to broadcasters not to air "fake news" after President Trump publicly complained about media coverage of the Iran war, a move that press freedom advocates are calling an unprecedented threat to the First Amendment. The warning didn\'t specify which reports were considered false, but it comes as outlets have aired critical coverage of civilian casualties, the economic fallout, and questions about the war\'s strategic objectives. Media law experts say the FCC\'s warning, while lacking formal enforcement power over news content, represents a dangerous chilling effect — signalling to networks that critical war reporting could invite regulatory scrutiny. The incident echoes authoritarian patterns of using state regulators to intimidate independent press during wartime.',
            tags: ['FCC', 'press freedom', 'fake news', 'Trump', 'Iran war coverage'],
            category: 'us-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-us-fcc-chairman-warns-broadcasters-not-to-air-fake-news-after-trump/' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Sinema Admits Romance with Security Guard as She Fights Ex-Wife\'s Lawsuit',
            summary: 'Former Senator Kyrsten Sinema acknowledged a romantic relationship with her security guard as she battles a lawsuit filed by her ex-wife. The revelation adds a tabloid dimension to an already messy legal dispute that includes allegations of financial impropriety and misuse of campaign resources. Sinema, who left the Senate in 2025 after switching from Democrat to independent, has largely retreated from public life but remains a polarizing figure in Arizona politics. The lawsuit and its salacious details are dominating local media coverage and have become a cautionary tale about the personal wreckage that often follows high-profile political careers. Legal analysts say the relationship disclosure could complicate Sinema\'s defence by raising questions about judgment and potential conflicts of interest.',
            tags: ['Sinema', 'lawsuit', 'Arizona', 'scandal', 'former senator'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/kyrsten-sinema-affair-lawsuit-9ce5a7cc816f0a11d767ec1479bcb761' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Palantir\'s Maven Smart System: An AI-Powered Kanban Board for Military Targeting',
            summary: 'A chilling demonstration at Palantir\'s AIPCon conference revealed the full capabilities of the Maven Smart System, which the Department of War\'s Chief Digital and AI Officer showed can target anyone or anything for a military strike with just "left click, right click, left click." The system essentially functions as an AI-powered Kanban board for killing — a project management interface where the tasks are lethal military operations. The demo has sparked outrage among AI ethics researchers and tech workers who argue it represents the most disturbing real-world application of artificial intelligence to date. As AI labs like Anthropic deepen their Pentagon relationships, the Maven system forces an uncomfortable reckoning with what happens when Silicon Valley efficiency meets the machinery of war.',
            tags: ['Palantir', 'Maven', 'military AI', 'Pentagon', 'ethics'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'OpenAI Hiring for "Emotionally Authentic" AI That Can Shift Between Feelings',
            summary: 'A new OpenAI job listing is seeking candidates with the "ability to recognize, express, and shift between emotions in a way that feels authentic and human" — a striking glimpse into the company\'s ambitions for its next generation of AI products. The posting suggests OpenAI is moving beyond text-based intelligence toward systems that can simulate emotional awareness and responsiveness, raising profound questions about the boundaries between tool and companion. Critics warn that emotionally expressive AI could be manipulative by design, creating parasocial attachments that exploit human psychology. Supporters argue emotional intelligence is a natural evolution that will make AI assistants more helpful and intuitive. Either way, the listing signals that the race to build AI that feels human is accelerating rapidly.',
            tags: ['OpenAI', 'emotional AI', 'hiring', 'AI ethics', 'human-AI interaction'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Microsoft Brings Copilot AI Assistant to Xbox Consoles',
            summary: 'Microsoft is launching its Copilot AI assistant directly on Xbox consoles, the latest expansion of the company\'s strategy to embed AI across every product in its ecosystem. The rollout follows Copilot\'s arrival on the Xbox mobile app, Windows 11, and the Xbox Ally handheld. On the console, Copilot will help gamers with game recommendations, troubleshooting, accessibility settings, and in-game tips — essentially becoming an AI-powered gaming companion. The move positions Microsoft ahead of Sony and Nintendo in integrating generative AI into the living room gaming experience, though some players are wary of AI creeping into a space they see as purely for entertainment. The Xbox integration is part of Microsoft\'s broader bet that Copilot will become as ubiquitous as Office across all its platforms.',
            tags: ['Microsoft', 'Copilot', 'Xbox', 'gaming', 'AI assistant'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence' }
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
