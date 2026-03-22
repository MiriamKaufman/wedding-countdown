import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic'; // Ensure the route is never cached by Next.js

export async function GET(req: NextRequest) {
  const targetDate = new Date('2026-06-11T18:00:00+03:00');
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  let message = "";
  let isPast = false;

  if (diff <= 0) {
    message = "האירוע הגיע!";
    isPast = true;
  } else {
    // Time calculations
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    message = `${days} ימים : ${hours} שעות : ${minutes} דקות`;
  }

  const width = 650;
  const height = 200;
  
  // Colors for elegant design
  const backgroundColor = "#f9f9f9"; 
  const borderColor = "#d4af37"; // Gold border
  const textColorPrimary = "#333333"; // Dark gray
  const textColorDecor = "#d4af37"; // Gold for accents

  // Consistent SVG template with no whitespace issues
  const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <style>
      .text { font-family: Arial, Helvetica, sans-serif; text-anchor: middle; dominant-baseline: middle; }
      .title { font-size: 32px; font-weight: bold; fill: ${textColorDecor}; }
      .subtitle { font-size: 20px; font-weight: normal; fill: #555555; }
      .date { font-size: 18px; font-weight: bold; fill: #555555; }
      .countdown { font-size: 36px; font-weight: bold; fill: ${textColorPrimary}; letter-spacing: 1px; direction: rtl; unicode-bidi: embed; }
      .past-event { font-size: 40px; font-weight: bold; fill: ${textColorDecor}; direction: rtl; }
    </style>
  </defs>

  <!-- Background with rounded corners -->
  <rect x="5" y="5" width="${width - 10}" height="${height - 10}" rx="15" ry="15" fill="${backgroundColor}" stroke="${borderColor}" stroke-width="2" />

  <!-- Content Group -->
  <g transform="translate(${width / 2}, ${height / 2})">
    
    <!-- Top Section: Names -->
    <text x="0" y="-55" class="text title">שמוליק &amp; מירי</text>
    
    <!-- Middle Section: Hebrew Date -->
    <text x="0" y="-15" class="text subtitle">חתונה בכו סיון</text>
    
    <!-- English Date -->
    <text x="0" y="10" class="text date">11.06.26</text>
    
    <!-- Divider Line -->
    <line x1="-100" y1="25" x2="100" y2="25" stroke="${borderColor}" stroke-width="1" opacity="0.5" />

    <!-- Bottom Section: Countdown -->
    ${!isPast 
      ? `<text x="0" y="65" class="text countdown">${message}</text>`
      : `<text x="0" y="60" class="text past-event">${message}</text>`
    }
  </g>
</svg>`;

  return new NextResponse(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0',
      'Pragma': 'no-cache',
      'Expires': '0',
    },
  });
}
