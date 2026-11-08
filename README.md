# LuroTech Solutions

Sitio web de LuroTech: desarrollo de software y ciberseguridad.

**Stack:** Vite · React 19 · TypeScript · Tailwind CSS 3 · componentes estilo shadcn/ui

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # typecheck + build a dist/
```

## Despliegue en Cloudflare

| Ajuste               | Valor           |
| -------------------- | --------------- |
| Build command        | `npm run build` |
| Build output (dir)   | `dist`          |
| Node version         | 22              |

Variables opcionales (ver `.env.example`): `VITE_WHATSAPP_NUMBER` y
`VITE_CONTACT_EMAIL`. Sin ellas el formulario de contacto aparece desactivado.

`public/_headers` aplica una política de seguridad estricta (CSP, nosniff,
anti-iframe). Si agregas scripts, estilos o fuentes de otros dominios, hay que
permitirlos ahí.

## Dónde editar

- **Textos, servicios, proceso y contacto:** `src/content.ts`
- **Colores y tipografía:** `src/index.css` y `tailwind.config.ts`
- **Secciones:** `src/sections/`
- **Revisión de código del hero:** `src/components/code-review.tsx`
