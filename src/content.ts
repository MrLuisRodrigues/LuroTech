/**
 * Todo el texto del sitio vive aquí. Edita este archivo para cambiar
 * servicios, pasos del proceso o datos de contacto sin tocar componentes.
 */

export const site = {
  name: "LuroTech Solutions",
  title: "LuroTech Solutions | Desarrollo de software y ciberseguridad",
  description:
    "Diseñamos y programamos software a la medida y lo protegemos desde la primera línea de código. Desarrollo web y móvil, auditorías y capacitación en ciberseguridad.",
} as const;

/**
 * Datos de contacto. Se leen de variables de entorno (Cloudflare → Settings →
 * Variables) para no dejar números ni correos escritos en el código.
 *   VITE_WHATSAPP_NUMBER  solo dígitos con código de país, ej. 584141234567
 *   VITE_CONTACT_EMAIL    ej. hola@lurotech.com
 */
export const contact = {
  whatsapp: (import.meta.env.VITE_WHATSAPP_NUMBER ?? "").replace(/\D/g, ""),
  email: (import.meta.env.VITE_CONTACT_EMAIL ?? "").trim(),
} as const;

export const nav = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
] as const;

export const hero = {
  headline: ["Software hecho", "para resistir."],
  lead: "Diseñamos y programamos sistemas a la medida, y los protegemos desde la primera línea de código.",
  primaryCta: "Cuéntanos tu proyecto",
  secondaryCta: "Ver qué hacemos",
} as const;

export const services = {
  title: "Dos oficios, un mismo equipo",
  lead: "Quien construye el sistema es quien lo protege. Así la seguridad no llega al final como un parche.",
  pillars: [
    {
      id: "desarrollo",
      name: "Desarrollo de software",
      summary: "Sistemas que tu equipo y tus clientes usan todos los días.",
      items: [
        "Aplicaciones web y móviles",
        "Sistemas internos y paneles de gestión",
        "Automatización e integraciones con WhatsApp, pagos y otros servicios",
        "Mantenimiento y mejoras de lo que ya tienes",
      ],
    },
    {
      id: "ciberseguridad",
      name: "Ciberseguridad",
      summary: "Encontrar la falla antes de que la encuentre otra persona.",
      items: [
        "Auditoría de seguridad de aplicaciones web",
        "Revisión de accesos, permisos y bases de datos",
        "Revisión de código y de la configuración de publicación",
        "Capacitación en seguridad para tu equipo",
      ],
    },
  ],
} as const;

export const workProcess = {
  title: "Así trabajamos",
  lead: "Cuatro pasos, siempre en el mismo orden. Sabes en cuál estamos y qué viene después.",
  steps: [
    {
      name: "Entender",
      text: "Hablamos de tu operación, no solo de las pantallas: quién usa el sistema, qué datos maneja y qué pasaría si fallara.",
    },
    {
      name: "Diseñar",
      text: "Definimos qué se construye, en qué orden y qué riesgos hay que prever, antes de escribir código.",
    },
    {
      name: "Construir",
      text: "Entregamos por etapas que puedes probar. Cada etapa se revisa en seguridad antes de pasar a la siguiente.",
    },
    {
      name: "Entregar y acompañar",
      text: "Publicamos, documentamos y seguimos disponibles para corregir y mejorar.",
    },
  ],
} as const;

export const contactSection = {
  title: "Cuéntanos qué necesitas",
  lead: "Escríbenos con lo que tengas, aunque sea una idea suelta. Te respondemos con los siguientes pasos.",
  interests: [
    "Desarrollo de software",
    "Ciberseguridad",
    "Las dos cosas",
    "Todavía no lo tengo claro",
  ],
} as const;
