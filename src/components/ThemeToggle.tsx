'use client';
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="h-10 w-[140px] bg-secondary/50 rounded-full animate-pulse" />
    );
  }

  const themes = [
    { value: 'light', icon: Sun, label: 'Light' },
    { value: 'system', icon: Monitor, label: 'System' },
    { value: 'dark', icon: Moon, label: 'Dark' },
  ];

  const activeIndex = themes.findIndex(t => t.value === theme);

  return (
    <div className="relative inline-flex items-center bg-secondary/50 backdrop-blur-sm rounded-full p-1 border border-border/50">
      {/* Sliding background indicator */}
      <div
        className="absolute top-1 bottom-1 w-[44px] bg-primary rounded-full transition-all duration-300 ease-out shadow-lg"
        style={{
          left: `${4 + activeIndex * 44}px`,
        }}
      />

      {/* Theme buttons */}
      {themes.map(({ value, icon: Icon, label }) => (
        <button
          key={value}
          onClick={() => setTheme(value)}
          className={`relative z-10 flex items-center justify-center h-8 w-11 rounded-full transition-all duration-300 ${theme === value
              ? 'text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
            }`}
          aria-label={`Switch to ${label} theme`}
          title={label}
        >
          <Icon className="h-4 w-4" />
        </button>
      ))}
    </div>
  );
}