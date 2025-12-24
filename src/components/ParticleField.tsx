'use client';

import { useEffect, useRef, useCallback, memo } from 'react';
import { useTheme } from 'next-themes';

interface Particle {
    x: number;
    y: number;
    baseX: number;
    baseY: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

interface ParticleFieldProps {
    className?: string;
}

const PARTICLE_CONFIG = {
    desktop: { count: 150, connectionDistance: 130, mouseRadius: 200 },
    tablet: { count: 100, connectionDistance: 110, mouseRadius: 160 },
    mobile: { count: 50, connectionDistance: 80, mouseRadius: 120 },
} as const;

type DeviceConfig = (typeof PARTICLE_CONFIG)[keyof typeof PARTICLE_CONFIG];

const COLORS = {
    light: {
        particles: ['hsla(224, 76%, 48%, 0.5)', 'hsla(235, 85%, 60%, 0.4)', 'hsla(262, 83%, 58%, 0.35)'],
        connections: 'hsla(224, 76%, 48%, ',
    },
    dark: {
        particles: ['hsla(217, 91%, 60%, 0.6)', 'hsla(262, 83%, 58%, 0.5)', 'hsla(328, 85%, 70%, 0.45)'],
        connections: 'hsla(217, 91%, 60%, ',
    },
} as const;

function getDeviceConfig(): DeviceConfig {
    if (typeof window === 'undefined') return PARTICLE_CONFIG.desktop;
    const width = window.innerWidth;
    if (width < 640) return PARTICLE_CONFIG.mobile;
    if (width < 1024) return PARTICLE_CONFIG.tablet;
    return PARTICLE_CONFIG.desktop;
}

function ParticleFieldComponent({ className = '' }: ParticleFieldProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const animationRef = useRef<number>(0);
    const mouseRef = useRef({ x: -9999, y: -9999, isInBounds: false });
    const configRef = useRef(getDeviceConfig());
    const dimensionsRef = useRef({ width: 0, height: 0 });
    const dprRef = useRef(1);
    const { resolvedTheme } = useTheme();

    const initParticles = useCallback((width: number, height: number) => {
        const config = configRef.current;
        const particles: Particle[] = [];
        const isDark = resolvedTheme === 'dark';
        const colors = isDark ? COLORS.dark.particles : COLORS.light.particles;

        for (let i = 0; i < config.count; i++) {
            const x = Math.random() * width;
            const y = Math.random() * height;
            particles.push({
                x,
                y,
                baseX: x,
                baseY: y,
                vx: 0,
                vy: 0,
                size: Math.random() * 2.5 + 1.5,
                color: colors[Math.floor(Math.random() * colors.length)],
            });
        }

        particlesRef.current = particles;
    }, [resolvedTheme]);

    const updateParticleColors = useCallback(() => {
        const isDark = resolvedTheme === 'dark';
        const colors = isDark ? COLORS.dark.particles : COLORS.light.particles;
        particlesRef.current.forEach((particle) => {
            particle.color = colors[Math.floor(Math.random() * colors.length)];
        });
    }, [resolvedTheme]);

    useEffect(() => {
        updateParticleColors();
    }, [resolvedTheme, updateParticleColors]);

    useEffect(() => {
        const container = containerRef.current;
        const canvas = canvasRef.current;
        if (!container || !canvas) return;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        dprRef.current = Math.min(window.devicePixelRatio || 1, 2);
        let isVisible = true;
        let rectCache = container.getBoundingClientRect();

        const resizeCanvas = () => {
            rectCache = container.getBoundingClientRect();
            const width = rectCache.width;
            const height = rectCache.height;
            const dpr = dprRef.current;
            dimensionsRef.current = { width, height };
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(dpr, dpr);
            configRef.current = getDeviceConfig();
            initParticles(width, height);
        };

        resizeCanvas();

        const updateMousePosition = (clientX: number, clientY: number) => {
            const x = clientX - rectCache.left;
            const y = clientY - rectCache.top;
            const { width, height } = dimensionsRef.current;
            const isInBounds = x >= 0 && x <= width && y >= 0 && y <= height;
            mouseRef.current = { x, y, isInBounds };
        };

        const handleMouseMove = (e: MouseEvent) => {
            updateMousePosition(e.clientX, e.clientY);
        };

        const handleTouchMove = (e: TouchEvent) => {
            if (e.touches.length > 0) {
                updateMousePosition(e.touches[0].clientX, e.touches[0].clientY);
            }
        };

        const handleTouchEnd = () => {
            mouseRef.current = { x: -9999, y: -9999, isInBounds: false };
        };

        const handleVisibilityChange = () => {
            isVisible = !document.hidden;
        };

        const handleScroll = () => {
            rectCache = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            isVisible = rectCache.top < viewportHeight && rectCache.bottom > 0 && !document.hidden;
        };

        let resizeTimeout: NodeJS.Timeout;
        const handleResize = () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resizeCanvas, 150);
        };

        window.addEventListener('resize', handleResize, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('touchmove', handleTouchMove, { passive: true });
        window.addEventListener('touchend', handleTouchEnd, { passive: true });
        window.addEventListener('scroll', handleScroll, { passive: true });
        document.addEventListener('visibilitychange', handleVisibilityChange, { passive: true });

        const animate = () => {
            animationRef.current = requestAnimationFrame(animate);

            if (!isVisible) return;

            const { width, height } = dimensionsRef.current;
            if (width === 0 || height === 0) return;

            ctx.clearRect(0, 0, width, height);

            const config = configRef.current;
            const mouse = mouseRef.current;
            const particles = particlesRef.current;
            const isDark = resolvedTheme === 'dark';
            const connectionColor = isDark ? COLORS.dark.connections : COLORS.light.connections;
            const maxVelocity = 4;

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (mouse.isInBounds) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const distSq = dx * dx + dy * dy;
                    const radiusSq = config.mouseRadius * config.mouseRadius;

                    if (distSq < radiusSq) {
                        const dist = Math.sqrt(distSq);
                        const force = (config.mouseRadius - dist) / config.mouseRadius;
                        const forceX = (dx / dist) * force * 1.8;
                        const forceY = (dy / dist) * force * 1.8;
                        p.vx -= forceX;
                        p.vy -= forceY;
                    }
                }

                p.vx += (p.baseX - p.x) * 0.03;
                p.vy += (p.baseY - p.y) * 0.03;

                p.vx *= 0.92;
                p.vy *= 0.92;

                if (p.vx > maxVelocity) p.vx = maxVelocity;
                if (p.vx < -maxVelocity) p.vx = -maxVelocity;
                if (p.vy > maxVelocity) p.vy = maxVelocity;
                if (p.vy < -maxVelocity) p.vy = -maxVelocity;

                p.x += p.vx;
                p.y += p.vy;

                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const cdx = p.x - p2.x;
                    const cdy = p.y - p2.y;
                    const cdistSq = cdx * cdx + cdy * cdy;
                    const connDistSq = config.connectionDistance * config.connectionDistance;

                    if (cdistSq < connDistSq) {
                        const cdist = Math.sqrt(cdistSq);
                        const opacity = (1 - cdist / config.connectionDistance) * 0.2;
                        ctx.beginPath();
                        ctx.strokeStyle = `${connectionColor}${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            for (const p of particles) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
            }
        };

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationRef.current);
            clearTimeout(resizeTimeout);
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleTouchEnd);
            window.removeEventListener('scroll', handleScroll);
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [initParticles, resolvedTheme]);

    return (
        <div
            ref={containerRef}
            className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
            aria-hidden="true"
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0"
            />
        </div>
    );
}

export const ParticleField = memo(ParticleFieldComponent);
