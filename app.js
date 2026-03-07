// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Saturday, March 7, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Iranian President Apologizes to Neighbours as Trump Vows to Hit Iran Harder',
            summary: 'The Iran war entered its second week with Iranian President Pezeshkian issuing an extraordinary apology to neighbouring countries for the fallout from the conflict, while firmly rejecting President Trump\'s demands for "unconditional surrender." Trump responded on social media warning that Iran "will be hit very hard," signalling no de-escalation is forthcoming. Oil and gas prices continue to climb rapidly as the war shows no signs of letting up, squeezing consumers worldwide and rattling global energy markets. Evidence has also emerged suggesting that a deadly blast at an Iranian girls\' school was likely a U.S. airstrike, a revelation that could intensify international criticism of the American-led campaign.',
            tags: ['Iran war', 'Trump', 'Pezeshkian', 'oil prices', 'Middle East'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-iran-war-donald-trump-israel-lebanon-unconditional-surrender/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-07-2026' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-minab-girls-school-airstrike-us-israel-c3095dc9729881b567277a1c5c47efb2' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Russia Providing Iran With Intelligence to Help Strike U.S. Military, Sources Say',
            summary: 'Russia has been providing Iran with intelligence information that could help Tehran target U.S. military assets in the region, according to AP sources familiar with the matter. The revelation represents a dangerous new dimension to the conflict, linking Moscow\'s ongoing geopolitical rivalry with Washington directly to the battlefield in the Middle East. The intelligence sharing reportedly includes data that could assist Iranian forces in striking American positions, raising the stakes dramatically for U.S. troops deployed in the region. The news comes as Pentagon chief tech officer publicly clashed with AI company Anthropic over autonomous warfare capabilities, highlighting the intersection of emerging technology and the escalating conflict.',
            tags: ['Russia', 'Iran', 'intelligence', 'U.S. military', 'geopolitics'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-iran-russia-intelligence-35afae34198408d670941f971d383378' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Tornadoes Kill 6 in Michigan and Oklahoma as Severe Storms Batter the Midwest',
            summary: 'A devastating series of tornadoes tore through Michigan and Oklahoma on Saturday, killing at least six people as powerful storms hammered the nation\'s midsection. The severe weather system brought destructive winds, large hail, and multiple tornado touchdowns across several states, leaving communities reeling and emergency responders stretched thin. The death toll is expected to rise as search and rescue operations continue in the hardest-hit areas. The storms come at an already tense moment for the country, with the federal government\'s emergency response capabilities under scrutiny amid the ongoing Iran war and recent budget cuts to disaster relief programs.',
            tags: ['tornadoes', 'severe weather', 'Michigan', 'Oklahoma', 'Midwest'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/severe-weather-storm-tornado-midwest-oklahoma-f4666951e5ef045520e839923b788cba' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canadians Buying Less Alcohol Than Ever as Sales Hit Record Annual Drop',
            summary: 'Canadians are drinking less than at any point in the past two decades, with beer, wine, spirits, and cider sales recording their largest annual drop since Statistics Canada began tracking the data 20 years ago. The decline reflects a broader cultural shift, particularly among younger Canadians who are increasingly embracing sober-curious lifestyles, non-alcoholic alternatives, and wellness-focused habits. The trend has significant implications for Canada\'s alcohol industry, provincial liquor boards, and the tax revenues they generate. Industry analysts point to a confluence of factors including health awareness campaigns, the rising cost of living, and the growing availability of high-quality non-alcoholic beverages that are making it easier than ever to skip the drink.',
            tags: ['alcohol', 'Statistics Canada', 'health', 'consumer trends', 'economy'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Canada Building Stronger Business Ties With India as It Overtakes Japan\'s Economy',
            summary: 'Canada is aggressively ramping up business ties with India, which recently overtook Japan to become the world\'s fourth-largest economy and represents a massive untapped opportunity for Canadian exporters. The diplomatic reset comes after years of strained relations following the Nijjar affair, with Ottawa now signalling that economic pragmatism must take priority. Canadian businesses in sectors ranging from agriculture and mining to technology and education are eyeing the Indian market, while New Delhi is looking for reliable partners to supply critical minerals and energy. The push to diversify trade relationships beyond the U.S. has taken on new urgency amid Trump\'s ongoing tariff threats and the economic uncertainty caused by the Iran war.',
            tags: ['India', 'trade', 'economy', 'diversification', 'Canada'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-canada-business-ties-india-trade/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Fertility Rates in Canada\'s Major Cities in Steep Decline',
            summary: 'Fertility rates across Canada\'s largest cities are plummeting, with new data revealing a steep decline that\'s reshaping the face of urban Canada. The cost of living — particularly housing — along with delayed family formation, career prioritization, and shifting cultural norms are all contributing to the trend. Toronto, Vancouver, and Montreal are seeing some of the sharpest drops, with young Canadians increasingly saying they simply cannot afford to have children. The declining birth rate has major long-term implications for everything from immigration policy and pension sustainability to school enrollments and the future workforce, prompting calls for more aggressive family support policies from all levels of government.',
            tags: ['fertility', 'demographics', 'cost of living', 'housing', 'urban Canada'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/life/article-canada-major-cities-fertility-rates-decline-what-happened/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Says Canada Could Be Called to Help NATO Allies in Middle East',
            summary: 'Prime Minister Mark Carney acknowledged that Canada could be called upon to provide military assistance to NATO allies in the Middle East as the Iran war intensifies, though he stressed that no formal requests have come in yet. The statement marks Carney\'s most direct comments on potential Canadian military involvement in the conflict and comes amid growing pressure from allies — and domestically — for Canada to move beyond rhetorical support. Carney is walking a diplomatic tightrope, trying to demonstrate solidarity with the U.S.-led coalition while avoiding the kind of open-ended military commitment that could prove politically toxic at home. The comments coincide with reports that the Iran war is complicating Ottawa\'s push to attract Middle Eastern investment capital.',
            tags: ['Carney', 'NATO', 'Middle East', 'military', 'Iran war'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-iran-war-military-gulf-allies-middle-east/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-07-2026' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Carney Calls for Prince Andrew\'s Removal From Line of Succession',
            summary: 'In a striking intervention into Commonwealth affairs, Prime Minister Mark Carney has called for Prince Andrew — the Duke of York also known as Mountbatten-Windsor — to be removed from the British line of succession. The move positions Canada as a leading voice within the Commonwealth pushing for modernization of the monarchy, and comes amid Andrew\'s ongoing public disgrace following his association with Jeffrey Epstein. The call is likely to resonate with Canadians who have grown increasingly ambivalent about the monarchy, though it also risks complicating Canada\'s relationship with the United Kingdom at a time when both nations are navigating the fallout from the Iran war and shifting transatlantic alliances.',
            tags: ['Carney', 'Prince Andrew', 'monarchy', 'Commonwealth', 'succession'],
            category: 'canadian-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/canada-carney-andrew-succession-a7dc4996e0c091e956bcf0daf39c56ad' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Liberals Move to End Conservative Filibuster Over Religious Hate Speech Exemption',
            summary: 'The Liberal government is moving to end a Conservative filibuster over a proposed religious exemption to federal hate speech laws, escalating a bitter parliamentary battle over the limits of free expression and religious freedom. The Conservatives argue that the government\'s anti-hate bill would chill religious speech and expose faith leaders to prosecution for expressing traditional beliefs, while the Liberals maintain the legislation is narrowly targeted at incitement to violence and discrimination. The filibuster has ground parliamentary business to a halt at a time when the government is juggling the Iran war response, trade negotiations with the U.S., and preparation for a possible spring election. The dispute has exposed deep fault lines between urban progressive and rural religious constituencies.',
            tags: ['Liberals', 'Conservatives', 'filibuster', 'hate speech', 'religious freedom'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-liberals-move-to-end-conservative-filibuster-over-religious-exemption/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Kristi Noem\'s DHS Tenure Ends With $220 Million Ad Blitz and Public Split With Trump',
            summary: 'Kristi Noem\'s turbulent tenure as Homeland Security Secretary has come to an end, marked by a $220 million advertising campaign and a dramatic public split with President Trump over immigration enforcement. The departure caps one of the most chaotic tenures at DHS in recent memory, with Noem clashing repeatedly with the White House over strategy and messaging. Her exit comes amid broader turmoil in Trump\'s cabinet as the administration struggles to manage the Iran war while maintaining its hardline domestic agenda. The massive ad spend has drawn particular scrutiny, with critics questioning whether taxpayer money was used effectively or simply served as a vanity project for Noem\'s political brand.',
            tags: ['Noem', 'DHS', 'Trump', 'immigration', 'advertising'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/kristi-noem-border-immigration-kennedy-ad-campaign-bc1525f1d10a468c892d0cb5cf3907b0' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Pentagon Tech Chief Clashes With Anthropic Over Autonomous Warfare',
            summary: 'The Pentagon\'s chief technology officer has publicly clashed with AI safety company Anthropic over the use of artificial intelligence in autonomous warfare, revealing deep tensions between the military establishment and Silicon Valley over the ethics of AI-powered weapons. The dispute centres on the Pentagon\'s "Golden Dome" missile defence program and whether AI systems should be allowed to make lethal decisions without human oversight. Anthropic, which has positioned itself as a leader in AI safety, reportedly pushed back against military applications that would cross its ethical red lines. The clash highlights the growing friction between the defence sector\'s appetite for cutting-edge AI and the tech industry\'s stated commitments to responsible development.',
            tags: ['Pentagon', 'Anthropic', 'AI', 'autonomous weapons', 'Golden Dome'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/ai-anthropic-pentagon-golden-dome-autonomous-weapons-6f3c45ff46172c1bf8658dea0098f3fe' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Appeals Court Blocks Trump From Ending Protections for 350,000 Haitians',
            summary: 'A U.S. appeals court has ruled that the Trump administration cannot end Temporary Protected Status for more than 350,000 Haitian nationals, dealing another legal blow to the president\'s aggressive immigration agenda. The ruling maintains protections that shield Haitians from deportation due to ongoing instability in their home country, and marks the latest in a string of judicial setbacks for the administration\'s immigration policies. The decision comes as ICE arrests of a Spanish-language news reporter in Tennessee sparked outrage among press freedom advocates and immigrant communities. Trump\'s immigration enforcement machinery continues to face legal and political headwinds even as the administration insists it has broad authority to reshape the immigration system.',
            tags: ['Haiti', 'TPS', 'immigration', 'appeals court', 'Trump'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-cannot-end-protections-for-more-than-350000-haitians-us-appeals/' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-trump-cannot-end-protections-for-more-than-350000-haitians-us-appeals/' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'OpenAI Delays ChatGPT "Adult Mode" to Focus on Intelligence and Personalization',
            summary: 'OpenAI has pushed back the launch of ChatGPT\'s controversial "adult mode" feature, which was expected to debut this quarter, in order to focus on what the company says are higher priorities for users. According to an OpenAI spokesperson, the team is redirecting resources toward "gains in intelligence, personality improvements, personalization, and making the experience more proactive." Separately, OpenAI launched Codex Security, a new AI agent in research preview focused on identifying and fixing application security vulnerabilities, and expanded its Codex Open Source Fund to include conditional access to the security tool. The moves suggest OpenAI is prioritizing developer tools and core model capabilities over more controversial consumer features.',
            tags: ['OpenAI', 'ChatGPT', 'adult mode', 'Codex', 'AI safety'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Samsung Still Planning AR Smart Glasses Launch in 2026 With Built-in Camera',
            summary: 'Samsung confirmed it is still on track to launch its first smart glasses sometime in 2026, with the device connecting to your phone and featuring a built-in camera at "eye level." Jay Kim, Samsung\'s EVP of its mobile division, shared new details with CNBC about the AR glasses the company is building in partnership with Google using the Android XR platform. The glasses represent Samsung\'s most ambitious foray into augmented reality and will compete directly with Meta\'s Ray-Ban smart glasses. The announcement comes as the wearable AR market heats up, with Apple, Meta, and Google all racing to establish dominance in what many believe will be the next major computing platform after smartphones.',
            tags: ['Samsung', 'AR glasses', 'Google', 'Android XR', 'wearables'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/gadgets/869955/samsung-ar-glasses-are-coming-this-year' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Proton Mail Helped FBI Unmask Anonymous Protester Through Payment Data',
            summary: 'Privacy-focused email provider Proton Mail helped the FBI identify an anonymous Stop Cop City protester by providing payment information tied to their account, according to court records obtained by 404 Media. While Proton\'s end-to-end encryption kept the account\'s content private, the company complied with a request from Swiss authorities for billing metadata — specifically the name of who paid for the account. The case highlights a fundamental tension in privacy-focused services: while message content can be encrypted, payment and account metadata often cannot be fully shielded from law enforcement. The revelation is likely to shake trust among activists and journalists who rely on Proton\'s suite of services precisely because of its privacy promises.',
            tags: ['Proton Mail', 'privacy', 'FBI', 'encryption', 'surveillance'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: '404 Media', url: 'https://www.404media.co/proton-mail-helped-fbi-unmask-anonymous-stop-cop-city-protestor/' }
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
