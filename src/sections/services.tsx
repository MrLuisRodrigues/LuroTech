import { services } from "@/content";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24">
      <div className="container">
        <h2 className="display-mid max-w-[30ch] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.6rem]">
          {services.title}
        </h2>
        <p className="mt-5 max-w-[56ch] text-lg text-muted-foreground">
          {services.lead}
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {services.pillars.map((pillar) => {
            const dark = pillar.id === "ciberseguridad";
            return (
              <article
                key={pillar.id}
                aria-labelledby={`pilar-${pillar.id}`}
                className={cn(
                  "plate-cut p-8 md:p-10",
                  dark ? "bg-graphite text-steel" : "bg-card text-card-foreground",
                )}
              >
                <h3
                  id={`pilar-${pillar.id}`}
                  className="display-mid text-2xl md:text-[1.9rem]"
                >
                  {pillar.name}
                </h3>
                <p
                  className={cn(
                    "mt-3 max-w-[40ch]",
                    dark ? "text-steel/75" : "text-muted-foreground",
                  )}
                >
                  {pillar.summary}
                </p>
                <ul
                  className={cn(
                    "mt-8 divide-y",
                    dark ? "divide-steel/15" : "divide-border",
                  )}
                >
                  {pillar.items.map((item) => (
                    <li
                      key={item}
                      className="py-4 font-semibold first:pt-0 last:pb-0"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
