import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Darpan Neve - Full-Stack Software Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '80px',
                    position: 'relative',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'radial-gradient(circle at 30% 50%, rgba(30, 64, 175, 0.3), transparent 50%)',
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        zIndex: 10,
                    }}
                >
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 900,
                            background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 100%)',
                            backgroundClip: 'text',
                            color: 'transparent',
                            marginBottom: 20,
                        }}
                    >
                        Darpan Neve
                    </div>

                    <div
                        style={{
                            fontSize: 36,
                            color: '#94a3b8',
                            fontWeight: 600,
                            marginBottom: 40,
                        }}
                    >
                        Full-Stack Software Engineer
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            gap: 30,
                            fontSize: 24,
                            color: '#cbd5e1',
                        }}
                    >
                        <span>React</span>
                        <span>•</span>
                        <span>Node.js</span>
                        <span>•</span>
                        <span>Flutter</span>
                        <span>•</span>
                        <span>Python</span>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
