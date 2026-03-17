// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Tuesday, March 17, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Top U.S. Counterterrorism Official Joe Kent Resigns Over Trump\'s War on Iran',
            summary: 'Joe Kent, the director of the National Counterterrorism Center, announced his resignation on Tuesday, saying he "cannot in good conscience" support the Trump administration\'s war in Iran. Kent, a decorated Green Beret and Gold Star husband who was one of Trump\'s most loyal appointees, said the conflict has veered far beyond its original counterterrorism justification and is now putting American lives at risk for objectives that have nothing to do with protecting the homeland. The resignation is a stunning break from within Trump\'s own national security apparatus and marks the highest-profile departure over the Iran war to date. Kent\'s credibility as a combat veteran and MAGA loyalist makes his dissent particularly damaging for an administration that has struggled to maintain unified support for the escalating conflict.',
            tags: ['Joe Kent', 'Iran war', 'resignation', 'counterterrorism', 'Trump'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-17-2026' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/joe-kent-resigns-iran-trump-war-9.7131639' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Israel Says Two Senior Iranian Officials Killed in Overnight Strikes',
            summary: 'Israel announced Tuesday that two senior Iranian officials were killed in overnight airstrikes, a claim Iranian state media did not immediately confirm. The strikes represent a significant escalation in the broader Middle East conflict, with Israel increasingly targeting Iran\'s military and political leadership directly rather than limiting operations to proxy forces. Analysts say the killings, if confirmed, could further destabilize an already volatile situation in the region, particularly as Iran has effectively shut down the Strait of Hormuz — choking off roughly 20% of global oil supply. The Globe and Mail reports that Russia is emerging as the biggest winner from the Middle East chaos, with spiking oil prices filling Moscow\'s war chest while Western attention is diverted from Ukraine.',
            tags: ['Israel', 'Iran', 'airstrikes', 'Middle East', 'oil'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-israel-lebanon-war-strait-of-hormuz/' },
                { title: 'AP News', url: 'https://apnews.com/live/iran-war-israel-trump-03-17-2026' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Islandwide Blackout Hits Cuba Amid Deepening Energy Crisis',
            summary: 'Cuba was plunged into a nationwide blackout on Tuesday as the island\'s crumbling energy infrastructure collapsed under the strain of chronic fuel shortages, aging power plants, and a battered economy. The outage — the latest in a series of catastrophic grid failures over the past two years — left all 10 million residents without electricity, disrupting hospitals, water systems, and communications across the country. Cuba\'s energy crisis has been worsened by tightened U.S. sanctions, the loss of subsidized Venezuelan oil, and the government\'s inability to attract foreign investment for infrastructure upgrades. The recurring blackouts have fueled growing public frustration, with many Cubans seeing them as a symbol of the broader economic collapse under the island\'s aging socialist government.',
            tags: ['Cuba', 'blackout', 'energy crisis', 'Caribbean', 'infrastructure'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/cuba-power-outage-electricity-4dcd92d4b7b3bbeda88622b543074ceb' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Thinking of Moving to a More \'Affordable\' Part of Canada? It\'s Complicated',
            summary: 'A new CBC analysis challenges common assumptions about regional affordability across Canada, finding that the calculus of moving to a "cheaper" province is far more complex than housing prices alone suggest. While Alberta offers relatively affordable housing compared to Ontario or B.C., higher childcare costs, fewer public services, and different tax structures can eat into savings quickly. Quebec\'s famously high taxes fund heavily subsidized daycare and lower tuition, making it surprisingly affordable for young families despite sticker shock on the tax bill. The report comes as Canadians increasingly consider interprovincial moves driven by the housing crisis, but warns that chasing lower rent without understanding the full cost-of-living picture can leave people worse off than expected.',
            tags: ['affordability', 'housing', 'cost of living', 'provinces', 'moving'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/affordability-canada-provinces-factors-9.7126052' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Canada\'s Inflation Falls to 1.8% in February, but Iran War Impact Not Yet Reflected',
            summary: 'Canada\'s annual inflation rate dipped to 1.8% in February, Statistics Canada reported, but economists are warning the number doesn\'t yet capture the full impact of the Iran war on energy prices. The relatively tame reading was partly driven by lingering effects of last year\'s temporary sales tax holiday and lower food price growth. However, with the Strait of Hormuz effectively shut down and global oil prices surging, analysts expect inflation to rebound sharply in coming months as higher fuel and transportation costs ripple through the economy. The Bank of Canada faces a difficult balancing act: the economy is sluggish enough to warrant rate cuts, but incoming energy-driven inflation could force the central bank to hold rates steady or even hike.',
            tags: ['inflation', 'CPI', 'Bank of Canada', 'Iran war', 'oil prices'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/business/canada-annual-inflation-rate-february-2026-9.7130104' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Loblaw Store Fined $10K for Misleading Promotions as Grocery Frustration Grows',
            summary: 'Another Loblaw-owned grocery store has been hit with a $10,000 fine for misleading promotional pricing, adding fuel to the simmering public anger toward Canada\'s dominant grocery chains. The fine, while small relative to Loblaw\'s $56-billion annual revenue, comes amid ongoing scrutiny of grocery pricing practices following last year\'s Competition Bureau investigation into alleged bread price-fixing. Consumer advocates say the penalties are far too small to deter a company of Loblaw\'s size and are calling for stronger enforcement mechanisms. The case highlights a broader frustration among Canadian shoppers who feel grocery prices remain unjustifiably high even as input costs stabilize, with many pointing to market concentration — where five companies control roughly 80% of grocery sales — as the root cause.',
            tags: ['Loblaw', 'grocery prices', 'fines', 'consumer protection', 'competition'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/loblaw-fined-misleading-promotions-9.7130900' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Allies Aren\'t Leaping to Trump\'s Aid in the Strait of Hormuz — Including Canada',
            summary: 'Iran has effectively shut down the Strait of Hormuz, and despite Trump\'s demands for allied naval support, neither Canada nor key European partners are rushing to join a U.S.-led mission to reopen the critical waterway. CBC\'s analysis notes that allies are wary of being drawn deeper into a conflict many see as driven by Trump\'s own escalation, with Carney\'s government carefully threading the needle between supporting Western solidarity and avoiding direct military involvement. The hesitation reflects a fundamental shift in how middle powers view American-led military coalitions after two decades of mixed results in the Middle East. For Canada specifically, the calculus involves not only military risk but also the delicate USMCA trade negotiations, where antagonizing Trump carries real economic consequences.',
            tags: ['Strait of Hormuz', 'Iran war', 'Carney', 'allies', 'NATO'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/trump-iran-allies-strait-hormuz-oil-shipping-9.7131218' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'Parental Mistrust and Hostile Interactions a Growing Concern for Alberta Teachers',
            summary: 'Alberta teachers are reporting a troubling rise in hostile interactions with parents, fueled by political polarization and the spread of misinformation about school curricula, according to a CBC investigation. Teachers describe being confronted by parents who believe schools are secretly teaching children about gender ideology or critical race theory — claims that are largely unfounded but have been amplified by social media and some conservative politicians. The hostility ranges from aggressive emails and school board confrontations to outright threats, creating a climate of fear that teachers say is driving experienced educators out of the profession. The Alberta Teachers\' Association warns that the erosion of trust between parents and teachers is ultimately hurting students, as schools struggle to recruit and retain staff in an increasingly adversarial environment.',
            tags: ['Alberta', 'teachers', 'education', 'parental mistrust', 'culture wars'],
            category: 'canadian-politics',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/calgary/inside-the-classroom-mistrust-9.7103297' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Judge Granted Bail to Alberta Sexual Assault Accused Without Giving Reasons',
            summary: 'A Globe and Mail investigation has revealed that a judge granted bail to an Alberta man accused of sexual assault without providing any written or verbal reasons for the decision — a rare glimpse inside Canada\'s typically secretive bail system that is fueling calls for reform. The case highlights longstanding concerns about transparency in bail hearings, where life-altering decisions are routinely made behind closed doors with minimal public accountability. Advocates for sexual assault survivors say the lack of reasoning is particularly troubling in cases involving violent offences, where victims deserve to understand why an accused person was released. The transcript offers a rare window into a process that legal experts say urgently needs modernization, including requirements for judges to document their reasoning in all bail decisions.',
            tags: ['bail reform', 'sexual assault', 'Alberta', 'justice system', 'transparency'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-judge-granted-bail-alberta-man-accused-sexual-assault/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Afghan Man Who Worked with U.S. Military Dies in ICE Custody',
            summary: 'An Afghan man who served alongside the U.S. military as a translator and ally has died while in Immigration and Customs Enforcement detention, raising urgent questions about how the Trump administration is treating individuals who risked their lives to support American operations abroad. The man\'s death comes amid the administration\'s aggressive immigration crackdown, which critics say has increasingly swept up people with legitimate claims to U.S. protection, including Special Immigrant Visa holders and asylum seekers with approved applications. Veterans\' groups reacted with outrage, calling the death a betrayal of America\'s promise to those who served alongside its troops. The case has reignited debate about conditions in ICE detention facilities, where deaths have risen under expanded enforcement operations.',
            tags: ['ICE', 'Afghanistan', 'immigration', 'detention', 'veterans'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/afghan-immigrant-death-ice-detention-e6cb522d03ae87bc827d47233759201c' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'University of Florida Moves to Deactivate College Republicans Over Antisemitic Behavior',
            summary: 'The University of Florida has moved to deactivate its College Republicans chapter following a report detailing antisemitic behavior by members of the organization. The decision marks a rare instance of a major public university taking formal action against a partisan student group over hate speech, and comes amid a broader national reckoning over antisemitism on college campuses that has typically focused on left-wing activist groups. The report reportedly documented a pattern of antisemitic rhetoric and harassment rather than isolated incidents. The move has drawn both praise from Jewish student organizations and criticism from conservative groups who say it amounts to political censorship, setting up a likely legal battle over the boundaries of free speech and institutional accountability on campus.',
            tags: ['antisemitism', 'University of Florida', 'College Republicans', 'campus politics', 'free speech'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/universities-florida-republicans-antisemitism-d49e6de7a9de5cdf66c4ef3abe979072' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Last Immigration Protester from Trump\'s Campus Crackdown Released from Detention',
            summary: 'The final protester who was detained during the Trump administration\'s crackdown on campus immigration demonstrations has been released from ICE custody, closing a chapter in one of the most controversial episodes of the administration\'s enforcement campaign. Leqaa Kordia had been held for weeks after being arrested at a campus protest, with her detention drawing widespread criticism from civil liberties organizations who argued that targeting protesters with immigration enforcement had a chilling effect on free speech. Her release came after sustained legal and public pressure, but advocates warn that the precedent has already been set: using immigration status as a weapon against political dissent. The case highlighted the intersection of immigration enforcement and First Amendment rights that has become a defining tension of the Trump era.',
            tags: ['immigration', 'campus protests', 'ICE', 'free speech', 'Trump'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/leqaa-kordia-ice-immigration-trump-ec045939c' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'OpenAI Cuts Back on "Side Quests" to Focus on Coding and Enterprise',
            summary: 'OpenAI\'s CEO of applications Fidji Simo has told staff the company will dramatically narrow its focus, prioritizing coding tools and enterprise customers over the sprawling array of projects it has been pursuing, the Wall Street Journal reports. On the chopping block are ambitious but scattered efforts including Sora (the deepfake-capable video generator), the Atlas AI-powered browser meant to challenge Chrome, and various hardware experiments including smart speakers, cameras, glasses, and lamps. The strategic retreat signals a maturing company recognizing it can\'t compete on every front simultaneously, and reflects investor pressure to show a path to profitability rather than chasing moonshots. For developers and businesses, the refocus could mean faster improvements to ChatGPT\'s coding capabilities and more robust API offerings.',
            tags: ['OpenAI', 'Sora', 'enterprise', 'AI strategy', 'Fidji Simo'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/ai-artificial-intelligence/893189/openai-chatgpt-sora-integration' },
                { title: 'Wall Street Journal', url: 'https://www.wsj.com/tech/ai/openai-fidji-simo-strategy-coding-enterprise' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Apple AirPods Max 2 Arrives — Fixing None of the Original\'s Flaws',
            summary: 'Apple has finally released the AirPods Max 2, more than five years after the original — and in a move that has baffled fans and critics alike, the sequel addresses virtually none of the complaints that plagued its predecessor. The headphones remain heavy, expensive, and ship with the same widely mocked Smart Case design. The primary upgrade is the H2 chip, which improves noise cancellation and enables new spatial audio features, but doesn\'t address the weight, the lack of a headphone jack, or the premium price point that puts them well above competing options from Sony and Bose. The Verge\'s review calls it a puzzling update from a company that usually excels at iterative improvement, leaving the impression that Apple views the Max line as a luxury status symbol rather than a product competing on practical merits.',
            tags: ['Apple', 'AirPods Max', 'headphones', 'hardware', 'audio'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech/895155/apple-airpods-max-2-pricing-availability' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'Spain\'s King Acknowledges \'Much Abuse\' in the Conquest of the Americas',
            summary: 'In a historic address that has reverberated across the Spanish-speaking world and the tech-powered information ecosystem, Spain\'s King Felipe VI publicly acknowledged "much abuse" committed during Spain\'s colonization of the Americas — the most direct reckoning with colonial history from a sitting Spanish monarch. The speech, delivered during a state visit to Mexico, was immediately amplified across social media platforms, generating millions of views and reigniting debates about colonial legacies, reparations, and historical accountability. The moment underscores how digital platforms have transformed diplomatic gestures into global media events, with AI-powered translation tools making the speech accessible in dozens of languages within minutes. Historians called it a significant, if long overdue, step toward reconciliation between Spain and Indigenous communities across Latin America.',
            tags: ['Spain', 'colonialism', 'Americas', 'King Felipe', 'history'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/spain-mexico-conquest-indigenous-americas-de561ec7f6e00c332d60bbbc164db05d' }
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
