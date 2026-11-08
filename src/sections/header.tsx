import { Button } from "@/components/ui/button";
import { nav } from "@/content";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="container flex h-[4.5rem] items-center justify-between gap-6">
        <a
          href="#inicio"
          className="flex items-center gap-3 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src="/logo.png"
            alt=""
            width={476}
            height={697}
            className="h-12 w-auto"
          />
          <span className="display-mid text-lg">
            LuroTech<span className="sr-only"> Solutions</span>
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm font-semibold text-foreground/80 underline-offset-8 transition-colors hover:text-foreground hover:underline hover:decoration-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button asChild size="sm">
          <a href="#contacto">Escríbenos</a>
        </Button>
      </div>
    </header>
  );
}
