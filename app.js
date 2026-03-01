// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Sunday, March 1, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Ayatollah Khamenei Dead at 86 as U.S.-Israeli Strikes Devastate Iran',
            summary: 'Iran\'s Supreme Leader Ayatollah Ali Khamenei has been confirmed dead at age 86 following devastating U.S. and Israeli military strikes that targeted Iran\'s nuclear infrastructure and leadership. Explosions continued to ring out across central Tehran as Israel and Iran exchanged retaliatory attacks throughout the day. Three U.S. service members have been killed since the operation began. Iranian officials announced a new leadership council "has begun its work," raising urgent questions about succession and whether the strikes will lead to regime change or deeper regional instability. The operation marks the most significant Western military action in the Middle East in decades.',
            tags: ['Iran', 'Khamenei', 'U.S. military', 'Israel', 'Middle East'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-supreme-leader-ayatollah-ali-khamenei-dead-5b13b69b708c4ed38e8f95f5fb41a597' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/livestory/conflict-with-iran-9.7109761' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-tehran-israel-us-attacks-ayatollah-khamenei-donald-trump/' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Oil Jumps 10% After Iran Attacks, Analysts Warn of $100 a Barrel',
            summary: 'Global oil prices surged 10% in the immediate aftermath of the strikes on Iran, with analysts warning crude could spike to $100 a barrel if the conflict escalates further or threatens the Strait of Hormuz. The price shock sent ripples through global financial markets and darkened economic forecasts worldwide. Hundreds of thousands of travelers have been stranded by flight disruptions as airspace closures spread across the Middle East. Economists warn that a prolonged conflict could trigger a full-blown energy crisis, compounding the economic pain already caused by ongoing tariff disputes.',
            tags: ['oil prices', 'Iran', 'energy', 'markets', 'economy'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-oil-crude-iran-hormuz/' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-israel-us-flights-airspace-travel-0346e29ee99eaee2838c8e08f4facb78' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Bar Shooting in Austin Leaves 3 Dead, 14 Injured',
            summary: 'A mass shooting at a bar in Austin, Texas has left three people dead — including the suspect — and 14 others injured, authorities said. The incident occurred late Saturday night in what police described as a chaotic scene on a busy entertainment strip. Emergency services responded rapidly but the scale of the attack overwhelmed nearby hospitals, with some victims transported to trauma centers across the city. The shooting adds to a grim tally of gun violence in the United States and is already reigniting debate about firearms regulations at both the state and federal level.',
            tags: ['Austin', 'shooting', 'gun violence', 'Texas'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/austin-texas-bar-shooting-7690f931ba00f950c1828cef25399bb6' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Iranian Canadians See Strikes as Possible Turning Point for Democracy',
            summary: 'For many Iranian Canadians, the U.S.-Israeli strikes that killed Supreme Leader Khamenei signal a potential turning point — an opportunity to end theocratic rule and restore democracy in their homeland. Community members expressed cautious hope that the power vacuum could lead to meaningful political change, though many also worry about the humanitarian toll and the risk of prolonged instability. Canada is home to one of the largest Iranian diaspora populations in the world, and the community\'s reaction reflects deep divisions between those who see military intervention as liberation and those who fear it will only deepen suffering.',
            tags: ['Canada', 'Iran', 'Iranian Canadians', 'diaspora', 'democracy'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-for-some-iranian-canadians-strikes-on-iran-signal-a-possible-turning/' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Nova Scotia Premier Booed at African Heritage Month Gala Over Budget Cuts',
            summary: 'Nova Scotia Premier Tim Houston was loudly booed as he delivered remarks at the African Heritage Month gala in Halifax on Saturday night. The hostile reception came after Houston\'s government delivered a budget last week that included cuts to programs specifically aimed at Black and African Nova Scotian communities. Community leaders say the cuts will roll back years of progress on equity initiatives, while the premier\'s office defended the budget as fiscally responsible. The incident highlights growing tensions between the provincial government and minority communities over austerity measures.',
            tags: ['Nova Scotia', 'Tim Houston', 'budget cuts', 'African Heritage Month'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/nova-scotia/premier-tim-houston-booed-african-heritage-month-gala-budget-9.7110291' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'The Rise of Singlehood Could Reshape Canada\'s Housing and Tax Policies',
            summary: 'A growing wave of singlehood across Canada and the world is poised to impact everything from housing policy to the tax system, according to a new CBC analysis. For decades the number of single people has been increasing, but the trend has recently accelerated and is fundamentally changing how policymakers think about social services, urban planning, and economic support systems. With more Canadians living alone, demand for smaller housing units is surging, and experts argue the tax code — still largely designed around dual-income households — needs a major overhaul to reflect modern reality.',
            tags: ['Canada', 'housing', 'demographics', 'singlehood', 'taxes'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/rise-of-singles-economy-dating-social-change-9.7107437' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Backs Iran Strikes, Calls Destruction of Nuclear Program Necessary',
            summary: 'Prime Minister Mark Carney has publicly endorsed the U.S.-led military strikes on Iran, saying Canada supports the destruction of Iran\'s nuclear weapons program. Speaking from India where he\'s on a trade mission, Carney told Canadians in Iran to shelter in place while officials work to ensure their safety. A retired Canadian general told CBC that Canadian military members were likely involved in planning the strikes through intelligence-sharing arrangements. The crisis has overshadowed Carney\'s India trip and thrust national security to the forefront of Canadian political debate heading into a potential election.',
            tags: ['Carney', 'Iran', 'nuclear', 'Canada', 'foreign policy'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/canada-carney-us-attack-trump-iran-nuclear-weapon-9.7109886' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-anand-urges-canadians-to-leave-israel-palestine-and-lebanon-as/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Carney Hails India as "Natural Partner," Targets Trade Deal by Year\'s End',
            summary: 'Prime Minister Carney\'s Indian charm offensive continued over the weekend as he set aside any notion of bilateral bad blood and hailed the South Asian country as a "natural partner" for Canada. Speaking to business leaders in Mumbai, Carney said his government aims to complete a comprehensive free trade deal before the end of 2026 — a dramatic shift from the diplomatic freeze triggered by the Nijjar affair. Canadian universities also signed new partnership agreements with Indian counterparts. Meanwhile, Foreign Affairs Minister Anand stated there would be "no exemptions for India on foreign interference concerns."',
            tags: ['Carney', 'India', 'trade', 'diplomacy', 'universities'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/india-natural-partner-carney-free-trade-deal-9.7110248' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-canada-india-trade-deal-carney-speech/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Poilievre Says Canada Should Not Hold Election Before Reviewing CUSMA Trade Deal',
            summary: 'Conservative Leader Pierre Poilievre says Canada should not head to the polls before completing its review of the CUSMA trade agreement with the United States and Mexico, arguing that an election campaign would weaken Canada\'s negotiating position. In a wide-ranging interview, Poilievre also revealed he has offered to travel to Washington to make Canada\'s case directly to American officials — a move that would be unusual for an opposition leader. The remarks come as Carney\'s Liberals and Poilievre\'s Conservatives remain locked in a tight race, with both sides jockeying over who can best handle the U.S. relationship.',
            tags: ['Poilievre', 'CUSMA', 'trade', 'election', 'Conservatives'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/poilievre-election-interview-the-bridge-floor-crosser-washington-trump-usa-9.7110025' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-pierre-poilievre-peter-mansbridge-podcast-us-trade-tariffs/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'War Powers Debate Intensifies After Trump Strikes Iran Without Congressional Approval',
            summary: 'The constitutional debate over war powers has erupted in Washington after President Trump ordered the massive military operation against Iran without seeking approval from Congress. Lawmakers from both parties are demanding answers about the legal authority for the strikes, with anti-war members arguing the action violates the War Powers Act. Trump\'s allies contend the president has broad authority to act against imminent threats to national security, pointing to Iran\'s advancing nuclear program. The dispute could lead to a formal congressional vote on authorizing military force — a politically fraught prospect for both parties heading into the 2026 midterms.',
            tags: ['Trump', 'Iran', 'war powers', 'Congress', 'Constitution'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/congress-war-powers-trump-iran-constitution-37ec6685d9ded1d467a719f91e537487' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Trump Was Once Wary of Regime Change in Iran — Here\'s What Changed His Mind',
            summary: 'For years, Donald Trump publicly expressed skepticism about regime change operations and costly foreign entanglements. But intelligence briefings showing Iran was closer than ever to a functional nuclear weapon — combined with pressure from hawkish advisors and Israeli officials — ultimately convinced the president to authorize the most aggressive U.S. military action in the region since the Iraq War. AP News reports that the shift happened gradually over several months as Trump became convinced that diplomacy had failed and that a nuclear Iran posed an existential threat to both Israel and American military bases in the region.',
            tags: ['Trump', 'Iran', 'regime change', 'foreign policy', 'nuclear'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-iran-ayatollah-khamenei-ad853dc1d5606fd9202b65a75bdbfc2f' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Supreme Court to Hear Case on Whether Marijuana Users Can Own Guns',
            summary: 'The Supreme Court is set to take up a case that has created unusual political alliances: whether marijuana users have a constitutional right to own firearms. The case pits Second Amendment advocates — who argue gun rights should not be stripped over legal cannabis use — against law enforcement groups who say drug users and firearms are a dangerous combination. With marijuana now legal in most states but still banned federally, the case highlights a growing tension in American law. A ruling could have far-reaching implications for millions of Americans who use cannabis legally under state law but remain technically barred from gun ownership.',
            tags: ['Supreme Court', 'marijuana', 'guns', 'Second Amendment', 'cannabis'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/supreme-court-marijuana-gun-control-drug-users-8d764ddacc9d753314910b99ebc7e6a4' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'U.S. Used Anthropic\'s AI for Iran Strikes Hours After Trump Banned It',
            summary: 'In a stunning irony, the U.S. military relied on Anthropic\'s Claude AI for intelligence assessments and target identification during Saturday\'s strikes against Iran — just hours after President Trump announced a ban on federal use of the company\'s products. The Wall Street Journal reports that planning for the operation was already underway using Claude when the ban was announced, forcing a hasty walk-back from an "immediate cease" order to a six-month phaseout. The episode highlights the deep entanglement between cutting-edge AI companies and military operations, and raises questions about whether the government can realistically disentangle itself from tools already embedded in critical national security workflows.',
            tags: ['Anthropic', 'AI', 'military', 'Iran strikes', 'Pentagon'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/policy/886489/pentagon-anthropic-trump-dod' },
                { title: 'AP News', url: 'https://apnews.com/article/anthropic-pentagon-ai-dario-amodei-hegseth-0c464a054359b9fdc80cf18b0d4f690c' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'What Do AI Firms Do When Users Share Dark, Violent Thoughts?',
            summary: 'A Globe and Mail investigation examines the difficult question facing AI companies: what should chatbots do when users express violent ideation or dark thoughts? The piece comes in the wake of the Tumbler Ridge, B.C. shooting linked to a user\'s interactions with an AI chatbot, and explores how different companies handle crisis situations on their platforms. Some firms flag concerning conversations for human review while others rely entirely on automated systems. Experts say the industry is woefully unprepared for the mental health implications of increasingly human-like AI conversations, and regulation remains fragmented and inconsistent across jurisdictions.',
            tags: ['AI safety', 'chatbots', 'regulation', 'mental health', 'Tumbler Ridge'],
            category: 'ai-tech',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-tumbler-ridge-ai-chatbots-regulation/' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'MWC 2026: Honor Unveils World\'s Thinnest Foldable and a Robot Phone',
            summary: 'Mobile World Congress 2026 kicked off in Barcelona with a flurry of hardware announcements, headlined by Honor\'s Magic V6 — now the thinnest foldable phone ever made — which somehow packs a bigger battery than any previous foldable. Honor also teased more details on its ambitious "Robot Phone" concept, complete with robotic arms and modular magnetic components. Meanwhile, Xiaomi unveiled a Leica-branded rotating camera phone, a concept EV hypercar, and new tablets. The show floor is dominated by rotating camera rings, AI-powered assistants, and ultra-thin devices that push the boundaries of what\'s physically possible in a smartphone form factor.',
            tags: ['MWC', 'Honor', 'Xiaomi', 'foldable phones', 'smartphones'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech/887104/honor-magic-v6-thinnest-battery-launch-mwc' },
                { title: 'The Verge', url: 'https://www.theverge.com/tech/882980/mwc-2026-news-phones-gadgets-announcements' }
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
