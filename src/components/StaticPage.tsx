import { Link } from 'react-router-dom';
import { Leaf, ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';
import { CartDrawer } from '@/components/CartDrawer';
import { SiteFooter } from '@/components/SiteFooter';
type StaticPageProps = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};
export function StaticPage({ title, subtitle, children }: StaticPageProps) {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" role="navigation">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <h1 className="text-2xl font-bold font-display text-primary">Verdure</h1>
          </Link>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost"><Link to="/"><ChevronLeft className="h-4 w-4 mr-2" /> Continue Shopping</Link></Button>
            <ThemeToggle className="relative top-0 right-0" />
            <CartDrawer />
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold font-display text-balance">{title}</h1>
          {subtitle && <p className="mt-3 text-lg text-muted-foreground">{subtitle}</p>}
          <div className="mt-8 space-y-6 text-base leading-relaxed text-foreground/90 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:font-display [&_h2]:text-foreground [&_h2]:mt-8 [&_h2]:mb-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_a]:text-primary [&_a]:underline [&_a]:underline-offset-4">
            {children}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
