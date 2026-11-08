import { Contact } from "@/sections/contact";
import { Footer } from "@/sections/footer";
import { Header } from "@/sections/header";
import { Hero } from "@/sections/hero";
import { Process } from "@/sections/process";
import { Services } from "@/sections/services";

export default function App() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only rounded-sm bg-primary px-4 py-2 font-semibold text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50"
      >
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
