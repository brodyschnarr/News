// ─────────────────────────────────────────────
//  Daily Brief — App
//  Stories updated daily at 5:30 AM EST
// ─────────────────────────────────────────────

const newsData = {
    date: 'Tuesday, March 3, 2026',

    'top-stories': [
        {
            id: 'top-1',
            headline: 'U.S. and Israel Launch New Wave of Strikes on Beirut and Tehran as War Escalates',
            summary: 'The United States and Israel have launched a fresh wave of devastating strikes on Beirut and Tehran, dramatically widening a conflict that shows no signs of slowing down. Trump told reporters the operation in Iran could last four to five weeks, while Defense Secretary Pete Hegseth confirmed there are no U.S. ground troops in Iran but pointedly refused to rule out their deployment. Iran retaliated by striking targets across the Gulf — hitting Saudi Arabia, Qatar, the UAE, Bahrain, Kuwait, Jordan, and even a British airbase in Cyprus. The U.S. embassy in Riyadh was also attacked. Gulf states have warned they will retaliate if Iran continues strikes in the region, raising the specter of an all-out regional war that could reshape the Middle East for a generation.',
            tags: ['Iran', 'Israel', 'U.S. military', 'Beirut', 'Middle East war'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/article-us-israel-lebanon-hezbollah-trump-ayatollah-ali-khamenei-live-updates/' },
                { title: 'AP News', url: 'https://apnews.com/article/iran-trump-israel-war-where-things-stand-e3c003aef4479cd179967a63bb1236f4' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/us-politics/article-trump-us-iran-military-weeks/' }
            ]
        },
        {
            id: 'top-2',
            headline: 'Markets Crater as Iran War Stokes Energy Crisis — TSX Drops Over 3.5%',
            summary: 'Global financial markets are in freefall as the escalating Iran conflict sends shockwaves through the world economy. The TSX plunged over 3.5% on Monday as energy prices surged following tanker disruptions and facility shutdowns that have rattled global oil supply. RBC analysts now project oil could hit $100 per barrel if the Strait of Hormuz is further threatened. Thousands of travelers remain stranded across the Middle East as flight routes are rerouted or canceled entirely, with limited evacuation flights only now beginning from the UAE. Economists warn the combination of war-driven energy spikes and ongoing trade tariff disputes could tip several major economies into recession.',
            tags: ['markets', 'TSX', 'oil prices', 'Iran', 'energy crisis'],
            category: 'top-stories',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/investing/markets/inside-the-market/article-markets-today-wall-street-futures-fall-as-middle-east-conflict-stokes/' },
                { title: 'AP News', url: 'https://apnews.com/article/oil-prices-iran-us-hormuz-tanker-8a6d6fb35c89d9b0db4c4846f290c2c3' }
            ]
        },
        {
            id: 'top-3',
            headline: 'Macron Offers to Deploy Nuclear-Armed Jets to European Allies',
            summary: 'In a dramatic escalation of European defense posturing, French President Emmanuel Macron announced that France will allow the temporary deployment of nuclear-armed fighter jets to allied European nations. The move — unprecedented in modern NATO history — comes as the continent grapples with heightened security anxieties amid the Iran war and ongoing Russian aggression in Ukraine. Macron framed the offer as a step toward a credible European nuclear deterrent that doesn\'t rely solely on the United States. The announcement has drawn mixed reactions, with some allies welcoming the solidarity while others worry it could provoke further destabilization.',
            tags: ['France', 'Macron', 'nuclear weapons', 'Europe', 'NATO'],
            category: 'top-stories',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/france-nuclear-weapons-macron-deterrence-ccbcfb03ef4a1e3efe287fb744adb148' }
            ]
        }
    ],

    'canadian-news': [
        {
            id: 'cdn-1',
            headline: 'Vancouver General Diverts Pregnant Patients Due to OB-GYN Shortage',
            summary: 'Vancouver General Hospital — British Columbia\'s largest — is diverting pregnant patients with complex medical conditions to other facilities because of a severe shortage of obstetrician-gynecologists. Doctors at the hospital say the province had more than a year to address the staffing crisis but failed to act, leaving vulnerable patients scrambling for care during high-risk pregnancies. The situation highlights a growing healthcare staffing crisis across Canada, where specialist shortages are increasingly forcing hospitals to ration services. Patient advocates are calling it a failure of provincial health planning that puts mothers and babies at unnecessary risk.',
            tags: ['Vancouver', 'healthcare', 'OB-GYN shortage', 'British Columbia', 'hospitals'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-vancouver-general-diverting-pregnant-women-with-complex-conditions/' }
            ]
        },
        {
            id: 'cdn-2',
            headline: 'Quebec\'s Bill 21 Violates Charter Rights, Challengers Argue at Supreme Court',
            summary: 'Challengers of Quebec\'s controversial Bill 21 — which bans religious symbols for public servants in positions of authority — brought their case to the Supreme Court of Canada on Monday, arguing the law violates fundamental Charter rights to religious freedom and equality. Quebec\'s government countered that the top court should not even consider the question of Charter violations because the province invoked the notwithstanding clause to shield the law from judicial review. The case is being closely watched across the country as a test of the limits of provincial power versus individual rights, with implications for religious minorities who work as teachers, police officers, and judges.',
            tags: ['Quebec', 'Bill 21', 'Supreme Court', 'Charter rights', 'religious freedom'],
            category: 'canadian-news',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-quebec-bill-21-charter-rights-supreme-court-challengers/' }
            ]
        },
        {
            id: 'cdn-3',
            headline: 'White Nationalist Fight Clubs Pose Risk of Extreme Violence in Canada',
            summary: 'A growing network of white nationalist "active clubs" — essentially fight clubs that combine mixed martial arts training with far-right ideology — poses a serious risk of extreme violence in Canada, according to an internal Public Safety Canada brief obtained by CBC News. The report details how these groups recruit young men through fitness culture and social media, then radicalize them with accelerationist ideology that glorifies racial violence. The clubs have chapters in multiple Canadian cities and maintain ties to international white supremacist networks. Security experts say the movement represents one of the most dangerous domestic terrorism threats currently facing the country.',
            tags: ['white nationalism', 'extremism', 'Public Safety', 'domestic terrorism', 'Canada'],
            category: 'canadian-news',
            sources: [
                { title: 'CBC News', url: 'https://www.cbc.ca/news/canada/active-clubs-report-public-safety-canada-9.7109011' }
            ]
        }
    ],

    'canadian-politics': [
        {
            id: 'cdnpol-1',
            headline: 'Defence Minister Defends Canada\'s Backing of U.S.-Israel Air Strikes on Iran',
            summary: 'Defence Minister David McGuinty pushed back against critics of Canada\'s support for the U.S.-Israeli military operation against Iran, calling Iran\'s former supreme leader a "force for evil" and defending the government\'s stance as consistent with Canadian values. McGuinty acknowledged the Liberal party is a "big tent with a broad range of views" on the issue but said the destruction of Iran\'s nuclear program serves global security. The remarks come amid growing unease within the Liberal caucus, where some MPs have privately expressed discomfort with Canada\'s alignment on what has become an increasingly destructive military campaign with mounting civilian casualties.',
            tags: ['McGuinty', 'Iran', 'defence', 'Canada', 'air strikes'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-irans-former-leader-was-force-for-evil-defence-minister-says-as-he/' }
            ]
        },
        {
            id: 'cdnpol-2',
            headline: 'India Dismisses Nijjar Consulate Link as Carney Trade Mission Continues',
            summary: 'India has flatly dismissed allegations of a connection between an Indian consulate official and the assassination of Hardeep Singh Nijjar in British Columbia, calling the claims baseless. The denial came as Canadian federal leaders — sent on a trade mission to India by Prime Minister Carney — conspicuously declined to comment on the explosive new revelations. The awkward timing underscores the impossible balancing act at the heart of Canada-India relations: Ottawa wants to reset trade ties and court India as a counterweight to U.S. tariff aggression, but the unresolved Nijjar affair and foreign interference concerns continue to cast a long shadow over the diplomatic thaw.',
            tags: ['India', 'Nijjar', 'Carney', 'trade', 'foreign interference'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/politics/article-carney-india-trip-anand-comment-indian-consul-nijjar-killing/' }
            ]
        },
        {
            id: 'cdnpol-3',
            headline: 'Advocates Call for Public Inquiry into Alleged Toronto Police Corruption',
            summary: 'Community advocates are demanding a full public inquiry into alleged corruption within the Toronto Police Service following Project South — a major internal investigation that led to the arrest of seven active Toronto officers and one retired constable. The probe uncovered a web of alleged misconduct including bribery, evidence tampering, and ties to organized crime. Advocates say the arrests represent only the tip of the iceberg and that systemic corruption within Canada\'s largest municipal police force requires an independent, public accounting. Toronto\'s police chief has called the arrests "deeply troubling" but resisted calls for an external inquiry, saying internal reforms are underway.',
            tags: ['Toronto Police', 'corruption', 'Project South', 'public inquiry', 'law enforcement'],
            category: 'canadian-politics',
            sources: [
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/canada/article-project-south-advocates-public-inquiry-toronto-police-service/' }
            ]
        }
    ],

    'us-politics': [
        {
            id: 'uspol-1',
            headline: 'Trump Pushes Back on Critics: Iran Operation Could Last Four to Five Weeks',
            summary: 'President Trump doubled down on his Iran strategy Monday, pushing back against growing criticism from both parties about the scope and legality of the military operation. Trump told reporters the campaign could last four to five weeks and dismissed concerns about mission creep, insisting the strikes are precisely targeted at Iran\'s nuclear and military infrastructure. His MAGA base has shown cracks over the intervention, with prominent voices questioning whether the operation contradicts Trump\'s long-standing promises to avoid foreign wars. The administration is sending mixed messages about its ultimate objectives — oscillating between destroying nuclear capabilities and broader regime change ambitions.',
            tags: ['Trump', 'Iran', 'military', 'MAGA', 'regime change'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/trump-iran-maga-regime-change-2758513ac034ffb75beaa12db68c7bd7' },
                { title: 'Globe and Mail', url: 'https://www.theglobeandmail.com/world/us-politics/article-trump-us-iran-military-weeks/' }
            ]
        },
        {
            id: 'uspol-2',
            headline: 'Supreme Court Blocks California Law Protecting Transgender Students from Being Outed',
            summary: 'The U.S. Supreme Court has blocked a California law that prohibited schools from disclosing students\' transgender status to their parents without the student\'s consent. The ruling is a significant setback for LGBTQ+ advocates who argued the law was essential to protecting vulnerable trans youth from potentially hostile home environments. Conservative justices sided with parents\' rights groups who contended that the law unconstitutionally interfered with parental authority. The decision could have sweeping implications as similar battles play out in state legislatures across the country, and it further cements the current court\'s willingness to reshape the legal landscape around gender identity issues.',
            tags: ['Supreme Court', 'transgender', 'California', 'LGBTQ+', 'schools'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/supreme-court-transgender-students-california-cca311ae39d267f31c1392a0bcf780cd' }
            ]
        },
        {
            id: 'uspol-3',
            headline: 'Federal Court Rejects Trump Administration Attempt to Slow Tariff Refund Process',
            summary: 'A federal court has rejected the Trump administration\'s attempt to slow down the process of refunding tariffs that were previously ruled unlawful, dealing a blow to the White House\'s trade agenda. The ruling means billions of dollars in disputed tariff payments could be returned to importers faster than the administration wanted, potentially undermining its leverage in ongoing trade negotiations. The decision comes as the economic fallout from both tariff disputes and the Iran conflict compound pressure on American businesses and consumers. Trade lawyers say the ruling signals growing judicial impatience with the administration\'s use of emergency powers to reshape trade policy.',
            tags: ['tariffs', 'trade', 'federal court', 'Trump', 'economy'],
            category: 'us-politics',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/tariffs-trump-refunds-supreme-court-cc2ace8576e59d10034e7e525737539d' }
            ]
        }
    ],

    'ai-tech': [
        {
            id: 'tech-1',
            headline: 'Hegseth Warns Anthropic: Let the Military Use Your AI or Face Consequences',
            summary: 'Defense Secretary Pete Hegseth has issued a stark warning to AI company Anthropic, demanding the company allow the U.S. military to use its technology "as it sees fit" without restrictions, according to AP sources. The confrontation escalates tensions between the Pentagon and Silicon Valley over the ethical boundaries of AI in warfare — a debate supercharged by revelations that Anthropic\'s Claude AI was used in planning the Iran strikes. Hegseth\'s ultimatum puts Anthropic in an impossible position: comply and abandon the safety principles that define its brand, or resist and risk being cut off from lucrative government contracts and potential regulatory retaliation.',
            tags: ['Anthropic', 'Pentagon', 'Hegseth', 'AI military', 'AI ethics'],
            category: 'ai-tech',
            sources: [
                { title: 'AP News', url: 'https://apnews.com/article/anthropic-hegseth-ai-pentagon-military-3d86c9296fe953ec0591fcde6a613aba' }
            ]
        },
        {
            id: 'tech-2',
            headline: 'Meta Tests AI Shopping Tool to Rival ChatGPT and Gemini',
            summary: 'Meta is rolling out an AI-powered shopping research tool to testers in the United States, directly challenging similar features already available in OpenAI\'s ChatGPT and Google\'s Gemini. The tool lets users describe what they\'re looking for in natural language and receive curated product recommendations with comparisons, reviews, and purchase links — all within Meta\'s ecosystem. Bloomberg reports the feature is part of Meta\'s broader push to monetize its AI investments by keeping users inside its platforms for the entire shopping journey from discovery to purchase. The move signals that AI-assisted commerce is becoming the next major battleground among tech giants.',
            tags: ['Meta', 'AI shopping', 'ChatGPT', 'Gemini', 'e-commerce'],
            category: 'ai-tech',
            sources: [
                { title: 'The Verge', url: 'https://www.theverge.com/tech' },
                { title: 'Bloomberg', url: 'https://www.bloomberg.com/news/articles/2026-03-03/meta-tests-ai-shopping-research-tool-to-rival-chatgpt-gemini' }
            ]
        },
        {
            id: 'tech-3',
            headline: 'MWC 2026: GrapheneOS Partners with Motorola, Qualcomm Unveils Wi-Fi 8',
            summary: 'Mobile World Congress 2026 is in full swing in Barcelona with two major announcements shaking up the industry. GrapheneOS — the privacy-focused Android fork previously limited to Google Pixel devices — has struck a long-term partnership with Motorola to bring its hardened security to a wider range of smartphones, potentially making enterprise-grade privacy accessible to millions more users. Meanwhile, Qualcomm debuted its "AI-native" Wi-Fi 8 portfolio led by the FastConnect 8800 chip, promising speeds over 10 Gbps while packing Bluetooth 7.0, UWB, and Thread onto a single silicon package. Commercial products are expected by late 2026 — two years before Wi-Fi 8 is officially ratified.',
            tags: ['MWC 2026', 'GrapheneOS', 'Motorola', 'Qualcomm', 'Wi-Fi 8'],
            category: 'ai-tech',
            sources: [
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
