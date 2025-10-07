import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Button } from './ui/button';

const socialLinks = [
  { icon: Github, href: '#', 'aria-label': 'GitHub' },
  { icon: Linkedin, href: '#', 'aria-label': 'LinkedIn' },
  { icon: Twitter, href: '#', 'aria-label': 'X/Twitter' },
  { icon: Mail, href: 'mailto:example@example.com', 'aria-label': 'Email' },
];

export default function Footer() {
  return (
    <footer className="w-full py-6 mt-24 md:mt-32 border-t border-border/40">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Aetherfolio. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link, index) => (
            <Button key={index} variant="ghost" size="icon" asChild>
              <a href={link.href} aria-label={link['aria-label']}>
                <link.icon className="h-5 w-5" />
              </a>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
