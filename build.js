const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'index.html');
const outputDir = path.join(__dirname, 'public');
const outputPath = path.join(outputDir, 'index.html');

let html = fs.readFileSync(sourcePath, 'utf8');

if (!html.includes('.contact-list')) {
  html = html.replace(
    '    .contact-panel p { color: var(--muted); }\n',
    `    .contact-panel p { color: var(--muted); }\n    .contact-list {\n      display: grid;\n      gap: 10px;\n      margin: 22px 0 24px;\n    }\n    .contact-list a,\n    .contact-list span {\n      display: flex;\n      justify-content: space-between;\n      gap: 18px;\n      padding: 12px 0;\n      border-top: 1px solid var(--line);\n      color: var(--text);\n      font-size: 14px;\n    }\n    .contact-list strong {\n      color: var(--lime);\n      font-family: "Barlow Condensed", sans-serif;\n      font-size: 14px;\n      letter-spacing: .12em;\n      text-transform: uppercase;\n      white-space: nowrap;\n    }\n`
  );

  html = html.replace(
    '      .day-session { grid-template-columns: 76px 1fr; }\n',
    `      .day-session { grid-template-columns: 76px 1fr; }\n      .contact-list a,\n      .contact-list span { flex-direction: column; gap: 4px; }\n`
  );
}

if (!html.includes('mobile-compact-v2')) {
  html = html.replace(
    '</style>',
    `    /* mobile-compact-v2 */\n    .day-card summary {\n      list-style: none;\n      cursor: pointer;\n      padding: 18px;\n      background: rgba(255,255,255,.04);\n      font-family: "Barlow Condensed", sans-serif;\n      font-size: 28px;\n      font-weight: 800;\n      line-height: 1;\n      text-transform: uppercase;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 14px;\n    }\n    .day-card summary::-webkit-details-marker { display: none; }\n    .day-card summary::after { content: "+"; color: var(--lime); font-size: 24px; line-height: 1; }\n    .day-card[open] summary::after { content: "-"; }\n    .day-count {\n      color: var(--muted);\n      font-family: Archivo, system-ui, sans-serif;\n      font-size: 12px;\n      font-weight: 800;\n      text-transform: none;\n    }\n\n    @media (max-width: 680px) {\n      h1 { font-size: clamp(50px, 16vw, 72px); }\n      h2 { font-size: clamp(38px, 12vw, 52px); }\n      h3 { font-size: 26px; }\n      .hero { min-height: 560px; padding: 58px 0 38px; }\n      .hero-content { gap: 20px; }\n      .hero p { font-size: 16px; }\n      .hero-actions { gap: 10px; }\n      .hero-actions .btn { width: 100%; min-height: 44px; }\n      .program-grid, .coach-grid, .mobile-schedule { gap: 10px; }\n      .program-card { min-height: auto; padding: 18px; gap: 12px; }\n      .program-card h3 { font-size: 24px; }\n      .pill { padding: 6px 9px; }\n      section { padding: 56px 0; }\n      .section-head { gap: 14px; margin-bottom: 24px; }\n      .section-head p { font-size: 14px; }\n      .schedule-tools { margin-bottom: 16px; }\n      .schedule-tools .btn { width: 100%; }\n      .legend { gap: 7px; }\n      .legend span { font-size: 11px; }\n      .day-card summary { padding: 14px 16px; font-size: 24px; }\n      .day-session { grid-template-columns: 64px 1fr; padding: 10px 16px; gap: 10px; }\n      .day-session time, .day-session span { font-size: 12px; }\n      .day-session strong { font-size: 14px; }\n      .package-grid { gap: 10px; margin-bottom: 18px; }\n      .package-card { grid-template-columns: 1fr auto; padding: 16px; gap: 12px; align-items: center; }\n      .package-card p { display: none; }\n      .package-card .price { font-size: 40px; }\n      .package-card .btn { min-height: 40px; margin-top: 10px; padding: 10px 12px; font-size: 13px; }\n      .pricing-row { margin-bottom: 12px; }\n      .pricing-cell { min-height: auto; padding: 14px 16px; }\n      .tier-name { gap: 3px; background: rgba(255,255,255,.045); }\n      .tier-name strong { font-size: 28px; }\n      .pricing-cell:not(.tier-name) {\n        display: grid;\n        grid-template-columns: 1fr auto;\n        align-items: center;\n        gap: 6px 12px;\n      }\n      .pricing-cell .tag { margin-bottom: 0; font-size: 15px; }\n      .monthly { font-size: 36px; grid-row: span 2; }\n      .pricing-cell .sub { font-size: 12px; }\n      .buy-link { grid-column: 1 / -1; min-height: 38px; margin-top: 6px; padding: 9px 10px; }\n      .pricing-actions { margin-top: 14px; }\n      .pricing-actions .btn { width: 100%; }\n    }\n  </style>`
  );
}

