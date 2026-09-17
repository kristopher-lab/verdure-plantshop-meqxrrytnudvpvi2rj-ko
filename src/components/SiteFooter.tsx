import { Link } from 'react-router-dom';
import { Leaf, Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
const shopLinks = [
  { label: 'Shop All Plants', to: '/' },
  { label: 'Your Cart', to: '/cart' },
];
const companyLinks = [
  { label: 'About Us', to: '/about' },
  { label: 'Contact Us', to: '/contact' },
  { label: 'FAQ', to: '/faq' },
];
const supportLinks = [
  { label: 'Shipping & Returns', to: '/shipping-returns' },
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
];
export function SiteFooter() {
  return (
    <footer className="border-t bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <Leaf className="h-7 w-7 text-primary" />
              <span className="text-xl font-bold font-display text-primary">Verdure</span>
            </Link>
            <p className="mt-3 text-sm text-muted-foreground max-w-xs">
              Premium houseplants and accessories, delivered with care to help you build your own green sanctuary.
            </p>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="Verdure on Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Verdure on Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Verdure on Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground">Shop</h3>
            <ul className="mt-3 space-y-2">
              {shopLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground">Company</h3>
            <ul className="mt-3 space-y-2">
              {companyLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide text-foreground">Support</h3>
            <ul className="mt-3 space-y-2">
              {supportLinks.map(link => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm text-muted-foreground hover:text-primary transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" /> hello@verdureplants.example
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" /> (555) 010-7333
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0" /> Toronto, ON
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Verdure. Built with ❤️ at Cloudflare.</p>
          <div className="flex items-center gap-4">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
