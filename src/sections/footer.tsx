import { nav, site } from "@/content";

export function Footer() {
  return (
    <footer className="bg-graphite text-steel">
      <div className="container">
        <div className="flex flex-col gap-6 border-t border-steel/15 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="display-mid text-lg">{site.name}</p>
          <p className="mt-1 text-sm text-steel/70">
            Desarrollo de software y ciberseguridad.
          </p>
        </div>

        <nav aria-label="Pie de página" className="flex gap-7 text-sm font-semibold">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-light"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-steel/70">
          © {new Date().getFullYear()} {site.name}
        </p>
        </div>
      </div>
    </footer>
  );
}
