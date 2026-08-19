const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'index.html');
const outputDir = path.join(__dirname, 'public');
const outputPath = path.join(outputDir, 'index.html');
let html = fs.readFileSync(sourcePath, 'utf8');

const membershipUrl = 'https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933';

function replaceOnce(from, to) {
  if (html.includes(from)) html = html.replace(from, to);
}

if (!html.includes('mobile-smart-v4')) {
  replaceOnce(
    '</style>',
    `    /* mobile-smart-v4 */\n    .mobile-overview,\n    .mobile-package-picker,\n    .modal-toggle,\n    .mobile-modal-open,\n    .modal-head { display: none; }\n    .day-card summary {\n      list-style: none;\n      cursor: pointer;\n      padding: 18px;\n      background: rgba(255,255,255,.04);\n      font-family: "Barlow Condensed", sans-serif;\n      font-size: 28px;\n      font-weight: 800;\n      line-height: 1;\n      text-transform: uppercase;\n      display: flex;\n      align-items: center;\n      justify-content: space-between;\n      gap: 14px;\n    }\n    .day-card summary::-webkit-details-marker { display: none; }\n    .day-card summary::after { content: "+"; color: var(--lime); font-size: 24px; line-height: 1; }\n    .day-card[open] summary::after { content: "-"; }\n    .day-count {\n      color: var(--muted);\n      font-family: Archivo, system-ui, sans-serif;\n      font-size: 12px;\n      font-weight: 800;\n      text-transform: none;\n    }\n\n    @media (max-width: 680px) {\n      h1 { font-size: clamp(50px, 16vw, 72px); }\n      h2 { font-size: clamp(38px, 12vw, 52px); }\n      h3 { font-size: 26px; }\n      .hero { min-height: 540px; padding: 54px 0 36px; }\n      .hero-content { gap: 18px; }\n      .hero p { font-size: 16px; }\n      .hero-actions { gap: 10px; }\n      .hero-actions .btn { width: 100%; min-height: 44px; }\n      .program-grid, .package-grid, .coach-grid, .mobile-schedule { grid-template-columns: 1fr; }\n      .program-grid, .coach-grid, .mobile-schedule { gap: 10px; }\n      .program-card { min-height: auto; padding: 16px; gap: 10px; }\n      .program-card h3 { font-size: 24px; }\n      .pill { padding: 6px 9px; }\n      section { padding: 52px 0; }\n      .section-head { gap: 12px; margin-bottom: 22px; }\n      .section-head p { font-size: 14px; }\n      .schedule-tools { margin-bottom: 14px; }\n      .schedule-tools .btn { width: 100%; }\n      .legend { gap: 7px; }\n      .legend span { font-size: 11px; }\n      .mobile-overview,\n      .mobile-package-picker { display: grid; gap: 8px; margin-top: 12px; }\n      .schedule-chip,\n      .plan-chip {\n        border: 1px solid var(--line);\n        border-radius: var(--radius);\n        background: rgba(255,255,255,.035);\n        padding: 12px;\n      }\n      .schedule-chip {\n        display: grid;\n        grid-template-columns: 72px 1fr auto;\n        align-items: center;\n        gap: 10px;\n      }\n      .schedule-chip strong,\n      .plan-chip strong {\n        font-family: "Barlow Condensed", sans-serif;\n        font-size: 24px;\n        line-height: 1;\n        text-transform: uppercase;\n      }\n      .schedule-chip span,\n      .plan-chip span { color: var(--muted); font-size: 12px; }\n      .schedule-chip em,\n      .plan-chip em {\n        color: var(--lime);\n        font-style: normal;\n        font-weight: 800;\n        font-size: 12px;\n        white-space: nowrap;\n      }\n      .plan-chip {\n        display: grid;\n        grid-template-columns: 1fr auto;\n        align-items: center;\n        gap: 8px 12px;\n      }\n      .plan-chip small { grid-column: 1 / -1; color: var(--faint); }\n      .mobile-modal-open { display: flex; width: 100%; margin-top: 12px; }\n      .modal-head {\n        position: sticky;\n        top: 0;\n        z-index: 2;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        gap: 14px;\n        padding: 16px;\n        margin: -16px -16px 12px;\n        border-bottom: 1px solid var(--line);\n        background: rgba(21, 24, 29, .96);\n        backdrop-filter: blur(14px);\n      }\n      .modal-head strong {\n        font-family: "Barlow Condensed", sans-serif;\n        font-size: 28px;\n        line-height: 1;\n        text-transform: uppercase;\n      }\n      .modal-close {\n        display: inline-grid;\n        place-items: center;\n        width: 42px;\n        height: 42px;\n        border: 1px solid var(--line-strong);\n        border-radius: var(--radius);\n        color: var(--text);\n        font-size: 26px;\n        line-height: 1;\n        background: rgba(255,255,255,.05);\n      }\n      #schedule-modal:not(:checked) ~ .mobile-schedule,\n      #packages-modal:not(:checked) ~ .pricing-matrix { display: none; }\n      #schedule-modal:checked ~ .mobile-schedule,\n      #packages-modal:checked ~ .pricing-matrix {\n        position: fixed;\n        inset: 0;\n        z-index: 50;\n        display: block;\n        overflow-y: auto;\n        padding: 16px;\n        border: 0;\n        border-radius: 0;\n        background: rgba(21, 24, 29, .98);\n      }\n      #schedule-modal:checked ~ .mobile-schedule { grid-template-columns: 1fr; }\n      #packages-modal:checked ~ .pricing-matrix { border: 0; }\n      #packages-modal:checked ~ .pricing-matrix .pricing-row { background: var(--panel); }\n      #schedule-modal:checked ~ .mobile-schedule .day-card { margin-bottom: 10px; }\n      .day-card summary { padding: 14px 16px; font-size: 24px; }\n      .day-session { grid-template-columns: 64px 1fr; padding: 10px 16px; gap: 10px; }\n      .day-session time, .day-session span { font-size: 12px; }\n      .day-session strong { font-size: 14px; }\n      .package-grid { gap: 10px; margin-bottom: 18px; }\n      .package-card { grid-template-columns: 1fr auto; padding: 16px; gap: 12px; align-items: center; }\n      .package-card p { display: none; }\n      .package-card .price { font-size: 40px; }\n      .package-card .btn { min-height: 40px; margin-top: 10px; padding: 10px 12px; font-size: 13px; }\n      .pricing-row { margin-bottom: 12px; }\n      .pricing-cell { min-height: auto; padding: 14px 16px; }\n      .tier-name { gap: 3px; background: rgba(255,255,255,.045); }\n      .tier-name strong { font-size: 28px; }\n      .pricing-cell:not(.tier-name) {\n        display: grid;\n        grid-template-columns: 1fr auto;\n        align-items: center;\n        gap: 6px 12px;\n      }\n      .pricing-cell .tag { margin-bottom: 0; font-size: 15px; }\n      .monthly { font-size: 36px; grid-row: span 2; }\n      .pricing-cell .sub { font-size: 12px; }\n      .buy-link { grid-column: 1 / -1; min-height: 38px; margin-top: 6px; padding: 9px 10px; }\n      .pricing-actions { margin-top: 14px; }\n      .pricing-actions .btn { width: 100%; }\n      .coach-grid { gap: 10px; }\n      .coach-card { display: grid; grid-template-columns: 76px 1fr; align-items: center; }\n      .coach-card img { width: 76px; height: 76px; aspect-ratio: 1; }\n      .coach-card div { padding: 12px; }\n      .coach-card h3 { font-size: 24px; }\n      .coach-card p { margin-top: 4px; font-size: 12px; }\n      .contact-list a,\n      .contact-list span { flex-direction: column; gap: 4px; }\n    }\n  </style>`
  );
}

