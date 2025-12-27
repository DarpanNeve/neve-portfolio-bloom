import { Metadata } from 'next';

export const SITE_CONFIG = {
    name: 'Darpan Neve',
    fullName: 'Darpan Neve — Full-Stack Software Engineer',
    title: 'Darpan Neve | Software Engineer & System Architect',
    shortTitle: 'Darpan Neve - Engineer',
    description:
        'Darpan Neve is a Full-Stack Software Engineer specializing in high-performance web architecture, distributed systems, and modern DevOps practices. Expert in React, Node.js, Python, and Cloud Infrastructure.',
    url: 'https://darpanneve.com',
    email: 'darpanneve3@gmail.com',
    location: 'India',
    github: 'https://github.com/DarpanNeve',
    linkedin: 'https://www.linkedin.com/in/darpanneve/',
    keywords: [
        'Darpan Neve',
        'Software Engineer',
        'Full Stack Developer',
        'React Developer',
        'Node.js Developer',
        'Flutter Developer',
        'System Architect',
        'Web Developer',
        'Mobile App Developer',
        'Scalable Architecture',
        'Distributed Systems',
        'Cloud Infrastructure',
        'DevOps Engineering',
        'TypeScript',
        'Next.js',
        'AWS',
        'Python',
        'Docker',
        'Kubernetes',
        'Database Optimization',
        'API Design',
        'Frontend Engineer',
        'Backend Engineer',
        'Remote Software Engineer',
        'Mumbai',
        'India',
    ],
    skills: [
        'React',
        'Next.js',
        'Node.js',
        'Python',
        'Flutter',
        'TypeScript',
        'System Design',
        'AWS',
        'Docker',
        'Kubernetes',
        'PostgreSQL',
        'MongoDB',
        'Redis',
        'GraphQL',
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
                jobTitle: 'Software Engineer',
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
                    name: 'Available for Hire',
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
                name: `${SITE_CONFIG.name} - Software Engineering Services`,
                url: SITE_CONFIG.url,
                description:
                    'Expert software engineering services including full-stack web development, mobile application architecture, and cloud infrastructure optimization.',
                provider: {
                    '@id': `${SITE_CONFIG.url}/#person`,
                },
                areaServed: 'Worldwide',
                availableLanguage: ['English', 'Hindi'],
                serviceType: [
                    'Full-Stack Development',
                    'Mobile App Development',
                    'System Architecture',
                    'Cloud Infrastructure',
                    'Performance Optimization',
                    'API Development',
                    'Database Design',
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
                        name: 'What software engineering services do you provide?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'I provide end-to-end software engineering services, including full-stack web development (React, Node.js), cross-platform mobile app development (Flutter), and cloud infrastructure design (AWS, Docker).',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Are you available for full-time software engineering roles?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes, I am currently open to discussing full-time software engineering opportunities where I can contribute to scalable, high-impact projects.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'What is your tech stack expertise?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'My core expertise lies in the JavaScript/TypeScript ecosystem (React, Next.js, Node.js), Python (FastAPI, Django), and Dart (Flutter). I also have extensive experience with cloud technologies like AWS, Docker, and Kubernetes.',
                        },
                    },
                    {
                        '@type': 'Question',
                        name: 'Do you work with remote teams?',
                        acceptedAnswer: {
                            '@type': 'Answer',
                            text: 'Yes, I have experience working with remote teams worldwide and am comfortable with asynchronous communication and agile workflows.',
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
                alt: `${SITE_CONFIG.name} - Software Engineer`,
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
