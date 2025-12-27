'use client';

import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

interface Gig {
    title: string;
    category: string;
    color: string;
    icon: string;
    tech: string[];
    link?: string;
    position: { x: number; y: number };
}

const FEATURED_GIGS: Gig[] = [
    {
        title: 'Routine Path',
        category: 'Habit Tracker',
        color: 'from-violet-500 to-purple-600',
        icon: '📈',
        tech: ['Flutter', 'Drift', 'Voice AI'],
        link: 'https://darpanneve.com/routinepath',
        position: { x: 8, y: 72 }
    },
    {
        title: 'LockBloom',
        category: 'Security App',
        color: 'from-slate-700 to-indigo-600',
        icon: '🔐',
        tech: ['Flutter', 'AES-256', 'Biometrics'],
        link: 'https://play.google.com/store/apps/details?id=com.dn.lockbloom',
        position: { x: 28, y: 82 }
    },
    {
        title: 'Assesme',
        category: 'SaaS Platform',
        color: 'from-emerald-500 to-blue-600',
        icon: '📊',
        tech: ['React', 'FastAPI', 'MongoDB'],
        link: 'https://assesme.com',
        position: { x: 50, y: 88 }
    },
    {
        title: 'Soil Master',
        category: 'IoT App',
        color: 'from-green-400 to-emerald-600',
        icon: '🌱',
        tech: ['Flutter', 'AWS IoT', 'MQTT'],
        link: 'https://play.google.com/store/apps/details?id=com.towardimagination.soilmaster',
        position: { x: 72, y: 82 }
    },
    {
        title: 'Vastav Intellect',
        category: 'Corporate Web',
        color: 'from-cyan-400 to-blue-600',
        icon: '💼',
        tech: ['React', 'Node.js', 'MongoDB'],
        link: 'https://vastavintellect.com/',
        position: { x: 92, y: 72 }
    },
];

export function HeroGigs() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block overflow-hidden">
            {FEATURED_GIGS.map((gig, index) => {
                const isHovered = hoveredIndex === index;
                const isOtherHovered = hoveredIndex !== null && hoveredIndex !== index;
                const isLeftSide = gig.position.x < 50;

                return (
                    <div
                        key={gig.title}
                        className="absolute pointer-events-auto"
                        style={{
                            left: `${gig.position.x}%`,
                            top: `${gig.position.y}%`,
                            transform: 'translate(-50%, -50%)',
                            zIndex: isHovered ? 30 : 20,
                        }}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                    >
                        <a
                            href={gig.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div
                                className={`
                  relative transition-all duration-300 ease-out
                  ${isHovered ? 'scale-110' : isOtherHovered ? 'scale-95 opacity-40' : 'scale-100'}
                `}
                            >
                                <div
                                    className={`
                    w-12 h-12 xl:w-14 xl:h-14 rounded-full 
                    bg-gradient-to-br ${gig.color}
                    flex items-center justify-center
                    shadow-lg border-2 border-white/20
                    transition-all duration-300 cursor-pointer
                    ${isHovered ? 'shadow-2xl shadow-primary/40 border-white/50 ring-4 ring-primary/20' : ''}
                  `}
                                >
                                    <span className="text-lg xl:text-xl select-none">{gig.icon}</span>
                                </div>

                                <div
                                    className={`
                    absolute top-1/2 -translate-y-1/2
                    ${isLeftSide ? 'left-full ml-3' : 'right-full mr-3'}
                    transition-all duration-300 origin-center
                    ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
                  `}
                                    style={{
                                        transform: `translateY(-50%) ${isHovered ? 'translateX(0)' : isLeftSide ? 'translateX(-10px)' : 'translateX(10px)'}`,
                                    }}
                                >
                                    <div className="bg-card/95 backdrop-blur-xl rounded-xl p-3 min-w-[160px] border border-border/60 shadow-2xl">
                                        <div className="flex items-start gap-2 mb-2">
                                            <div>
                                                <p className="text-sm font-bold text-foreground leading-tight">{gig.title}</p>
                                                <p className="text-[11px] text-muted-foreground">{gig.category}</p>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {gig.tech.slice(0, 2).map((t) => (
                                                <span
                                                    key={t}
                                                    className="text-[9px] px-1.5 py-0.5 bg-primary/10 text-primary rounded font-medium"
                                                >
                                                    {t}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-1 text-[10px] text-primary font-medium">
                                            <ExternalLink className="w-2.5 h-2.5" />
                                            <span>View Project</span>
                                        </div>

                                        <div
                                            className={`absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-card/95 border border-border/60 rotate-45
                        ${isLeftSide ? '-left-1 border-r-0 border-t-0' : '-right-1 border-l-0 border-b-0'}
                      `}
                                        />
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}
