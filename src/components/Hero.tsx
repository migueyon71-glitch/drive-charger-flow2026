import { Reveal } from "@/components/Reveal";
import { ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-charger.jpg";

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-20 md:pt-44 md:pb-28">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-accent/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_40%,var(--background)_75%)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6 text-center">
        <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3.5 py-1.5 text-xs text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Nueva generación · Qi 15W Fast Charge
        </div>

        <h1 className="animate-rise mt-6 text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95] text-gradient">
          Conduce.<br />
          Carga.<br />
          Sin cables.
        </h1>

        <p className="animate-rise mx-auto mt-6 max-w-xl text-base md:text-lg text-muted-foreground">
          El soporte que sujeta tu teléfono <span className="text-foreground">automáticamente</span> y lo carga a
          <span className="text-accent"> 15W</span> mientras conduces con el GPS siempre a la vista.
        </p>

        <div className="animate-rise mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#buy"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground font-medium px-7 py-3.5 accent-glow hover:brightness-110 transition"
          >
            Comprar ahora
            <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/50 px-6 py-3.5 text-sm hover:bg-surface transition"
          >
            Ver características
          </a>
        </div>

        {/* Hero image */}
        <div className="relative mt-16 md:mt-20">
          <div className="absolute inset-x-10 top-10 h-72 rounded-[3rem] bg-accent/20 blur-[100px] -z-10" />
          <div className="relative mx-auto max-w-4xl">
            <img
              src={heroImg}
              alt="Soporte VoltGrip cargando un iPhone con GPS activo en el interior de un coche"
              width={1600}
              height={1408}
              className="w-full rounded-[2rem] md:rounded-[3rem] border border-border shadow-[var(--shadow-elevated)] animate-float"
            />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
          <Stat label="Carga rápida" value="15W" />
          <Divider />
          <Stat label="Instalación" value="< 10s" />
          <Divider />
          <Stat label="Rotación" value="360°" />
          <Divider />
          <Stat label="Compatibilidad" value="Qi Universal" />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <div className="font-display text-lg text-foreground">{value}</div>
      <div className="uppercase tracking-widest">{label}</div>
    </div>
  );
}
function Divider() {
  return <span className="h-8 w-px bg-border" />;
}
