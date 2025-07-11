
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { Button } from './ui/button';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="relative h-10 w-10 rounded-full border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-110 glow-effect"
    >
      <Sun className={`h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-5 w-5 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};
