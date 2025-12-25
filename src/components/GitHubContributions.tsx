'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface GitHubContributionsProps {
    username: string;
}

export function GitHubContributions({ username }: GitHubContributionsProps) {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="w-full h-32 bg-secondary/30 rounded-2xl animate-pulse" />
        );
    }

    const isDark = resolvedTheme === 'dark';
    const chartColor = isDark ? '22c55e' : '16a34a';
    const chartUrl = `https://ghchart.rshah.org/${chartColor}/${username}`;

    return (
        <div className="w-full">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-500/30 via-emerald-500/30 to-teal-500/30 rounded-2xl blur-lg opacity-50 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="relative bg-card/90 backdrop-blur-md border border-border/40 rounded-2xl p-5 md:p-6 overflow-hidden hover:border-green-500/40 transition-all duration-300">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                                <Github className="w-4 h-4 text-green-500" />
                            </div>
                            <span className="text-sm font-semibold text-foreground">
                                GitHub Activity
                            </span>
                        </div>
                        <a
                            href={`https://github.com/${username}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-green-500 transition-colors px-3 py-1.5 rounded-full bg-secondary/50 hover:bg-green-500/10"
                        >
                            <span>@{username}</span>
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    <div className="overflow-x-auto scrollbar-thin pb-2">
                        <img
                            src={chartUrl}
                            alt={`${username}'s GitHub contribution graph`}
                            className="w-full min-w-[650px] h-auto opacity-90"
                            loading="lazy"
                        />
                    </div>

                    <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/30">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[10px] text-muted-foreground mr-1">Less</span>
                            <div className="w-2.5 h-2.5 rounded-sm bg-green-500/15" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-green-500/35" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-green-500/55" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-green-500/75" />
                            <div className="w-2.5 h-2.5 rounded-sm bg-green-500" />
                            <span className="text-[10px] text-muted-foreground ml-1">More</span>
                        </div>

                        <p className="text-[10px] text-muted-foreground">
                            Last 12 months
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
