import { workProcess } from "@/content";

export function Process() {
  return (
    <section id="proceso" className="pb-20 pt-8 md:pb-28">
      <div className="container">
        <h2 className="display-mid max-w-[30ch] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.6rem]">
          {workProcess.title}
        </h2>
        <p className="mt-5 max-w-[56ch] text-lg text-muted-foreground">
          {workProcess.lead}
        </p>

        <ol className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {workProcess.steps.map((step, i) => (
            <li key={step.name} className="border-t-[3px] border-foreground pt-5">
              <span
                aria-hidden="true"
                className="display block text-5xl text-brass-text"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold">{step.name}</h3>
              <p className="mt-2 max-w-[34ch] text-muted-foreground">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
