'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error('Application error:', error);
    }, [error]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold text-foreground">Oops!</h1>
                    <h2 className="text-xl font-semibold text-muted-foreground">
                        Something went wrong
                    </h2>
                </div>

                <p className="text-muted-foreground">
                    We encountered an unexpected error. Please try again or contact support if the problem persists.
                </p>

                {error.digest && (
                    <p className="text-sm text-muted-foreground font-mono">
                        Error ID: {error.digest}
                    </p>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button
                        onClick={reset}
                        size="lg"
                        className="bg-primary hover:bg-primary/90"
                    >
                        Try Again
                    </Button>
                    <Button
                        onClick={() => window.location.href = '/'}
                        variant="outline"
                        size="lg"
                    >
                        Go Home
                    </Button>
                </div>
            </div>
        </div>
    );
}
