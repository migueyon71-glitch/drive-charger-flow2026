import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Zap,
  Sparkles,
  RotateCw,
  Gem,
  Wifi,
  Timer,
  BatteryCharging,
  Cable,
  ShieldOff,
  AlertTriangle,
  Check,
  X,
  Star,
  ShieldCheck,
  Truck,
  RefreshCw,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-charger.jpg";
import detailImg from "@/assets/product-detail.jpg";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "VoltGrip — Soporte de coche con carga inalámbrica 15W" },
      {
        name: "description",
        content:
          "Soporte premium con apertura automática, carga inalámbrica rápida 15W y rotación 360°. Diseñado para conductores que exigen lo mejor.",
      },
      { property: "og:title", content: "VoltGrip — Carga inalámbrica 15W para tu coche" },
      {
        property: "og:description",
        content:
          "Sujeción automática, carga rápida 15W y diseño premium. La forma más elegante de conducir con el GPS siempre a la vista.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <Hero />
      <Benefits />
      <Problem />
      <Features />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <Faq />
      <Guarantee />
      <FinalCta />
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,92%)]">
      <div className="glass rounded-full flex items-center justify-between px-5 py-2.5">
        <a href="#top" className="flex items-center gap-2 font-display font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Zap className="h-4 w-4" strokeWidth={2.5} />
          </span>
          VoltGrip
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition">Características</a>
          <a href="#how" className="hover:text-foreground transition">Cómo funciona</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a
          href="#buy"
          className="rounded-full bg-foreground text-primary-foreground text-sm font-medium px-4 py-2 hover:opacity-90 transition"
        >
          Comprar
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
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

