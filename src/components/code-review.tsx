import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type Mark = "bad" | "good";
type CodeLine = { text: string; mark?: Mark };
type Stage = "reviewing" | "found" | "fixed";

const VULNERABLE: CodeLine[] = [
  { text: 'app.get("/clientes", async (req, res) => {' },
  { text: "  const { id } = req.query;", mark: "bad" },
  { text: "  const rows = await db.query(" },
  { text: "    `SELECT * FROM clientes WHERE id = ${id}`", mark: "bad" },
  { text: "  );" },
  { text: "  res.json(rows);" },
  { text: "});" },
];

const FIXED: CodeLine[] = [
  { text: 'app.get("/clientes", async (req, res) => {' },
  { text: "  const id = z.string().uuid().parse(req.query.id);", mark: "good" },
  { text: "  const rows = await db.query(" },
  { text: '    "SELECT * FROM clientes WHERE id = $1", [id]', mark: "good" },
  { text: "  );" },
  { text: "  res.json(rows);" },
  { text: "});" },
];

const STATUS: Record<Stage, { label: string; className: string }> = {
  reviewing: { label: "Revisando", className: "text-steel/70" },
  found: { label: "1 hallazgo crítico", className: "text-brass-light" },
  fixed: { label: "Corregido", className: "text-emerald-300" },
};

const MESSAGES: Record<Stage, { title: string; text: string }> = {
  reviewing: {
    title: "Revisando api/clientes.ts",
    text: "Buscando entradas sin validar y consultas armadas con texto.",
  },
  found: {
    title: "Inyección SQL en la línea 4",
    text: "El valor de id llega sin validar y se pega dentro de la consulta. Con una entrada maliciosa se podrían leer o borrar los datos de todos los clientes.",
  },
  fixed: {
    title: "Corrección aplicada",
    text: "Ahora se valida que id sea un UUID y la base de datos recibe el valor como parámetro, no como parte del texto de la consulta.",
  },
};

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function CodeReview() {
  // Con movimiento reducido se muestra directamente el resultado final.
  const [stage, setStage] = useState<Stage>(() =>
    prefersReducedMotion() ? "fixed" : "reviewing",
  );
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion()) return;
    const toFound = window.setTimeout(() => setStage("found"), 1500);
    const toFixed = window.setTimeout(() => setStage("fixed"), 4600);
    return () => {
      window.clearTimeout(toFound);
      window.clearTimeout(toFixed);
    };
  }, [run]);

  const replay = () => {
    setStage("reviewing");
    setRun((n) => n + 1);
  };

  const lines = stage === "fixed" ? FIXED : VULNERABLE;
  const status = STATUS[stage];
  const message = MESSAGES[stage];

  return (
    <figure
      className="plate-cut bg-graphite text-steel [--cut:28px]"
    >
      <figcaption className="flex items-center justify-between gap-4 border-b border-steel/15 px-5 py-3.5">
        <span className="font-mono text-[0.8rem] text-steel/80">
          api/clientes.ts
        </span>
        <span
          className={cn(
            "flex items-center gap-2 text-sm font-semibold transition-colors duration-300",
            status.className,
          )}
          role="status"
        >
          <span
            aria-hidden="true"
            className={cn(
              "h-2 w-2 rounded-full bg-current",
              stage === "reviewing" && "animate-pulse",
            )}
          />
          {status.label}
        </span>
      </figcaption>

      <pre
        className="overflow-x-auto py-4 font-mono text-[0.78rem] leading-[1.85] sm:text-[0.84rem]"
        aria-label="Código de ejemplo de una consulta a la base de datos"
      >
        <code className="block min-w-max">
          {lines.map((line, i) => (
            <span
              key={`${stage === "fixed" ? "f" : "v"}-${i}`}
              className={cn(
                "grid grid-cols-[2.75rem_1fr] border-l-2 border-transparent pr-5 transition-colors duration-500",
                line.mark === "bad" &&
                  stage !== "reviewing" &&
                  "border-brass-light bg-brass-light/15",
                line.mark === "good" && "border-emerald-300 bg-emerald-300/10",
              )}
            >
              <span
                aria-hidden="true"
                className="select-none pr-4 text-right text-steel/40"
              >
                {i + 1}
              </span>
              <span className="whitespace-pre text-steel/95">{line.text}</span>
            </span>
          ))}
        </code>
      </pre>

      <div className="min-h-[9.5rem] border-t border-steel/15 px-5 py-4 sm:min-h-[8.25rem]">
        <p className="font-bold">{message.title}</p>
        <p className="mt-1.5 max-w-[56ch] text-[0.95rem] leading-relaxed text-steel/75">
          {message.text}
        </p>
      </div>

      <div className="flex justify-end px-5 pb-5 pt-1">
        <button
          type="button"
          onClick={replay}
          className="rounded-sm text-sm font-semibold text-brass-light underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-light"
        >
          Ver la revisión de nuevo
        </button>
      </div>
    </figure>
  );
}
