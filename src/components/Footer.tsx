import { Zap } from "lucide-react";

export default function Footer() {
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
