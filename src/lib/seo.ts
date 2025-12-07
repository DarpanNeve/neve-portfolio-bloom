import { Metadata } from 'next';

export const SITE_CONFIG = {
    name: 'Darpan Neve',
    fullName: 'Darpan Neve — Full-Stack Software Engineer',
    title: 'Darpan Neve | Full-Stack Developer & Software Engineer',
    shortTitle: 'Darpan Neve - Developer',
    description:
        'Darpan Neve is a Full-Stack Software Engineer specializing in scalable web and mobile applications. Expert in React, Node.js, Python, Flutter, cloud architecture, and modern DevOps. Available for hire and freelance projects.',
    url: 'https://darpanneve.com',
    email: 'darpanneve3@gmail.com',
    location: 'India',
    github: 'https://github.com/DarpanNeve',
    linkedin: 'https://www.linkedin.com/in/darpanneve/',
    keywords: [
        'Darpan Neve',
        'Full Stack Developer',
        'Software Engineer',
        'React Developer',
        'Node.js Developer',
        'Python Developer',
        'Flutter Developer',
        'Mobile App Developer',
        'Web Developer',
        'Cloud Architect',
        'DevOps Engineer',
        'Hire Developer',
        'Freelance Developer',
        'India',
        'Mumbai',
        'TypeScript',
        'JavaScript',
        'AWS',
        'Firebase',
        'MongoDB',
        'PostgreSQL',
        'Docker',
        'Kubernetes',
        'Microservices',
        'API Development',
        'System Design',
        'Scalable Applications',
    ],
    skills: [
        'React',
        'Next.js',
        'Node.js',
        'Python',
        'Flutter',
        'TypeScript',
        'JavaScript',
        'AWS',
        'Docker',
        'MongoDB',
        'PostgreSQL',
    ],
    openGraph: {
        image: '/og-image.png',
        width: 1200,
        height: 630,
    },
};

export function generateStructuredData() {
    return {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'Person',
                '@id': `${SITE_CONFIG.url}/#person`,
                name: SITE_CONFIG.name,
                url: SITE_CONFIG.url,
                email: SITE_CONFIG.email,
                jobTitle: 'Full-Stack Software Engineer',
                description: SITE_CONFIG.description,
                address: {
                    '@type': 'PostalAddress',
                    addressCountry: 'IN',
                    addressRegion: SITE_CONFIG.location,
                },
                sameAs: [SITE_CONFIG.linkedin, SITE_CONFIG.github],
                knowsAbout: SITE_CONFIG.skills,
                worksFor: {
                    '@type': 'Organization',
                    name: 'Independent Contractor',
                },
                alumniOf: {
                    '@type': 'EducationalOrganization',
                    name: 'Pimpri Chinchwad College of Engineering',
                },
            },
            {
                '@type': 'WebSite',
                '@id': `${SITE_CONFIG.url}/#website`,
                url: SITE_CONFIG.url,
                name: SITE_CONFIG.fullName,
                description: SITE_CONFIG.description,
                publisher: {
                    '@id': `${SITE_CONFIG.url}/#person`,
                },
                inLanguage: 'en-US',
            },
            {
                '@type': 'WebPage',
                '@id': `${SITE_CONFIG.url}/#webpage`,
                url: SITE_CONFIG.url,
                name: SITE_CONFIG.title,
                isPartOf: {
                    '@id': `${SITE_CONFIG.url}/#website`,
                },
                about: {
                    '@id': `${SITE_CONFIG.url}/#person`,
                },
                description: SITE_CONFIG.description,
                inLanguage: 'en-US',
            },
            {
                '@type': 'ProfessionalService',
                '@id': `${SITE_CONFIG.url}/#service`,
                name: `${SITE_CONFIG.name} - Software Development Services`,
                url: SITE_CONFIG.url,
                description:
                    'Professional software development services including full-stack web development, mobile app development, cloud architecture, and DevOps consulting.',
                provider: {
                    '@id': `${SITE_CONFIG.url}/#person`,
                },
                areaServed: 'Worldwide',
                availableLanguage: ['English', 'Hindi'],
                priceRange: '$$',
                serviceType: [
                    'Web Development',
                    'Mobile App Development',
                    'Cloud Architecture',
                    'DevOps Consulting',
                    'API Development',
                    'System Design',
                ],
            },
            {
                '@type': 'BreadcrumbList',
                '@id': `${SITE_CONFIG.url}/#breadcrumb`,
                itemListElement: [
                    {
                        '@type': 'ListItem',
                        position: 1,
                        name: 'Home',
                        item: SITE_CONFIG.url,
                    },
                ],
            },
        ],
    };
}

export const sharedMetadata: Metadata = {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
        default: SITE_CONFIG.title,
        template: `%s | ${SITE_CONFIG.shortTitle}`,
    },
    description: SITE_CONFIG.description,
    keywords: SITE_CONFIG.keywords,
    authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
    creator: SITE_CONFIG.name,
    publisher: SITE_CONFIG.name,
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: false,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: SITE_CONFIG.url,
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: SITE_CONFIG.url,
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        siteName: SITE_CONFIG.fullName,
        images: [
            {
                url: SITE_CONFIG.openGraph.image,
                width: SITE_CONFIG.openGraph.width,
                height: SITE_CONFIG.openGraph.height,
                alt: `${SITE_CONFIG.name} - Full-Stack Software Engineer`,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: SITE_CONFIG.title,
        description: SITE_CONFIG.description,
        images: [SITE_CONFIG.openGraph.image],
        creator: '@darpanneve',
        site: '@darpanneve',
    },
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon.svg', type: 'image/svg+xml' },
        ],
        apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
        other: [
            {
                rel: 'mask-icon',
                url: '/icon.svg',
            },
        ],
    },
    manifest: '/site.webmanifest',
    verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    },
    category: 'technology',
    other: {
        'mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'black-translucent',
    },
};
