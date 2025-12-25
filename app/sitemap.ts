import { MetadataRoute } from 'next';

const BASE_URL = 'https://darpanneve.com';

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date();

    const routes = [
        {
            url: BASE_URL,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${BASE_URL}/#about`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/#projects`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/#skills`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${BASE_URL}/#contact`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
    ];

    return routes;
}
