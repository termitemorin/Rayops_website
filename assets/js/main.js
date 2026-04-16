(function () {
    'use strict';

    // ---------- Translations ----------
    const translations = {
        fr: {
            meta_description: "Rayops développe des solutions d'usinage laser de nouvelle génération, intégrées à des plateformes robotisées terrestres et aériennes, pour la défense et la sécurité.",
            nav_tech: "Technologie",
            nav_apps: "Applications",
            nav_vision: "Vision",
            nav_about: "À propos",
            nav_contact: "Contact",

            hero_eyebrow: "Usinage laser embarqué",
            hero_title: "Mettre la lumière au service de l'action.",
            hero_lead: "Rayops développe des solutions d'usinage laser de nouvelle génération, intégrées à des plateformes robotisées terrestres, aériennes et navales — pour la défense, la sécurité et au-delà.",
            hero_cta_primary: "Découvrir la technologie",
            hero_cta_secondary: "Nous contacter",

            mission_eyebrow: "Notre mission",
            mission_title: "Sortir les lasers des laboratoires.",
            mission_p1: "Nous transformons la science des lasers en outil opérationnel. En observant les limites des systèmes actuels et l'évolution des besoins, nous avons fondé Rayops pour aider nos clients à amener le laser là où il est le plus utile : sur le terrain, dans des environnements réels, souvent complexes et exigeants.",
            mission_p2: "Contrairement aux approches classiques qui projettent la puissance laser à longue distance, nous misons sur la mobilité robotique pour amener la source laser à la cible. Résultat : plus de précision, des effets atmosphériques négligeables, une puissance réduite et des gabarits de sécurité beaucoup plus compacts.",

            tech_eyebrow: "Technologie",
            tech_title: "Plateforme laser de puissance embarquée.",
            tech_lead: "Une source laser mobile, portée par des robots terrestres, aériens ou navals, capable d'usinage de précision dans des milieux hostiles.",
            feat1_title: "Précision accrue",
            feat1_body: "En rapprochant la source de la cible, nous gagnons en précision et éliminons la dispersion du faisceau sur de longues distances.",
            feat2_title: "Effets atmosphériques négligeables",
            feat2_body: "La courte distance de tir rend les perturbations atmosphériques insignifiantes, même dans des environnements dégradés.",
            feat3_title: "Puissance réduite",
            feat3_body: "Moins de puissance requise pour un effet équivalent — gains en efficacité énergétique, en masse embarquée et en coût.",
            feat4_title: "Gabarits de sécurité compacts",
            feat4_body: "Des zones d'exclusion beaucoup plus petites facilitent l'intégration sur le terrain et le déploiement opérationnel.",

            video_eyebrow: "Présentation",
            video_title: "De la recherche au terrain.",

            apps_eyebrow: "Applications",
            apps_title: "Défense, sécurité — et bien au-delà.",
            apps_lead: "Nos premières applications adressent les besoins critiques de la défense et de la sécurité. Notre champ d'action s'élargit rapidement vers des domaines civils à fort impact.",
            app_defense_tag: "Défense & sécurité",
            app_defense_title: "Neutralisation de menaces explosives",
            app_defense_body: "Intervention précise contre les engins explosifs improvisés et les munitions non explosées, en préservant la sécurité des opérateurs.",
            app_infra_tag: "Civil",
            app_infra_title: "Construction d'infrastructures complexes",
            app_infra_body: "Usinage de précision sur site, pour des chantiers industriels, énergétiques ou à géométrie contrainte.",
            app_rescue_tag: "Civil",
            app_rescue_title: "Soutien aux opérations de sauvetage",
            app_rescue_body: "Découpe et accès rapide en situation d'urgence, dans des contextes où la mobilité et la précision sont critiques.",
            app_extreme_tag: "Exploration",
            app_extreme_title: "Milieux extrêmes",
            app_extreme_body: "Déploiement dans l'Arctique et autres environnements hostiles où la robustesse et l'autonomie font la différence.",

            vision_eyebrow: "Vision 5 ans",
            vision_title: "Une entreprise canadienne reconnue à l'international.",
            vision_body: "Dans cinq ans, nous voyons Rayops avec des systèmes lasers déployés sur des robots terrestres, navals, aériens — et peut-être même martiens. Robustes, efficaces et sécuritaires, nos solutions répondront aux besoins de la défense tout en ouvrant la voie à des applications civiles.",
            dom_land: "Terrestre",
            dom_air: "Aérien",
            dom_naval: "Naval",
            dom_space: "Spatial",

            about_eyebrow: "À propos",
            about_title: "Une startup, la rigueur des plus grands.",
            about_p1: "Rayops, c'est une petite entreprise avec de grandes ambitions. Nous bâtissons une équipe multidisciplinaire solide, à l'écoute du terrain, combinant la souplesse d'une startup et la rigueur des plus grands.",
            about_p2: "En rejoignant <strong>Quantino</strong>, nous avons trouvé bien plus qu'un incubateur : un écosystème d'innovation qui multiplie nos forces et nous donne accès à des experts en propriété intellectuelle, stratégie, financement et technologies, ainsi qu'à des laboratoires et équipements de pointe.",
            ceo_role: "Fondateur & PDG",

            contact_eyebrow: "Contact",
            contact_title: "Parlons de votre défi.",
            contact_lead: "Pour explorer une collaboration, une application spécifique ou en savoir plus sur notre plateforme, contactez-nous directement.",
            contact_linkedin: "Suivre sur LinkedIn",

            footer_tagline: "Mettre la lumière au service de l'action.",
            footer_rights: "Tous droits réservés."
        },
        en: {
            meta_description: "Rayops develops next-generation laser machining solutions, integrated on land and aerial robotic platforms, for defense and security applications.",
            nav_tech: "Technology",
            nav_apps: "Applications",
            nav_vision: "Vision",
            nav_about: "About",
            nav_contact: "Contact",

            hero_eyebrow: "Embedded laser machining",
            hero_title: "Putting light at the service of action.",
            hero_lead: "Rayops develops next-generation laser machining solutions, integrated on land, aerial and naval robotic platforms — for defense, security and beyond.",
            hero_cta_primary: "Discover the technology",
            hero_cta_secondary: "Get in touch",

            mission_eyebrow: "Our mission",
            mission_title: "Taking lasers out of the lab.",
            mission_p1: "We turn laser science into operational tools. After observing the limits of current systems and evolving needs, we founded Rayops to help our clients bring lasers where they matter most: into the field, into real, often complex and demanding environments.",
            mission_p2: "Unlike conventional approaches that project laser power over long distances, we rely on robotic mobility to bring the laser source to the target. The result: higher precision, negligible atmospheric effects, lower power requirements and dramatically more compact safety exclusion zones.",

            tech_eyebrow: "Technology",
            tech_title: "High-power laser platform, onboard robots.",
            tech_lead: "A mobile laser source, carried by land, aerial or naval robots, capable of precision machining in hostile environments.",
            feat1_title: "Higher precision",
            feat1_body: "Bringing the source close to the target increases precision and eliminates beam spread over long distances.",
            feat2_title: "Negligible atmospheric effects",
            feat2_body: "The short firing distance makes atmospheric disturbances insignificant, even in degraded environments.",
            feat3_title: "Lower power required",
            feat3_body: "Less power needed for an equivalent effect — gains in energy efficiency, onboard mass and overall cost.",
            feat4_title: "Compact safety footprint",
            feat4_body: "Much smaller exclusion zones make field integration and operational deployment far easier.",

            video_eyebrow: "Presentation",
            video_title: "From research to the field.",

            apps_eyebrow: "Applications",
            apps_title: "Defense, security — and far beyond.",
            apps_lead: "Our first applications address critical defense and security needs. Our scope is quickly expanding toward high-impact civilian domains.",
            app_defense_tag: "Defense & security",
            app_defense_title: "Explosive threat neutralization",
            app_defense_body: "Precise intervention against improvised explosive devices and unexploded ordnance, while preserving operator safety.",
            app_infra_tag: "Civilian",
            app_infra_title: "Complex infrastructure construction",
            app_infra_body: "On-site precision machining for industrial, energy and geometrically constrained projects.",
            app_rescue_tag: "Civilian",
            app_rescue_title: "Search and rescue support",
            app_rescue_body: "Rapid cutting and access in emergency situations where mobility and precision are critical.",
            app_extreme_tag: "Exploration",
            app_extreme_title: "Extreme environments",
            app_extreme_body: "Deployment in the Arctic and other hostile environments where ruggedness and autonomy make the difference.",

            vision_eyebrow: "5-year vision",
            vision_title: "A Canadian company, internationally recognized.",
            vision_body: "In five years, we see Rayops with laser systems deployed on land, naval, aerial — and perhaps even Martian — robots. Rugged, efficient and safe, our solutions will meet defense needs while opening the way to civilian applications.",
            dom_land: "Land",
            dom_air: "Aerial",
            dom_naval: "Naval",
            dom_space: "Space",

            about_eyebrow: "About",
            about_title: "A startup with the rigor of the best.",
            about_p1: "Rayops is a small company with big ambitions. We are building a strong multidisciplinary team, tuned to the field, combining startup agility with the rigor of the largest players.",
            about_p2: "By joining <strong>Quantino</strong>, we found far more than an incubator: an innovation ecosystem that multiplies our strengths and gives us access to experts in intellectual property, strategy, funding and technology, as well as to state-of-the-art labs and equipment.",
            ceo_role: "Founder & CEO",

            contact_eyebrow: "Contact",
            contact_title: "Let's talk about your challenge.",
            contact_lead: "To explore a partnership, a specific application or learn more about our platform, reach out to us directly.",
            contact_linkedin: "Follow on LinkedIn",

            footer_tagline: "Putting light at the service of action.",
            footer_rights: "All rights reserved."
        }
    };

    // ---------- Language ----------
    function setLanguage(lang) {
        const dict = translations[lang];
        if (!dict) return;

        document.documentElement.lang = lang;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (!dict[key]) return;
            if (el.tagName === 'META') {
                el.setAttribute('content', dict[key]);
            } else {
                el.innerHTML = dict[key];
            }
        });

        document.querySelectorAll('.lang-opt').forEach(el => {
            el.classList.toggle('active', el.dataset.lang === lang);
        });

        try { localStorage.setItem('rayops-lang', lang); } catch (e) {}

        document.title = lang === 'en'
            ? 'Rayops — High-power lasers on robotic platforms'
            : 'Rayops — Lasers de puissance sur plateformes robotisées';
    }

    function initLang() {
        let saved;
        try { saved = localStorage.getItem('rayops-lang'); } catch (e) {}
        const browser = (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
        const lang = saved || browser;
        setLanguage(lang);

        const toggle = document.getElementById('langToggle');
        if (toggle) {
            toggle.addEventListener('click', (e) => {
                const target = e.target.closest('.lang-opt');
                if (target) {
                    setLanguage(target.dataset.lang);
                } else {
                    const current = document.documentElement.lang;
                    setLanguage(current === 'en' ? 'fr' : 'en');
                }
            });
        }
    }

    // ---------- Mobile menu ----------
    function initMenu() {
        const toggle = document.getElementById('menuToggle');
        const nav = document.querySelector('.main-nav');
        if (!toggle || !nav) return;

        toggle.addEventListener('click', () => {
            const open = nav.classList.toggle('open');
            toggle.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', String(open));
        });

        nav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                nav.classList.remove('open');
                toggle.classList.remove('open');
                toggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // ---------- Fade-in on scroll ----------
    function initReveal() {
        const targets = document.querySelectorAll('.section-head, .feature, .app-card, .vision-inner, .ceo-card, .contact-inner, .video-wrap, .text-block');
        targets.forEach(el => el.classList.add('fade-in'));

        if (!('IntersectionObserver' in window)) {
            targets.forEach(el => el.classList.add('visible'));
            return;
        }

        const io = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        targets.forEach(el => io.observe(el));
    }

    // ---------- Year ----------
    function initYear() {
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();
    }

    // ---------- Header on scroll ----------
    function initHeader() {
        const header = document.querySelector('.site-header');
        if (!header) return;
        const onScroll = () => {
            const styles = getComputedStyle(document.documentElement);
            header.style.background = window.scrollY > 40
                ? styles.getPropertyValue('--header-bg-scroll').trim()
                : styles.getPropertyValue('--header-bg').trim();
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    // ---------- Boot ----------
    document.addEventListener('DOMContentLoaded', () => {
        initLang();
        initMenu();
        initReveal();
        initYear();
        initHeader();
    });
})();
