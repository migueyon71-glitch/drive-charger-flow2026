import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionEyebrow from "@/components/SectionEyebrow";

export default function Faq() {
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
