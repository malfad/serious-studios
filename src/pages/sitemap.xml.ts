import { getCollection } from 'astro:content';

const SITE_URL = 'https://malfad.github.io/serious-studios';

export async function GET() {
  const posts = await getCollection('blog');

  const staticRoutes = [
    { url: `${SITE_URL}/`, priority: '1.0', changefreq: 'weekly' },
    { url: `${SITE_URL}/work/`, priority: '0.9', changefreq: 'monthly' },
    { url: `${SITE_URL}/blog/`, priority: '0.9', changefreq: 'weekly' },
    { url: `${SITE_URL}/about/`, priority: '0.8', changefreq: 'monthly' },
    { url: `${SITE_URL}/contact/`, priority: '0.7', changefreq: 'yearly' },
  ];

  const blogRoutes = posts.map(post => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: post.data.date.toISOString().split('T')[0],
  }));

  const allRoutes = [...staticRoutes, ...blogRoutes];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(r => `  <url>
    <loc>${r.url}</loc>
    ${r.lastmod ? `<lastmod>${r.lastmod}</lastmod>` : ''}
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