if (!html.includes('class="day-card" open')) {
  const dayReplacements = [
    ['<article class="day-card">\n            <h3>Monday</h3>', '<details class="day-card" open>\n            <summary>Monday <span class="day-count">6 sessions</span></summary>'],
    ['<article class="day-card">\n            <h3>Tuesday</h3>', '<details class="day-card">\n            <summary>Tuesday <span class="day-count">3 sessions</span></summary>'],
    ['<article class="day-card">\n            <h3>Wednesday</h3>', '<details class="day-card">\n            <summary>Wednesday <span class="day-count">5 sessions</span></summary>'],
    ['<article class="day-card">\n            <h3>Thursday</h3>', '<details class="day-card">\n            <summary>Thursday <span class="day-count">3 sessions</span></summary>'],
    ['<article class="day-card">\n            <h3>Friday</h3>', '<details class="day-card">\n            <summary>Friday <span class="day-count">5 sessions</span></summary>'],
    ['<article class="day-card">\n            <h3>Saturday</h3>', '<details class="day-card">\n            <summary>Saturday <span class="day-count">1 session</span></summary>'],
    ['<article class="day-card">\n            <h3>Sunday</h3>', '<details class="day-card">\n            <summary>Sunday <span class="day-count">1 session</span></summary>']
  ];

  for (const [from, to] of dayReplacements) {
    html = html.replace(from, to);
  }

  html = html.replaceAll('          </article>\n          <details class="day-card"', '          </details>\n          <details class="day-card"');
  html = html.replace('          </article>\n        </div>\n      </div>\n    </section>\n\n    <section id="pricing">', '          </details>\n        </div>\n      </div>\n    </section>\n\n    <section id="pricing">');
}

if (!html.includes('aria-label="Push contact details"')) {
  html = html.replace(
    `            <h3>PUSH</h3>\n            <p>High-performance group training in Den Haag with structured classes, open gym options and practical membership packages.</p>\n            <div class="hero-actions">`,
    `            <h3>PUSH</h3>\n            <p>High-performance group training in Den Haag with structured classes, open gym options and practical membership packages.</p>\n            <div class="contact-list" aria-label="Push contact details">\n              <a href="https://www.instagram.com/push.athlete/" target="_blank" rel="noopener"><strong>Instagram</strong>@push.athlete</a>\n              <a href="mailto:Pushathlete@hotmail.com"><strong>Email</strong>Pushathlete@hotmail.com</a>\n              <a href="tel:+31639295344"><strong>Phone</strong>+31 6 3929 5344</a>\n              <span><strong>Address</strong>Brigantijnlaan 95, 2496 ZR Den Haag</span>\n            </div>\n            <div class="hero-actions">`
  );
}

html = html.replace(
  'src="https://www.google.com/maps?q=Push%20Lifestyle%20Den%20Haag&output=embed" title="Push Lifestyle x Athlete map"',
  'src="https://www.google.com/maps?q=LA-PT%2C%20Brigantijnlaan%2095%2C%202496%20ZR%20Den%20Haag&z=16&output=embed" title="PUSH at LA-PT, Brigantijnlaan 95, Den Haag"'
);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, html);
