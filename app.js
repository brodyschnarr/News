// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Tuesday, March 10, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'Hegseth Vows "Most Intense Day of Strikes" on Iran as Tehran Targets Gulf States',
            summary: 'U.S. Secretary of War Pete Hegseth has warned that today will be the "most intense day of strikes inside Iran" yet, as the conflict enters its eleventh day with no sign of a ceasefire. Iran\'s parliament speaker declared the country is "definitely not looking for a ceasefire," while Iranian forces launched barrages targeting both Israel and Gulf state nations. Tehran has threatened to block oil shipments from the Persian Gulf unless U.S. and Israeli attacks cease, weaponizing energy exports as global markets reel. Oil prices remain volatile, with the TSX rising on gold gains even as crude dipped on Trump\'s conflicting comments about ending the war. The escalation has drawn Australia into the conflict, with Prime Minister Albanese announcing defensive military assistance to Gulf nations.',
            tags: ['Iran war', 'Hegseth', 'Gulf states', 'oil prices', 'Middle East'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/livestory/iran-israel-us-war-day-11-9.7119190' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-iran-war-us-israel-strikes-oil-exports-trump/' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-israel-us-march-10-2026-acf2af139d179fbef62927a8bf9bea55' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Family of Tumbler Ridge Shooting Victim Sues OpenAI',
            summary: 'The parents of a 12-year-old injured in the Tumbler Ridge, B.C. mass shooting have filed a lawsuit against OpenAI, alleging the company had specific knowledge that the shooter was using ChatGPT to plan a mass casualty event. The legal claim asserts that OpenAI failed to act on warning signs and bears responsibility for the harm caused. The case could set a major precedent for AI liability, testing whether companies can be held accountable when their tools are used to facilitate violence. It comes amid growing scrutiny of AI safety practices across the industry and adds to mounting legal pressure on OpenAI from multiple jurisdictions. The Tumbler Ridge shooting shocked Canada and reignited debates about both gun control and the unintended consequences of powerful AI systems.',
            tags: ['OpenAI', 'Tumbler Ridge', 'AI liability', 'lawsuit', 'mass shooting'],
            category: 'top-stories',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/british-columbia/openai-sued-tumbler-ridge-victim-9.7121635' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/british-columbia/article-family-of-12-year-old-injured-in-tumbler-ridge-mass-shooting-sues/' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Pre-War U.S. Intel Found Iran Intervention Unlikely to Change Leadership',
            summary: 'A newly revealed pre-war U.S. intelligence assessment concluded that military intervention in Iran was unlikely to change the country\'s leadership, raising serious questions about the strategic rationale for the ongoing strikes. The assessment, which predates the current conflict, found that Iran\'s political establishment was resilient enough to survive external military pressure, and that regime change would require far more than airstrikes alone. The revelation comes as Trump delivers mixed messages about ending the war, at one point saying it could be over soon while insisting the U.S. hasn\'t "won enough" yet. Critics are seizing on the intelligence report as evidence that the administration pursued military action despite its own analysts warning it wouldn\'t achieve its stated goals.',
            tags: ['Iran war', 'intelligence', 'regime change', 'Trump', 'foreign policy'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/iran-intelligence-assessment-trump-ad20c1f1168d4318af516d7b19d372e7' },
                { title: 'CBC News', url: 'https://www.cbc.ca/news/world/trump-iran-war-9.7121478' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Canadian Coast Guard Captain Fired for Ignoring Distress Call',
            summary: 'A Canadian Coast Guard captain has been fired after a labour board found he "willfully" ignored a maritime distress call, a serious dereliction of duty that put lives at risk. The former captain maintains he did nothing wrong and says he was "railroaded" by the process, but the labour board sided with the Coast Guard\'s decision to terminate him. The case highlights the critical importance of distress response protocols at sea and the consequences of failing to follow them. Maritime safety advocates say the firing sends a strong message, though the former captain is reportedly considering an appeal. The incident has renewed scrutiny of Coast Guard training and oversight practices across the country.',
            tags: ['Coast Guard', 'distress call', 'maritime safety', 'firing', 'labour board'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/politics/canadian-coast-guard-captain-fired-9.7117840' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Ontario Braces for Freezing Rain with Flood and Power Outage Risks',
            summary: 'Ontario is preparing for a major winter storm expected to bring widespread freezing rain, significant flood risks, and potentially prolonged power outages across the province. Emergency officials are warning residents to stock up on essentials and prepare for the possibility of being without electricity for an extended period. The storm system is forecast to coat large areas with a dangerous layer of ice, weighing down power lines and tree branches. Municipal crews are on standby for flood mitigation as the combination of ice melt and rainfall could overwhelm drainage systems. The timing is particularly concerning as the province is still dealing with the economic fallout of the Iran war and elevated energy prices, making any disruption to heating and transportation even more consequential for vulnerable populations.',
            tags: ['Ontario', 'winter storm', 'freezing rain', 'power outages', 'flooding'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-ontario-storm-freezing-rain-flood-power-outage-risk/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'Port of Vancouver Hits Record Cargo Volumes Driven by Non-U.S. Trade',
            summary: 'The Port of Vancouver has posted record cargo volumes for 2025, with the surge driven primarily by trade with countries other than the United States. The milestone reflects Canada\'s accelerating efforts to diversify its trade relationships away from its southern neighbour, a strategic shift that has gained urgency amid ongoing tariff disputes and political tensions with Washington. The port handled unprecedented volumes of goods flowing to and from Asian and European markets, underscoring British Columbia\'s growing importance as a Pacific trade gateway. Industry officials say continued investment in port infrastructure will be essential to maintain the momentum, while the record also highlights how geopolitical disruptions — including the Iran war — are reshaping global shipping routes in Canada\'s favour.',
            tags: ['Port of Vancouver', 'trade diversification', 'cargo', 'British Columbia', 'exports'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/british-columbia/port-vancouver-2025-cargo-volumes-9.7121516' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Carney to Face Commons After Criticism He\'s Hiding From Middle East Debate',
            summary: 'Prime Minister Mark Carney is set to face the House of Commons today after drawing sharp criticism for skipping Monday night\'s take-note debate on the hostilities in the Middle East and Canada\'s response. Opposition parties accused Carney of ducking accountability on the country\'s most pressing foreign policy crisis, and the optics of his absence were particularly damaging given the escalating Iran war. The PM\'s office says he will address the House directly, but the episode has dented Carney\'s carefully cultivated image as a steady, transparent leader. The debate also exposed divisions within Parliament over how aggressively Canada should be involved in the conflict and whether the government has been forthcoming about its commitments in the region.',
            tags: ['Carney', 'Commons', 'Middle East', 'Iran war', 'accountability'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-mark-carney-commons-debate-middle-east/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'MPs Demand Answers on Failure to Deport Iranian Regime Officials',
            summary: 'Members of Parliament are demanding answers from immigration and border officials after revelations that suspected Iranian regime officials living in Canada have not been deported despite being identified. The failure has sparked outrage across party lines, with MPs questioning how individuals linked to a government Canada is effectively in conflict with are being allowed to remain in the country. Critics say the situation exposes a systemic weakness in Canada\'s immigration enforcement that has persisted for years. The issue has taken on new urgency given the ongoing Iran war, with some MPs arguing that the presence of regime-connected individuals poses a potential security risk. Officials are expected to testify before a parliamentary committee in the coming days.',
            tags: ['immigration', 'Iran officials', 'deportation', 'Parliament', 'national security'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-immigration-border-officials-criticized-for-not-deporting-suspected/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'First Nations Leaders Rally Against Separatism at Alberta Legislature',
            summary: 'First Nations leaders gathered at the Alberta legislature to voice strong opposition to the province\'s separatist movement, asserting that Indigenous peoples have treaty rights with the Crown that would be fundamentally jeopardized by any bid to leave Confederation. The rally sends a powerful message to Alberta\'s political establishment at a time when separatist sentiment has been simmering over federal energy and climate policies. Indigenous leaders argued that their nations were not consulted about separation and would not consent to it, invoking constitutional protections and the duty to consult. The demonstration adds a significant constitutional dimension to the separatism debate that proponents have largely failed to address, and bolsters the argument that leaving Canada would be far more legally and politically complicated than advocates suggest.',
            tags: ['First Nations', 'Alberta', 'separatism', 'treaty rights', 'Indigenous'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/alberta/article-first-nations-leaders-show-opposition-to-separatism-at-alberta/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Justices Jackson and Kavanaugh Publicly Spar Over Supreme Court Orders Favoring Trump',
            summary: 'In a rare public exchange, Supreme Court Justices Ketanji Brown Jackson and Brett Kavanaugh sparred openly over the court\'s recent pattern of issuing emergency orders that have consistently favored the Trump administration. Speaking on a shared stage, Jackson questioned whether the court\'s "shadow docket" was being used to circumvent normal legal processes, while Kavanaugh defended the orders as appropriate exercises of judicial authority in urgent circumstances. The exchange highlights the deepening ideological rift on the bench and the growing controversy over how the court handles emergency appeals. Legal scholars say the public disagreement is extraordinary and reflects genuine institutional tension over whether the court is maintaining its independence or being drawn into partisan governance.',
            tags: ['Supreme Court', 'Jackson', 'Kavanaugh', 'shadow docket', 'Trump'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/supreme-court-kavanaugh-jackson-emergency-appeals-84fa9402f5b449316d2cd28bdda1d06b' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Alexander Brothers Convicted of Sex Trafficking in Case That Shocked Real Estate World',
            summary: 'The Alexander brothers have been convicted of sex trafficking in a case that sent shockwaves through the real estate industry where they were prominent figures. The trial revealed a pattern of exploitation and abuse that prosecutors say was enabled by the brothers\' wealth and social connections. The conviction marks the end of a high-profile case that drew comparisons to other recent scandals involving powerful men using their status to prey on vulnerable individuals. Victims who testified described a system of coercion and control that operated behind the facade of luxury real estate dealings. The case has prompted calls for greater accountability in industries where wealth and influence can be used to silence victims and evade scrutiny.',
            tags: ['sex trafficking', 'Alexander brothers', 'real estate', 'conviction', 'crime'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/alexander-brothers-sex-trafficking-trial-b63be68c654dd8d3d6359707c2f02c65' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Anthropic Sues Trump Administration Over "Supply Chain Risk" Designation',
            summary: 'AI company Anthropic has filed a lawsuit against the Trump administration, seeking to overturn a "supply chain risk" designation imposed by the Pentagon under Secretary Hegseth\'s direction. The designation effectively restricts Anthropic\'s ability to work with government contractors and could cut the company off from significant revenue streams. Anthropic argues the designation is politically motivated and lacks any legitimate national security basis, calling it an abuse of regulatory power. The case raises fundamental questions about the government\'s authority to blacklist American technology companies and the growing politicization of AI policy. Industry observers see the lawsuit as a test case that could determine how much power the executive branch has to pick winners and losers in the rapidly evolving AI sector.',
            tags: ['Anthropic', 'Trump', 'Pentagon', 'AI policy', 'lawsuit'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/anthropic-trump-pentagon-hegseth-ai-104c6c39306f1adeea3b637d2c1c601b' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Google Adds Toggle to Disable AI-Powered Search in Photos',
            summary: 'Google is rolling out a new toggle in Google Photos that lets users choose between the classic search experience and the AI-powered "Ask Photos" mode powered by Gemini. The move comes after the AI search feature had a rocky launch plagued by speed and accuracy issues, and users have been vocal about wanting more control over their search results. Google Photos lead Shimrit Ben-Yair confirmed the change, saying the team listened to feedback from users who preferred the reliability of traditional search. The toggle represents a broader trend in the tech industry of giving users opt-out mechanisms for AI features rather than forcing adoption. It\'s a notable concession from Google, which has been aggressively pushing AI integration across all its products.',
            tags: ['Google', 'Photos', 'AI search', 'Gemini', 'user control'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'AT&T Announces $250 Billion Network Investment Over Five Years',
            summary: 'AT&T has announced plans to invest a staggering $250 billion in building out its network infrastructure over the next five years, with the money going toward expanding fiber broadband, 5G home internet, and satellite connectivity across the United States. The company also plans to hire thousands of technicians this year to support the massive buildout. The investment represents one of the largest infrastructure commitments by a single telecom company and comes as competition for broadband customers intensifies. The satellite connectivity component is particularly notable, as it signals AT&T\'s ambition to compete in the growing market for rural and remote internet access. The announcement arrives at a time when reliable internet connectivity is increasingly viewed as essential infrastructure.',
            tags: ['AT&T', '5G', 'fiber', 'infrastructure', 'telecom'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'A Quarter of iPhones Are Now Made in India as Apple Accelerates Shift from China',
            summary: 'Apple manufactured 55 million iPhones in India in 2025, up from 36 million the previous year, meaning roughly a quarter of all iPhones are now produced in the country. The dramatic acceleration in Indian production follows Apple\'s concerted effort to diversify manufacturing away from China in response to Trump\'s tariffs and broader geopolitical tensions. Apple\'s goal is reportedly to shift all 60 million annual U.S.-bound iPhones to Indian production by the end of this year. The move represents a seismic shift in global electronics manufacturing and a major win for India\'s push to become a tech manufacturing hub. However, analysts note that China still dominates Apple\'s overall supply chain, and the transition faces ongoing challenges around infrastructure, workforce training, and component sourcing.',
            tags: ['Apple', 'iPhone', 'India', 'manufacturing', 'China'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' }
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
