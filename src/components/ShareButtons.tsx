'use client';

import { useState } from 'react';
import { Share2, Twitter, Linkedin, Link2, Check } from 'lucide-react';

interface ShareButtonsProps {
    url?: string;
    title?: string;
    description?: string;
}

export function ShareButtons({
    url = 'https://darpanneve.com',
    title = 'Darpan Neve | Full-Stack Developer',
    description = 'Check out my portfolio - Full-Stack Software Engineer specializing in React, Node.js, Flutter'
}: ShareButtonsProps) {
    const [copied, setCopied] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDesc = encodeURIComponent(description);

    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedDesc}`,
        linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    };

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = url;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    const handleShare = (platform: keyof typeof shareLinks) => {
        window.open(shareLinks[platform], '_blank', 'width=600,height=400,noopener,noreferrer');
        setIsOpen(false);
    };

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground bg-secondary/50 hover:bg-secondary rounded-full transition-all duration-200"
                aria-label="Share this page"
                aria-expanded={isOpen}
            >
                <Share2 className="w-4 h-4" />
                <span className="hidden sm:inline">Share</span>
            </button>

            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 z-40"
                        onClick={() => setIsOpen(false)}
                        aria-hidden="true"
                    />
                    <div className="absolute right-0 mt-2 z-50 bg-card/95 backdrop-blur-xl border border-border/60 rounded-xl shadow-2xl p-2 min-w-[160px] animate-in fade-in slide-in-from-top-2 duration-200">
                        <button
                            onClick={() => handleShare('twitter')}
                            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
                        >
                            <Twitter className="w-4 h-4 text-[#1DA1F2]" />
                            Twitter
                        </button>
                        <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
                        >
                            <Linkedin className="w-4 h-4 text-[#0A66C2]" />
                            LinkedIn
                        </button>
                        <div className="h-px bg-border/50 my-1" />
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center gap-3 w-full px-3 py-2.5 text-sm text-foreground hover:bg-secondary rounded-lg transition-colors"
                        >
                            {copied ? (
                                <>
                                    <Check className="w-4 h-4 text-green-500" />
                                    Copied!
                                </>
                            ) : (
                                <>
                                    <Link2 className="w-4 h-4" />
                                    Copy Link
                                </>
                            )}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
