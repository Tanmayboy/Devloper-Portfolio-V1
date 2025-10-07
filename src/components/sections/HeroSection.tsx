import { Button } from '@/components/ui/button';
import ThreeCanvas from '@/components/ThreeCanvas';
import { ArrowDown } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
      <ThreeCanvas />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline bg-gradient-to-r from-foreground to-muted-foreground text-transparent bg-clip-text">
            Alex Doe
          </h1>
          <p className="mt-4 text-lg md:text-xl text-primary font-headline">
            Full Stack Developer
          </p>
          <p className="mt-6 max-w-xl mx-auto text-muted-foreground md:text-lg">
            Crafting digital experiences from concept to cloud with precision and passion.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="#projects">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
