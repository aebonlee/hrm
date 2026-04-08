import sharp from 'sharp';

const faviconSvg = `
<svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E40AF"/>
      <stop offset="100%" style="stop-color:#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <text x="256" y="220" font-family="Arial Black, Arial, sans-serif" font-weight="900" font-size="140" fill="#FFFFFF" text-anchor="middle">HR</text>
  <text x="256" y="370" font-family="Arial, sans-serif" font-weight="700" font-size="100" fill="#93C5FD" text-anchor="middle">M</text>
</svg>`;

const buf = Buffer.from(faviconSvg);

await Promise.all([
  sharp(buf).resize(512, 512).png().toFile('public/favicon-512.png'),
  sharp(buf).resize(192, 192).png().toFile('public/favicon-192.png'),
  sharp(buf).resize(180, 180).png().toFile('public/apple-touch-icon.png'),
  sharp(buf).resize(32, 32).png().toFile('public/favicon-32.png'),
]);

// SVG favicon
const svgFavicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1E40AF"/>
      <stop offset="100%" style="stop-color:#3B82F6"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="96" fill="url(#bg)"/>
  <text x="256" y="220" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="140" fill="#FFF" text-anchor="middle">HR</text>
  <text x="256" y="370" font-family="Arial,sans-serif" font-weight="700" font-size="100" fill="#93C5FD" text-anchor="middle">M</text>
</svg>`;

import { writeFileSync } from 'fs';
writeFileSync('public/favicon.svg', svgFavicon);

console.log('All favicons generated');
