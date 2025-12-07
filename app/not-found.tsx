import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-gradient">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
        </div>

        <p className="text-muted-foreground text-lg">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
