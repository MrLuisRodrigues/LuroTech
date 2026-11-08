import { useState, type FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contact, contactSection } from "@/content";
import { cn } from "@/lib/utils";

type Channel = "whatsapp" | "email" | null;

const channel: Channel = contact.whatsapp
  ? "whatsapp"
  : contact.email
    ? "email"
    : null;

const submitLabel: Record<NonNullable<Channel> | "none", string> = {
  whatsapp: "Enviar por WhatsApp",
  email: "Enviar por correo",
  none: "Enviar",
};

export function ContactForm() {
  const [notice, setNotice] = useState<string | null>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!channel) return;

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const interest = String(data.get("interest") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const text = `Hola, soy ${name} (${email}).\nMe interesa: ${interest}.\n\n${message}`;

    if (channel === "whatsapp") {
      const url = `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
      window.open(url, "_blank", "noopener,noreferrer");
      setNotice(
        "Se abrió WhatsApp con tu mensaje listo. Envíalo desde ahí para que nos llegue.",
      );
    } else {
      const url = `mailto:${contact.email}?subject=${encodeURIComponent(
        `Consulta de ${name}`,
      )}&body=${encodeURIComponent(text)}`;
      window.location.href = url;
      setNotice(
        "Se abrió tu aplicación de correo con el mensaje listo. Envíalo desde ahí para que nos llegue.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" aria-describedby="form-estado">
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre</Label>
        <Input
          id="name"
          name="name"
          autoComplete="name"
          required
          maxLength={80}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Correo</Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={120}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="interest">¿Qué te interesa?</Label>
        <select
          id="interest"
          name="interest"
          defaultValue={contactSection.interests[0]}
          className="flex h-12 w-full rounded-sm border border-input bg-card px-3 text-base text-foreground focus-visible:border-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          {contactSection.interests.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="message">Cuéntanos tu proyecto</Label>
        <Textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={1500}
        />
      </div>

      <div className="grid gap-3">
        <Button type="submit" size="lg" disabled={!channel} className="w-full sm:w-fit">
          {submitLabel[channel ?? "none"]}
        </Button>
        <p
          id="form-estado"
          role="status"
          className={cn(
            "max-w-[48ch] text-sm",
            channel ? "text-muted-foreground" : "font-semibold text-destructive",
          )}
        >
          {channel
            ? (notice ??
              "Tu mensaje se abre listo para enviar. No guardamos nada en este sitio.")
            : "El formulario todavía no tiene un canal de contacto configurado."}
        </p>
      </div>
    </form>
  );
}