if (!html.includes('aria-label="Push contact details"')) {
  replaceOnce(
    `            <h3>PUSH</h3>\n            <p>High-performance group training in Den Haag with structured classes, open gym options and practical membership packages.</p>\n            <div class="hero-actions">`,
    `            <h3>PUSH</h3>\n            <p>High-performance group training in Den Haag with structured classes, open gym options and practical membership packages.</p>\n            <div class="contact-list" aria-label="Push contact details">\n              <a href="https://www.instagram.com/push.athlete/" target="_blank" rel="noopener"><strong>Instagram</strong>@push.athlete</a>\n              <a href="mailto:Pushathlete@hotmail.com"><strong>Email</strong>Pushathlete@hotmail.com</a>\n              <a href="tel:+31639295344"><strong>Phone</strong>+31 6 3929 5344</a>\n              <span><strong>Address</strong>Brigantijnlaan 95, 2496 ZR Den Haag</span>\n            </div>\n            <div class="hero-actions">`
  );
}

if (!html.includes('class="day-card" open')) {
  const days = [
    ['Monday', '6 sessions'], ['Tuesday', '3 sessions'], ['Wednesday', '5 sessions'],
    ['Thursday', '3 sessions'], ['Friday', '5 sessions'], ['Saturday', '1 session'], ['Sunday', '1 session']
  ];
  for (const [day, count] of days) {
    const open = day === 'Monday' ? ' open' : '';
    replaceOnce(`<article class="day-card">\n            <h3>${day}</h3>`, `<details class="day-card"${open}>\n            <summary>${day} <span class="day-count">${count}</span></summary>`);
  }
  html = html.replaceAll('          </article>\n          <details class="day-card"', '          </details>\n          <details class="day-card"');
  replaceOnce('          </article>\n        </div>\n      </div>\n    </section>\n\n    <section id="pricing">', '          </details>\n        </div>\n      </div>\n    </section>\n\n    <section id="pricing">');
}

