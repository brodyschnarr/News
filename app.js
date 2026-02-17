// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Tuesday, February 17, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Jesse Jackson, Civil Rights Icon and Presidential Candidate, Dies at 84',
            summary: 'Reverend Jesse Jackson, one of the most prominent civil rights leaders of the 20th century and a close associate of Martin Luther King Jr., has died at the age of 84. A Baptist minister who twice ran for the Democratic presidential nomination in 1984 and 1988, Jackson became the first major Black candidate to mount a serious national campaign. He founded the Rainbow Coalition and spent decades advocating for voting rights, economic justice, and international diplomacy. Tributes are pouring in from across the political spectrum, marking the passing of one of the last towering figures of the civil rights movement era.',
            tags: ['Jesse Jackson', 'civil rights', 'obituary', 'politics'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-jesse-jackson-civil-rights-leader-and-presidential-hopeful-dies-at-84/' },
                { title: 'AP News', url: 'https://apnews.com/article/jesse-jackson-dies-43abb84d2ffc76d967f9a5596ebd0be1' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Robert Duvall, Oscar-Winning Actor and Godfather Star, Dies at 95',
            summary: 'Robert Duvall, the legendary actor known for iconic roles in The Godfather, Apocalypse Now, and Tender Mercies — for which he won the Academy Award for Best Actor — has died at 95. Duvall\'s career spanned over six decades and earned him seven Oscar nominations, cementing his reputation as one of the greatest character actors in Hollywood history. Al Pacino and Francis Ford Coppola led an outpouring of tributes, with Coppola calling Duvall\'s portrayal of Tom Hagen "one of the most perfect performances ever committed to film."',
            tags: ['Robert Duvall', 'obituary', 'Hollywood', 'film', 'The Godfather'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/robert-duvall-dead-6ddb67ba5e2242ba9dd96f29b4ce242a' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Shooting at Rhode Island Youth Hockey Game Leaves 3 Dead Including Shooter',
            summary: 'A shooting at a youth hockey rink in Pawtucket, Rhode Island left three people dead — including the shooter — and three others wounded, according to authorities. The incident occurred during a game, sending players, children, and spectators scrambling for safety. Police have not yet confirmed a motive but say the incident does not appear to be random. The shooting adds to a growing national conversation about public safety at youth sporting events, with local officials calling for emergency security reviews at sports facilities across the state.',
            tags: ['shooting', 'Rhode Island', 'crime', 'US news'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/pawtucket-hockey-rink-shooting-rhode-island-c8ac3e8067ce2f2ce07e4d98009ecdaa' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada vs. USA Women\'s Hockey Gold Medal Game Set at Milan-Cortina Olympics',
            summary: 'Canada\'s women\'s hockey team survived a scare against Switzerland in the semifinals, narrowly advancing to set up the ultimate showdown against the United States for Olympic gold at the 2026 Milan-Cortina Winter Games. The storied rivalry between the two programs has defined women\'s Olympic hockey for three decades, with both teams trading gold medals across multiple Games. Meanwhile, Mikaël Kingsbury ended Canada\'s gold medal drought with a win in men\'s dual moguls, and Canada is in the finals of women\'s long-track team pursuit.',
            tags: ['Canada', 'Olympics', 'hockey', 'women\'s hockey', 'Milan-Cortina 2026'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/sports/olympics/article-milan-cortina-2026-womens-hockey-canada-us-rivalry-gold-showdown/' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/sports/olympics/article-winter-olympics-2026-canada-vs-switzerland-womens-hockey-semifinal/' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Organized Crime Groups Targeting Police Data Across Canada, Report Warns',
            summary: 'A national analysis reveals that Canada\'s biggest organized crime groups are actively attempting to infiltrate and access police databases, posing a serious risk to law enforcement operations and public safety. The report highlights that criminal organizations are using increasingly sophisticated methods — including recruiting insiders and exploiting digital vulnerabilities — to compromise sensitive police intelligence. Experts warn the threat extends beyond data theft, as compromised information could be used to identify informants, obstruct investigations, and undermine the justice system.',
            tags: ['Canada', 'crime', 'police', 'cybersecurity', 'national security'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-organized-crime-groups-targeting-police-data-across-canada-report-says/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Canada\'s Annual Inflation Rate Edges Down in January as Gasoline Costs Drop',
            summary: 'Statistics Canada reports that the country\'s annual inflation rate dipped slightly in January, helped by declining gasoline prices that offset continued pressure from food and shelter costs. The modestly lower reading gives the Bank of Canada some breathing room as it weighs its next interest rate decision amid growing concerns about the economic drag from US tariff threats. Economists note that underlying core inflation measures remain sticky, suggesting the path back to the Bank\'s 2% target will be gradual.',
            tags: ['Canada', 'inflation', 'economy', 'Bank of Canada', 'gasoline'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/business/economy/article-canada-inflation-rate-january-2026-statistics-canada/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Set to Release Ottawa\'s New Defence Industrial Strategy',
            summary: 'Prime Minister Mark Carney is expected to unveil a new defence industrial strategy focused on buying Canadian-made military equipment, a move aimed at both strengthening national security and boosting domestic manufacturing. The strategy comes as Canada faces mounting pressure from NATO allies — and pointed criticism from Washington — to meet its defence spending commitments. The "buy Canadian" approach signals a shift from decades of relying heavily on American and European defence contractors, though industry experts question whether Canadian firms can scale up quickly enough to meet demand.',
            tags: ['Canada', 'Carney', 'defence', 'military', 'industrial strategy'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-mark-carney-defence-industrial-strategy-buy-canadian/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Immigration Minister Defends Bill C-12 Asylum Changes Amid Senate Pushback',
            summary: 'Canada\'s Immigration Minister appeared before a Senate committee to defend proposed changes to asylum rules contained in the border security bill C-12, which would tighten requirements for refugee claimants entering through irregular crossings. Senators raised pointed concerns that the new rules could disproportionately affect LGBTQ+ claimants and women fleeing persecution, who often lack the documentation the bill would require. The minister argued the changes are necessary to restore public confidence in the immigration system while maintaining Canada\'s humanitarian obligations.',
            tags: ['Canada', 'immigration', 'asylum', 'Bill C-12', 'Senate'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-immigration-minister-bill-c-12-refugee-asylum-rules-senate-committee/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Ottawa Faces Calls to Send Oil and Aid to Cuba Amid Fuel Shortage',
            summary: 'The Canadian government is under growing pressure from opposition parties and humanitarian organizations to send emergency oil shipments and aid to Cuba, which is experiencing its worst fuel crisis in decades. Rolling blackouts and severe gasoline rationing have paralyzed the island\'s economy, with hospitals and schools struggling to maintain basic operations. Critics say Canada has a moral obligation given its historically close diplomatic ties with Havana, while government officials say they are evaluating options within the framework of existing sanctions policy.',
            tags: ['Canada', 'Cuba', 'oil', 'foreign aid', 'diplomacy'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-ottawa-faces-calls-to-send-oil-and-aid-to-cuba-amid-fuel-shortage/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Partial Government Shutdown Over DHS Oversight Drags On',
            summary: 'A partial US government shutdown triggered by a standoff over Department of Homeland Security oversight appears poised to drag on with no resolution in sight. Congressional Democrats have refused to approve DHS funding without new oversight provisions they say are necessary to monitor immigration enforcement operations, while the White House has rejected any conditions it views as limiting executive authority. Federal workers affected by the shutdown face another week without pay, and public services tied to DHS — including airport security staffing — are beginning to show strain.',
            tags: ['government shutdown', 'DHS', 'Congress', 'US politics'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/live/trump-dhs-government-shutdown-2-17-2026' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Court Orders Trump Administration to Restore George Washington Slavery Exhibit',
            summary: 'A federal judge ordered the Trump administration to immediately restore a historic exhibit at the President\'s House site in Philadelphia that documents George Washington\'s use of enslaved people at what was once the executive mansion. The administration had removed the exhibit as part of a broader rollback of federally-funded programming related to racial history, drawing immediate legal challenges from civil liberties groups. The ruling is being closely watched as a test of executive authority over publicly-funded historical interpretation and cultural heritage sites.',
            tags: ['Trump', 'George Washington', 'slavery', 'history', 'courts'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/george-washington-slavery-exhibit-restored-trump-2a32236320f280ba3e647d900c1301b4' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Texas Republican Paxton Steps Up Senate Bid Against Incumbent Cornyn',
            summary: 'Texas Attorney General Ken Paxton is intensifying his primary challenge against sitting Republican Senator John Cornyn ahead of early voting, positioning himself as the more conservative choice in what has become one of the most closely watched intra-party battles of the 2026 midterms. Paxton, who survived an impeachment trial in the Texas state senate, is leaning heavily into his combative brand and close ties to former President Trump. Cornyn, a longtime Senate leader, has responded by emphasizing his legislative record and endorsements from the Texas business establishment.',
            tags: ['Texas', 'Paxton', 'Cornyn', 'Senate', '2026 elections'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/texas-senate-ken-paxton-cornyn-fe2787bbac917c5cb22918ac1e34c458' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Meta and YouTube Head to Landmark Trial Over Children\'s Social Media Addiction',
            summary: 'Meta and YouTube are facing claims of social media addiction in children in what is being called a landmark trial in Los Angeles. The case could set sweeping legal precedent for how tech companies are held responsible for the mental health impacts of their platforms on minors. Instagram chief Adam Mosseri testified that he does not believe people can become "clinically addicted" to social media — a claim that drew sharp pushback from plaintiffs\' attorneys who presented internal research showing the companies were aware of harmful engagement patterns among young users.',
            tags: ['Meta', 'YouTube', 'social media', 'children', 'addiction', 'trial'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/meta-instagram-youtube-social-media-addiction-los-angeles-1b409b31438e5ba46e2e8c064229b51a' },
                { title: 'AP News', url: 'https://apnews.com/article/instagram-social-media-addiction-trial-mosseri-los-angeles-a49f64e21682e8bc1b98fbdf3d061579' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Sony Develops AI to Track Source Material Used in AI-Generated Music',
            summary: 'Sony has developed technology that can identify which real artists and recordings had the most influence on AI-generated music tracks — and crucially, it works even without cooperation from the AI developers who made the song. The company says the tool could underpin a future licensing system where human artists are compensated when their work is used to train AI models. Sony has "yet to decide" when to deploy it commercially, but the announcement signals a major push by the music industry to establish economic frameworks around AI-generated content.',
            tags: ['Sony', 'AI', 'music', 'copyright', 'licensing'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'ChatGPT Gets Lockdown Mode to Combat Prompt Injection Attacks',
            summary: 'OpenAI has introduced a new "Lockdown Mode" for ChatGPT that tightly restricts how the AI can interact with external systems, aimed at reducing the risk of prompt injection-based data exfiltration. The feature — which OpenAI says is "not necessary" for most users — is designed for high-security environments where adversaries might attempt to manipulate ChatGPT into leaking sensitive information through carefully crafted inputs. The move comes as enterprises increasingly integrate AI assistants into workflows involving confidential data, making security hardening a competitive differentiator.',
            tags: ['OpenAI', 'ChatGPT', 'security', 'prompt injection', 'AI safety'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'OpenAI', url: 'https://openai.com/index/introducing-lockdown-mode-and-elevated-risk-labels-in-chatgpt/' }
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
