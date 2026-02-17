// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Tuesday, February 17, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Jesse Jackson, Civil Rights Leader and Presidential Hopeful, Dies at 84',
            summary: 'The Rev. Jesse Jackson, a towering figure in the American civil rights movement and close associate of Martin Luther King Jr., has died at the age of 84. Jackson twice ran for the Democratic presidential nomination and spent decades as one of the most prominent voices for racial justice, economic equality, and voter registration in the United States. His Rainbow/PUSH Coalition became a powerful force in American politics, and tributes have poured in from world leaders recognizing his lifetime of activism and service.',
            tags: ['Jesse Jackson', 'civil rights', 'obituary', 'US'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-jesse-jackson-civil-rights-leader-and-presidential-hopeful-dies-at-84/' },
                { title: 'AP News', url: 'https://apnews.com' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Robert Duvall, Oscar-Winning Actor and Godfather Star, Dies at 95',
            summary: 'Robert Duvall, one of the most celebrated actors in American cinema history, has died at 95. Best known for his iconic roles as Tom Hagen in The Godfather, Lieutenant Colonel Kilgore in Apocalypse Now, and his Oscar-winning turn in Tender Mercies, Duvall brought quiet intensity and authenticity to every performance across a career spanning six decades. Al Pacino, Francis Ford Coppola, and numerous collaborators have paid tribute to an artist widely considered one of the greatest character actors of all time.',
            tags: ['Robert Duvall', 'obituary', 'Hollywood', 'entertainment'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/robert-duvall-dead-6ddb67ba5e2242ba9dd96f29b4ce242a' },
                { title: 'The Verge', url: 'https://www.theverge.com' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Shooting at Rhode Island Youth Hockey Game Leaves 3 Dead Including Gunman',
            summary: 'A shooting at a youth hockey rink in Pawtucket, Rhode Island left three people dead, including the shooter, and three more wounded. The incident occurred during a game involving young players, sending shockwaves through the community and reigniting debates over gun violence in everyday American settings. Law enforcement officials are investigating the motive, while local officials called for calm and offered support to the families affected by the tragedy.',
            tags: ['shooting', 'Rhode Island', 'gun violence', 'US'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/pawtucket-hockey-rink-shooting-rhode-island-c8ac3e8067ce2f2ce07e4d98009ecdaa' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canada Women\'s Hockey Beats Switzerland 2-1, Sets Up Gold Medal Showdown with US',
            summary: 'Team Canada narrowly escaped disaster in the Olympic women\'s hockey semifinal, edging Switzerland 2-1 to advance to the gold medal game at the Milan-Cortina 2026 Winter Olympics. The win sets up yet another heated Canada-USA rivalry showdown for gold, a matchup that has defined women\'s hockey for over two decades. The Canadian squad had to rally after a shaky start, with their goaltender making several key saves to preserve the slim lead in a tense third period.',
            tags: ['Olympics', 'hockey', 'Canada', 'Winter Games', 'Milan-Cortina'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/sports/olympics/article-winter-olympics-2026-canada-vs-switzerland-womens-hockey-semifinal/' },
                { title: 'AP News', url: 'https://apnews.com' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Organized Crime Groups Targeting Police Data Across Canada, Report Says',
            summary: 'A national analysis has revealed that major organized crime groups across Canada are actively targeting police data systems, posing a significant infiltration risk to law enforcement agencies. The report highlights how criminal organizations are attempting to access sensitive policing information through insider recruitment, cyber intrusion, and social engineering. Experts warn that compromised police data could endanger officers, undermine investigations, and erode public trust in the justice system.',
            tags: ['Canada', 'crime', 'cybersecurity', 'policing'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-organized-crime-groups-targeting-police-data-across-canada-report-says/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Tumbler Ridge Community Reels as Ties to B.C. Mass Shooting Tragedy Spread Across Country',
            summary: 'Communities far beyond Tumbler Ridge, B.C. are feeling the shockwaves of the recent mass shooting, with the small town of Lawn, Newfoundland discovering it lost three relatives from the Strang family in the tragedy. Temporary school trailers are arriving in Tumbler Ridge this week as the town weighs a return to classes, and grief counsellors are being deployed across multiple provinces as the full scope of the tragedy\'s impact on extended families and tight-knit communities becomes clear.',
            tags: ['Canada', 'Tumbler Ridge', 'B.C.', 'tragedy'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-across-the-country-from-tumbler-ridge-another-tiny-town-is-shaken-by/' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney Set to Release Ottawa\'s New Defence Industrial Strategy',
            summary: 'Prime Minister Mark Carney is preparing to unveil a new defence industrial strategy focused on a "buy Canadian" approach to military procurement. The strategy is expected to prioritize domestic manufacturers for future defence contracts, aiming to both bolster national security and stimulate Canada\'s industrial base amid growing pressure from NATO allies and the United States to increase military spending. The announcement comes as Canada faces heightened expectations to demonstrate self-sufficiency in defence production.',
            tags: ['Canada', 'Carney', 'defence', 'procurement', 'politics'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-mark-carney-defence-industrial-strategy-buy-canadian/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Immigration Minister Defends Proposed Asylum Rule Changes Through Border Bill',
            summary: 'Canada\'s Immigration Minister appeared before a Senate committee to defend Bill C-12, which proposes significant changes to the country\'s asylum and refugee rules as part of a broader border security overhaul. Senators raised fears that tightening the rules could disproportionately affect LGBTQ claimants and women fleeing persecution, while the minister argued the changes are necessary to maintain the integrity of the immigration system and respond to record-high asylum claims at the border.',
            tags: ['Canada', 'immigration', 'asylum', 'Bill C-12', 'politics'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-immigration-minister-bill-c-12-refugee-asylum-rules-senate-committee/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump and Maryland Governor Battle Over Potomac River Sewage Spill Response',
            summary: 'A public feud has erupted between the Trump administration and Maryland Governor Wes Moore over responsibility for a major sewage spill into the Potomac River. Both sides have traded blame over the response timeline and cleanup efforts, with the incident becoming a flashpoint in the broader tensions between the federal government and Democratic-led states. Environmental groups warn that the political bickering is distracting from the urgent public health threat posed by untreated sewage flowing into a major waterway serving millions.',
            tags: ['Trump', 'Wes Moore', 'Potomac', 'environment', 'US politics'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-wes-moore-potomac-sewage-spill-bc43a446ea2db477501d90f1725a8935' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Texas Republican Paxton Steps Up Senate Bid Against GOP Sen. Cornyn',
            summary: 'Texas Attorney General Ken Paxton is escalating his primary challenge against incumbent Republican Senator John Cornyn ahead of early voting, setting up one of the most consequential intra-party battles of the 2026 midterm cycle. Paxton, who survived an impeachment trial in 2023, is positioning himself as the more Trump-aligned candidate and attacking Cornyn\'s record on immigration and spending. The race is being closely watched as a barometer of how far right the Republican base has shifted in deep-red states.',
            tags: ['Texas', 'Paxton', 'Cornyn', 'Senate', 'GOP', 'US politics'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/texas-senate-ken-paxton-cornyn-fe2787bbac917c5cb22918ac1e34c458' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'DHS Pressing Social Media Platforms for Info on ICE Critics',
            summary: 'The Department of Homeland Security has sent hundreds of subpoenas to Google, Reddit, Discord, and Meta seeking names, email addresses, and phone numbers associated with accounts that track or criticize Immigration and Customs Enforcement, according to a New York Times report. The revelation has alarmed civil liberties groups who say the government is using its subpoena power to chill free speech and target political dissent. Several platforms are reportedly pushing back on the requests, citing user privacy protections.',
            tags: ['DHS', 'ICE', 'social media', 'privacy', 'US politics'],
            category: 'us-politics',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'New York Times', url: 'https://www.nytimes.com' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'EU Opens Privacy Investigation Into Musk\'s Grok Chatbot Over Deepfake Images',
            summary: 'Ireland\'s Data Protection Commission has launched a formal investigation into Elon Musk\'s Grok AI chatbot over its generation of sexualized deepfake images, marking the latest EU regulatory action targeting AI-generated content. The probe centres on whether Grok\'s image generation capabilities violate GDPR provisions around consent and the processing of personal data. The investigation follows growing backlash over the chatbot producing explicit images of real public figures without permission, raising urgent questions about AI safety guardrails.',
            tags: ['AI', 'Grok', 'EU', 'privacy', 'deepfakes', 'Musk'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/ireland-grok-deepfakes-eu-privacy-9d3d096a1f4dc0baddde3d5d91e050b7' },
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Meta and YouTube Face Landmark Trial Over Social Media Addiction in Children',
            summary: 'Meta and YouTube are heading to trial in Los Angeles to face claims that their platforms are designed to be addictive to children, in what could become a landmark case for tech regulation. Instagram chief Adam Mosseri testified that he does not believe people can become clinically addicted to social media, a claim that drew sharp pushback from plaintiffs\' attorneys presenting research on dopamine-driven engagement loops. The outcome could reshape how social media companies design features targeting younger users.',
            tags: ['Meta', 'YouTube', 'social media', 'addiction', 'children', 'trial'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/meta-instagram-youtube-social-media-addiction-los-angeles-1b409b31438e5ba46e2e8c064229b51a' },
                { title: 'AP News', url: 'https://apnews.com/article/instagram-social-media-addiction-trial-mosseri-los-angeles-a49f64e21682e8bc1b98fbdf3d061579' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Disney Accuses ByteDance\'s New AI Video Model of Infringing on Its Characters',
            summary: 'Disney has sent a cease-and-desist letter to ByteDance alleging that its new Seedance 2.0 AI video generation model is producing content featuring copyrighted characters like Spider-Man and Darth Vader without authorization. Disney\'s attorney accused ByteDance of "hijacking Disney\'s characters by reproducing, distributing, and creating derivative works," escalating the growing legal battle between entertainment giants and AI companies over training data and generated outputs that closely replicate protected intellectual property.',
            tags: ['Disney', 'ByteDance', 'AI', 'copyright', 'Seedance'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Axios', url: 'https://www.axios.com/2026/02/13/disney-bytedance-seedance' }
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
        // Unlike
        delete prefs.likes[storyId];
        story.tags.forEach(tag => { prefs.tags[tag] = Math.max(0, (prefs.tags[tag] || 0) - 1); });
        prefs.categories[story.category] = Math.max(0, (prefs.categories[story.category] || 0) - 1);
        btn.classList.remove('liked');
        btn.querySelector('.label').textContent = 'Like';
    } else {
        // Like
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

        // Header row: headline + like button
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

        // Summary
        const summary = document.createElement('p');
        summary.className = 'summary';
        summary.textContent = story.summary;

        // Sources
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
