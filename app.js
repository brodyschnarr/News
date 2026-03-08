// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Sunday, March 8, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Israel Strikes Tehran Fuel Depots and Beirut Hotel as Iran Nears Naming New Supreme Leader',
            summary: 'The Iran war escalated dramatically on Sunday as Israeli strikes hit oil storage facilities in Tehran, sending massive plumes of smoke across the capital, and struck a hotel in Beirut. Iran is accused of launching attacks in the UAE and Bahrain, expanding the conflict beyond its original borders. Meanwhile, Iranian media reports that a panel has reached consensus on a successor to Supreme Leader Khamenei, a momentous political shift happening under the fog of war. The widening conflict is threatening essential desalinated water supplies across the Persian Gulf, putting millions of civilians at risk in a region almost entirely dependent on desalination plants for drinking water.',
            tags: ['Iran war', 'Israel', 'Tehran', 'Khamenei successor', 'Middle East'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/livestory/iran-israel-us-war-day-9-9.7119190' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-supreme-leader-successor/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-08-2026' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Explosion at U.S. Embassy in Oslo May Have Been Deliberate Attack',
            summary: 'Norwegian police are investigating an explosion at the U.S. embassy in Oslo that they say may have been a deliberate attack, adding a chilling new dimension to global security tensions during the Iran war. Details remain scarce, but the incident comes at a time of heightened anti-American sentiment in parts of Europe and the Middle East over Washington\'s military campaign against Iran. Security has been tightened at U.S. diplomatic facilities worldwide in response. The blast underscores the far-reaching consequences of the conflict, with threats now extending well beyond the Middle Eastern theatre to Western capitals that have largely felt insulated from the violence.',
            tags: ['Oslo', 'U.S. embassy', 'attack', 'Norway', 'security'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-us-embassy-blast-oslo-norway/' },
                { title: 'AP News', url: 'https://apnews.com/article/us-embassy-blast-oslo-norway/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Trump Tells U.K. He Doesn\'t Need Help to Win War With Iran',
            summary: 'President Trump rebuffed British offers of military assistance in the Iran conflict, telling UK Prime Minister Keir Starmer that the United States does not need allied help to win the war. The blunt dismissal strains the "special relationship" at a critical moment and raises questions about Trump\'s go-it-alone approach to the most significant U.S. military engagement in decades. Meanwhile, Trump downplayed reports that Russia has been sharing intelligence with Iran to help it target American forces, calling the claims exaggerated despite mounting evidence. Oil prices continue to soar, but Trump is resisting calls to tap the Strategic Petroleum Reserve, insisting the economy remains strong despite growing signs of consumer strain.',
            tags: ['Trump', 'UK', 'Iran war', 'oil prices', 'Russia intelligence'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-donald-trump-keir-starmer-iran-war-aircraft-carriers/' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-russia-intelligence-sharing-trump-oil-prices-109923968208e549fe1d674d7cb71978' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Millions of Americans Can Now Claim Canadian Citizenship by Descent Under New Rules',
            summary: 'Amid rising tensions in the United States and increased global volatility, millions of Americans are looking northward — and to their family roots — for a possible escape route following recent changes to Canada\'s citizenship rules under Bill C-3. The new law expands eligibility for citizenship by descent, allowing people with Canadian parents or grandparents to claim citizenship even if they were born abroad. Interest has surged as Americans face uncertainty over the Iran war, immigration crackdowns, and a polarized political landscape. However, applicants face a complex process requiring extensive documentation to prove their lineage, and processing times are expected to be lengthy given the anticipated wave of applications.',
            tags: ['citizenship', 'Bill C-3', 'Americans', 'immigration', 'Canada'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/montreal/bill-c-3-canadian-citizenship-by-descent-american-interest-9.7112724' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Natalie Wilkie Wins Canada\'s First Gold at Milano-Cortina Paralympics',
            summary: 'Canadian para-athlete Natalie Wilkie captured the country\'s first gold medal at the 2026 Milano-Cortina Winter Paralympics, winning the women\'s standing 12.5-kilometre biathlon event. The victory is a triumphant moment for Canada\'s Paralympic team and cements Wilkie\'s status as one of the country\'s top winter sport athletes. The win comes as Canada looks to build momentum early in the Games, with strong medal contenders across multiple disciplines. Wilkie\'s performance in the gruelling biathlon — which combines cross-country skiing and rifle shooting — was dominant from start to finish, pulling away from the field in the final kilometres to claim gold convincingly.',
            tags: ['Paralympics', 'Natalie Wilkie', 'biathlon', 'Milano-Cortina', 'gold medal'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/sports/paralympics/natalie-wilkie-womens-standing-biathlon-gold-2026-paralympics-9.7119443' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Towing Industry at the Root of Many Police Corruption Cases Across Canada',
            summary: 'A Globe and Mail investigation reveals that Canada\'s towing industry has become a breeding ground for police corruption, with organized crime networks infiltrating the fraud-rife sector and pulling officers into their web. The investigation documents how the lucrative and loosely regulated industry creates fertile conditions for kickbacks, bid-rigging, and outright criminal partnerships between tow operators and law enforcement. Cases span multiple provinces, suggesting a systemic problem rather than isolated incidents. The findings raise urgent questions about oversight of an industry that generates billions in revenue annually and operates at the critical intersection of emergency services, insurance, and vehicle storage.',
            tags: ['towing', 'police corruption', 'organized crime', 'investigation', 'regulation'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-towing-industry-police-corruption/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Calls Byelections in Quebec and Two Toronto Ridings',
            summary: 'Prime Minister Mark Carney has called byelections in the Quebec riding of Terrebonne and the Toronto ridings of University-Rosedale and Scarborough Southwest — three races the Liberals will want to win to secure a thin majority government. The byelections are a critical test of Carney\'s early political capital and will reveal whether his honeymoon as PM translates into actual voter support in diverse ridings. University-Rosedale and Scarborough Southwest represent very different demographics, while Terrebonne is a bellwether Quebec seat. The NDP and Conservatives are expected to mount strong campaigns in all three, making these races an early referendum on Carney\'s leadership and the Liberal brand heading into a potential general election.',
            tags: ['Carney', 'byelections', 'Terrebonne', 'Toronto', 'Liberals'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/carney-byelection-terrebonne-scarborough-southwest-university-rosedale-ndp-conservatives-9.7119497' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'U.S. Customs Searched Record Number of Electronic Devices Last Year',
            summary: 'U.S. customs officers conducted a record number of searches of electronic devices belonging to travellers last year, and a recent update to their directives expands the list of searchable items to include smartwatches, SIM cards, and flash drives. The revelation is particularly alarming for Canadians crossing the border, who are already navigating heightened scrutiny amid the Trump administration\'s aggressive enforcement posture. Privacy advocates warn that the expanded search powers amount to a warrantless invasion of travellers\' digital lives, with virtually no legal recourse available at the border. The news has prompted calls from Canadian officials for clearer guidance to travellers about their rights and what to expect at U.S. ports of entry.',
            tags: ['U.S. customs', 'device searches', 'privacy', 'border', 'travel'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/united-states-customs-border-protection-phone-search-9.7118271' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Critics Say Ottawa\'s Sustainable Jobs Plan Offers No New Support for Energy Workers',
            summary: 'Ottawa\'s newly released sustainable jobs action plan is drawing sharp criticism from labour groups and opposition parties who say it offers no meaningful new support for energy workers facing the transition away from fossil fuels. The plan, which was supposed to deliver on the Liberal government\'s promise of a "just transition," has been described as a repackaging of existing programs rather than the bold new investment workers were expecting. Alberta and Saskatchewan politicians have been particularly vocal, arguing that the plan ignores the economic realities facing oil and gas communities. The backlash puts Carney in a difficult position as he tries to balance climate commitments with the political imperative of not alienating resource-dependent provinces ahead of a possible election.',
            tags: ['sustainable jobs', 'energy transition', 'labour', 'climate', 'Alberta'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/sustainable-jobs-action-plan-just-transition-9.7116866' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Federal Judge Rules Trump\'s Actions to Dismantle Voice of America Are Illegal',
            summary: 'A federal judge has ruled that the Trump administration\'s efforts to dismantle Voice of America — the U.S. government\'s international broadcasting service — are illegal, delivering a sharp rebuke to the White House\'s campaign against independent media institutions. The ruling blocks the administration from further gutting the agency, which Trump has long accused of liberal bias. VOA, led by controversial appointee Kari Lake, has seen mass firings, editorial interference, and budget slashing under the current administration. Press freedom advocates hailed the ruling as a critical defence of independent journalism, while the White House signalled it would appeal. The case is the latest in a growing list of judicial checks on Trump\'s executive overreach.',
            tags: ['Voice of America', 'press freedom', 'Trump', 'Kari Lake', 'courts'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/voice-of-america-kari-lake-press-freedom-7e9257d1a69907e1bb7489dfd32de833' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Trump\'s FDA Vaccine Chief Leaves for Second Time Amid Administration Turmoil',
            summary: 'The Trump administration\'s embattled FDA vaccine chief Vinay Prasad is leaving the agency for the second time, capping a chaotic tenure marked by clashes with career scientists and controversy over the administration\'s skeptical approach to vaccine regulation. Prasad\'s departure comes as public health experts warn that the administration\'s anti-vaccine rhetoric and policy decisions are undermining confidence in routine immunizations. The revolving door at the FDA reflects broader instability across Trump\'s health agencies, which have seen unprecedented turnover as political appointees clash with established scientific processes. The vacancy leaves critical vaccine oversight in limbo at a time when seasonal flu and COVID booster campaigns are being planned.',
            tags: ['FDA', 'vaccines', 'Vinay Prasad', 'Trump', 'public health'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/vinay-prasad-fda-trump-vaccine-moderna-fired-bf56fe9852def8c9f1b9a648e5bb92df' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Trump\'s "Roaring" Economy Meets a Rough Start to 2026',
            summary: 'Despite President Trump\'s insistence that the American economy is "roaring," the latest economic data tells a more complicated story as 2026 gets off to a bumpy start. Soaring oil prices driven by the Iran war are pushing gas costs higher, inflation remains stubbornly above target, and consumer confidence is flagging. The jobs picture, while still technically strong, is showing signs of softening in key sectors. Trump continues to downplay the economic headwinds, dismissing concerns about the need to tap the Strategic Petroleum Reserve and blaming any negative indicators on media bias. Economists warn that the combination of war-driven energy costs and lingering tariff impacts could tip the economy into a slowdown if the conflict drags on.',
            tags: ['economy', 'inflation', 'oil prices', 'jobs', 'Trump'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-economy-iran-inflation-jobs-gas-prices-7fbd5e99e3b6023963dd3de226aee4e4' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Meta to Temporarily Allow Rival AI Chatbots on WhatsApp in the EU',
            summary: 'Meta has announced it will temporarily allow competing AI chatbots on WhatsApp in the European Union, reversing its previous policy of blocking rival services like ChatGPT and Copilot from the platform. The move is a strategic concession to appease European Commission antitrust regulators who have been scrutinizing Meta\'s dominance in messaging. Meta says it will support "general purpose AI chatbots using the WhatsApp Business API in Europe" for 12 months, though competitors will need to pay a fee for access. The decision highlights how EU regulatory pressure continues to force Big Tech companies into opening up their platforms — a dynamic that could eventually benefit consumers through greater choice and competition in AI assistants.',
            tags: ['Meta', 'WhatsApp', 'AI chatbots', 'EU regulation', 'antitrust'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/news/829808/chatgpt-copilot-ai-llm-leaving-whatsapp-meta' },
                { title: 'Reuters', url: 'https://www.reuters.com/legal/litigation/meta-allow-ai-rivals-whatsapp-bid-stave-off-eu-action-2026-03-05/' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Epic v. Google Supreme Court Case Withdrawn as Both Sides Agree to Dismiss',
            summary: 'The long-running Epic v. Google antitrust case will not be going to the Supreme Court after all, with both companies filing a joint agreement to dismiss the appeal. The landmark case, which resulted in a jury finding that Google\'s app store practices were anticompetitive, had been closely watched as a potential precedent-setter for how app marketplaces operate. Google recently agreed to reduce its app store fees to 20% as part of ongoing remedies, and the mutual withdrawal suggests both sides see more benefit in settling their differences outside the highest court. The dismissal closes one chapter but the broader fight over app store economics — affecting developers, consumers, and platform gatekeepers alike — is far from over.',
            tags: ['Epic', 'Google', 'antitrust', 'Supreme Court', 'app stores'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/policy/889252/google-app-store-fee-reduction-20-percent-epic-v-google' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'OpenAI Launches Codex Security Agent and Expands Open Source Fund',
            summary: 'OpenAI has launched Codex Security, a new AI agent in research preview that\'s designed to identify and fix application security vulnerabilities, alongside an expansion of its Codex Open Source Fund to include conditional access to the security tool. The Codex Security agent represents OpenAI\'s push into the lucrative and critical field of automated security auditing, where AI could dramatically speed up the process of finding and patching bugs before they\'re exploited. Separately, OpenAI confirmed it\'s delaying the controversial ChatGPT "adult mode" to focus on intelligence gains, personalization, and making the experience more proactive. The moves suggest OpenAI is doubling down on developer-facing tools and enterprise features as its primary growth strategy.',
            tags: ['OpenAI', 'Codex', 'security', 'open source', 'AI developer tools'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'OpenAI', url: 'https://openai.com/index/codex-security-now-in-research-preview/' }
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
