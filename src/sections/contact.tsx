import { ContactForm } from "@/components/contact-form";
import { contact, contactSection } from "@/content";

export function Contact() {
  return (
    <section id="contacto" className="bg-graphite py-20 text-steel md:py-28">
      <div className="container grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <h2 className="display-mid max-w-[18ch] text-[1.65rem] sm:text-3xl md:text-4xl lg:text-[2.6rem]">
            {contactSection.title}
          </h2>
          <p className="mt-5 max-w-[40ch] text-lg text-steel/75">
            {contactSection.lead}
          </p>

          {contact.email && (
            <p className="mt-8 text-steel/75">
              También puedes escribirnos a{" "}
              <a
                href={`mailto:${contact.email}`}
                className="rounded-sm font-semibold text-brass-light underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brass-light"
              >
                {contact.email}
              </a>
              .
            </p>
          )}
        </div>

        <div className="plate-cut bg-card p-7 text-card-foreground [--cut:28px] md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
