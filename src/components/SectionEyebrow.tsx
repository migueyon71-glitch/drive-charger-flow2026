import React from "react";

export default function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent">
      <span className="h-px w-8 bg-accent" />
      {children}
    </div>
  );
}
