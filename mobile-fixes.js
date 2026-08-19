const fs = require('fs');
const path = require('path');

const outputPath = path.join(__dirname, 'public', 'index.html');
let html = fs.readFileSync(outputPath, 'utf8');

if (!html.includes('mobile-accordion-v8')) {
  html = html.replace('</style>', `    /* mobile-accordion-v8 */
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
    }
  </style>`);
}

html = html.replace(
  `<details class="schedule-tab"><summary><strong>Weekend</strong><span>09:00 Saturday and Sunday</span><em>2</em></summary><div class="tab-panel"><div class="day-session"><time>Sat 09:00</time><div><strong>Functional Fitness</strong><span>12 pers · Vivian</span></div></div><div class="day-session"><time>Sun 09:00</time><div><strong>Functional Fitness</strong><span>12 pers</span></div></div></div></details>`,
  `<details class="schedule-tab"><summary><strong>Sat</strong><span>09:00 Functional Fitness</span><em>1</em></summary><div class="tab-panel"><div class="day-session"><time>09:00</time><div><strong>Functional Fitness</strong><span>12 pers · Vivian</span></div></div></div></details>\n          <details class="schedule-tab"><summary><strong>Sun</strong><span>09:00 Functional Fitness</span><em>1</em></summary><div class="tab-panel"><div class="day-session"><time>09:00</time><div><strong>Functional Fitness</strong><span>12 pers</span></div></div></div></details>`
);

fs.writeFileSync(outputPath, html);
