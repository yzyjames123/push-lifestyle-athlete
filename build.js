const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, 'index.html');
const outputDir = path.join(__dirname, 'public');
const outputPath = path.join(outputDir, 'index.html');
const membershipUrl = 'https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933';

let html = fs.readFileSync(sourcePath, 'utf8');

function replaceOnce(from, to) {
  if (html.includes(from)) html = html.replace(from, to);
}

if (!html.includes('mobile-desktop-modal-v5')) {
  replaceOnce('</style>', `    /* mobile-desktop-modal-v5 */
    .contact-list {
      display: grid;
      gap: 10px;
      margin: 22px 0 24px;
    }
    .contact-list a,
    .contact-list span {
      display: flex;
      justify-content: space-between;
      gap: 18px;
      padding: 12px 0;
      border-top: 1px solid var(--line);
      color: var(--text);
      font-size: 14px;
    }
    .contact-list strong {
      color: var(--lime);
      font-family: "Barlow Condensed", sans-serif;
      font-size: 14px;
      letter-spacing: .12em;
      text-transform: uppercase;
      white-space: nowrap;
    }
    .mobile-overview,
    .mobile-package-picker,
    .modal-toggle,
    .mobile-modal-open,
    .modal-head { display: none; }

    @media (max-width: 680px) {
      h1 { font-size: clamp(50px, 16vw, 72px); }
      h2 { font-size: clamp(38px, 12vw, 52px); }
      h3 { font-size: 26px; }
      .hero { min-height: 540px; padding: 54px 0 36px; }
      .hero-content { gap: 18px; }
      .hero p { font-size: 16px; }
      .hero-actions { gap: 10px; }
      .hero-actions .btn { width: 100%; min-height: 44px; }
      .program-grid, .package-grid, .coach-grid { grid-template-columns: 1fr; }
      .program-grid, .coach-grid { gap: 10px; }
      .program-card { min-height: auto; padding: 16px; gap: 10px; }
      .program-card h3 { font-size: 24px; }
      .pill { padding: 6px 9px; }
      section { padding: 52px 0; }
      .section-head { gap: 12px; margin-bottom: 22px; }
      .section-head p { font-size: 14px; }
      .schedule-tools { margin-bottom: 14px; }
      .schedule-tools .btn { width: 100%; }
      .legend { gap: 7px; }
      .legend span { font-size: 11px; }
      .mobile-overview,
      .mobile-package-picker { display: grid; gap: 8px; margin-top: 12px; }
      .schedule-chip,
      .plan-chip {
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: rgba(255,255,255,.035);
        padding: 12px;
      }
      .schedule-chip {
        display: grid;
        grid-template-columns: 72px 1fr auto;
        align-items: center;
        gap: 10px;
      }
      .schedule-chip strong,
      .plan-chip strong {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 24px;
        line-height: 1;
        text-transform: uppercase;
      }
      .schedule-chip span,
      .plan-chip span { color: var(--muted); font-size: 12px; }
      .schedule-chip em,
      .plan-chip em {
        color: var(--lime);
        font-style: normal;
        font-weight: 800;
        font-size: 12px;
        white-space: nowrap;
      }
      .plan-chip {
        display: grid;
        grid-template-columns: 1fr auto;
        align-items: center;
        gap: 8px 12px;
      }
      .plan-chip small { grid-column: 1 / -1; color: var(--faint); }
      .mobile-modal-open { display: flex; width: 100%; margin-top: 12px; }
      .modal-head {
        position: sticky;
        left: 0;
        top: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 14px;
        padding: 16px;
        margin: -16px -16px 12px;
        border-bottom: 1px solid var(--line);
        background: rgba(21, 24, 29, .96);
        backdrop-filter: blur(14px);
      }
      .modal-head strong {
        font-family: "Barlow Condensed", sans-serif;
        font-size: 28px;
        line-height: 1;
        text-transform: uppercase;
      }
      .modal-close {
        display: inline-grid;
        place-items: center;
        width: 42px;
        height: 42px;
        border: 1px solid var(--line-strong);
        border-radius: var(--radius);
        color: var(--text);
        font-size: 26px;
        line-height: 1;
        background: rgba(255,255,255,.05);
      }
      #schedule-modal:not(:checked) ~ .schedule-table-wrap,
      #packages-modal:not(:checked) ~ .pricing-matrix { display: none; }
      #schedule-modal:checked ~ .schedule-table-wrap,
      #packages-modal:checked ~ .pricing-matrix {
        position: fixed;
        inset: 0;
        z-index: 50;
        display: block;
        overflow: auto;
        padding: 16px;
        border: 0;
        border-radius: 0;
        background: rgba(21, 24, 29, .98);
      }
      #schedule-modal:checked ~ .schedule-table-wrap table { min-width: 980px; }
      #packages-modal:checked ~ .pricing-matrix .pricing-row {
        display: grid;
        grid-template-columns: 1.1fr repeat(3, minmax(190px, 1fr));
        min-width: 900px;
        margin-bottom: 0;
        border: 0;
        border-top: 1px solid var(--line);
        border-radius: 0;
        background: var(--panel);
      }
      #packages-modal:checked ~ .pricing-matrix .pricing-row:first-of-type {
        display: grid;
        border-top: 0;
      }
      #packages-modal:checked ~ .pricing-matrix .pricing-cell {
        display: block;
        min-height: 124px;
        padding: 18px;
        border-top: 0;
        border-left: 1px solid var(--line);
      }
      #packages-modal:checked ~ .pricing-matrix .pricing-cell:first-child { border-left: 0; }
      #packages-modal:checked ~ .pricing-matrix .monthly { display: block; font-size: 42px; }
      #packages-modal:checked ~ .pricing-matrix .buy-link { width: 100%; margin-top: 12px; }
      .mobile-schedule { display: none; }
      .package-grid { gap: 10px; margin-bottom: 18px; }
      .package-card { grid-template-columns: 1fr auto; padding: 16px; gap: 12px; align-items: center; }
      .package-card p { display: none; }
      .package-card .price { font-size: 40px; }
      .package-card .btn { min-height: 40px; margin-top: 10px; padding: 10px 12px; font-size: 13px; }
      .pricing-actions { margin-top: 14px; }
      .pricing-actions .btn { width: 100%; }
      .coach-grid { gap: 10px; }
      .coach-card { display: grid; grid-template-columns: 76px 1fr; align-items: center; }
      .coach-card img { width: 76px; height: 76px; aspect-ratio: 1; }
      .coach-card div { padding: 12px; }
      .coach-card h3 { font-size: 24px; }
      .coach-card p { margin-top: 4px; font-size: 12px; }
      .contact-list a,
      .contact-list span { flex-direction: column; gap: 4px; }
    }
  </style>`);
}

