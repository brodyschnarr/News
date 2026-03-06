// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Friday, March 6, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Israeli Strikes Pound Tehran and Beirut as Trump Demands Iran\'s "Unconditional Surrender"',
            summary: 'The Iran war intensified dramatically on Friday as Israeli warplanes hammered targets in both Tehran and Beirut while the U.S. warned attacks would only escalate further. President Trump issued his most aggressive statement yet, demanding Iran\'s "unconditional surrender" — a term that stunned diplomats and raised fears the conflict has no off-ramp. Hezbollah\'s decision to enter the war has sparked fury and confusion within Lebanon\'s Shia community, with many questioning the group\'s calculus. The U.S. Navy confirmed the Iranian warship IRIS Dena, sunk by American forces, had been sailing home from an exhibition in India, while energy markets shuddered as analysts warned the war is choking oil and gas supplies to Asia.',
            tags: ['Iran war', 'Israel', 'Trump', 'Hezbollah', 'Lebanon', 'oil'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-us-israel-news-live-updates-march-6/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-lebanon-03-06-2026' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-warship-iris-dena-india-14916ad657e50f048bbeb42b38224ecb' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Trump Fires Homeland Security Secretary Noem Amid Mounting Criticism',
            summary: 'President Trump fired Homeland Security Secretary Kristi Noem on Friday after weeks of mounting criticism over her leadership of the sprawling department. The dismissal came as public support for Trump\'s immigration policies slid in recent polls, and Noem had faced bipartisan scrutiny over her handling of border operations and her inflammatory characterization of protesters. Former Oklahoma congressman Markwayne Mullin is reportedly being considered as her replacement. The firing adds to an already chaotic week for the administration, which is simultaneously managing the Iran war, trade disputes with allies, and growing domestic unrest over the economy and civil liberties.',
            tags: ['Trump', 'Noem', 'Homeland Security', 'immigration', 'Mullin'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-homeland-security-noem-mullin-38c583b3cef97b4ef60d84b8f8b5961a' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/us-politics/article-noem-out-at-homeland-security-as-public-support-for-trumps-immigration/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Justice Department Releases Missing Epstein Files With Sexual Allegations Against Trump',
            summary: 'The U.S. Justice Department published previously missing files from the Jeffrey Epstein investigation that include uncorroborated sexual allegations against President Trump. According to the documents, FBI agents interviewed an unidentified woman four times in 2019 as part of their probe into Epstein\'s sex trafficking network. The release reignites one of America\'s most explosive scandals at a moment when Trump is already under enormous political pressure over the Iran war and domestic policy battles. The White House has not yet formally responded to the allegations. Separately, new revelations show another Silicon Valley titan was closer to Epstein than previously admitted, adding to the growing list of powerful figures implicated in the case.',
            tags: ['Epstein', 'Trump', 'DOJ', 'FBI', 'scandal'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/epstein-files-missing-release-doj-trump-f9cb1358a649c61f4bb7793bf358393b' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-epstein-files-sexual-allegations-trump-justice-department/' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Ottawa Charters Plane to Evacuate Canadians from Dubai as 3,500 Request Help',
            summary: 'The federal government has chartered a plane to evacuate 180 Canadians stranded in Dubai as Israeli and Iranian strikes intensify across the Middle East, but the scale of the crisis is staggering — more than 3,500 Canadians have now requested emergency assistance. A B.C. couple who managed to get out on their own are urging fellow Canadians not to rely solely on Ottawa, describing chaotic scenes at the airport and limited commercial flight options. The evacuation effort comes as Canada\'s top military officer meets with allied counterparts to discuss supporting Gulf states caught in the crossfire. The government faces mounting criticism over its capacity to protect citizens abroad during a rapidly escalating regional war.',
            tags: ['Dubai', 'evacuation', 'Canadians abroad', 'Middle East', 'Iran war'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-ottawa-charters-plane-to-evacuate-180-canadians-from-dubai-as-3500/' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-bc-couple-dubai-iran-fairmont-strike-evacuation/' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Doug Ford Eyes Artificial Island for Massive Toronto Convention Centre',
            summary: 'Ontario Premier Doug Ford is exploring plans to build a massive new convention centre on an artificial island off Toronto\'s waterfront, according to sources familiar with the proposal. The ambitious project would dramatically reshape the city\'s lakefront and aims to position Toronto as a world-class destination for international conferences and trade shows. Details remain scarce, but the plan reportedly involves significant provincial investment and could face environmental and logistical hurdles related to building on Lake Ontario. The announcement comes as Ford continues to push large-scale infrastructure projects as a cornerstone of his economic agenda, though critics are already questioning the cost and feasibility of constructing an entirely new landmass.',
            tags: ['Doug Ford', 'Toronto', 'convention centre', 'infrastructure', 'Ontario'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-ford-eyes-artificial-island-for-massive-convention-centre-sources-say/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Markets Decline as Middle East Turmoil and Weak U.S. Jobs Report Rattle Investors',
            summary: 'North American stock indexes fell on Friday as the twin pressures of escalating Middle East violence and a disappointing U.S. jobs report spooked investors. The TSX and S&P 500 both declined as traders weighed the growing risk of a prolonged regional conflict against signs of a softening American labour market. Energy stocks were mixed — oil prices remain elevated due to supply fears from the Iran war, but broader economic anxiety is dragging down sentiment. Costco offered a rare bright spot, announcing it would cut prices if it receives tariff refunds, while gold continued its rally as investors sought safe-haven assets amid the uncertainty.',
            tags: ['markets', 'TSX', 'jobs report', 'Iran war', 'Costco'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/investing/markets/inside-the-market/article-stock-market-today-tsx-sp-500-live-updates-march-6-2026/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Signs Strategic Partnership with Japan on Defence, Energy and AI',
            summary: 'On the final stop of his 10-day international trip, Prime Minister Mark Carney announced a sweeping new strategic partnership with Japan that includes deeper ties in defence, energy, critical minerals, and artificial intelligence. The deal could see Japanese forces participate in Canadian Arctic military exercises — a significant development as both nations seek to counterbalance rising geopolitical tensions. The partnership positions Canada as a key Pacific ally and reflects Carney\'s broader strategy of diversifying trade and security relationships beyond the United States. The AI cooperation component is particularly notable, with both countries pledging to collaborate on responsible AI development at a time when the technology is reshaping everything from defence to healthcare.',
            tags: ['Carney', 'Japan', 'defence', 'Arctic', 'AI', 'critical minerals'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-canada-and-japan-sign-new-strategic-partnership-including-military-co/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'LeBlanc Heads to Washington for Renewed Trade Talks After Months of Stalling',
            summary: 'Finance Minister Dominic LeBlanc is heading to Washington for a fresh round of trade negotiations after months of stalled discussions between Canada and the United States. The formal resumption of talks comes at a delicate moment — Trump\'s tariff threats continue to loom over the Canadian economy, while the Iran war has complicated the diplomatic landscape. LeBlanc faces the challenge of defending Canadian interests on trade while maintaining the cooperative tone Ottawa has tried to strike on the military conflict. The talks are expected to cover softwood lumber, dairy, and digital trade provisions, with Canadian officials hoping the shared wartime footing may create an opening for progress on long-standing irritants.',
            tags: ['LeBlanc', 'trade talks', 'Washington', 'tariffs', 'Canada-U.S.'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-leblanc-heads-to-washington-for-renewed-trade-talks/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Canada\'s Top Soldier Meets Allies to Discuss Military Support for Gulf States',
            summary: 'Chief of the Defence Staff General Jennie Carignan is meeting with European military counterparts to discuss how allied nations can support Gulf states caught in the crossfire of the Iran war. The discussions reflect growing pressure on Canada to move beyond rhetorical support and consider what tangible military contributions it could make to the conflict. The meetings come as critics argue Canada\'s rhetorical backing of the war serves an "audience of one" — Trump — while others insist Canada has nothing to gain and much to lose from deeper involvement. The talks also coincide with calls from some quarters for Canada to support international accountability mechanisms for Iran, adding another layer to Ottawa\'s increasingly complex balancing act.',
            tags: ['Carignan', 'military', 'Gulf states', 'Iran war', 'NATO allies'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-jennie-carignan-meeting-european-counterparts-gulf-states-war-iran/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump Demands Iran\'s "Unconditional Surrender" as War Enters Second Week',
            summary: 'President Trump\'s demand for Iran\'s "unconditional surrender" has sent shockwaves through the diplomatic world, with allies and adversaries alike questioning whether the administration has any realistic endgame for the conflict. The rhetoric represents a dramatic escalation from earlier statements about "limited strikes" on nuclear facilities, and critics say it effectively closes the door on negotiations. Trump also reiterated his vow to secure the Strait of Hormuz, though analysts at the Globe and Mail called the promise "implausible" given the logistical challenges of keeping the world\'s most important oil chokepoint open during an active war. India\'s "strategic autonomy" is also being tested after the sinking of the IRIS Dena complicated New Delhi\'s balancing act.',
            tags: ['Trump', 'Iran', 'unconditional surrender', 'Hormuz', 'India'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-lebanon-03-06-2026' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/commentary/article-trump-strait-hormuz-iran-war-oil-energy/' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Capitol Rioter Pardoned by Trump Gets Life Sentence for Child Molestation',
            summary: 'A Capitol rioter who was among those pardoned by President Trump has been sentenced to life in prison in Florida for molesting two children. The case has become a lightning rod for critics of Trump\'s sweeping January 6th pardons, who argue the blanket clemency freed dangerous individuals without adequate vetting. The juxtaposition of a presidential pardon followed by a life sentence for one of the most serious crimes imaginable underscores the political risks of the pardon strategy. Democrats have seized on the case as evidence that the pardons were reckless, while the White House has attempted to distance itself by noting the pardon was specifically for the Capitol-related charges.',
            tags: ['Capitol riot', 'pardon', 'Trump', 'child molestation', 'Florida'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/capito-riot-trump-pardon-child-molestation-f2690d4574a30afdec82edac04c2f4b9' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Britney Spears Arrested on Suspicion of DUI in California',
            summary: 'Pop star Britney Spears was arrested in California on suspicion of driving under the influence of alcohol and drugs, marking the latest turbulent chapter in her highly public life since the end of her conservatorship. The arrest immediately dominated social media and cable news, temporarily eclipsing coverage of the Iran war and Washington\'s political chaos. Spears\' case has long been intertwined with broader conversations about celebrity, mental health, and the American legal system. While technically a celebrity story rather than politics, the arrest arrives during a week when Americans are already anxious and distracted, and commentary has quickly turned to questions about the systems meant to support people after conservatorships end.',
            tags: ['Britney Spears', 'DUI', 'arrest', 'California', 'celebrity'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/britney-spears-arrested-california-ca4bf5d6189c33137a5a902609bc72cf' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Apple Launches $599 MacBook and iPhone 17e in Budget-Friendly "Big Week"',
            summary: 'Apple kicked off what it\'s calling its "big week" with the launch of two devices both priced at $599 — a more colorful MacBook aimed at students and budget buyers, and the new iPhone 17e. The MacBook features fascinating design tradeoffs to hit that price point, while the iPhone 17e represents Apple\'s most affordable new handset in years. The launches signal a strategic pivot for Apple, which has traditionally focused on premium pricing, and come as consumers worldwide tighten their belts amid war-driven inflation and economic uncertainty. Reviewers at The Verge praised the MacBook\'s design but noted compromises in performance, while the iPhone 17e is being positioned as a gateway device for the Apple ecosystem.',
            tags: ['Apple', 'MacBook', 'iPhone 17e', 'budget', 'hardware'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/apple-iphone17e-macbook-monitors-ipad-e52b1d9b4df4c0bc6b40b11dc155450b' },
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Meta Opens WhatsApp to Rival AI Chatbots in EU to Stave Off Antitrust Action',
            summary: 'Meta announced it will temporarily allow rival AI chatbots to operate on WhatsApp in the European Union, a significant concession aimed at appeasing antitrust regulators from the European Commission. Previously, competitors\' chatbots like ChatGPT and Copilot had been blocked from the platform, but Meta says it will now support "general purpose AI chatbots using the WhatsApp Business API in Europe" for a fee over the next 12 months. The move comes as the EU continues to tighten its grip on Big Tech through the Digital Markets Act, and represents one of the most concrete examples yet of how European regulation is forcing American tech giants to open up their walled gardens to competition.',
            tags: ['Meta', 'WhatsApp', 'AI chatbots', 'EU', 'antitrust'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/news/829808/chatgpt-copilot-ai-llm-leaving-whatsapp-meta' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Epic v. Google Supreme Court Case Withdrawn as Both Sides Agree to Dismiss',
            summary: 'Epic Games and Google have jointly agreed to withdraw their case from the U.S. Supreme Court, effectively ending one of the most closely watched antitrust battles in tech history at the highest judicial level. Under Rule 46.1, the Supreme Court clerk will enter an order of dismissal without further review. The withdrawal comes after Google recently agreed to reduce its app store fees to 20 percent as part of the lower court resolution, and Fortnite is returning to Google Play globally. While the case isn\'t entirely finished in lower courts, the Supreme Court withdrawal signals both companies are ready to move on. Epic Games CEO Tim Sweeney celebrated the outcome, which has reshaped how app stores operate worldwide.',
            tags: ['Epic Games', 'Google', 'Supreme Court', 'antitrust', 'app stores'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/policy/889252/google-app-store-fee-reduction-20-percent-epic-v-google' }
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
