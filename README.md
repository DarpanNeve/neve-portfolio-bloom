# Darpan Neve - Portfolio

Personal portfolio website showcasing my work as a Full-Stack Software Engineer.

## Live Site

**URL**: [darpanneve.com](https://darpanneve.com)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Custom Canvas/WebGL particle effects

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or bun

### Installation

```sh
# Clone the repository
git clone https://github.com/DarpanNeve/neve-portfolio-bloom.git

# Navigate to the project directory
cd neve-portfolio-bloom

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## Project Structure

```
├── app/                  # Next.js App Router pages
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── ...          # Feature components
│   ├── hooks/           # Custom React hooks
│   ├── lib/             # Utility functions
│   └── index.css        # Global styles
├── public/              # Static assets
└── ...
```

## Features

- Interactive particle background with mouse interaction
- Dark/Light mode support
- GitHub contribution graph integration
- Responsive design (mobile-first)
- SEO optimized
- Performance optimized (60fps animations)

## Deployment

Build for production:

```sh
npm run build
```

## License

MIT