if (!html.includes('aria-label="Schedule overview"')) {
  replaceOnce(
    '          <a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/proefles" target="_blank" rel="noopener">Book a Spot</a>\n        </div>\n',
    '          <a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/proefles" target="_blank" rel="noopener">Book a Spot</a>\n        </div>\n        <div class="mobile-overview" aria-label="Schedule overview">\n          <div class="schedule-chip"><strong>Mon</strong><span>07:00, 08:00, 09:00, 10:00, evening</span><em>6</em></div>\n          <div class="schedule-chip"><strong>Tue</strong><span>Open gym + strength</span><em>3</em></div>\n          <div class="schedule-chip"><strong>Wed</strong><span>Morning block + 18:30</span><em>5</em></div>\n          <div class="schedule-chip"><strong>Thu</strong><span>Strength, open gym, kickbox</span><em>3</em></div>\n          <div class="schedule-chip"><strong>Fri</strong><span>Hyrox + open gym</span><em>5</em></div>\n          <div class="schedule-chip"><strong>Weekend</strong><span>09:00 Saturday and Sunday</span><em>2</em></div>\n        </div>\n        <input class="modal-toggle" id="schedule-modal" type="checkbox" aria-hidden="true">\n        <label class="btn btn-primary mobile-modal-open" for="schedule-modal">Open Timetable</label>\n'
  );
}

if (!html.includes('Weekly Timetable')) {
  replaceOnce(
    '        <div class="mobile-schedule" aria-label="Weekly schedule by day">\n',
    '        <div class="mobile-schedule" aria-label="Weekly schedule by day">\n          <div class="modal-head">\n            <strong>Weekly Timetable</strong>\n            <label class="modal-close" for="schedule-modal" aria-label="Close timetable">×</label>\n          </div>\n'
  );
}

if (!html.includes('aria-label="Membership quick selector"')) {
  replaceOnce(
    '            <div class="price">€155</div>\n          </article>\n        </div>\n',
    `            <div class="price">€155</div>\n          </article>\n        </div>\n        <div class="mobile-package-picker" aria-label="Membership quick selector">\n          <a class="plan-chip" href="${membershipUrl}" target="_blank" rel="noopener"><strong>Plus</strong><em>from €90/mo</em><span>2 sessions a week</span><small>Lowest 24-month rate. Full comparison below.</small></a>\n          <a class="plan-chip" href="${membershipUrl}" target="_blank" rel="noopener"><strong>Triple</strong><em>from €100/mo</em><span>3 sessions a week</span><small>Good balance for consistent weekly training.</small></a>\n          <a class="plan-chip" href="${membershipUrl}" target="_blank" rel="noopener"><strong>Unlimited</strong><em>from €110/mo</em><span>Train without weekly limits</span><small>Best for frequent training and open gym use.</small></a>\n        </div>\n        <input class="modal-toggle" id="packages-modal" type="checkbox" aria-hidden="true">\n        <label class="btn btn-primary mobile-modal-open" for="packages-modal">Compare Memberships</label>\n`
  );
}

if (!html.includes('<strong>Memberships</strong>')) {
  replaceOnce(
    '        <div class="pricing-matrix" aria-label="Membership package comparison">\n',
    '        <div class="pricing-matrix" aria-label="Membership package comparison">\n          <div class="modal-head">\n            <strong>Memberships</strong>\n            <label class="modal-close" for="packages-modal" aria-label="Close memberships">×</label>\n          </div>\n'
  );
}

html = html.replace(
  'src="https://www.google.com/maps?q=Push%20Lifestyle%20Den%20Haag&output=embed" title="Push Lifestyle x Athlete map"',
  'src="https://www.google.com/maps?q=LA-PT%2C%20Brigantijnlaan%2095%2C%202496%20ZR%20Den%20Haag&z=16&output=embed" title="PUSH at LA-PT, Brigantijnlaan 95, Den Haag"'
);

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, html);
