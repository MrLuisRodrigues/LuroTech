import { CodeReview } from "@/components/code-review";
import { Button } from "@/components/ui/button";
import { hero } from "@/content";

export function Hero() {
  return (
    <section id="inicio" className="pb-12 pt-12 md:pb-16 md:pt-20">
      <div className="container grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.08fr_1fr] lg:gap-14">
        <div>
          <h1 className="display text-[1.7rem] min-[400px]:text-[1.95rem] sm:text-[2.9rem] lg:text-[2.85rem] xl:text-[3.45rem]">
            {hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-7 max-w-[32ch] text-xl leading-snug text-muted-foreground md:text-2xl md:leading-snug">
            {hero.lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#contacto">{hero.primaryCta}</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#servicios">{hero.secondaryCta}</a>
            </Button>
          </div>
        </div>

        <CodeReview />
      </div>
    </section>
  );
}
