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
