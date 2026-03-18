// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Wednesday, March 18, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Israel Kills Another Top Iranian Official as Both Sides Escalate Attacks on Energy Facilities',
            summary: 'Israel killed another senior Iranian official on Wednesday while both sides dramatically escalated attacks on energy infrastructure, sending oil prices surging to new highs. U.S. and Israeli strikes are systematically dismantling Iranian institutions and industrial capacity, while Iran has retaliated by threatening energy assets in Qatar, Saudi Arabia, and the UAE. Satellite imagery is now revealing the full scale of damage across Iran, with key military and industrial sites reduced to rubble. The conflict is reshaping the global energy landscape, with about 90 ships still crossing the Strait of Hormuz as Iran continues exporting millions of barrels despite the war — though analysts warn the corridor could close entirely at any moment. Persian Gulf countries are seeing war clouds overshadow Eid celebrations as the conflict shows no signs of de-escalation.',
            tags: ['Israel', 'Iran war', 'energy', 'oil prices', 'Middle East'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-war-us-israel-strait-of-hormuz-oil/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-18-2026' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Top Counterterrorism Official Kent Resigns, Says Iran Posed No Imminent Threat',
            summary: 'The top U.S. counterterrorism official has resigned over Trump\'s Iran war, delivering a damning public statement that Iran posed no imminent threat to the United States — directly contradicting the administration\'s central justification for military action. Kent\'s resignation letter is the most significant break yet from within Trump\'s own national security team, carrying particular weight given his role as the official most directly responsible for assessing threats to the homeland. The departure comes as Trump\'s intelligence officials are set to testify before Congress on the Iran war and worldwide threats to the U.S., in what is expected to be a contentious hearing. Meanwhile, China is ignoring Trump\'s requests to help secure the Strait of Hormuz, and a planned presidential trip to Beijing appears to be slipping off the calendar as the war deepens.',
            tags: ['Kent resignation', 'Iran war', 'counterterrorism', 'Trump', 'China'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-iran-war-kent-resignation-e2e17a76d79617a68370f076c0291208' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/us-politics/article-trump-us-intelligence-officials-testify-iran-war-worldwide-threats/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Venezuela Beats U.S. 3-2 to Win First World Baseball Classic Title',
            summary: 'Venezuela defeated the United States 3-2 in a thrilling final to capture its first-ever World Baseball Classic championship, delivering a stunning upset on the global stage. The victory sparked celebrations across Venezuela, a country that has endured years of economic collapse, political turmoil, and mass emigration — making the win an emotional moment of national unity. For the U.S. team, the loss is a disappointing end to a tournament they entered as favorites, and it comes amid a strange backdrop: WADA is delaying a decision on whether to potentially ban the U.S. from hosting major sporting events over ongoing anti-doping disputes with the Trump administration. The tournament showcased baseball\'s growing international competitiveness, with Latin American nations continuing to punch well above their weight.',
            tags: ['World Baseball Classic', 'Venezuela', 'USA', 'sports', 'baseball'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/united-states-venezuela-score-wbc-6aee920fd528b59a752e6e2beb7bcb7b' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-venezuela-beats-us-3-2-to-win-first-world-baseball-classic-title/' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada Reports First Annual Population Decline on Record',
            summary: 'Canada\'s population fell by more than 100,000 people last year — the first annual decline ever recorded — driven by a mass exodus of temporary residents leaving the country. The stunning demographic reversal comes after years of record population growth fueled by international students and temporary foreign workers, and reflects the impact of the federal government\'s tightening of immigration pathways. The decline has significant implications for Canada\'s economy, which has relied heavily on population growth to drive GDP expansion, support the housing market, and fill chronic labor shortages. Economists are divided on whether the trend is a healthy correction after years of unsustainable growth, or an alarming signal that Canada is losing its appeal as a destination for global talent.',
            tags: ['population decline', 'immigration', 'demographics', 'economy', 'Canada'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-canada-reports-first-annual-population-decline-on-record/' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Building Owner Charged with 7 Counts of Manslaughter in Old Montreal Fire',
            summary: 'Émile Benamor, the owner of an Old Montreal building that caught fire in 2023 killing seven people, has been charged with seven counts of manslaughter — a rare and significant criminal prosecution in a case that exposed systemic failures in building safety oversight. The charges allege that Benamor\'s negligence in maintaining the heritage building directly contributed to the deaths, with investigators finding the property lacked basic fire safety equipment including working alarms and proper exits. The case has become a flashpoint for Montreal\'s ongoing struggle with unsafe converted buildings, many of which house vulnerable tenants in heritage properties that have been subdivided without proper permits or inspections. Advocates for housing safety say the charges send a powerful message, but warn that enforcement remains woefully inadequate across the city.',
            tags: ['Old Montreal fire', 'manslaughter', 'building safety', 'Montreal', 'criminal charges'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/montreal/emile-benamor-charged-fire-9.7132912' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Canadian Computer Scientist Gilles Brassard Wins Turing Award',
            summary: 'Canadian computer scientist Gilles Brassard has been named co-recipient of the prestigious Turing Award — often called the Nobel Prize of computing — alongside longtime collaborator Charles Bennett for their pioneering work in quantum information science. Brassard, a professor at the Université de Montréal, is best known for co-inventing the BB84 quantum key distribution protocol, which laid the theoretical groundwork for quantum-secure communications. Their work, which began in the 1980s when quantum computing was largely theoretical, has become increasingly relevant as governments and corporations race to develop quantum computers capable of breaking current encryption standards. The award recognizes decades of foundational contributions that are now shaping the future of cybersecurity, computing, and communications worldwide.',
            tags: ['Turing Award', 'Gilles Brassard', 'quantum computing', 'Canada', 'science'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/science/article-canadian-computer-scientist-gilles-brassard-wins-turing-award/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Ottawa Spending $1.4 Billion to Ramp Up Domestic Ammunition Production',
            summary: 'The federal government is investing $1.4 billion to dramatically expand Canada\'s domestic ammunition production capacity, splitting the funds between IMT Precision and General Dynamics Ordnance and Tactical Systems. The announcement reflects the Carney government\'s pivot toward defence self-sufficiency amid growing geopolitical instability, the Iran war, and persistent questions about the reliability of American supply chains under Trump. The investment is part of a broader Canadian defence spending surge that has seen Telesat shares soar on hopes for allied military contracts, as investors bet that NATO nations are entering a sustained rearmament cycle. Critics argue the spending is long overdue given that Canada has chronically underfunded its military, while others worry about the opportunity cost of diverting billions from social programs during an affordability crisis.',
            tags: ['defence spending', 'ammunition', 'Carney', 'military', 'NATO'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/economy/article-ottawa-spending-14-billion-domestic-ammunition-production-capacity/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Ottawa Appeals Emergencies Act Case to the Supreme Court',
            summary: 'The federal government is taking its Emergencies Act case to the Supreme Court of Canada, appealing a lower court ruling that found the Trudeau government\'s invocation of the Act during the 2022 convoy protests was unconstitutional. The appeal sets up a landmark constitutional showdown over the limits of executive power in a democracy, with the outcome potentially reshaping how future governments can respond to national crises. The case is politically fraught: while the Carney government inherited the legal battle from Trudeau, its decision to press forward signals it believes establishing broad emergency powers is worth the political risk. Civil liberties groups argue the case could set a dangerous precedent that normalizes sweeping government overreach, while supporters say the convoy blockades posed a genuine threat to public safety and economic stability.',
            tags: ['Emergencies Act', 'Supreme Court', 'convoy protests', 'Carney', 'constitutional law'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-ottawa-appeals-emergencies-act-case-to-the-supreme-court/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Bank of Canada Holds Rate at 2.25% as Oil Shock Clouds Outlook',
            summary: 'The Bank of Canada held its benchmark interest rate at 2.25% on Wednesday, citing the oil price shock from the Iran war as a major source of uncertainty for the Canadian economy. Governor Tiff Macklem said the central bank is "ready to respond" if needed, but acknowledged that the war has created an unusually difficult policy environment where inflation risks from surging energy prices clash with a slowing domestic economy. The decision was widely expected after February\'s CPI data showed inflation at a manageable 1.8%, but markets are already pricing in the likelihood that oil-driven cost pressures will force the Bank\'s hand in coming months. The hold contrasts with the Federal Reserve\'s own dilemma south of the border, where the Iran war has similarly upended expectations for rate cuts this year.',
            tags: ['Bank of Canada', 'interest rates', 'oil prices', 'Tiff Macklem', 'inflation'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/bank-of-canada-interest-rate-9.7132984' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/economy/article-bank-of-canada-holds-benchmark-rate-oil-prices-inflation/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Judge Throws Prosecutor Out of Court, Orders NJ U.S. Attorney Leaders to Testify',
            summary: 'A federal judge took the extraordinary step of ejecting a prosecutor from the courtroom and ordering top officials from New Jersey\'s U.S. Attorney\'s office to testify, in a dramatic confrontation that has raised alarm about politicization of the Justice Department under the Trump administration. The incident stems from what the judge described as a pattern of improper conduct by federal prosecutors, and the order to compel testimony from office leadership is virtually unprecedented in the modern federal court system. The case has drawn national attention as part of a broader pattern of concerns about DOJ independence, with critics arguing the Trump administration has turned the nation\'s prosecutors into political enforcers rather than impartial servants of justice. Legal experts say the judge\'s actions signal deep frustration with what the bench perceives as a breakdown in prosecutorial norms.',
            tags: ['DOJ', 'federal courts', 'New Jersey', 'Trump', 'prosecutorial misconduct'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/new-jersey-justice-department-federal-prosecutors-habba-c6882eeefa9432a349127715f3be7d55' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Trump\'s Tariffs Hurting American Manufacturers Instead of Helping Them',
            summary: 'A sweeping AP analysis finds that Trump\'s tariff regime is backfiring on the American manufacturers it was supposed to protect, with rising input costs, supply chain disruptions, and retaliatory trade barriers eating into profits and forcing some companies to lay off workers. The tariffs on steel, aluminum, and Chinese goods have raised the cost of raw materials for domestic producers, while retaliatory tariffs from trading partners have shut American-made goods out of key export markets. Small and mid-sized manufacturers are being hit hardest, lacking the scale and supply chain flexibility to absorb the cost increases that large corporations can manage. The findings add to a growing body of evidence that the protectionist trade policy is failing on its own terms, even as the administration doubles down on the approach.',
            tags: ['tariffs', 'manufacturing', 'trade war', 'economy', 'Trump'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-tariffs-manufacturing-china-030d58f482ce2505721a3ce86820d1da' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Judge Blocks Government from Slimming Down Vaccine Recommendations',
            summary: 'A federal judge has blocked the Trump administration\'s effort to scale back official vaccine recommendations, dealing another legal blow to RFK Jr.\'s anti-vaccine agenda at the Department of Health and Human Services. The ruling halts proposed changes that would have weakened CDC guidance on childhood immunizations, a cornerstone of RFK Jr.\'s "MAHA" (Make America Healthy Again) initiative. The decision comes on the heels of a separate ruling that halted momentum on the administration\'s broader vaccine deregulation plans, effectively putting the most controversial elements of Kennedy\'s health agenda on ice through the courts. Public health officials praised the ruling as critical for protecting children, while the administration signaled it would appeal, setting up another round in the ongoing legal battle over federal vaccine policy.',
            tags: ['vaccines', 'RFK Jr', 'courts', 'public health', 'Trump'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/kennedy-acip-vaccines-cdc-fc758951019f41d2f5e81e4e2faa22d3' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Jensen Huang Fires Back at DLSS 5 Critics: "They\'re Completely Wrong"',
            summary: 'Nvidia CEO Jensen Huang has responded forcefully to the growing backlash against DLSS 5, the company\'s latest AI-powered upscaling technology for gaming, telling critics they are "completely wrong" about how the system works. In an interview reported by Tom\'s Hardware, Huang explained that DLSS 5 "fuses controllability of geometry and textures" with generative AI, and emphasized that game developers can fine-tune the system — pushing back against fears that the technology produces unpredictable or unfaithful visual results. The controversy reflects a growing tension in the gaming community between AI-driven performance gains and concerns about visual authenticity, with many players arguing they want to see the game as the developer intended, not an AI\'s interpretation of it. Nvidia\'s aggressive defence suggests the company sees AI upscaling as the future of real-time graphics, regardless of current skepticism.',
            tags: ['Nvidia', 'DLSS 5', 'Jensen Huang', 'gaming', 'AI graphics'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Tom\'s Hardware', url: 'https://www.tomshardware.com/pc-components/gpus/jensen-huang-says-gamers-are-completely-wrong-about-dlss-5-nvidia-ceo-responds-to-dlss-5-backlash' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Samsung Discontinues Galaxy Z TriFold After Just Months on Sale',
            summary: 'Samsung has pulled the plug on its Galaxy Z TriFold phone after just a few months on the market, amid reports that the company only ever manufactured a few thousand units. The device, which featured a screen that folded into three sections, was Samsung\'s most ambitious foldable yet — and its most short-lived. The discontinuation suggests the tri-fold form factor was more of a concept showcase than a viable product line, with the steep price point and limited app optimization proving insurmountable barriers to mass adoption. The TriFold\'s rapid demise raises questions about the future of experimental foldable designs, though Samsung remains committed to its mainstream Flip and Fold lines. RIP Galaxy Z TriFold, 2026–2026.',
            tags: ['Samsung', 'TriFold', 'foldable phones', 'hardware', 'discontinued'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech/895879/samsung-galaxy-z-trifold-discontinued-stock-sold-out' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Sony Developing "Protective AI" to Fight Ghibli-Style AI Slop',
            summary: 'Sony\'s R&D division is training its own AI model specifically designed to identify and combat unauthorized AI-generated imitations of Studio Ghibli\'s distinctive art style, following a wave of AI-generated Ghibli-style content that has flooded social media. The "Protective AI" model is being trained on content from actual Ghibli films and is designed to eventually detect and flag AI-generated knockoffs of any protected creative content. The initiative comes alongside Sony\'s parallel effort to develop technology that identifies source material used to train AI music generators. Meanwhile, the broader debate over distinguishing human-made from AI-generated content continues to fragment, with BBC News counting eight separate competing initiatives trying to establish a "human-made" certification label — and experts warning that a single standard must emerge before consumers drown in confusion.',
            tags: ['Sony', 'Studio Ghibli', 'AI art', 'copyright', 'content protection'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'BBC News', url: 'https://www.bbc.co.uk/news/articles/cj0d6el50ppo' }
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
