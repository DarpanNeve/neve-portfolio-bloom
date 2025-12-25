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
            {
                '@type': 'FAQPage',
                '@id': `${SITE_CONFIG.url}/#faq`,
                mainEntity: [
                    {
                        '@type': 'Question',
                        name: 'What services does Darpan Neve offer?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'I offer full-stack web development, mobile app development with Flutter, cloud architecture consulting, API development, and DevOps services. I specialize in React, Node.js, Python, and scalable system design.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Is Darpan Neve available for freelance projects?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes, I am available for freelance projects, contract work, and full-time opportunities. I work with clients worldwide and can collaborate remotely.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'What technologies does Darpan Neve work with?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'I work with React, Next.js, Node.js, Python, Flutter, TypeScript, AWS, Docker, MongoDB, PostgreSQL, and modern DevOps tools. I focus on building scalable, production-grade applications.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'How can I contact Darpan Neve for a project?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'You can reach me through the contact form on this website, via email at darpanneve3@gmail.com, or connect with me on LinkedIn. I typically respond within 24 hours.',
                        },
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
            { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
        ],
        shortcut: '/favicon.ico',
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