/* ---------------- BENEFICIOS ---------------- */
function Benefits() {
  const items = [
    { icon: BatteryCharging, title: "Carga mientras conduces", desc: "Llega a tu destino con más batería de la que empezaste." },
    { icon: Sparkles, title: "Apertura automática", desc: "Detecta tu teléfono y las pinzas se cierran solas." },
    { icon: RotateCw, title: "Rotación 360°", desc: "Vertical, horizontal o el ángulo perfecto para tu GPS." },
    { icon: ShieldCheck, title: "Sujeción firme", desc: "Diseñado para carreteras con baches, curvas y frenadas." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionEyebrow>Beneficios</SectionEyebrow>
          <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl text-gradient">
            Pensado para hacer cada trayecto mejor.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 90}>
              <div className="group h-full rounded-3xl bg-surface/60 border border-border p-6 hover:bg-surface transition">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition">
                  <it.icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <h3 className="mt-5 text-lg font-medium">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROBLEMA ---------------- */
function Problem() {
  const pains = [
    { icon: Cable, t: "Cables por todas partes", d: "Enredos, tirones y ese cable USB que nunca funciona bien." },
    { icon: ShieldOff, t: "Móvil por el suelo", d: "Soportes flojos que sueltan el teléfono en cada bache." },
    { icon: BatteryCharging, t: "Batería al mínimo", d: "Google Maps consume tu batería más rápido de lo que puedes cargarla." },
    { icon: AlertTriangle, t: "Distracciones al volante", d: "Manipular cables y soportes mientras conduces es peligroso." },
  ];
  return (
    <section className="py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>El problema</SectionEyebrow>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
          Los soportes de siempre <span className="text-muted-foreground">no dan más de sí.</span>
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3">
          {pains.map((p) => (
            <div key={p.t} className="flex items-start gap-4 rounded-2xl border border-border bg-background/40 p-5">
              <div className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-destructive/15 text-destructive shrink-0">
                <p.icon className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <div>
                <div className="font-medium">{p.t}</div>
                <div className="text-sm text-muted-foreground mt-1">{p.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-border bg-gradient-to-br from-surface to-background p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/15 text-accent px-3 py-1 text-xs font-medium">
                <Sparkles className="h-3.5 w-3.5" /> La solución
              </div>
              <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
                Un solo gesto. Sujeción firme. Carga automática.
              </h3>
              <p className="mt-4 text-muted-foreground">
                VoltGrip detecta tu teléfono al acercarlo, lo sujeta con precisión y activa la carga inalámbrica de 15W al instante. Sin cables. Sin pensar en ello.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-6 bg-accent/20 blur-3xl rounded-full -z-10" />
              <img
                src={detailImg}
                alt="Detalle del cargador inalámbrico VoltGrip"
                loading="lazy"
                width={1408}
                height={1408}
                className="w-full rounded-2xl border border-border"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CARACTERÍSTICAS ---------------- */
function Features() {
  const feats = [
    { icon: Zap, title: "15W Fast Charging", desc: "Carga rápida certificada. Hasta 3× más veloz que un USB estándar." },
    { icon: Sparkles, title: "Auto Clamp", desc: "Sensor de proximidad. Las pinzas se ajustan automáticamente." },
    { icon: RotateCw, title: "360° Rotation", desc: "Gira completo. Vertical, horizontal o cualquier ángulo intermedio." },
    { icon: Gem, title: "Premium Materials", desc: "Aluminio anodizado, silicona técnica y acabado mate resistente." },
    { icon: Wifi, title: "Qi Compatible", desc: "iPhone, Samsung, Xiaomi, Pixel y todos los móviles con Qi." },
    { icon: Timer, title: "Easy Installation", desc: "Sistema de clip a la rejilla. Instalado en menos de 10 segundos." },
  ];
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionEyebrow>Características</SectionEyebrow>
          <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl text-gradient">
            Ingeniería en cada detalle.
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {feats.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100}>
              <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-surface to-background p-7 hover:border-accent/40 transition">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-foreground/5 text-accent">
                  <f.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 text-lg font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CÓMO FUNCIONA ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Conecta el cargador", d: "Enchufa el cable USB-C al puerto del coche." },
    { n: "02", t: "Coloca el teléfono", d: "Acércalo al soporte, sin apuntar, sin encajarlo." },
    { n: "03", t: "Sujeción automática", d: "Las pinzas se cierran solas al detectarlo." },
    { n: "04", t: "Carga inalámbrica", d: "El LED se enciende y empieza a cargar a 15W." },
  ];
  return (
    <section id="how" className="py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>Cómo funciona</SectionEyebrow>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight max-w-3xl">
          Cuatro segundos. <span className="text-muted-foreground">Cero esfuerzo.</span>
        </h2>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border bg-background/40 p-7">
              <div className="font-display text-6xl text-accent/80 leading-none">{s.n}</div>
              <h3 className="mt-6 text-lg font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
              {i < steps.length - 1 && (
                <ArrowRight className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- COMPARATIVA ---------------- */
function Comparison() {
  const rows = [
    { k: "Carga inalámbrica", a: "15W Fast Charge", b: "No incluida" },
    { k: "Agarre", a: "Automático con sensor", b: "Manual y flojo" },
    { k: "Diseño", a: "Aluminio premium", b: "Plástico económico" },
    { k: "Instalación", a: "< 10 segundos", b: "Herramientas necesarias" },
    { k: "Rotación", a: "360° libre", b: "Ajuste limitado" },
    { k: "Comodidad", a: "Manos libres total", b: "Cables y encaje manual" },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <SectionEyebrow>Comparativa</SectionEyebrow>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
          Diferencia inmediata.
        </h2>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border">
          <div className="grid grid-cols-3 bg-surface/80 text-sm font-medium">
            <div className="p-5 text-muted-foreground">Característica</div>
            <div className="p-5 flex items-center gap-2 border-l border-border">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Zap className="h-3 w-3" strokeWidth={3} />
              </span>
              VoltGrip
            </div>
            <div className="p-5 text-muted-foreground border-l border-border">Soporte tradicional</div>
          </div>
          {rows.map((r, i) => (
            <div
              key={r.k}
              className={`grid grid-cols-3 text-sm ${i % 2 ? "bg-background/30" : "bg-background/60"}`}
            >
              <div className="p-5 text-muted-foreground">{r.k}</div>
              <div className="p-5 border-l border-border flex items-center gap-2">
                <Check className="h-4 w-4 text-accent shrink-0" />
                <span>{r.a}</span>
              </div>
              <div className="p-5 border-l border-border flex items-center gap-2 text-muted-foreground">
                <X className="h-4 w-4 text-destructive shrink-0" />
                <span>{r.b}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIOS ---------------- */
function Testimonials() {
  const ts = [
    { n: "Álvaro G.", c: "Madrid", r: "Lo uso a diario para ir al trabajo. Coloco el móvil y ya está cargando. Nunca más un cable." },
    { n: "Marta R.", c: "Barcelona", r: "El agarre es sorprendente. Paso por baches y el móvil no se mueve ni un milímetro." },
    { n: "David P.", c: "Valencia", r: "Instalación literal de diez segundos. El acabado se ve caro, no parece un gadget cualquiera." },
    { n: "Elena M.", c: "Sevilla", r: "La carga es rápida de verdad. En 30 minutos de trayecto recupero bastante batería." },
    { n: "Carlos J.", c: "Bilbao", r: "Compatible con mi Pixel sin problema. La rotación a horizontal para Waze es un puntazo." },
    { n: "Lucía T.", c: "Málaga", r: "Le regalé uno a mi pareja y acabé comprando otro para mí. Sencillamente funciona." },
  ];
  return (
    <section className="py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionEyebrow>Testimonios</SectionEyebrow>
        <div className="mt-3 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-2xl">
            Lo que dicen los conductores.
          </h2>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            4.9 / 5 · +2.400 valoraciones
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ts.map((t) => (
            <figure key={t.n} className="rounded-3xl border border-border bg-background/40 p-6">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed">"{t.r}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-medium">{t.n}</div>
                <div className="text-muted-foreground text-xs">{t.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const qs = [
    { q: "¿Sirve para iPhone?", a: "Sí. Es 100% compatible con iPhone 8 y modelos superiores, incluyendo la carga inalámbrica MagSafe/Qi." },
    { q: "¿Funciona con funda?", a: "Sí, siempre que la funda no supere los 5 mm de grosor y no contenga imanes o metal en la parte trasera." },
    { q: "¿Se mueve al conducir?", a: "No. El sistema de anclaje a la rejilla y las pinzas automáticas mantienen el teléfono firme incluso en carreteras irregulares." },
    { q: "¿Cómo se instala?", a: "Sin herramientas. Se ancla a cualquier rejilla de ventilación en menos de 10 segundos." },
    { q: "¿Necesita cables?", a: "Solo un cable USB-C que conecta el soporte a la fuente de alimentación del coche. Tu teléfono no toca ningún cable." },
    { q: "¿Cuánto tarda en cargar?", a: "Con la carga rápida de 15W, en 30 minutos puedes recuperar hasta un 50% de batería en móviles compatibles." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <SectionEyebrow>FAQ</SectionEyebrow>
        <h2 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight text-gradient">
          Preguntas frecuentes.
        </h2>

        <div className="mt-12 space-y-2">
          {qs.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="rounded-2xl border border-border bg-surface/50 overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left px-6 py-5 hover:bg-surface transition"
                >
                  <span className="font-medium pr-6">{it.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- GARANTÍA ---------------- */
function Guarantee() {
  const items = [
    { icon: ShieldCheck, t: "Garantía 2 años", d: "Cubrimos cualquier defecto de fabricación durante 24 meses." },
    { icon: RefreshCw, t: "30 días de prueba", d: "Si no te enamora, te devolvemos el 100% de tu dinero." },
    { icon: Truck, t: "Envío gratis", d: "Envío rápido y sin coste a toda España en 48-72h." },
  ];
  return (
    <section className="py-24 md:py-32 bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-[2rem] md:rounded-[2.5rem] border border-border bg-gradient-to-br from-surface via-background to-surface p-10 md:p-16 text-center">
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent mx-auto">
            <ShieldCheck className="h-8 w-8" strokeWidth={1.5} />
          </div>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight max-w-2xl mx-auto">
            Compra con total tranquilidad.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Confiamos tanto en VoltGrip que asumimos todo el riesgo por ti.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            {items.map((it) => (
              <div key={it.t} className="rounded-2xl border border-border bg-background/50 p-6">
                <it.icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <div className="mt-4 font-medium">{it.t}</div>
                <div className="mt-1 text-sm text-muted-foreground">{it.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CTA FINAL ---------------- */
function FinalCta() {
  return (
    <section id="buy" className="relative py-28 md:py-40 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-accent/25 blur-[130px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs text-accent font-medium">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          Oferta lanzamiento · Stock limitado
        </div>

        <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tighter text-gradient">
          Actualiza tu coche hoy.
        </h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Únete a más de 20.000 conductores que ya no vuelven atrás. Envío gratis y 30 días de prueba.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-baseline gap-3">
            <span className="text-muted-foreground line-through text-lg">50€</span>
            <span className="font-display text-5xl font-semibold">25€</span>
            <span className="rounded-full bg-accent/15 text-accent text-xs font-medium px-2.5 py-1">
              -50%
            </span>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground font-medium text-lg px-10 py-5 accent-glow hover:brightness-110 transition animate-pulse-ring"
          >
            Comprar ahora
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition" />
          </a>
          <div className="text-xs text-muted-foreground">
            Pago seguro · Envío 48h · Devolución gratuita
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Zap className="h-3 w-3" strokeWidth={3} />
          </span>
          VoltGrip © {new Date().getFullYear()}
        </div>
        <div className="flex gap-5">
          <a href="#" className="hover:text-foreground transition">Envíos</a>
          <a href="#" className="hover:text-foreground transition">Devoluciones</a>
          <a href="#" className="hover:text-foreground transition">Contacto</a>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- SHARED ---------------- */
function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-8 bg-accent" />
      {children}
    </div>
  );
}
