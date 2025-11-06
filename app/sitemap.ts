import { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://learn.icanpitch.com'; // Update this to your subdomain

  // Static pages
  const routes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/learn/`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ];

  // Get all calculator pages from /learn directory
  const learnDir = path.join(process.cwd(), 'learn');
  try {
    const learnFolders = fs.readdirSync(learnDir).filter((file: string): boolean => {
      const fullPath = path.join(learnDir, file);
      return fs.statSync(fullPath).isDirectory();
    });

    learnFolders.forEach((folder: string): void => {
      const metadataPath = path.join(learnDir, folder, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
        routes.push({
          url: `${baseUrl}/learn/${folder}/`,
          lastModified: metadata.generatedAt ? new Date(metadata.generatedAt) : new Date(),
          changeFrequency: 'monthly',
          priority: 0.8,
        });
      }
    });
  } catch (error) {
    console.error('Error reading learn directory:', error);
  }

  // Get all blog/SEO pages from /content/blog directory
  const blogDir = path.join(process.cwd(), 'content', 'blog');
  try {
    const blogFolders = fs.readdirSync(blogDir).filter((file: string): boolean => {
      const fullPath = path.join(blogDir, file);
      return fs.statSync(fullPath).isDirectory();
    });

    blogFolders.forEach((folder: string): void => {
      const metadataPath = path.join(blogDir, folder, 'metadata.json');
      if (fs.existsSync(metadataPath)) {
        const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
        routes.push({
          url: `${baseUrl}/blog/${folder}/`,
          lastModified: metadata.date ? new Date(metadata.date) : new Date(),
          changeFrequency: metadata.pageType === 'seo' ? 'monthly' : 'weekly',
          priority: metadata.pageType === 'seo' ? 0.9 : 0.7,
        });
      }
    });
  } catch (error) {
    console.error('Error reading blog directory:', error);
  }

  return routes;
}
