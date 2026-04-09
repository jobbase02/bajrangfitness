import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL; 

  const pages = [
    { url: '', priority: '1.0' },
    { url: '/about', priority: '0.8' },
    { url: '/inquire', priority: '0.8' },
    { url: '/gallery', priority: '0.8' },
    { url: '/rules', priority: '0.8' },
    { url: '/privacy-policy', priority: '0.5' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages.map(page => `
        <url>
          <loc>${baseUrl}${page.url}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <priority>${page.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}