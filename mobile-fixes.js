const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'public', 'index.html');
let html = fs.readFileSync(outputPath, 'utf8');

if (!html.includes('mobile-accordion-v10')) {
  html = html.replace('</style>', `    /* mobile-accordion-v10 */
    @media (max-width: 680px) {
      .hero p,
      .hero-actions .btn-secondary { display: none; }
      .schedule-tab summary { grid-template-columns: 64px 1fr auto 20px; }
      .plan-tab summary { grid-template-columns: 1fr auto 20px; gap: 8px 12px; }
      .schedule-tab summary::after,
      .plan-tab summary::after {
        content: "+";
        color: var(--lime);
        font-family: Archivo, system-ui, sans-serif;
        font-size: 18px;
        font-weight: 800;
        line-height: 1;
        text-align: right;
      }
      .schedule-tab[open] summary::after,
      .plan-tab[open] summary::after { content: "-"; }
      .plan-tab span,
      .plan-tab small { grid-column: 1 / -1; }
      .option-row em {
        color: var(--lime);
        font-style: normal;
        font-weight: 800;
        font-size: 14px;
        white-space: nowrap;
      }
      .option-row small { grid-column: 1 / -1; color: var(--faint); }
      #schedule-modal:checked ~ .schedule-table-wrap::after {
        content: "Swipe sideways for more days. Scroll down for evening classes.";
        position: fixed;
        left: 16px;
        right: 16px;
        bottom: 12px;
        z-index: 3;
        padding: 10px 12px;
        border: 1px solid var(--line);
        border-radius: var(--radius);
        background: rgba(21, 24, 29, .92);
        color: var(--muted);
        font-size: 12px;
        text-align: center;
        pointer-events: none;
      }
      #schedule-modal:checked ~ .schedule-table-wrap table { background: var(--panel); }
      #schedule-modal:checked ~ .schedule-table-wrap th,
      #schedule-modal:checked ~ .schedule-table-wrap td { background-color: var(--panel); }
    }
  </style>`);
}

html = html.replace(
  `<details class="schedule-tab"><summary><strong>Weekend</strong><span>09:00 Saturday and Sunday</span><em>2</em></summary><div class="tab-panel"><div class="day-session"><time>Sat 09:00</time><div><strong>Functional Fitness</strong><span>12 pers · Vivian</span></div></div><div class="day-session"><time>Sun 09:00</time><div><strong>Functional Fitness</strong><span>12 pers</span></div></div></div></details>`,
  `<details class="schedule-tab"><summary><strong>Sat</strong><span>09:00 Functional Fitness</span><em>1</em></summary><div class="tab-panel"><div class="day-session"><time>09:00</time><div><strong>Functional Fitness</strong><span>12 pers · Vivian</span></div></div></div></details>\n          <details class="schedule-tab"><summary><strong>Sun</strong><span>09:00 Functional Fitness</span><em>1</em></summary><div class="tab-panel"><div class="day-session"><time>09:00</time><div><strong>Functional Fitness</strong><span>12 pers</span></div></div></div></details>`
);

for (const row of [
  `              <tr>\n                <td>13:00-14:00</td>\n                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>\n              </tr>\n`,
  `              <tr>\n                <td>15:00-16:00</td>\n                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>\n              </tr>\n`,
  `              <tr>\n                <td>16:00-17:00</td>\n                <td></td><td></td><td></td><td></td><td></td><td></td><td></td>\n              </tr>\n`
]) {
  html = html.replace(row, '');
}

const replacements = [
  ['<div class="option-row"><div><strong>Standard · 3 mo</strong><span>€105/mo · €13.13 per session</span></div><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Plus 3 mo</a></div>', '<div class="option-row"><strong>Standard · 3 mo</strong><em>€105/mo</em><small>€13.13 per session</small><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Standard</a></div>'],
  ['<div class="option-row"><div><strong>Intermediate · 12 mo</strong><span>€95/mo · €11.86 per session</span></div><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Plus 12 mo</a></div>', '<div class="option-row"><strong>Intermediate · 12 mo</strong><em>€95/mo</em><small>€11.86 per session</small><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Intermediate</a></div>'],
  ['<div class="option-row"><div><strong>Best value · 24 mo</strong><span>€90/mo · €11.25 per session</span></div><a class="btn btn-primary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Plus 24 mo</a></div>', '<div class="option-row"><strong>Best value · 24 mo</strong><em>€90/mo</em><small>€11.25 per session</small><a class="btn btn-primary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Best Value</a></div>'],
  ['<div class="option-row"><div><strong>Standard · 3 mo</strong><span>€115/mo · €9.58 per session</span></div><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Triple 3 mo</a></div>', '<div class="option-row"><strong>Standard · 3 mo</strong><em>€115/mo</em><small>€9.58 per session</small><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Standard</a></div>'],
  ['<div class="option-row"><div><strong>Intermediate · 12 mo</strong><span>€105/mo · €8.75 per session</span></div><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Triple 12 mo</a></div>', '<div class="option-row"><strong>Intermediate · 12 mo</strong><em>€105/mo</em><small>€8.75 per session</small><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Intermediate</a></div>'],
  ['<div class="option-row"><div><strong>Best value · 24 mo</strong><span>€100/mo · €8.33 per session</span></div><a class="btn btn-primary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Triple 24 mo</a></div>', '<div class="option-row"><strong>Best value · 24 mo</strong><em>€100/mo</em><small>€8.33 per session</small><a class="btn btn-primary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Best Value</a></div>'],
  ['<div class="option-row"><div><strong>Standard · 3 mo</strong><span>€125/mo · €7.81 per session</span></div><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Unlimited 3 mo</a></div>', '<div class="option-row"><strong>Standard · 3 mo</strong><em>€125/mo</em><small>€7.81 per session</small><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Standard</a></div>'],
  ['<div class="option-row"><div><strong>Intermediate · 12 mo</strong><span>€115/mo · €7.19 per session</span></div><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Unlimited 12 mo</a></div>', '<div class="option-row"><strong>Intermediate · 12 mo</strong><em>€115/mo</em><small>€7.19 per session</small><a class="btn btn-secondary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Intermediate</a></div>'],
  ['<div class="option-row"><div><strong>Best value · 24 mo</strong><span>€110/mo · €6.88 per session</span></div><a class="btn btn-primary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Unlimited 24 mo</a></div>', '<div class="option-row"><strong>Best value · 24 mo</strong><em>€110/mo</em><small>€6.88 per session</small><a class="btn btn-primary" href="https://push.gotgrib.nl/member/selfservice/registration/inschrijven?subscriptionId=8933" target="_blank" rel="noopener">Buy Best Value</a></div>']
];

for (const [from, to] of replacements) html = html.replace(from, to);

fs.writeFileSync(outputPath, html);
