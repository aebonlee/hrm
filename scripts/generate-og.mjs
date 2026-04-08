import sharp from 'sharp';

const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E3A8A"/>
      <stop offset="50%" style="stop-color:#1E40AF"/>
      <stop offset="100%" style="stop-color:#2563EB"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative circles -->
  <circle cx="950" cy="120" r="180" fill="rgba(255,255,255,0.05)"/>
  <circle cx="1050" cy="250" r="120" fill="rgba(255,255,255,0.04)"/>
  <circle cx="150" cy="500" r="150" fill="rgba(255,255,255,0.03)"/>

  <!-- Accent bar -->
  <rect x="80" y="140" width="6" height="80" rx="3" fill="#60A5FA"/>

  <!-- Title -->
  <text x="110" y="180" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="72" fill="#FFFFFF" letter-spacing="-1">DreamIT HRM</text>

  <!-- Subtitle -->
  <text x="110" y="250" font-family="Arial, sans-serif" font-weight="700" font-size="42" fill="#93C5FD">인적자원관리(HRM)</text>

  <!-- Description -->
  <text x="110" y="310" font-family="Arial, sans-serif" font-weight="400" font-size="22" fill="rgba(255,255,255,0.7)">Human Resource Management Learning Platform</text>

  <!-- Topic badges -->
  <!-- Row 1 -->
  <rect x="80" y="370" width="120" height="42" rx="21" fill="#2563EB"/>
  <text x="140" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">HRM 개론</text>

  <rect x="220" y="370" width="130" height="42" rx="21" fill="#059669"/>
  <text x="285" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">채용과 선발</text>

  <rect x="370" y="370" width="130" height="42" rx="21" fill="#8B5CF6"/>
  <text x="435" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">교육과 개발</text>

  <rect x="520" y="370" width="110" height="42" rx="21" fill="#D97706"/>
  <text x="575" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">성과관리</text>

  <rect x="650" y="370" width="110" height="42" rx="21" fill="#E11D48"/>
  <text x="705" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">보상관리</text>

  <rect x="780" y="370" width="110" height="42" rx="21" fill="#0891B2"/>
  <text x="835" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">노사관계</text>

  <rect x="910" y="370" width="110" height="42" rx="21" fill="#7C3AED"/>
  <text x="965" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">조직문화</text>

  <rect x="1040" y="370" width="120" height="42" rx="21" fill="#F59E0B"/>
  <text x="1100" y="397" font-family="Arial, sans-serif" font-weight="600" font-size="16" fill="#FFFFFF" text-anchor="middle">HR 트렌드</text>

  <!-- Bottom bar -->
  <rect x="0" y="610" width="1200" height="20" fill="#1D4ED8"/>

  <!-- Bottom text -->
  <text x="80" y="560" font-family="Arial, sans-serif" font-weight="400" font-size="18" fill="rgba(255,255,255,0.5)">hrm.dreamitbiz.com</text>
  <text x="1120" y="560" font-family="Arial, sans-serif" font-weight="600" font-size="18" fill="rgba(255,255,255,0.5)" text-anchor="end">DreamIT HRM</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile('public/og-image.png');

console.log('og-image.png generated (1200x630)');
