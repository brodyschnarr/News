// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Saturday, March 14, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Iran War Enters Third Week as U.S. Strikes Kharg Island, Deploys 2,500 More Marines',
            summary: 'The U.S.-Iran conflict entered its third week with strikes on Kharg Island, a critical hub for Iranian oil exports, as Trump warned that oil infrastructure could be next if Iran continues to interfere with shipping through the Strait of Hormuz. The Pentagon is deploying an additional 2,500 Marines to the region. Iran has struck a defiant tone, claiming its oil exports continue normally and further threatening the UAE. The escalation has sent oil prices soaring and displaced millions of people inside Iran according to the UN Refugee Agency. The Hormuz energy crisis is now punishing poorer Middle Eastern nations, with analysts warning it could trigger Lebanon\'s economic collapse.',
            tags: ['Iran war', 'Kharg Island', 'oil', 'Marines', 'Strait of Hormuz'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-iraq-us-trump-march-14-2026-oil-prices-a2399398b4c590995b814d7640362a11' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-us-israel-kharg-island/' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/commentary/article-hormuz-energy-crisis-is-punishing-poor-mideast-countries-and-could/' }
            ]
        },
        {
            id: 'top-2',
            headline: 'U.S. Economy Showing Cracks as War Drives Oil Prices Higher',
            summary: 'Cracks are emerging in what had been a resilient U.S. economy even before the Iran war sent oil prices rocketing, according to AP analysis. Consumer spending is weakening, and the government shutdown earlier this year already dented GDP growth. Now the war-driven energy shock is compounding those pressures, with gasoline prices surging and businesses bracing for a prolonged disruption. Trump signed executive orders aimed at addressing home affordability ahead of the midterms, signaling White House concern about the economic mood. Meanwhile, a federal judge quashed subpoenas in the Justice Department\'s investigation of Fed Chair Jerome Powell, adding another layer of uncertainty to an already jittery economic landscape.',
            tags: ['economy', 'oil prices', 'Iran war', 'housing', 'Federal Reserve'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/economy-gdp-consumer-spending-trump-government-shutdown-3172b6d0023717644c173cee94d44a79' },
                { title: 'AP News', url: 'https://apnews.com/article/trump-housing-executive-orders-bafb561bcc5da770de8f44ec06676d0d' },
                { title: 'AP News', url: 'https://apnews.com/article/feeral-reserve-trump-0fdd36447a6aa8ae3e7125930d03950f' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Zelenskyy Slams U.S. 30-Day Waiver on Russian Oil Sanctions as "Not the Right Decision"',
            summary: 'Ukrainian President Volodymyr Zelenskyy sharply criticized the United States for issuing a 30-day waiver on Russian oil sanctions, calling it "not the right decision" as it effectively funds Russia\'s war machine while Washington fights its own conflict in the Middle East. The waiver was designed to ease global energy markets roiled by the Iran war and Hormuz closure, but Kyiv sees it as a betrayal that undermines the broader sanctions regime painstakingly built to isolate Moscow. The move highlights the impossible balancing act the U.S. faces — trying to manage energy prices at home while maintaining pressure on Russia and prosecuting a war against Iran simultaneously.',
            tags: ['Zelenskyy', 'Ukraine', 'Russia', 'oil sanctions', 'Iran war'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/russia-ukraine-war-macron-oil-drones-a9330482d471ea67890a0e8ec1913db7' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada\'s Economy Lost 84,000 Jobs in February as Unemployment Hits 6.7%',
            summary: 'Canada\'s labour market took a brutal hit in February, shedding 84,000 jobs as the unemployment rate climbed to 6.7 per cent. The losses — far worse than forecasts — spanned both goods-producing and service sectors, signalling broad economic weakness at a time when trade tensions and the Iran-driven energy crisis are battering confidence. The report marks the worst single-month employment decline since the pandemic era and will intensify pressure on the Bank of Canada to cut rates, even as soaring oil prices complicate the inflation picture. For ordinary Canadians, the numbers mean a tightening job market heading into spring with no clear relief in sight.',
            tags: ['jobs', 'unemployment', 'economy', 'Statistics Canada', 'labour market'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/canada-labour-force-survey-february-2026-9.7127105' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Immigration Worker Arrested by Border Guards After Permit Cancelled Without Notice',
            summary: 'A social worker specializing in youth mental health is heading back to Ireland after he says Immigration, Refugees and Citizenship Canada cancelled his work permit without his knowledge and without giving him a chance to respond. Border guards arrested him on the street in British Columbia, leaving him with no time to contest the decision. The case has drawn outrage from immigration advocates who say it illustrates the opaque and often arbitrary nature of Canada\'s immigration enforcement system. It raises serious questions about due process for temporary foreign workers who follow all the rules but still find themselves caught in bureaucratic traps with life-altering consequences.',
            tags: ['immigration', 'work permits', 'IRCC', 'British Columbia', 'due process'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/british-columbia/mental-health-worker-border-guard-arrest-9.7128359' }
            ]
        },
        {
            id: 'cdn-3',
            headline: '22-Year-Old Student Dies Donating Plasma at For-Profit Winnipeg Clinic',
            summary: 'Loved ones are seeking answers after a 22-year-old student died while donating plasma at a for-profit collection site in Winnipeg. Health Canada says four such deaths have occurred in the last decade, and the tragedy has reignited debate about the safety of commercial plasma collection as Manitoba considers banning the practice. The student\'s family is demanding a full investigation into what went wrong during what should have been a routine donation. Critics of for-profit plasma argue that financial incentives push donors to give more frequently than is safe, while industry defenders say the operations are heavily regulated and essential for meeting Canada\'s growing demand for plasma-derived medicines.',
            tags: ['plasma donation', 'Winnipeg', 'Health Canada', 'student death', 'Manitoba'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-loved-ones-seek-answers-after-22-year-old-student-dies-while-donating/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Federal Departments Reveal Plans to Find Billions in Internal Savings Through Cuts',
            summary: 'Federal departments and agencies have released details on how they plan to find billions of dollars in internal savings, with cuts including winding down a construction project at Transport Canada and scaling back legal support for veterans appealing rulings about their benefits. The austerity measures come as Ottawa faces mounting fiscal pressure from the Iran war, energy market disruption, and slowing economic growth. Veterans groups have condemned the legal-aid cuts as particularly cruel, arguing the government is balancing its books on the backs of those who served. The savings plan signals a broader belt-tightening across the federal government that will affect services Canadians rely on.',
            tags: ['federal budget', 'austerity', 'veterans', 'Transport Canada', 'savings'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-federal-departments-details-plans-billions-internal-savings/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Mark Carney at One Year: Useful in a Crisis, But Is He Any Good at Politics?',
            summary: 'A Globe and Mail analysis examines Prime Minister Mark Carney\'s first year in office, noting that while he has proven himself capable in crisis management — navigating the Iran war, trade tensions with Trump, and energy market chaos — questions linger about his political instincts. For the first time, Canada has a PM who is figuring out how to be a politician on the job, in front of everyone. His technocratic approach wins praise from policy wonks but sometimes falls flat in the retail politics of connecting with everyday Canadians. As Carney heads to Norway to discuss energy security and observe NATO drills, the piece asks whether crisis competence alone is enough to win the next election.',
            tags: ['Mark Carney', 'Prime Minister', 'leadership', 'politics', 'analysis'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/opinion/article-hes-useful-in-a-crisis-but-is-he-any-good-at-politics-a-look-at-mark/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Ottawa to Allow Rural Employers to Hire More Temporary Foreign Workers',
            summary: 'The federal government is allowing rural employers to increase the proportion of temporary foreign workers in their workforce, a policy shift aimed at addressing chronic labour shortages in areas that struggle to attract domestic workers. The move comes amid a broader national debate about immigration levels and the role of temporary workers in the Canadian economy. Critics argue the policy will further depress wages in rural communities and make employers dependent on cheap foreign labour rather than investing in automation or better pay. Supporters counter that without the change, many rural businesses — from farms to food processors — would simply shut down, devastating already fragile small-town economies.',
            tags: ['temporary foreign workers', 'rural', 'immigration', 'labour', 'federal policy'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/temporary-foreign-workers-rural-employers-9.7128274' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump Signs Housing Executive Orders as Midterm Pressure Mounts',
            summary: 'President Trump signed a batch of executive orders aimed at addressing home affordability concerns, a clear signal that the White House is worried about the economic mood heading into the 2026 midterms. The orders target federal land use, permitting reform, and mortgage regulation, though critics say executive action alone can\'t solve a housing crisis driven by decades of underbuilding and soaring interest rates. The move comes as the broader economy shows cracks — consumer spending is weakening, oil prices are surging from the Iran war, and Trump\'s approval ratings have taken a hit. Democrats dismissed the orders as "election-year window dressing" that won\'t meaningfully bring down housing costs for struggling Americans.',
            tags: ['Trump', 'housing', 'executive orders', 'midterms', 'affordability'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-housing-executive-orders-bafb561bcc5da770de8f44ec06676d0d' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'State Department Slashes Fee to Renounce U.S. Citizenship by 80%',
            summary: 'The State Department has cut the fee to renounce U.S. citizenship by 80 per cent, from $2,350 down to just $450, a move that is raising eyebrows given the current political climate. The timing is striking: it comes amid rising emigration interest among Americans disillusioned with the political direction of the country, the Iran war, and economic uncertainty. While the State Department framed the change as a routine fee adjustment, critics see it as either tone-deaf or deliberately provocative. The number of Americans renouncing citizenship has been trending upward in recent years, and the dramatically lower cost could accelerate that trend — a symbolic indictment of the national mood.',
            tags: ['citizenship', 'State Department', 'emigration', 'fees', 'policy'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/us-citizenship-state-department-ab78db7aced64919edff3de26eebb681' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'ICE Replaces Contractor at Largest Detention Camp After Conditions Scrutiny',
            summary: 'ICE has replaced the private contractor running its largest detention facility in eastern Montana following intense scrutiny of living conditions at the camp. The move comes after reports of overcrowding, inadequate medical care, and unsanitary conditions that drew bipartisan criticism. Separately, ICE operations continue to expand in Minnesota, where activists report drones surveilling their neighbourhoods and the Department of Homeland Security has used license-plate readers and facial recognition technology to monitor anti-ICE organizers in Minneapolis. The contractor swap acknowledges the severity of conditions but does little to address broader concerns about the scale and methods of the Trump administration\'s immigration enforcement apparatus.',
            tags: ['ICE', 'detention', 'immigration', 'Montana', 'surveillance'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/ice-detention-facility-camp-east-montana-conditions-contract-c7d369ed5fcbe19d87868b9b337f5211' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Meta Delays "Avocado" AI Model Until May as Performance Lags Behind Google',
            summary: 'Meta has pushed back the release of its next major AI model, codenamed Avocado, from March to at least May after internal benchmarks showed it falling short of rivals like Google. The delay is embarrassing for Meta, which hired Scale AI\'s Alexandr Wang to overhaul its AI division and has poured billions into compute infrastructure. Avocado was supposed to prove Meta could compete at the AI frontier with an open-source approach, but the postponement suggests the gap with leading labs remains stubbornly wide. The news sent a ripple through the AI community, where Meta\'s open-source contributions have been widely valued — raising questions about whether the company\'s ambitions are outpacing its execution.',
            tags: ['Meta', 'AI', 'Avocado', 'Google', 'open source'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/news/841809/meta-avocado-ai-model-charge-open-source-mark-zuckerberg' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Google Overhauls Maps with AI-Powered Features Using Gemini',
            summary: 'Google is rolling out a major overhaul of its Maps app, adding AI features powered by its Gemini model to help people navigate more intelligently. The update includes natural-language trip planning, smarter route suggestions that factor in real-time conditions, and contextual recommendations for nearby businesses. It\'s the most significant Maps redesign in years and represents Google\'s strategy of embedding Gemini across its entire product suite rather than keeping AI confined to standalone chatbots. The update positions Google Maps as not just a navigation tool but an AI-powered local guide — a move that could further entrench Google\'s dominance in local search and put more pressure on competitors like Apple Maps.',
            tags: ['Google', 'Maps', 'Gemini', 'AI', 'navigation'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/google-maps-ai-gemini-update-1933c40eaecfdbb9aa54d8ae3efcec2e' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'BuzzFeed Posts $57M Loss After AI Pivot Backfires Spectacularly',
            summary: 'BuzzFeed\'s aggressive embrace of AI has proven catastrophic, with the company posting a $57.3 million loss in 2025 and its stock cratering to just $0.70 per share. Three years ago, CEO Jonah Peretti bet the company\'s future on using AI to generate articles and quiz responses, but readers rejected the machine-generated content en masse. Despite the dismal results, Peretti remains undeterred and is planning to bring "new AI apps" to market — a move that has left investors and industry observers baffled. The BuzzFeed saga has become a cautionary tale about the gap between AI hype and consumer reality: just because content can be generated cheaply by machines doesn\'t mean anyone wants to read it.',
            tags: ['BuzzFeed', 'AI', 'media', 'Jonah Peretti', 'content'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Futurism', url: 'https://futurism.com/artificial-intelligence/buzzfeed-disastrous-earnings-ai' }
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