if (!html.includes('aria-label="Push contact details"')) {
  replaceOnce(
    `            <h3>PUSH</h3>\n            <p>High-performance group training in Den Haag with structured classes, open gym options and practical membership packages.</p>\n            <div class="hero-actions">`,
    `            <h3>PUSH</h3>\n            <p>High-performance group training in Den Haag with structured classes, open gym options and practical membership packages.</p>\n            <div class="contact-list" aria-label="Push contact details">\n              <a href="https://www.instagram.com/push.athlete/" target="_blank" rel="noopener"><strong>Instagram</strong>@push.athlete</a>\n              <a href="mailto:Pushathlete@hotmail.com"><strong>Email</strong>Pushathlete@hotmail.com</a>\n              <a href="tel:+31639295344"><strong>Phone</strong>+31 6 3929 5344</a>\n              <span><strong>Address</strong>Brigantijnlaan 95, 2496 ZR Den Haag</span>\n            </div>\n            <div class="hero-actions">`
  );
}

if (!html.includes('aria-label="Schedule overview"')) {
  replaceOnce(
    '          <a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/proefles" target="_blank" rel="noopener">Book a Spot</a>\n        </div>\n',
    '          <a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/proefles" target="_blank" rel="noopener">Book a Spot</a>\n        </div>\n        <div class="mobile-overview" aria-label="Schedule overview">\n          <div class="schedule-chip"><strong>Mon</strong><span>07:00, 08:00, 09:00, 10:00, evening</span><em>6</em></div>\n          <div class="schedule-chip"><strong>Tue</strong><span>Open gym + strength</span><em>3</em></div>\n          <div class="schedule-chip"><strong>Wed</strong><span>Morning block + 18:30</span><em>5</em></div>\n          <div class="schedule-chip"><strong>Thu</strong><span>Strength, open gym, kickbox</span><em>3</em></div>\n          <div class="schedule-chip"><strong>Fri</strong><span>Hyrox + open gym</span><em>5</em></div>\n          <div class="schedule-chip"><strong>Weekend</strong><span>09:00 Saturday and Sunday</span><em>2</em></div>\n        </div>\n        <input class="modal-toggle" id="schedule-modal" type="checkbox" aria-hidden="true">\n        <label class="btn btn-primary mobile-modal-open" for="schedule-modal">Open Full Timetable</label>\n'
  );
}

if (!html.includes('Weekly Timetable')) {
  replaceOnce(
    '        <div class="schedule-table-wrap" aria-label="Weekly schedule table">\n',
    '        <div class="schedule-table-wrap" aria-label="Weekly schedule table">\n          <div class="modal-head">\n            <strong>Weekly Timetable</strong>\n            <label class="modal-close" for="schedule-modal" aria-label="Close timetable">×</label>\n          </div>\n'
  );
}

if (!html.includes('aria-label="Membership quick selector"')) {
  replaceOnce(
    '            <div class="price">€155</div>\n          </article>\n        </div>\n',
    `            <div class="price">€155</div>\n          </article>\n        </div>\n        <div class="mobile-package-picker" aria-label="Membership quick selector">\n          <a class="plan-chip" href="${membershipUrl}" target="_blank" rel="noopener"><strong>Plus</strong><em>from €90/mo</em><span>2 sessions a week</span><small>Lowest 24-month rate. Full comparison below.</small></a>\n          <a class="plan-chip" href="${membershipUrl}" target="_blank" rel="noopener"><strong>Triple</strong><em>from €100/mo</em><span>3 sessions a week</span><small>Good balance for consistent weekly training.</small></a>\n          <a class="plan-chip" href="${membershipUrl}" target="_blank" rel="noopener"><strong>Unlimited</strong><em>from €110/mo</em><span>Train without weekly limits</span><small>Best for frequent training and open gym use.</small></a>\n        </div>\n        <input class="modal-toggle" id="packages-modal" type="checkbox" aria-hidden="true">\n        <label class="btn btn-primary mobile-modal-open" for="packages-modal">Open Full Pricing Table</label>\n`
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
