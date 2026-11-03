/**
 * BETA E-Com UG — Main Application & Interactive Experience
 * Apple Design System Implementation
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initLanguageToggle();
  initConfiguratorDemo();
  initPortfolioTabs();
  initLegalModals();
  initContactForm();
  initSmoothScroll();
});

/* ==========================================================================
   1. Theme Management (Apple Dark / Light)
   ========================================================================== */
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const savedTheme = localStorage.getItem('beta_theme') || (mediaQuery.matches ? 'dark' : 'light');

  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Dynamically respond to OS dark/light mode changes when no manual override exists
  mediaQuery.addEventListener('change', (e) => {
    if (!localStorage.getItem('beta_theme')) {
      const newTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', newTheme);
      updateThemeIcon(newTheme);
    }
  });

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('beta_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const icon = document.getElementById('theme-icon');
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`;
  } else {
    icon.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
  }
}

/* ==========================================================================
   2. Comprehensive Bilingual Content Engine (German / English)
   ========================================================================== */
const translations = {
  de: {
    // Navigation
    navServices: "Leistungen",
    navCases: "Projekte",
    navAbout: "Über uns",
    navContact: "Kontakt",
    navCta: "Projekt anfragen",

    // Hero Section
    heroBadge: "Digital Commerce & Automotive Merchandising",
    heroTitle: "E-Commerce-Architektur mit Präzision und Weitblick.",
    heroSubtitle: "Wir entwickeln, vermieten und betreiben hochperformante Online-Shops, interaktive Produkt-Konfiguratoren und maßgeschneiderte Ticketing-Systeme.",
    heroCtaPrimary: "Leistungen entdecken",
    heroCtaSecondary: "Showcase ansehen",

    // Statistics Strip
    stat1Label: "Handelsregister Köln",
    stat2Label: "Aktive Storefronts",
    stat3Label: "Jahre Verlags-Erfahrung",
    stat4Label: "DSGVO & Rechtssicher",

    // Bento Grid / Capabilities
    bentoHeaderLabel: "Kompetenzen",
    bentoHeaderTitle: "Maßgeschneidert. Skalierbar. Verlässlich.",
    bentoHeaderDesc: "Ganzheitliche E-Commerce-Lösungen aus einer Hand — von der technischen Konzeption über Sonderanfertigungen bis zum laufenden operativen Betrieb.",
    bentoCard1Title: "Entwicklung & Custom Shops",
    bentoCard1Desc: "Modernste Storefronts, headless Architekturen und integrierte Zahlungsflüsse, optimiert auf maximale Conversion und Geschwindigkeit.",
    bentoTag1: "Shopware • Gambio • Custom Stacks",
    bentoCard2Title: "Produkt-Konfiguratoren",
    bentoCard2Desc: "Echtzeit-Konfiguratoren für Automobil- und Industrieprodukte mit direkter Kalkulation.",
    configBtnBlack: "Black",
    configBtnCarbon: "Carbon",
    configBtnSilver: "Silver",
    configPreviewBadge: "Konfiguration Vorschau",
    bentoTag2: "Echtzeit-Berechnung",
    bentoCard3Title: "Shop-Vermietung & Turnkey-Betrieb",
    bentoCard3Desc: "Fertige, sofort einsatzbereite Shop-Umgebungen zur Miete inklusive Wartung, Hosting und technischer Betreuung. Minimale Vorlaufzeiten, maximale Flexibilität.",
    bentoTag3: "Mietmodelle • Full Managed",
    bentoCard4Title: "Event-Ticketing & Merchandise",
    bentoCard4Desc: "Komplette Abwicklung von Event-Tickets (z. B. Drag Day), Print-Magazin-Abonnements und Fan-Merchandise inklusive Payment und Zutrittskontrolle.",
    bentoTag4: "Ticketing • Merchandising",

    // Showcase / Portfolio
    caseHeaderLabel: "Referenzen",
    caseHeaderTitle: "Erprobte Plattformen in der Praxis.",
    caseHeaderDesc: "Klicken Sie auf die Referenzen, um die Live-Shops und Produktlösungen direkt zu besuchen.",
    tabAll: "Alle Projekte",
    tabAutomotive: "Automotive & Tickets",
    tabRetail: "D2C & Food",
    tabTools: "Konfiguratoren",

    badgeTuning: "Automotive & Ticketing",
    titleTuning: "Tuning-Couture Store & Ticketing",
    descTuning: "Offizieller Webshop für Print-Abonnements (Eurotuner, BMW Power), Streetwear, Merchandising und das Ticketing für Großevents wie den Drag Day am Flugplatz Meinerzhagen.",
    operatorTuning: "Betreiber: BETA E-Com UG",
    visitTuning: "Shop besuchen",

    badgeCandy: "D2C & Retail Store",
    titleCandy: "BestofCandy E-Commerce & Outlet",
    descCandy: "E-Commerce-Handel und stationärer Store für über 200 originale US-Süßwaren, Softdrinks und Barbecue-Spezialitäten am Standort Bergisch Gladbach Herkenrath.",
    operatorCandy: "Betreiber: Bestofcandy BETA E-COM UG",
    visitCandy: "Online-Shop öffnen",

    badgeGebhardt: "Konfigurator Umsetzung",
    titleGebhardt: "GEBHARDT Automotive",
    descGebhardt: "Realisierung des interaktiven Online-Produktkonfigurators für Fahrzeugkomponenten mit direkter Spezifikationsauswahl und optimierter Usability.",
    operatorGebhardt: "Konfigurator Umsetzung: BETA E-COM UG",
    visitGebhardt: "Website aufrufen",

    // About / Network
    aboutLabel: "Das Netzwerk",
    aboutTitle: "Medienkompetenz trifft moderne Software-Architektur.",
    aboutP1: "Unter der Leitung von Olivier Fourcade verbindet die BETA E-Com UG über drei Jahrzehnte Markt- und Verlagserfahrung der WP Europresse Verlag GmbH (Herausgeber renommierter Fachmagazine wie Eurotuner, BMW Power und Mercedes Tuner) sowie der XMedia-Group mit zeitgemäßer digitaler Commerce-Technologie.",
    aboutP2: "Vom Braunsberger Feld in Bergisch Gladbach aus steuern wir die technische Realisierung, das Payment und die Plattform-Infrastruktur für interne Großprojekte und externe Partner.",
    aboutBoxTitle: "Unternehmensdaten auf einen Blick",
    aboutItem1: "Sitz: Braunsberger Feld 13c, 51429 Bergisch Gladbach",
    aboutItem2: "Register: Amtsgericht Köln, HRB 95142",
    aboutItem3: "Geschäftsführung: Olivier Jean Victor Fourcade",
    aboutItem4: "USt-IdNr.: DE319300736",
    aboutItem5: "Gegründet: 19. Juli 2018",

    // Contact Section
    contactHeaderTitle: "Starten wir Ihr nächstes digitales Projekt.",
    contactHeaderSubtitle: "Ob neuer Online-Shop, Produkt-Konfigurator oder Full-Service-Betrieb – wir beraten Sie unverbindlich.",
    contactLocationLabel: "Standort",
    contactPhoneLabel: "Telefon & Fax",
    contactEmailLabel: "E-Mail",

    // Form
    formSubjectLabel: "Bereich der Anfrage",
    formOpt1: "Online-Shop Entwicklung & Relaunch",
    formOpt2: "Interaktiver Produkt-Konfigurator",
    formOpt3: "Shop-Vermietung & Turnkey-Betrieb",
    formOpt4: "Event-Ticketing & Merchandising",
    formOpt5: "Allgemeine Beratung / Partnerschaft",
    formNameLabel: "Ihr Name / Unternehmen",
    formNamePlaceholder: "z. B. Max Mustermann / Unternehmen",
    formEmailLabel: "E-Mail-Adresse",
    formEmailPlaceholder: "name@beispiel.de",
    formMsgLabel: "Ihre Nachricht oder Projektbeschreibung",
    formMsgPlaceholder: "Kurze Beschreibung Ihrer Anforderungen oder Ihres Vorhabens...",
    formSubmitBtn: "Anfrage absenden",

    // Footer & Legal
    footerLegalLine: "BETA E-Com UG (haftungsbeschränkt) • Braunsberger Feld 13c • 51429 Bergisch Gladbach • Amtsgericht Köln HRB 95142 • USt-IdNr.: DE319300736 • Geschäftsführer: Olivier Fourcade",
    footerCopyright: "Copyright © 2026 BETA E-Com UG (haftungsbeschränkt). Alle Rechte vorbehalten.",
    legalNotice: "Impressum",
    privacyNotice: "Datenschutz"
  },
  en: {
    // Navigation
    navServices: "Services",
    navCases: "Work",
    navAbout: "About Us",
    navContact: "Contact",
    navCta: "Start a Project",

    // Hero Section
    heroBadge: "Digital Commerce & Automotive Merchandising",
    heroTitle: "E-Commerce Architecture Engineered to Scale.",
    heroSubtitle: "We develop, operate, and lease high-performance online storefronts, interactive product configurators, and specialized ticketing platforms.",
    heroCtaPrimary: "Explore Services",
    heroCtaSecondary: "View Showcase",

    // Statistics Strip
    stat1Label: "Commercial Register Cologne",
    stat2Label: "Active Storefronts",
    stat3Label: "Years Media Heritage",
    stat4Label: "GDPR Compliant",

    // Bento Grid / Capabilities
    bentoHeaderLabel: "Capabilities",
    bentoHeaderTitle: "Engineered for Performance and Scale.",
    bentoHeaderDesc: "End-to-end e-commerce solutions from a single source — from technical conception and custom development to ongoing store operations.",
    bentoCard1Title: "Custom Storefront Development",
    bentoCard1Desc: "High-performance architectures, headless storefronts, and seamless payment gateways designed for frictionless checkout.",
    bentoTag1: "Shopware • Gambio • Custom Stacks",
    bentoCard2Title: "Interactive Product Configurators",
    bentoCard2Desc: "Real-time visual configurators for automotive accessories and complex catalogs with instant pricing calculation.",
    configBtnBlack: "Black",
    configBtnCarbon: "Carbon",
    configBtnSilver: "Silver",
    configPreviewBadge: "Configuration Preview",
    bentoTag2: "Real-Time Calculation",
    bentoCard3Title: "Storefront Leasing & Turnkey Operations",
    bentoCard3Desc: "Ready-to-deploy, turnkey e-commerce setups available on flexible leasing terms with full infrastructure management and zero setup delays.",
    bentoTag3: "Leasing Models • Fully Managed",
    bentoCard4Title: "Event Ticketing & Merchandising",
    bentoCard4Desc: "End-to-end commerce handling for motorsports events (e.g. Drag Day), print magazine subscriptions, and branded apparel with integrated admission control.",
    bentoTag4: "Ticketing • Merchandising",

    // Showcase / Portfolio
    caseHeaderLabel: "Portfolio",
    caseHeaderTitle: "Proven Commercial Platforms.",
    caseHeaderDesc: "Click on the references to visit the live storefronts and digital solutions directly.",
    tabAll: "All Projects",
    tabAutomotive: "Automotive & Tickets",
    tabRetail: "D2C & Food",
    tabTools: "Configurators",

    badgeTuning: "Automotive & Ticketing",
    titleTuning: "Tuning-Couture Store & Ticketing",
    descTuning: "Official e-commerce storefront for print subscriptions (Eurotuner, BMW Power), streetwear, merchandising, and ticketing for major events such as Drag Day at Meinerzhagen Airfield.",
    operatorTuning: "Operator: BETA E-Com UG",
    visitTuning: "Visit Shop",

    badgeCandy: "D2C & Retail Store",
    titleCandy: "BestofCandy E-Commerce & Outlet",
    descCandy: "E-commerce retailer and brick-and-mortar storefront offering over 200 authentic imported US sweets, snacks, soft drinks, and BBQ specialties located in Bergisch Gladbach.",
    operatorCandy: "Operator: Bestofcandy BETA E-COM UG",
    visitCandy: "Visit Store",

    badgeGebhardt: "Configurator Implementation",
    titleGebhardt: "GEBHARDT Automotive",
    descGebhardt: "Development of the interactive online product configurator for automotive vehicle components featuring real-time specification selection and optimized usability.",
    operatorGebhardt: "Configurator Implementation: BETA E-COM UG",
    visitGebhardt: "Visit Website",

    // About / Network
    aboutLabel: "The Network",
    aboutTitle: "Media Heritage Meets Modern Software Architecture.",
    aboutP1: "Led by Managing Director Olivier Fourcade, BETA E-Com UG bridges more than three decades of publishing expertise from WP Europresse Verlag GmbH (publishers of acclaimed magazines such as Eurotuner, BMW Power, and Mercedes Tuner) and XMedia-Group with cutting-edge digital commerce engineering.",
    aboutP2: "From our headquarters in Bergisch Gladbach, Germany, we orchestrate the technical development, payment flows, and platform infrastructure for internal flagships and corporate partners.",
    aboutBoxTitle: "Corporate Profile at a Glance",
    aboutItem1: "Registered Office: Braunsberger Feld 13c, 51429 Bergisch Gladbach, Germany",
    aboutItem2: "Commercial Register: Local Court of Cologne, HRB 95142",
    aboutItem3: "Managing Director: Olivier Jean Victor Fourcade",
    aboutItem4: "VAT ID: DE319300736",
    aboutItem5: "Incorporated: July 19, 2018",

    // Contact Section
    contactHeaderTitle: "Let’s Build Your Next Digital Storefront.",
    contactHeaderSubtitle: "From custom configurators to managed e-commerce operations — schedule an initial consultation.",
    contactLocationLabel: "Location",
    contactPhoneLabel: "Phone & Fax",
    contactEmailLabel: "Email",

    // Form
    formSubjectLabel: "Area of Inquiry",
    formOpt1: "Online Store Development & Relaunch",
    formOpt2: "Interactive Product Configurator",
    formOpt3: "Storefront Leasing & Turnkey Operations",
    formOpt4: "Event Ticketing & Merchandising",
    formOpt5: "General Consultation & Partnership",
    formNameLabel: "Your Name / Company",
    formNamePlaceholder: "e.g. John Doe / Acme Corp",
    formEmailLabel: "Email Address",
    formEmailPlaceholder: "name@example.com",
    formMsgLabel: "Your Message or Project Details",
    formMsgPlaceholder: "Brief description of your requirements or project scope...",
    formSubmitBtn: "Send Inquiry",

    // Footer & Legal
    footerLegalLine: "BETA E-Com UG (haftungsbeschränkt) • Braunsberger Feld 13c • 51429 Bergisch Gladbach, Germany • Amtsgericht Köln HRB 95142 • VAT ID: DE319300736 • Managing Director: Olivier Fourcade",
    footerCopyright: "Copyright © 2026 BETA E-Com UG (haftungsbeschränkt). All rights reserved.",
    legalNotice: "Legal Notice",
    privacyNotice: "Privacy Policy"
  }
};

let currentLang = 'de';

function initLanguageToggle() {
  const langBtn = document.getElementById('lang-toggle-btn');
  if (!langBtn) return;

  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'de' ? 'en' : 'de';
    langBtn.textContent = currentLang.toUpperCase();
    applyLanguage(currentLang);
  });
}

function applyLanguage(lang) {
  const dict = translations[lang];

  // Update root document language for accessibility and SEO
  document.documentElement.setAttribute('lang', lang);

  // Update text contents
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input & textarea placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key]) {
      el.setAttribute('placeholder', dict[key]);
    }
  });

  // Update modal close button aria-label
  const closeBtn = document.getElementById('modal-close-btn');
  if (closeBtn) {
    closeBtn.setAttribute('aria-label', lang === 'en' ? 'Close' : 'Schließen');
  }
}

/* ==========================================================================
   3. Interactive Product Configurator Demo (Apple Interactive Box)
   ========================================================================== */
function initConfiguratorDemo() {
  const buttons = document.querySelectorAll('.config-btn');
  const preview = document.getElementById('demo-config-preview');
  const label = document.getElementById('config-active-spec');
  const price = document.getElementById('config-active-price');

  if (!buttons.length || !preview) return;

  const activeBtn = document.querySelector('.config-btn.active') || buttons[0];
  const initialFinish = activeBtn.getAttribute('data-finish') || 'midnight-black';
  preview.setAttribute('data-finish', initialFinish);

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const finish = btn.getAttribute('data-finish');
      const spec = btn.getAttribute('data-spec');
      const cost = btn.getAttribute('data-price');

      if (label) label.textContent = spec;
      if (price) price.textContent = cost;

      preview.setAttribute('data-finish', finish);
      preview.style.background = '';
      preview.style.borderColor = '';
    });
  });
}

/* ==========================================================================
   4. Portfolio Filtering Tabs
   ========================================================================== */
function initPortfolioTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const cards = document.querySelectorAll('.showcase-card');

  if (!tabs.length || !cards.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      cards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/* ==========================================================================
   5. Legal Modal Engine (Impressum § 5 DDG & Privacy GDPR) - Bilingual
   ========================================================================== */
function initLegalModals() {
  const impressumTrigger = document.querySelectorAll('[data-open-modal="impressum"]');
  const privacyTrigger = document.querySelectorAll('[data-open-modal="privacy"]');
  const modal = document.getElementById('legal-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal) return;

  function getImpressumHTML() {
    if (currentLang === 'en') {
      return `
        <div class="legal-section">
          <h3>Information according to § 5 DDG (German Digital Services Act)</h3>
          <p><strong>BETA E-Com UG (haftungsbeschränkt)</strong><br>
          Braunsberger Feld 13c<br>
          51429 Bergisch Gladbach<br>
          Germany</p>
        </div>
        <div class="legal-section">
          <h3>Commercial Register</h3>
          <p>Registered at the Local Court of Cologne (Amtsgericht Köln)<br>
          Registration Number: <strong>HRB 95142</strong></p>
        </div>
        <div class="legal-section">
          <h3>Authorized Managing Director</h3>
          <p><strong>Olivier Jean Victor Fourcade</strong></p>
        </div>
        <div class="legal-section">
          <h3>Contact</h3>
          <p>Phone: +49 (0) 2207 7037960<br>
          Fax: +49 (0) 2207 7037965<br>
          Email: info@tuning-couture.de / info@bestofcandy.de</p>
        </div>
        <div class="legal-section">
          <h3>VAT Identification Number</h3>
          <p>VAT ID according to § 27a German Value Added Tax Act:<br>
          <strong>DE319300736</strong></p>
        </div>
        <div class="legal-section">
          <h3>EU Dispute Resolution</h3>
          <p>The European Commission provides a platform for online dispute resolution (ODR): 
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>.<br>
          We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board.</p>
        </div>
      `;
    }
    return `
      <div class="legal-section">
        <h3>Angaben gemäß § 5 DDG (ehemals TMG)</h3>
        <p><strong>BETA E-Com UG (haftungsbeschränkt)</strong><br>
        Braunsberger Feld 13c<br>
        51429 Bergisch Gladbach<br>
        Deutschland</p>
      </div>
      <div class="legal-section">
        <h3>Handelsregister</h3>
        <p>Eingetragen im Handelsregister des Amtsgerichts Köln<br>
        Registernummer: <strong>HRB 95142</strong></p>
      </div>
      <div class="legal-section">
        <h3>Vertretungsberechtigter Geschäftsführer</h3>
        <p><strong>Olivier Jean Victor Fourcade</strong></p>
      </div>
      <div class="legal-section">
        <h3>Kontakt</h3>
        <p>Telefon: +49 (0) 2207 7037960<br>
        Telefax: +49 (0) 2207 7037965<br>
        E-Mail: info@tuning-couture.de / info@bestofcandy.de</p>
      </div>
      <div class="legal-section">
        <h3>Umsatzsteuer-Identifikationsnummer</h3>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br>
        <strong>DE319300736</strong></p>
      </div>
      <div class="legal-section">
        <h3>EU-Streitschlichtung & Verbraucherstreitbeilegung</h3>
        <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
        <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener">https://ec.europa.eu/consumers/odr/</a>.<br>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
      </div>
    `;
  }

  function getPrivacyHTML() {
    if (currentLang === 'en') {
      return `
        <div class="legal-section">
          <h3>Privacy Policy (GDPR / DSGVO)</h3>
          <p>We treat your personal data confidentially and in accordance with statutory data protection regulations as well as this privacy declaration.</p>
        </div>
        <div class="legal-section">
          <h3>1. Responsible Controller</h3>
          <p>BETA E-Com UG (haftungsbeschränkt)<br>
          Braunsberger Feld 13c, 51429 Bergisch Gladbach, Germany<br>
          Managing Director: Olivier Fourcade<br>
          Email: info@tuning-couture.de</p>
        </div>
        <div class="legal-section">
          <h3>2. Data Collection on this Website</h3>
          <p>Using our website is generally possible without submitting personal data. If personal data (such as name or email address in the contact form) is requested, submission is strictly voluntary.</p>
        </div>
        <div class="legal-section">
          <h3>3. Server Log Files</h3>
          <p>The provider of these pages automatically collects and stores standard server log files transmitted by your browser (IP address, browser type, referral URL, server request timestamp). These data points are not assigned to specific individuals.</p>
        </div>
        <div class="legal-section">
          <h3>4. Your Rights</h3>
          <p>You have the right at any time to receive information free of charge about your stored personal data, its origin and recipients, and the purpose of the data processing, as well as the right to have this data corrected or deleted.</p>
        </div>
      `;
    }
    return `
      <div class="legal-section">
        <h3>Datenschutzerklärung (DSGVO)</h3>
        <p>Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
      </div>
      <div class="legal-section">
        <h3>1. Verantwortliche Stelle</h3>
        <p>BETA E-Com UG (haftungsbeschränkt)<br>
        Braunsberger Feld 13c, 51429 Bergisch Gladbach<br>
        Geschäftsführer: Olivier Fourcade<br>
        E-Mail: info@tuning-couture.de</p>
      </div>
      <div class="legal-section">
        <h3>2. Datenerfassung auf dieser Website</h3>
        <p>Die Nutzung unserer Webseite ist in der Regel ohne Angabe personenbezogener Daten möglich. Soweit auf unseren Seiten personenbezogene Daten (z. B. Name oder E-Mail-Adresse im Kontaktformular) erhoben werden, erfolgt dies stets auf freiwilliger Basis.</p>
      </div>
      <div class="legal-section">
        <h3>3. Hosting & Server-Log-Dateien</h3>
        <p>Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt (IP-Adresse, Browsertyp, Referrer URL, Uhrzeit der Serveranfrage). Diese Daten sind nicht bestimmten Personen zuordenbar.</p>
      </div>
      <div class="legal-section">
        <h3>4. Ihre Rechte</h3>
        <p>Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten.</p>
      </div>
    `;
  }

  let lastFocusedElement = null;

  function openModal(title, content) {
    lastFocusedElement = document.activeElement;
    modalTitle.textContent = title;
    modalContent.innerHTML = content;
    modal.classList.add('active');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    modal.classList.remove('active');
    if (lastFocusedElement) {
      lastFocusedElement.focus();
    }
  }

  impressumTrigger.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(currentLang === 'en' ? "Legal Notice" : "Impressum", getImpressumHTML());
    });
  });

  privacyTrigger.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(currentLang === 'en' ? "Privacy Policy" : "Datenschutzerklärung", getPrivacyHTML());
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

/* ==========================================================================
   6. Contact Form Handler with Apple-Style Feedback
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('inquiry-form');
  const alertBox = document.getElementById('form-feedback');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.textContent;

    btn.disabled = true;
    btn.textContent = currentLang === 'de' ? "Wird übertragen..." : "Submitting...";

    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = originalText;
      form.reset();

      if (alertBox) {
        alertBox.style.display = 'block';
        alertBox.innerHTML = `
          <div style="background: rgba(48, 209, 88, 0.15); border: 1px solid rgba(48, 209, 88, 0.4); color: #30d158; padding: 14px 18px; border-radius: 12px; font-size: 14px; margin-top: 16px;">
            ✓ ${currentLang === 'de' ? "Vielen Dank! Ihre Anfrage wurde erfolgreich übermittelt. Wir melden uns zeitnah." : "Thank you! Your inquiry has been sent successfully. We will be in touch shortly."}
          </div>
        `;

        setTimeout(() => {
          alertBox.style.display = 'none';
        }, 6000);
      }
    }, 1200);
  });
}

/* ==========================================================================
   7. Smooth Anchor Scrolling
   ========================================================================== */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!' || this.hasAttribute('data-open-modal')) return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const navHeight = 60;
        const targetPos = targetEl.getBoundingClientRect().top + window.scrollY - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  });
}
