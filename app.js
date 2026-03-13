// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Friday, March 13, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Explosion Rocks Tehran During Quds Day Rally Amid Intensifying U.S.-Israeli Strikes',
            summary: 'A large explosion rocked central Tehran on Friday as thousands gathered for the annual Quds Day demonstration, the latest in an escalating wave of U.S. and Israeli airstrikes against Iran. Defense Secretary Pete Hegseth claimed Ayatollah Khamenei "is wounded and likely disfigured," though he provided no evidence. The strike on Iran\'s capital during a mass public gathering marks a dramatic escalation in the conflict and has drawn sharp international condemnation. The Strait of Hormuz remains closed, and Hegseth dismissed concerns about oil supply disruption, telling reporters "don\'t need to worry about" the closure even as global energy markets continue to reel from the blockade.',
            tags: ['Iran war', 'Tehran', 'airstrikes', 'Quds Day', 'Hegseth'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/iran-tehran-strikes-israel-united-states-strait-of-hormuz-9.7127055' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/article-iran-war-us-israel-ferdowsi-square-explosion/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-13-2026' }
            ]
        },
        {
            id: 'top-2',
            headline: 'U.S. Military Refueling Plane Crashes in Iraq, Killing at Least 4',
            summary: 'A U.S. Air Force KC-135 refueling aircraft crashed in Iraq on Friday, killing at least four service members in the latest operational loss tied to the Iran conflict. The crash is under investigation but comes amid an intense tempo of military operations across the Middle East as the U.S. sustains its air campaign against Iranian targets. Meanwhile, the U.S. issued a 30-day sanctions waiver allowing the purchase of Russian oil stranded at sea, a move designed to calm energy markets jolted by the war. The crash underscores the human cost of the conflict beyond the headline-grabbing strikes, and is likely to fuel growing domestic debate over the scope of U.S. military involvement.',
            tags: ['Iraq', 'military crash', 'KC-135', 'Iran war', 'oil sanctions'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/us-iran-tanker-aircraft-crash-iraq-kc135-c337359a58be6280dc96fdbf1cb48a5b' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-us-issues-30-day-sanctions-waiver-for-purchase-of-russian-oil-stranded/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'ROTC Students Subdue and Kill Gunman at Old Dominion University',
            summary: 'ROTC students at Old Dominion University in Virginia heroically subdued and killed a shooter who opened fire on campus, leaving one person dead and two others injured. The incident is the latest in a grim series of American campus shootings, but the quick action of the military training students prevented what could have been a far worse tragedy. Separately, authorities identified the man who rammed his vehicle into a Michigan synagogue as a naturalized citizen from Lebanon, according to DHS. Both incidents highlight the ongoing challenge of domestic violence and extremism in the United States, even as the nation\'s attention is largely focused on the Iran war abroad.',
            tags: ['shooting', 'Old Dominion', 'ROTC', 'campus safety', 'Michigan synagogue'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/old-dominion-university-virginia-gunman-dead-e49b6d42f2b76d2ad92a2ee72833e9ad' },
                { title: 'AP News', url: 'https://apnews.com/article/west-bloomfield-michigan-synagogue-99884aa558523928953bf5d31018c150' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada\'s Economy Sheds 84,000 Jobs in February, Unemployment Rises to 6.7%',
            summary: 'Canada\'s economy lost a staggering 84,000 jobs in February, far worse than economists expected, while the unemployment rate ticked up to 6.7 per cent, Statistics Canada reported Friday. The losses spanned both the services and goods-producing sectors, painting a picture of broad economic weakness at a time when the country is already grappling with trade war fallout and energy market turmoil from the Iran conflict. The shocking jobs number will put intense pressure on the Bank of Canada to cut interest rates at its next decision, even as inflation concerns from soaring oil prices complicate the picture. The report is the worst single-month employment decline since the pandemic recovery era.',
            tags: ['jobs', 'unemployment', 'Statistics Canada', 'economy', 'labour market'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/canada-labour-force-survey-february-2026-9.7127105' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/economy/jobs/article-canada-february-jobs-report-unemployment-statistics/' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Hospital ERs Across Canada at Breaking Point — Is This the New Normal?',
            summary: 'Emergency rooms across Canada are buckling under unprecedented strain, with patients spending days on stretchers and in storage rooms waiting for beds, according to a sweeping CBC investigation. The crisis spans every province and territory, driven by staffing shortages, an aging population, and years of underinvestment in healthcare infrastructure. Doctors and nurses describe a system operating in permanent crisis mode where hallway medicine has become standard practice. The report raises urgent questions about whether Canadian politicians at every level of government have the will to make the massive investments needed to fix a healthcare system that many insiders say is already broken beyond incremental repair.',
            tags: ['healthcare', 'emergency rooms', 'hospitals', 'wait times', 'health crisis'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/canada-hospitals-wait-times-9.7123684' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Canada Gives TikTok the Green Light to Continue Operating',
            summary: 'Canada has approved TikTok to continue operating in the country, even as the Canadian Security Intelligence Service urged Canadians to "proceed cautiously" with the platform and conduct their own research on data collection practices. The decision comes after months of national security reviews and contrasts with the more aggressive approach taken by some other Western nations. CSIS had previously warned against using TikTok due to concerns about Chinese government access to user data. The green light will be welcomed by the millions of Canadians who use the platform daily, but privacy advocates argue the government is prioritizing popularity over genuine security concerns about foreign data harvesting.',
            tags: ['TikTok', 'CSIS', 'national security', 'social media', 'data privacy'],
            category: 'canadian-news',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Ontario to Exempt Premier and Cabinet from Freedom of Information Requests',
            summary: 'The Ontario government is introducing legislation to exempt the Premier and cabinet ministers from freedom of information requests, a move critics are calling a brazen assault on government transparency. The proposed changes follow Ontario\'s loss of a court battle over call logs from Premier Doug Ford\'s personal cellphone, suggesting the government is legislating its way around judicial accountability. Opposition parties and press freedom advocates have condemned the bill, arguing it would create an unprecedented shield around the province\'s most powerful officials at a time when public trust in government is already fragile. The bill is expected to face fierce debate but will likely pass given the Progressive Conservatives\' majority in the legislature.',
            tags: ['Ontario', 'Doug Ford', 'FOI', 'transparency', 'legislation'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-ontario-freedom-of-information-requests-premier-cabinet/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Carney Heads to Norway to Discuss Energy Security and Observe NATO Drills',
            summary: 'Prime Minister Mark Carney is embarking on a three-day trip to Norway focused on energy security and NATO military readiness, as the Iran war reshapes global energy markets and tests Western alliance cohesion. Carney is expected to observe NATO Arctic exercises and hold discussions with Nordic leaders about securing alternative energy supplies while the Strait of Hormuz remains blocked. The trip takes on added urgency after revelations that Ottawa failed to disclose an attack on a military base in Kuwait where Canadian forces were stationed, with Conservative MPs calling the lack of transparency "shameful." The dual focus on energy and defence reflects the interconnected crises facing Canada on the world stage.',
            tags: ['Carney', 'Norway', 'NATO', 'energy security', 'Kuwait'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-mark-carney-energy-security-trip-norway-oil/' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-canadian-troops-kuwait-iran-war/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Conservatives Split on Immigration as Editorial Board Identifies "Two Tory Mindsets"',
            summary: 'A Globe and Mail editorial has identified a growing rift within the Conservative Party over immigration policy, contrasting one faction that offers constructive reform ideas that could push the Liberals toward meaningful change with another that is primarily focused on stoking online outrage. The editorial argues that the party\'s most productive voices on immigration are being drowned out by those who treat the issue as a culture war wedge rather than a policy challenge. The split matters because immigration is shaping up to be one of the defining issues of the next federal election, and how the Conservatives navigate their internal divide will determine whether they offer Canadians a credible alternative or simply more partisan heat.',
            tags: ['Conservatives', 'immigration', 'CPC', 'policy', 'federal politics'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/opinion/editorials/article-tory-conservative-mindset-immigration-asylum/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump\'s Gas Price Boasts Come Back to Haunt Him as Iran War Sends Oil Soaring',
            summary: 'President Trump, who spent years bragging about low gas prices, is now doing an awkward about-face as the Iran conflict sends oil prices toward $100 a barrel and American consumers face sticker shock at the pump. The administration is scrambling to manage the narrative, with Hegseth dismissing supply concerns and the White House issuing a 30-day sanctions waiver for Russian oil purchases to ease pressure on global markets. The political reversal is particularly damaging because Trump made cheap energy a cornerstone of his economic messaging, and rising fuel costs are hitting the working-class voters who form his base the hardest. Democrats are seizing on the contradiction, arguing the president\'s reckless escalation in Iran has undone his own signature economic achievement.',
            tags: ['Trump', 'gas prices', 'Iran war', 'oil', 'economy'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-iran-oil-hormuz-7abbe9d8140de1e61355fb3ddb94639d' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Republicans Plan Long Talkathon on Voting Bill Under Pressure from Trump',
            summary: 'Senate Republicans are planning an extended floor session on a voting bill that would require proof of citizenship to cast a ballot, bowing to pressure from President Trump who has made election integrity a top priority ahead of the 2026 midterms. The talkathon is designed to highlight the issue and put Democrats on the defensive, even though the bill faces a likely filibuster. Critics argue the legislation would disenfranchise eligible voters who lack readily available citizenship documentation, while supporters say it\'s a common-sense measure to secure elections. The push comes as Trump seeks to energize his base around cultural issues even as his approval ratings take a hit from the Iran war and rising prices.',
            tags: ['voting', 'Republicans', 'Trump', 'midterms', 'citizenship'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/voting-trump-midterms-citizenship-republican-filibuster-b83df9d9d92f82aded39c0859750ae9f' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Iran-Linked Hackers Target U.S. Infrastructure as Cyberwar Escalates',
            summary: 'Iran-linked hacking groups are intensifying cyberattacks against U.S. targets, raising the risk of a major digital infrastructure breach as the kinetic war continues in the Middle East. Security researchers have identified campaigns targeting energy infrastructure, government networks, and financial systems, with the sophistication of attacks increasing since the conflict began. California Governor Newsom said there is no imminent threat despite warnings about a possible Iranian drone attack on the state, but the cyber dimension of the conflict is adding a layer of vulnerability that extends far beyond the battlefield. U.S. cyber command is reportedly conducting offensive operations of its own against Iranian networks, making this the most active state-on-state cyber conflict in history.',
            tags: ['cybersecurity', 'Iran', 'hackers', 'infrastructure', 'cyberwar'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/cyber-threats-iran-war-trump-israel-hackers-2c0ae77b1799b3d1c5b1353f7798f8ff' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-california-drones-newsom-trump-82afa326f0b362e0ae96b97e1e6c3d7e' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Meta Delays Its Next AI Model "Avocado" as Performance Falls Short of Rivals',
            summary: 'Meta has postponed the release of its next major AI model, codenamed Avocado, from March until at least May after internal testing showed its performance falls short of competitors like Google, the New York Times reports. The delay is a setback for Meta\'s AI ambitions, especially after the company hired Scale AI CEO Alexandr Wang to revamp its efforts. Avocado was intended to be Meta\'s first major open-source model release under Wang\'s leadership and a proof point that the company could compete at the frontier of AI development. The postponement suggests that despite spending billions on AI infrastructure and talent, Meta is still struggling to close the gap with the leading labs.',
            tags: ['Meta', 'AI', 'Avocado', 'Alexandr Wang', 'open source'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/news/841809/meta-avocado-ai-model-charge-open-source-mark-zuckerberg' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Adobe CEO Shantanu Narayen Steps Down After 18 Years as AI Reshapes Creative Industry',
            summary: 'Adobe CEO Shantanu Narayen is stepping down after an 18-year tenure that transformed the company from a boxed-software seller into a cloud-based creative powerhouse. In his departing statement, Narayen said "the next era of creativity is being written right now — shaped by AI, by new workflows and by entirely new forms of expression." His exit comes at a pivotal moment for Adobe, which faces intense competition from AI-native startups that are challenging its dominance in design and creative tools. The leadership transition will be closely watched by the entire tech industry as a bellwether for how legacy software companies navigate the AI revolution that is fundamentally reshaping their markets.',
            tags: ['Adobe', 'CEO', 'Shantanu Narayen', 'AI', 'creative tools'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Google Fiber Spins Off Into Independent Company, Partners with Stonepeak\'s Astound',
            summary: 'Google Fiber is spinning off from Alphabet to become an independent fiber internet provider, combining with Stonepeak-backed Astound Broadband. Google will retain a minority stake while investment firm Stonepeak holds the majority. GFiber CEO Dinni Jain said the partnership "is the next step in our decade-long mission to redefine what customers can expect from their internet provider." The move marks the end of Google\'s direct experiment in becoming an ISP, a project that launched with enormous ambition but faced years of slow expansion and regulatory headaches. The new entity will aim to expand fiber coverage more aggressively with dedicated infrastructure investment capital.',
            tags: ['Google Fiber', 'Astound', 'Stonepeak', 'ISP', 'broadband'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Google Fiber Blog', url: 'https://fiber.google.com/blog/2026/03/gfiber-and-stonepeaks-astound-to.html' }
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
